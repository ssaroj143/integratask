import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import FadeInOut from "../FadeInOutcontainer";


const OnScreenText = (props) => {
  const containerRef = useRef(null);
  const [updatedOST, updateOST] = useState(null);
  const [updatedOSTButton, updateOSTButton] = useState(null);
  const [focussedNode, setFocussedNode] = useState(null);
  const { currentTime, onButtonClick, onScreenText } = props;
  const [overClass, setOverClass] = useState(false);
  const [screenOrientation,setOrientation]=useState(null);
  const focusedButton = useRef(null);
  
  useEffect(() => {
    setInterval(() => { }, 5000);
  }, []);

  useEffect(() => {
   
    const ost = onScreenText.filter(
      (e) =>((!e.transform && e.startTime <= currentTime && e.endTime > currentTime) || (e.transform && e.middleTime <= currentTime && e.endTime > currentTime))
    );
   

    const ostButtons = ost && ost.filter((e) => e.type == "buttons")[0];

    const btn = ostButtons && ostButtons.buttons.filter((e) => e.startTime <= currentTime && e.endTime > currentTime)

  

    if(props.orientation!=screenOrientation || !updatedOST || ost.length !== updatedOST.length ||  (ost[ost.length-1]!=updatedOST[updatedOST.length-1]) || (!updatedOSTButton && btn) || btn && btn.length !== updatedOSTButton.length){
      if (containerRef && containerRef.current && ((ost && ost.length > 0) || props.orientation)) {

        const bodyDiv = containerRef.current.querySelector(".body");
        if (bodyDiv) {
          bodyDiv.scrollTop = bodyDiv.scrollHeight;
        }
      }
      updateOST(ost);
      updateOSTButton(btn);
      setOrientation(props.orientation)
    }


    if (ost && ost.length > 0) {
      const messages = ost.filter((e) => e.type && e.type == "message");
      const buttons = ost.filter((e) => e.type && e.type == "buttons");
      if (messages.length) {
        const messageDiv = containerRef.current.querySelector(
          "." + messages[messages.length - 1].id
        );

        if (messageDiv) {
          const innerDiv = messageDiv.querySelector("p");
          if (innerDiv) {
            setTimeout(() => {
              innerDiv.tabIndex = -1;
              innerDiv.focus();
            }, 300);
          }
        }
      }

      if (buttons.length) {
        const buttonsDiv = containerRef.current.querySelector(
          "." + buttons[buttons.length - 1].id
        );

        if (buttonsDiv) {
          const innerDiv = buttonsDiv.querySelector(".button-group");

          if (innerDiv && buttons[0].id != focusedButton.current) {
            setTimeout(() => {
              innerDiv.children[0].removeAttribute("tabindex");
              innerDiv.children[0].focus();
            }, 300);
            focusedButton.current = buttons[0].id;
          }
        }
      } else {
        focusedButton.current = null;
      }
    }
  }, [props.currentTime, props.orientation]);




  const onClick = (key, branch, id) => {
    onButtonClick({ key, branch, id });
  };

  const ariaPressed = (key) => {
    return props.attemptedFlowchartPath == key;
  };

  const ost = onScreenText.filter(
    (e) => e.startTime <= currentTime + 0.150 && e.endTime > currentTime + 0.150
  );
  // const ostTransform = onScreenText.filter(
  //   (e) => e.startTime <= currentTime && e.middleTime > currentTime
  // );

 
  useEffect(() => {
    let show = false;
    for (let i = 0; i < ost.length; i++) {
      if (ost[i].transform && ost[i].middleTime > currentTime) {
        show = true;
      }
    }
    // const timeout = show ? 10 : 1000
    const TimeOut = setTimeout(() => {
      setOverClass(show);
      clearTimeout(TimeOut);
    }, 1000)
    // console.log(ost)
  }, [currentTime])

  const rightSectionClasses = `right-section ${ost.length ? "show" : ""}`;


  return (
    <div
      aria-hidden={props.overlay}
      ref={containerRef}
      className={rightSectionClasses}
    >
      <div className="right-section-inner">
        <div className="container">
          <div className={`body ${overClass ? "overflow" : ""}`}>
            {ost &&
              ost.map((o) => {
                // o.transform && o.middleTime ? setOverClass("overFlow") : setOverClass("");
                return o.type && o.type == "buttons" ? (
                  <div key={o.id} className={`text-container ${o.id}`}>
                    <p className="heading" dangerouslySetInnerHTML={{ __html: o.heading}}></p>
                    <div className="button-group">
                      {o.buttons.map((btn, i) => {

                        return (
                          (btn.startTime <= props.currentTime && btn.endTime > props.currentTime) ?
                          <>
                            {btn.url ? 
                            <button
                              key={btn.id}
                              aria-pressed={ariaPressed(btn.key)}
                              tabIndex={props.overlay ? "-1" : "0"}
                              onClick={() => window.open(btn.url, "_blank")}
                              dangerouslySetInnerHTML={{ __html: btn.label }}
                            >
                            </button>
                            :
                            <button
                              key={btn.id}
                              aria-pressed={ariaPressed(btn.key)}
                              tabIndex={props.overlay ? "-1" : "0"}
                              onClick={() => onClick(btn.key, o.branch, o.id)}
                              dangerouslySetInnerHTML={{ __html: btn.label }}
                            >
                            </button>
                            }
                            </>: null
                        );
                      })}
                    </div>
                  </div>
                ) : (
                    (o.type == "message" && o.value && props.attemptedFlowchartPath ?
                      <div
                        key={o.id}
                        className={`text-container`}
                        dangerouslySetInnerHTML={{ __html: o.value[props.attemptedFlowchartPath] }}
                      ></div>


                      :
                      <div
                        key={o.id}
                        className={`text-container ${o.id} ${o.transform && o.middleTime > currentTime ? "hidden" : ""}`}
                        dangerouslySetInnerHTML={{ __html: o.text }}
                      ></div>
                    )

                  );
              })}
            {/* <span tabIndex="-1" id="ost-focusable-node"></span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

OnScreenText.propTypes = {
  currentTime: PropTypes.number.isRequired,
  onScreenText: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default OnScreenText;
