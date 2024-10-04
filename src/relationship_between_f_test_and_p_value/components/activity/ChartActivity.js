import { node } from "prop-types";
import React, { Component, createRef } from "react";
import FadeInOut from "../../containers/FadeInFadeOutContainer"
import DirectionArrowContainer from "../../containers/DirectionArrowContainer";
import { hideTimeStamp } from '../../data/config'


export class ChartActivity extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.focussedNodeRef = createRef();
    this.visibleChart = createRef(true)
    this.overClass = createRef(false);
    this.ostText = createRef(null);
    this.ostClass = createRef(null);
    this.showChart = true;

    this.state = {
      overClass: false,
      ostText: null,
      ostClass: null,
      visibleChart: true,
      // showImagedata: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.playState != this.props.playState) {
      if (this.props.playState) {
        if (this.containerRef && this.containerRef.current) {
          const start = this.containerRef.current.querySelector("#chart-start");
          const innerDivStart = start && start.querySelector(".text");
          if (innerDivStart) {
            setTimeout(() => {
              innerDivStart.tabIndex = -1;
              innerDivStart.focus();
            });
          }
        }
      }
    }

    if (prevProps.currentTime != this.props.currentTime) {
      const { nodeTimestamp, onScreenText, currentTime } = this.props;
      let getSelectedNode = nodeTimestamp && nodeTimestamp.filter((e) => e.startTime <= this.props.currentTime && e.endTime >= this.props.currentTime);
      getSelectedNode = getSelectedNode[getSelectedNode.length - 1]
      console.log("this.props.currentTime---->", this.props.currentTime)
      if (getSelectedNode && getSelectedNode.id != this.focussedNodeRef.current) {
        const getNode = this.containerRef.current.querySelector("#" + getSelectedNode.id);

        const innerDiv = getNode.querySelector(".text");

        if (innerDiv) {
          setTimeout(() => {
            innerDiv.tabIndex = -1;
            innerDiv.focus();
          })
        }
        this.focussedNodeRef.current = getSelectedNode.id;
      }

      if (onScreenText) {
        const ost1 = onScreenText.filter(
          (e) => e.startTime <= currentTime && e.endTime > currentTime
        );
        let show1 = false;
        let text = null;
        let chartShow = true
        let classData = null;
        // console.log("showImage====>", showImage)
        for (let i = 0; i < ost1.length; i++) {
          if (ost1[i].transform && currentTime < ost1[i].middleTime && ost1[i].startTime < currentTime) {
            show1 = true;
            text = ost1[i].text;
            classData = ost1[i].id
            chartShow = ost1[i].chartHidden ? false : true
          }
        }

        this.setState({ ostText: text, overClass: show1, ostClass: classData, visibleChart: chartShow, })

      }
    }

  }

  renderFlowchart = (data) => {
    const { currentTime, selectAll, timeStamp } = this.props;

    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const selectedAll = selectAll ? "selected" : "";
      const selectedBox =
        data[i].startTime <= currentTime && data[i].endTime >= currentTime
          ? "selected-text"
          : "";

      const visitedBox = data[i].endTime < currentTime ? "visited" : "";

      const nonVisited =
        !selectAll && data[i].startTime > currentTime ? "no-visited" : "";


      const _classes =
        data[i].classes && Array.isArray(data[i].classes)
          ? data[i].classes.join(" ")
          : "";


      // const glowNode = data[i].glowStartTime && data[i].glowStartTime <= currentTime && data[i].glowEndTime >= currentTime
      //   ? "glowing"
      //   : "";
        const highlightNode =
				data[i].glow &&
				data[i].glowStartTime <= currentTime &&
				data[i].glowEndTime >= currentTime
					? 'glow'
					: 'glow glow-hide';
      arr.push(
        <div
          id={data[i].id}
          key={data[i].id}
          className={`node ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
        >
          {data[i].name && (
            <div className="node-container"  >

              {data[i].data ?
                <div
                  className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${highlightNode} `}


                >

                  <p className="heading" dangerouslySetInnerHTML={{ __html: data[i].name }}></p>
                  <ul>
                    {data[i].data.map((d, index1) => {
                      const _selectedBox =
                        d.startTime <= currentTime && d.endTime >= currentTime
                          ? "selected-text"
                          : "";

                      const _visitedBox = d.endTime < currentTime ? "visited" : "";


                      return <li key={index1} className={`${selectedAll} ${_selectedBox} ${_visitedBox}`}><p dangerouslySetInnerHTML={{ __html: d.name }}></p></li>
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
                  <div className="sr-only">{data[i].ariaLabel && data[i].ariaLabel}</div>
                  <div
                    className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${highlightNode}`}
                    aria-hidden={data[i].ariaLabel ? true : false}
                    dangerouslySetInnerHTML={{ __html: data[i].name }}
                  >

                  </div>
                </>
              }



            </div>
          )}
          {data[i].textNode.length > 0
            ? this.renderFlowchart(data[i].textNode)
            : null}
        </div>
      );
    }

    return arr;
  };

  render() {
    const { data, caption, currentTime } = this.props;
    const { overClass, ostText, ostClass, visibleChart } = this.state;

    let showChart = true;
    if (currentTime >= hideTimeStamp.startTime && currentTime <= hideTimeStamp.endTime) {
      showChart = false;
    }
    const showCaption = caption ? "toggleHeight" : "";
    return (
      <>
        <div
          className={`chart-container ${showCaption}`}
          ref={this.containerRef}
          aria-hidden={this.props.overlay}
        >
           <div className="sr-only" tabIndex="-1" aria-hidden={this.props.overlay}>{this.props.altText.activityTitle}</div>
          <div className='flow-chart'>
            {showChart && this.renderFlowchart(data)}</div>
          <FadeInOut animation={!overClass} animationState={!overClass} text={ostText} classes={`main-screen-text ${ostClass}`} />
        </div>
        {this.props.children}
      </>
    );
  }
}

ChartActivity.defaultProps = {
  selectAll: false,
};
export default ChartActivity;
