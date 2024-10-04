import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import FadeInOut from "../../containers/FadeInFadeOutContainer";
// import MainScreenTextContainer from

const ChartActivity = (props) => {
  const ref = useRef(null);
  const { caption, playState, setFlowChartVisible,currentTime ,selectAll} = props;
  const focusNodeRef = useRef(null);
  const currentTimeRef = useRef(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [visibleChart, setChartvisible] = useState(true);
  const [overClass, setOverClass] = useState(false);
  const [ostText, setOstText] = useState(null);
  const [ostClass, setOstClass] = useState(null);


  console.log(currentTime)
  useEffect(() => {
    if (playState) {
      if (ref && ref.current) {
        const start = ref.current.querySelector(".start .chart-start");
        
        if (start) {
          setTimeout(()=>{
            start.tabIndex = -1;
            start.focus();

          },40)
        }
      }
    }
  }, [playState]);

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
    handleFocus();
    if (Math.abs(currentTimeRef.current - props.currentTime) >= 0.5) {
      focusNodeRef.current = null;
    }
    currentTimeRef.current = props.currentTime;
    if (props.onScreenText) {
      const ost1 = props.onScreenText.filter(
        (e) => e.startTime <= props.currentTime && e.endTime > props.currentTime
      );
      let show1 = false;
      let text = null;
      let chartShow = true;
      let classData = null;
      for (let i = 0; i < ost1.length; i++) {
        if (
          ost1[i].transform &&
          props.currentTime < ost1[i].middleTime &&
          ost1[i].startTime < props.currentTime
        ) {
          show1 = true;
          text = ost1[i].text;
          classData = ost1[i].id;
          chartShow = ost1[i].hiddenChart ? false : true;
          // console.log("overClass----->", overClass, text, show1, props.currentTime, props.currentTime)
        }
      }
      setOstText(text);
      setOverClass(show1);
      setChartvisible(chartShow);
      setOstClass(classData);
    }
  }, [props.currentTime]);

  const showCaption = caption ? "toggleHeight" : "";

  const classes = (uid, baseClasses) => {
    let temp = "";
    if (props.selectAll) {
        return `${baseClasses} active`;
    }
    if (props.nodeTimeStamp[uid]) {
      const ct = props.currentTime;
      const object = props.nodeTimeStamp[uid];

      if (Array.isArray(object)) {
        for (let iter = 0; iter < object.length; iter++) {
          const _object = { ...object[iter] };
          const check = isActive(_object, ct);
          if (check) {
            temp = _object.classes.join(" ");
            break;
          }
        }
      } else {
        const check = isActive(object, ct);
        if (check) {
          temp = object.classes.join(" ");
        }
      }
    }
    const classList = `${baseClasses} ${temp}`.trim();
    return classList;
  };

  const setActive = (uid, baseClasses) => {
    let temp = "";
    if (props.nodeTimeStamp[uid]) {
      const ct = props.currentTime;
      const object = props.nodeTimeStamp[uid];
      const check = isActive(object, ct);

      if (check) {
        temp = object.classes.join(" ");
      }
      const classList = `${baseClasses} ${temp}`.trim();
      return classList;
    }
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
  };

  const isActive = (object, time) => {
    return object.startTime <= time && object.endTime >= time;
  };

  const isActiveWithFocus = (object, time) => {
    return object.startTime <= time && object.endTime >= time && object.focusItemId;
  };

  const handleFocus = () => {
    const keys = Object.keys(props.nodeTimeStamp);
    
    const currentElem = keys.filter((key) => {
      const node = props.nodeTimeStamp[key];
      
      if (Array.isArray(node)) {
        for (let n = 0; n < node.length; n++) {
          const _node = node[n];
          if (isActiveWithFocus(_node, props.currentTime)) {
            return true;
          }
        }
        return false;
      } else {
        return isActiveWithFocus(node, props.currentTime);
      }
    });
    if (currentElem.length) {
      if (currentElem.length > 1 && currentElem.indexOf("condition1") >= 0) {
        currentElem.splice(currentElem.indexOf("condition1"), 1);
        if (currentElem.length > 1 && currentElem.indexOf("condition2") >= 0) {
          currentElem.splice(currentElem.indexOf("condition2"), 1);
        }
      }
    }
    if (currentElem.length && !selectAll) {
    
      let node = props.nodeTimeStamp[currentElem[currentElem.length-1]];
     
      if (Array.isArray(node)) {
        
        if (
          node[0].focusItemId &&
          focusNodeRef.current != node[0].focusItemId
        ) {
          
          const elem = document.querySelector(`#${node[0].focusItemId}`);
          focusNodeRef.current = node[0].focusItemId;
          if (elem) {
            elem.tabIndex="-1"
            elem.focus();
          }
        }
      } else {
        if (node.focusItemId && focusNodeRef.current != node.focusItemId) {
         
          const elem = document.querySelector(`#${node.focusItemId}`);
          focusNodeRef.current = node.focusItemId;
          if (elem) {
            elem.tabIndex="-1"
            elem.focus();
          }
        }
      }
    }
  };

 
  

  // hide chart when visible chart is true or flowchartvisible false
  const chartClasses = props.flowChartVisible ? "show" : "hide";

  let showChart = true;
  const hideChart=props.hideTimeStamp && props.hideTimeStamp.filter(e=>props.currentTime>=e.startTime && props.currentTime <= e.endTime);
  if(hideChart && hideChart.length>0){
    showChart = false ;    
  }

  return (
    <div
      ref={ref}
      aria-hidden={props.overlay}
      className={`chart-container ${showCaption} ${chartClasses}`}
      //aria-label={props.altText && props.altText.activityTitle}
    >
    <div className="sr-only" tabIndex="-1" aria-hidden={props.overlay}>{props.altText && props.altText.activityTitle}</div>
      {/* animationState : {true:"fadeIN",false:"fadeOut"} */}
      {showChart && visibleChart && (
        <div className='flowchart-view'>
          <div className="node start">
            <div className="node-container">
              <div
                className={`text startend chart-start`} 
                id="chart-start"
              >
                 <p className="heading">Start</p>
              </div>

              <div
                className={classes("startarrow", "startarrow arrow")}
                aria-hidden="true"
              ></div>
            </div>
          </div>
          <div id="condition1" className="node">
            <div id="decision1" className={classes(
                "decision1",
                "decision1 node order2"
              )}>
              <div className="decision-box">
                <div className="decision" id="decision1-box">
                <p className="heading">
                    Does the original claim contain the condition or equality?
                  </p>
                </div>
              </div>
            </div>
            <div id="decision1-no" className="no node-container order1">
                <div className={classes(
                "decision1-no-branch",
                "decision1-no-branch condition-node top no"
              )}>
                  <div className="up-arrow">
                    <button className="heading" type="button"
                    title="No"
                    data-key="no"
                    className={`${!buttonsDisabled ? 'active' : ''}`}
                    onClick={onBranchClick}
                    data-branch="condition1"
                    aria-label="No"
                    disabled={buttonsDisabled}
                    tabIndex={props.overlay ? -1 : 0}
                    id="no-btn">No</button>
                  </div>
                  <div className="down-arrow node left">
                    <p className="content" aria-hidden="true">Original claim does <em>not</em> contain equality and becomes <em>H</em><sub>1</sub></p>
                    <p className="sr-only">Original claim does not contain equality and becomes H sub 1</p>
                    <div className="arrow"></div>
                  </div>
                </div>
                <div className="child-node">
                  <div id="condition2" className="node">
                    <div id="decision2" className={classes(
                "decision2",
                "decision2 node order2"
              )}>
                      <div className="decision-box">
                        <div className="decision sm" id="decision2-box">
                        <p className="heading" aria-hidden="true">
                        Do you reject <em>H</em><sub>0</sub>?
                          </p>
                          <p className="sr-only">
                        Do you reject H sub 0?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="decision2-yes" className={`yes node-container order3`}>
                    <div className={classes("decision2-yes-branch","decision2-yes-branch condition-node"
              )}>
                          <div className="up-arrow">
                            <p className="heading">Yes</p>
                          </div>
                          <div className="down-arrow node right">
                            <p className="content" aria-hidden="true">Reject <em>H</em><sub>0</sub></p>
                            <p className="sr-only" >Reject H sub 0</p>
                            <div className="arrow"></div>
                          </div>
                        </div>
                        <div className={classes("decision2-yes","decision2-yes child-node node-container"
              )}>
                          <div className="process green" id="process1">
                            <p className="content" aria-hidden="true">&#8220;There is sufficient evidence to support the claim that... (original claim).&#8221;</p>
                            <p className="sr-only">there is sufficient evidence to support the claim that ellipsis, original claim.</p>
                          </div>
                          <div className={classes("glow-decision2-yes","glow-decision2-yes text process-bottom"
              )}>
                            <p className="content" aria-hidden="true">(This is the only case in which the original claim is supported.)</p>
                            <p className="sr-only"> This is the only case in which the original claim is supported.</p>
                          </div>
                        </div>
                    </div>
                    <div id="decision2-no" className={`no node-container order1`}>
                        <div className={classes("decision2-no-branch","decision2-no-branch condition-node"
              )}>
                          <div className="up-arrow">
                            <p className="heading">No</p>
                          </div>
                          <div className="down-arrow node left">
                          <div className="arrow"></div>
                            <p className="content left" aria-hidden="true">Fail to reject <em>H</em><sub>0</sub></p>
                            <p className="sr-only">Fail to reject H sub 0</p>
                          </div>
                        </div>
                        <div className="child-node node">
                        
                          <div className={classes("decision2-no","decision2-no process green"
              )} id="process2">
                            <p className="content" aria-hidden="true">&#8220;There is not sufficient evidence to support the claim that...(original claim).&#8221;</p>
                            <p className="sr-only" > there is not sufficient evidence to support the claim that ellipsis, original claim.</p>
                          </div>
                          
                        </div>
                    </div>
            
          </div>
        
                </div>
            
            </div>
            <div id="decision1-yes" className={`yes node-container order3`}>
            <div className={classes(
                "decision1-yes-branch",
                "decision1-yes-branch condition-node top yes"
              )}>
                  <div className="up-arrow">
                    <button className="heading" type="button"
                    title="Yes"
                    data-key="yes"
                    className={`${!buttonsDisabled ? 'active' : ''}`}
                    onClick={onBranchClick}
                    data-branch="condition1"
                    aria-label="Yes"
                    disabled={buttonsDisabled}
                    tabIndex={props.overlay ? -1 : 0}
                    id="yes-btn">Yes</button>
                  </div>
                  <div className="down-arrow node right row-reverse">
                    <p className="content">Original claim contains equality</p>
                    <div className="arrow"></div>
                  </div>
                </div>
                <div className="child-node">
                  <div id="condition3" className="node">
                    <div id="decision3" className={classes(
                "decision3",
                "decision3 node order2"
              )}>
                      <div className="decision-box">
                        <div className="decision sm" id="decision3-box">
                        <p className="heading" aria-hidden="true">
                        Do you reject <em>H</em><sub>0</sub>?
                          </p>
                          <p className="sr-only">
                        Do you reject H sub 0?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="decision3-yes" className={`yes node-container order3`}>
                    <div className={classes("decision3-yes-branch","decision3-yes-branch condition-node")}>
                          <div className="up-arrow">
                            <p className="heading">Yes</p>
                          </div>
                          <div className="down-arrow node row-reverse right">
                          <div className="arrow"></div>
                          <p className="content" aria-hidden="true">Reject <em>H</em><sub>0</sub></p>
                            <p className="sr-only" >Reject H sub 0</p>
                            
                          </div>
                        </div>
                        <div className={classes("decision3-yes","decision3-yes child-node node-container")}>
                          <div className="process green" id="process3">
                            <p className="content" aria-hidden="true">&#8220;There is sufficient evidence to warrant rejection of the claim that... (original claim).&#8221;</p>
                            <p className="sr-only" >there is sufficient evidence to warrant rejection of the claim that ellipsis, original claim.</p>
                          </div>
                          <div className={classes("glow-decision3-yes","glow-decision3-yes text process-bottom"
              )}>
                            <p className="content" aria-hidden="true">(This is the only case in which the original claim is rejected.)</p>
                            <p className="sr-only" >This is the only case in which the original claim is rejected.</p>
                          </div>
                        </div>
                    </div>
                    <div id="decision3-no" className="no node-container order1" >
                        <div className={classes("decision3-no-branch","decision3-no-branch condition-node")}>
                          <div className="up-arrow">
                            <p className="heading">No</p>
                          </div>
                          <div className="down-arrow node left">
                          <div className="arrow"></div>
                          <p className="content left" aria-hidden="true">Fail to reject <em>H</em><sub>0</sub></p>
                            <p className="sr-only">Fail to reject H sub 0</p>
                            
                          </div>
                        </div>
                        <div className={classes("decision3-no","decision3-no child-node node-container")}>
                          <div className="process green" id="process4">
                          <p className="content" aria-hidden="true">&#8220;There is not sufficient evidence to warrant rejection of the claim that... (original claim).&#8221;</p>
                            <p className="sr-only" > there is not sufficient evidence to warrant rejection of the claim that ellipsis, original claim.</p>
                          </div>
                          
                        </div>
                    </div>
            
          </div>
        
                </div>
            
            </div>
          </div>
        
        </div>
      )}
      <FadeInOut
        animation={!overClass}
        animationState={!overClass}
        text={ostText}
        classes={`main-screen-text ${ostClass}`}
      />
    </div>
  );
};

ChartActivity.defaultProps = {
  selectAll: false,
  nodeTimeStamp: {},
  flowChartVisible: true,
};

ChartActivity.propTypes = {
  selectAll: PropTypes.bool,
  nodeTimeStamp: PropTypes.object,
};

export default ChartActivity;
