import React, { useRef, useEffect, useState } from "react";
import DirectionArrowContainer from "../../containers/DirectionArrowContainer";

import FadeInOut from "../../containers/FadeInFadeOutContainer"


export const ChartActivity = (props) => {
  const { playState, currentTime, data, caption, hideChartTime } = props;
  const containerRef = useRef(null);
  const focussedNodeRef = useRef(null);
  const [overClass, setOverClass] = useState(false);
  const [ostText, setOstText] = useState(null);
  const [ostClass, setOstClass] = useState(null);
  const [visibleChart, setChartvisible] = useState(true);
  const [hiddenChart, setHiddenChart] = useState(true);

  const [buttonsDisabled, setButtonsDisabled] = useState(false);


  // console.log("-------->", props.currentTime)

  useEffect(() => {
    if (playState) {
      if (containerRef && containerRef.current) {
        const start = containerRef.current.querySelector("#chart-start");
        const innerDivStart = start && start.querySelector(".text");

        if (innerDivStart) {
          setTimeout(() => {
            innerDivStart.tabIndex = -1;
            innerDivStart.focus();
          });
        }
      }
    }
  }, [playState]);

  useEffect(() => {
    const { nodeTimestamp } = props;

    const getSelectedNode = nodeTimestamp && nodeTimestamp.filter(
      (e) =>
        e.startTime <= props.currentTime &&
        e.endTime >= props.currentTime
    )[0];

    if (
      getSelectedNode &&
      getSelectedNode.id != focussedNodeRef.current
    ) {
      const getNode = containerRef.current.querySelector(
        "#" + getSelectedNode.id
      );

      const innerDiv = getNode && getNode.querySelector(".text");

      if (innerDiv) {
        if (innerDiv.classList.contains("decision-box")) {
          innerDiv.children[0].tabIndex = -1;
          innerDiv.children[0].focus();
        } else {
          setTimeout(()=>{
            innerDiv.tabIndex = -1;
            innerDiv.focus();

          },100)
        }
      }
      focussedNodeRef.current = getSelectedNode.id;
    }
  }, [currentTime])

  useEffect(() => {
    let temp = "";
    if (!props.selectAll) {
      for (let i = 0; i < props.onScreenText.length; i++) {
        const ost = props.onScreenText[i];
        const check = ost.type && ost.type == "buttons";
        if (isActive(ost, props.currentTime) && check) { 
          setButtonsDisabled(false);
          temp = "temp";
          break;
        }
      }
    }
    if (!temp) {
      setButtonsDisabled(true);
    }

    if (props.onScreenText) {
      const ost1 = props.onScreenText.filter(
        (e) => e.startTime <= props.currentTime && e.endTime > props.currentTime
      );

      let show1 = false;
      let text = null;
      let chartShow = true
      let classData = null
      for (let i = 0; i < ost1.length; i++) {
        if (ost1[i].transform && props.currentTime < ost1[i].middleTime && ost1[i].startTime < props.currentTime) {
          show1 = true;
          text = ost1[i].text;
          classData = ost1[i].id
          chartShow = ost1[i].hiddenChart ? false : true
        }
      }
      setOstText(text)
      setOverClass(show1);
      setChartvisible(chartShow);
      setOstClass(classData)

    }

    if ((currentTime >= hideChartTime.showTable && currentTime <= hideChartTime.hideTable)
        ||(currentTime >= hideChartTime.startTime && currentTime <= hideChartTime.endTime) 
        || (currentTime >= hideChartTime.hideAgainStartTime && currentTime <= hideChartTime.hideAgainEndTime)) {
      setHiddenChart(false);
    } else {
      setHiddenChart(true);
    }
  }, [props.currentTime]);

  const isActive = (object, time) => {
    return object.startTime <= time && object.endTime >= time;
  };

  const onBranchClick = (e) => {
    const { currentTime } = props;
    const {
      dataset: { key, branch },
    } = e.currentTarget;
    const getButtonId = props.timestampsForAttempts[branch].filter(
      (e) => e.startTime <= currentTime && e.endTime > currentTime
    )[0];
    if (getButtonId) {
      const id = getButtonId.id;
      props.onBranchClick({ key, branch, id });
    }
  }

  const renderFlowchart = (data) => {
    const { currentTime, selectAll } = props;

    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const selectedAll = selectAll ? "selected" : "";
      const selectedBox =
        data[i].startTime <= currentTime && data[i].endTime >= currentTime
          ? "selected-text"
          : "";

      const isVisited = data[i].visitedStart ? ((data[i].endTime < currentTime && data[i].visitedStart > currentTime) || data[i].visitedEnd < currentTime) : data[i].endTime < currentTime;
      const visitedBox = isVisited && !selectedAll ? "visited" : "";

      const nonVisited =
        !selectAll && data[i].startTime > currentTime ? "no-visited" : "";

      const showBranch =
        data[i].type == "child" &&
          data[i].visitedStart <= currentTime &&
          data[i].visitedEnd >= currentTime
          ? "branch"
          : "";

      const _classes =
        data[i].classes && Array.isArray(data[i].classes)
          ? data[i].classes.join(" ")
          : "";

      const highlightNode = data[i].glow && ((data[i].highlightStartTime <= currentTime &&
          data[i].highlightEndTime >= currentTime)||(data[i].highlightStartTime2 <= currentTime &&
            data[i].highlightEndTime2 >= currentTime) ||(data[i].highlightStartTime3 <= currentTime &&
              data[i].highlightEndTime3 >= currentTime))
            ? 'glow'
            : '';


      const hidden = selectAll || showBranch == "branch";

      arr.push(
        <div
          id={data[i].id}
          key={data[i].id}
          className={`node ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
          aria-hidden={nonVisited === "no-visited" ? true : false}
        >
          {data[i].name && (
            <div className="node-container" >
              {data[i].data ?
                <div
                  className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${highlightNode} ${showBranch}`}


                >
                  <p className="heading" dangerouslySetInnerHTML={{ __html: data[i].name }}></p>
                  <ul>
                    {data[i].data.map((d, index1) => {
                      const visitedBoxChild =
                        d.endTime < currentTime ||
                          (d.visited && d.visited < currentTime)
                          ? "visited"
                          : "";
                      const nonVisitedChild =
                        !selectAll && d.startTime > currentTime ? "no-visited" : "";
                      const ariaHidden = nonVisitedChild.length > 0;
                      const visible = d.startTime <= currentTime ? "visible" : "";
                      return <li key={index1} className={`${visible} ${visitedBoxChild} ${nonVisitedChild}`} aria-hidden={ariaHidden}><p dangerouslySetInnerHTML={{ __html: d.name }}></p></li>
                    })

                    }</ul>
                </div>
                :
                <>
                  {
                    data[i].type == "arrow" && <DirectionArrowContainer
                      classes={`arrow down ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} `}
                    />
                  }
                  {
                    data[i].type == "button" && <DirectionArrowContainer
                      classes={`arrow down ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} `}

                    />
                  }
                  {data[i].label ?
                    <>
                      {data[i].type == "button" ?
                        <button
                          className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${highlightNode} ${!buttonsDisabled ? `active` : ''}`}
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{ __html: data[i].name }}
                          onClick={onBranchClick}
                          // className={`${!buttonsDisabled ? `active` : ''}`}
                          disabled={buttonsDisabled}
                          data-branch="condition1"
                          data-key={data[i].keyValue}
                        >
                        </button>
                        :
                        <div
                          className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${highlightNode}`}
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{ __html: data[i].name }}
                        >
                        </div>}
                      <div
                        className={`text sr-only `}
                        dangerouslySetInnerHTML={{ __html: data[i].label }}
                      >
                      </div>
                    </> :
                    <div
                      className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${highlightNode}`}
                      dangerouslySetInnerHTML={{ __html: data[i].name }}
                    >
                    </div>
                  }
                </>
              }



            </div>
          )}
          {data[i].textNode.length > 0
            ? renderFlowchart(data[i].textNode)
            : null}
        </div>
      );
    }

    return arr;
  };



  const showCaption = caption ? "toggleHeight" : "";
  let showChart = true;

  if ((props.currentTime >= hideChartTime.showTable && props.currentTime <= hideChartTime.hideTable) 
      || (props.currentTime >= hideChartTime.startTime && props.currentTime <= hideChartTime.endTime) 
      || (props.currentTime >= hideChartTime.hideAgainStartTime && props.currentTime <= hideChartTime.hideAgainEndTime)) {
    showChart = false;
  }
  return (

    <div
      className={`chart-container ${showCaption}`}
      ref={containerRef}
      aria-hidden={props.overlay}
      //aria-label={props.altText && props.altText.activityTitle}
    >
    <div className="sr-only" tabIndex="-1" aria-hidden={props.overlay}>{props.altText && props.altText.activityTitle}</div>
      {(showChart && (!hiddenChart || visibleChart)) && <div className='flow-chart'>
        {/* <h1 className="heading">Procedure for Hypothesis Tests</h1> */}
        {renderFlowchart(data)}
      </div>}
      <FadeInOut animation={!overClass} animationState={!overClass} text={ostText} classes={`main-screen-text ${ostClass}`} />
    </div>


  );

}

ChartActivity.defaultProps = {
  selectAll: false,
};
export default ChartActivity;
