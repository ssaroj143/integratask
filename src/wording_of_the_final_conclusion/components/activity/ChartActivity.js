import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import FadeInOut from "../../containers/FadeInFadeOutContainer";
// import MainScreenTextContainer from

const ChartActivity = (props) => {
  const ref = useRef(null);
  const { caption, playState, setFlowChartVisible } = props;
  const [startButton, setStartButtonClickable] = useState(null);
  const focusNodeRef = useRef(null);
  const currentTimeRef = useRef(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [visibleChart, setChartvisible] = useState(true);
  const [overClass, setOverClass] = useState(false);
  const [ostText, setOstText] = useState(null);
  const [ostClass, setOstClass] = useState(null);

  // const []
  const arrowSvg =
    '<svg width="49px" height="44px" viewBox="0 0 49 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g fill="none" stroke="none" stroke-width="1" id="infoArrowSVG" fill-rule="evenodd" opacity="0.800000012"> <g transform="translate(-951.000000, -115.000000)" fill="#333"> <g transform="translate(43.897725, 95.047599)"> <path d="M941.272805,34.1089886 C942.344543,30.1243625 943.238337,26.1205962 943.77459,22.0352235 C943.896039,21.0119129 945.232787,20.4708458 946.021005,21.1452281 C947.632453,22.5421813 949.278587,23.8842488 950.853696,25.2927615 C952.279538,26.5574019 954.059615,27.8169965 955.077173,29.4227993 C955.585952,30.2257007 954.815199,31.320013 953.873211,30.9060684 C952.122733,30.1592962 950.616996,28.6410121 949.144005,27.4551546 C948.854182,27.2204506 948.590938,26.9812784 948.324992,26.7589121 C948.881683,27.853537 949.403687,29.0030476 949.799252,30.0811555 C950.810992,32.8488949 951.465348,35.802076 951.570707,38.7385396 C951.812518,44.9005672 949.271792,50.7836506 944.834151,55.0615971 C940.170973,59.5627764 933.981169,62.0858899 927.609163,62.9009214 C924.291617,63.3223753 920.933663,63.29823 917.609187,63.0122827 C915.891614,62.8649853 914.190255,62.6168529 912.489945,62.3085886 C910.948059,62.0336471 909.230486,61.8863497 907.83154,61.1513375 C906.92694,60.6657014 907.0248,59.1994148 908.154175,59.0913119 C909.546636,58.9553328 910.925298,59.3340213 912.290289,59.5296906 C913.79253,59.7295394 915.283357,59.8931533 916.79911,60.0089729 C919.87131,60.2555729 922.94936,60.3049711 926.02935,59.9670571 C931.832393,59.3130809 937.465854,57.1941738 941.842388,53.2426293 C946.093691,49.4265985 948.201367,44.1995201 948.102528,38.5421566 C948.04613,35.8372845 947.511314,33.2128399 946.681429,30.6543511 C946.377618,29.7025315 945.977252,28.7614934 945.593705,27.8230785 C945.235938,30.1015799 945.042,32.3797926 944.417842,34.5995178 C943.863502,36.5458815 940.736936,36.1013017 941.272805,34.1089886"></path> </g> </g> </g></svg>';

  useEffect(() => {
    if (playState) {
      if (ref && ref.current) {
        const start = ref.current.querySelector(".start .chart-start");

        if (start) {
          start.tabIndex = -1;
          start.focus();
        }
      }
    }
  }, [playState]);

  useEffect(() => {
    if(props.currentTime>193 && props.currentTime<194){
      props.updateCurrentTime(213.420655)
    }
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
      // const ost = props.onScreenText.filter(
      //   (e) => e.startTime <= props.currentTime && e.middleTime > props.currentTime
      // );

      // // const { hiddenChart } = ost;
      // let show = true;
      // for (let i = 0; i < ost.length; i++) {
      //   if (ost[i].hiddenChart) {
      //     show = false;
      //   }
      // }
      // setFlowChartVisible(show)

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
      // const getValueDiv =
      //   ref && ref.current && ref.current.querySelectorAll(".additional-value"); // hide additionall added arrow pointing to right & left child

      // if (getValueDiv) {
      //   for (let i = 0; i < getValueDiv.length; i++) {
      //     getValueDiv[i].style.display = "none";
      //   }
      // }

      // highlight arrow
      // const splitClasses = baseClasses.split(" ");

      // if (splitClasses.includes("glow-arrow")) {
      //   setActive(uid, baseClasses);
      // } else {
        return `${baseClasses} active`;
      // }
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
      // console.log("---3---->",id)
    if (getButtonId) {
      const id = getButtonId.id;
      props.onBranchClick({ key, branch, id });
    }
  };

  const isActive = (object, time) => {
    return object.startTime <= time && object.endTime >= time;
  };

  const handleFocus = () => {
    const keys = Object.keys(props.nodeTimeStamp);
    const currentElem = keys.filter((key) => {
      const node = props.nodeTimeStamp[key];
      if (Array.isArray(node)) {
        for (let n = 0; n < node.length; n++) {
          const _node = node[n];
          if (isActive(_node, props.currentTime)) {
            return true;
          }
        }
        return false;
      } else {
        return isActive(node, props.currentTime);
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
    if (currentElem.length) {
      let node = props.nodeTimeStamp[currentElem[0]];
      if (Array.isArray(node)) {
        if (
          node[0].focusItemId &&
          focusNodeRef.current != node[0].focusItemId
        ) {
          const elem = document.querySelector(`#${node[0].focusItemId}`);
          focusNodeRef.current = node[0].focusItemId;
          if (elem) {
            elem.focus();
          }
        }
      } else {
        if (node.focusItemId && focusNodeRef.current != node.focusItemId) {
          const elem = document.querySelector(`#${node.focusItemId}`);
          focusNodeRef.current = node.focusItemId;
          if (elem) {
            elem.focus();
          }
        }
      }
    }
  };

  useEffect(() => {
    const { buttonNode, currentTime } = props;
    const getButtonDiv = buttonNode.filter(
      (e) => e.startTime <= currentTime && e.endTime > currentTime
    )[0];

    if (getButtonDiv) {
      setStartButtonClickable(getButtonDiv);
    } else {
      setStartButtonClickable(null);
    }

    // hide arrow from goal screen on pause

    if (props.selectAll) {
      if (ref && ref.current) {
        setTimeout(() => {
          const getValueDiv =
            ref &&
            ref.current &&
            ref.current.querySelectorAll(".additional-value"); // hide additionall added arrow pointing to right & left child

          if (getValueDiv) {
            for (let i = 0; i < getValueDiv.length; i++) {
              //console.log(getValueDiv[i])
              getValueDiv[i].style.display = "none";
            }
          }
        });
      }
    }
  }, [props.currentTime]);

  const onStart = () => {
    const { buttonNode, currentTime } = props;
    props.togglePlay(true);

    const getButtonDiv = buttonNode.filter(
      (e) => e.startTime <= currentTime && e.endTime > currentTime
    )[0];

    // alert(currentTime)
    if (getButtonDiv) {
      props.updateCurrentTime(getButtonDiv.endTime + 0.25);
    }
  };

  // hide chart when visible chart is true or flowchartvisible false
  const chartClasses = props.flowChartVisible ? "show" : "hide";

  console.log("props.currentTime", props.currentTime)
  return (
    <div
      ref={ref}
      aria-hidden={props.overlay}
      className={`chart-container ${showCaption} ${chartClasses}`}
    >
      {/* animationState : {true:"fadeIN",false:"fadeOut"} */}
      {visibleChart && (
        <div>
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
          <div className="children typeoftest">
            <div
              className={classes(
                "condition1",
                "condition1 condition node-container"
              )}
            >
              <div className={classes("decisionBox", "decision-box typeoftest")}>
                <div className="text decision" id="typeoftest">
                  <p className="heading">
                    Does the original claim contain the condition or equality?
                  </p>
                </div>
              </div>
              <div
                className={classes("leftArrow", "left-tailed node-container")}
              >
                <div className="decision1-no-arrow">
                <div
                  className={classes(
                    "leftArrow",
                    "left-tailed-arrow left-tailed decision-arrow left left-tailed-arrow"
                  )}
                >
                  <button
                    type="button"
                    title="No"
                    data-key="left-tailed"
                    onClick={onBranchClick}
                    data-branch="condition1"
                    aria-label="No"
                    className={`${!buttonsDisabled ? "active" : ""}`}
                    disabled={buttonsDisabled}
                    tabIndex={props.overlay ? -1 : 0}
                    id="left-tailed-btn"
                  >
                    No
                  </button>
                </div>
                <div className="left-tailed-child">
                  <p class="content">Original claim does not contain equality and becomes H<sub>1</sub></p>
                  <div className="arrow"></div>
                  
                </div>
               
                </div>
                <div className="conditionLeft">
              <div
                className={classes(
                  "left-decisionBox",
                  "condition2 condition node-container"
                )}
              >
                <div className="node two-tailed-child">
                  <div className="decision-box">
                    <div
                      tabIndex="-1"
                      id="two-tailed-parent"
                      className="text decision"
                    >
                      <p className="heading">
                        Do you reject H<sub>0</sub>?
                      </p>
                    </div>
                  </div>
                  <div
                    className={classes(
                      "left-rightArrow",
                      "node-container right-child"
                    )}
                  >
                    <div className="decision-arrow right">
                      <p id="right-child-text">Yes</p>
                    </div>
                    <div className="two-tailed-right">
                      <p class="content">Reject H<sub>0</sub></p>
                      <div className="arrow"></div>
                      <div
                        className={classes("left-right-Box","process-container right")}
                        aria-labelledby="right-child-text"
                      >
                        <div
                          tabIndex="-1"
                          className="text process"
                          id="two-tailed-right-child"
                        >
                          <p className="heading">
                            {/* <span className="sr-only">
                              p value = twice the area to the right of the test
                              statistic
                            </span> */}
                            <span aria-hidden="true">
                              "There is sufficient evidence to support the claim that... (original claim)."
                            </span>
                          </p>
                        </div>
                        <div
                          className={classes(
                            "glowing-two-child",
                            "glowing-two-child glow-arrow right"
                          )}
                        ></div>
                      </div>
                      <p className={classes("left-right-Box","contentLast")}>(This is the only case in which the original claim is supported.)</p>
                    </div>
                  </div>

                  <div
                    className={classes(
                      "left-leftArrow",
                      "node-container left-child"
                    )}
                  >
                    <div className="decision-arrow left">
                      <p id="left-child-text">No</p>
                    </div>
                    <div className="two-tailed-left">
                      <p class="content">Fail to reject H<sub>0</sub></p>
                      <div className="arrow"></div>
                      <div
                        className={classes("left-left-Box","process-container left")}
                        aria-labelledby="left-child-text"
                      >
                        <div
                          tabIndex="-1"
                          className="text process "
                          id="two-tailed-left-child"
                        >
                          <p className="heading">
                            <span aria-hidden="true">
                              "There is not sufficient evidence to support the claim that...(original claim)."
                            </span>
                            {/* <span className="sr-only">
                              p-value = twice the area to the left of the test
                              statistic
                            </span> */}
                          </p>
                        </div>
                        <div
                          className={classes(
                            "glowing-two-child",
                            "glowing-two-child glow-arrow left"
                          )}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              </div>
              
              <div
                className={classes(
                  "rightArrow",
                  "right-tailed node-container"
                )}
              >
                <div
                  className={classes(
                    "rightArrow",
                    "right-tailed-arrow right-tailed decision-arrow right right-tailed-arrow"
                  )}
                >
                  {/* <div className={`right-tailed-text-shadow ${!buttonsDisabled ? 'active' : ''}`}>Right-tailed</div> */}
                  <button
                    type="button"
                    title="Yes"
                    data-key="right-tailed"
                    className={`${!buttonsDisabled ? "active" : ""}`}
                    onClick={onBranchClick}
                    data-branch="condition1"
                    aria-label="Yes"
                    disabled={buttonsDisabled}
                    tabIndex={props.overlay ? -1 : 0}
                    id="right-tailed-btn"
                  >
                    Yes
                  </button>
                </div>
                <div className="right-tailed-child">
                  <p class="content">Original claim contain equality</p>
                  <div className="arrow"></div>
                  
                </div>
              </div>
            </div>
            {/* Left */}
           
            {/* Right */}
            <div className="conditionRight">
              <div
                className={classes(
                  "right-decisionBox",
                  "condition2 condition node-container"
                )}
              >
                <div className="node two-tailed-child">
                  <div className="decision-box">
                    <div
                      tabIndex="-1"
                      id="two-tailed-parent"
                      className="text decision"
                    >
                      <p className="heading">
                        Do you reject H<sub>0</sub>?
                      </p>
                    </div>
                  </div>
                  <div
                    className={classes(
                      "right-rightArrow",
                      "node-container right-child"
                    )}
                  >
                    <div className="decision-arrow right">
                      <p id="right-child-text">Yes</p>
                    </div>
                    <div className="two-tailed-right">
                      <p class="content">Reject H<sub>0</sub></p>
                      <div className="arrow"></div>
                      <div
                        className={classes("right-right-Box","process-container right")}
                        aria-labelledby="right-child-text"
                      >
                        <div
                          tabIndex="-1"
                          className="text process"
                          id="two-tailed-right-child"
                        >
                          <p className="heading">
                            <span className="sr-only">
                              "There is sufficient evidence to warrant rejection of the claim that..(original claim)."
                            </span>
                            {/* <span>
                              (This is the only case in which the original claim is rejected.)
                            </span> */}
                            <span aria-hidden="true">
                              "There is sufficient evidence to warrant rejection of the claim that..(original claim)."
                            </span>
                          </p>
                        </div>
                        <div
                          className={classes(
                            "glowing-two-child",
                            "glowing-two-child glow-arrow right"
                          )}
                        ></div>
                      </div>
                      <p className={classes("right-right-Box","contentLast")}>(This is the only case in which the original claim is rejected.)</p>
                    </div>
                  </div>
                            
                  <div
                    className={classes(
                      "right-leftArrow",
                      "node-container left-child"
                    )}
                  >
                    <div className="decision-arrow left">
                      <p id="left-child-text">No</p>
                    </div>
                    <div className="two-tailed-left">
                      <p class="content">Fail to reject H<sub>0</sub></p>
                      <div className="arrow"></div>
                      <div
                        className={classes("right-left-Box","process-container left")}
                        aria-labelledby="left-child-text"
                      >
                        <div
                          tabIndex="-1"
                          className="text process "
                          id="two-tailed-left-child"
                        >
                          <p className="heading">
                            <span aria-hidden="true">
                              "There is not sufficient evidence to warrant rejection of the claim that... (origin claim)."
                            </span>
                            {/* <span className="sr-only">
                              p-value = twice the area to the left of the test
                              statistic
                            </span> */}
                          </p>
                        </div>
                        <div
                          className={classes(
                            "glowing-two-child",
                            "glowing-two-child glow-arrow left"
                          )}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="node child-container "></div>
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
