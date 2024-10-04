import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { convertDuration } from "../../helpers";

const SeekBar = (props) => {
  const {
    ns,
    ariaLabel,
    currentTime,
    duration,
    skipToContent,
    setCurrentTime,
    overlay
  } = props;
  const seekbarRef = useRef(null);
  const [elapsed, setElapsed] = useState(0);

  const calculatePercentage = (currentTime, duration) => {
    if (duration == 0) {
      return 0;
    }
    return ((currentTime / duration) * 100).toFixed(3);
  };

  const seekbarClick = (e) => {
    const offsetLeft = seekbarRef.current.offsetLeft;
    const totalWidth = seekbarRef.current.offsetWidth;
    const left = e.pageX - offsetLeft;
    const percentage = left / totalWidth;
    const time = props.duration * percentage;
    setCurrentTime(time);
  };

  useEffect(() => {
    if (skipToContent) {
      let chartNode = document.getElementsByClassName('chart-container');
      let focusNode = chartNode && chartNode.length ? chartNode[0].children[0] : '';

      if (focusNode) {
        focusNode.focus();
      }
      // if (seekbarRef && seekbarRef.current) {
      //   seekbarRef.current.focus();
      // }
    }
  }, [skipToContent]);


  // useEffect(()=>{
  //   if(!overlay && seekbarRef && seekbarRef.current){
  //     setTimeout(()=>{
  //       seekbarRef.current.focus();
  //     })
  //   }
  // },[overlay]);


  useEffect(() => {
    const { duration, currentTime } = props;
    setElapsed(calculatePercentage(currentTime, duration));
  }, [props.duration, props.currentTime]);

  const onKeyDown = (e) => {
    const keyCode = e.keyCode;
    const { currentTime, duration } = props;
    if (keyCode) {
      let time = currentTime;
      switch (keyCode) {
        case 37:
        case 38:
          time = currentTime - 0.2;
          time < 0 ? 0 : time;
          setCurrentTime(time);
          break;
        case 39:
        case 40:
          time = currentTime + 0.2;
          time > duration ? duration : time;
          setCurrentTime(time);
          break;
      }
    }
  };
  const onchangeSeekbar = (e) => {
    console.log("e.target.value", e.target.value)
    setCurrentTime(e.target.value);
  }

  const getContvertedTime = (currentTime) => {
    const duration = convertDuration(currentTime);
    let str = "";

    if (Number(duration.split(":")[0]) < 10) {
      str = `${duration.split(":")[0]} minute ${duration.split(":")[1]
        } seconds`;
    } else {
      str = `${duration.split(":")[0]} minutes ${duration.split(":")[1]
        } seconds`;
    }

    return str;
  };
  return (
    <>
      <input type="range"
        step={1}
        // tabIndex="0"
        // role="progressbar"
        // ref={seekbarRef}
        aria-valuemin={0}
        value={currentTime}
        // onKeyDown={onKeyDown}
        aria-label={ariaLabel}
        // onClick={seekbarClick}
        min={0}
        max={duration}
        onChange={onchangeSeekbar}
        aria-valuemax={duration}
        aria-valuenow={currentTime}
        aria-hidden={props.overlay}
        className={`${ns}-seekbar accessible-seekbar`}
        tabIndex={props.overlay ? "-1" : "0"}
        aria-valuetext={`current time is ${getContvertedTime(currentTime)}`}
        style={{
          "position": "absolute",
          "zIndex": "-1",
          "opacity": 0,
          "pointerEvents": "none",
          "touchAction": "none",
          "width": "100%"
        }}
      />
      <div
        step={0.2}
        tabIndex="-1"
        role="slider"
        ref={seekbarRef}
        aria-valuemin={0}
        value={currentTime}
        onKeyDown={onKeyDown}
        aria-label={ariaLabel}
        onClick={seekbarClick}
        aria-valuemax={duration}
        aria-valuenow={currentTime}
        aria-hidden={props.overlay}
        className={`${ns}-seekbar`}
        aria-hidden="true"
        // tabIndex={props.overlay ? "-1" : "0"}
        aria-valuetext={`current time is ${getContvertedTime(currentTime)}`}
      >
        <div style={{ width: `${elapsed}%` }} aria-hidden="true"></div>
      </div>
    </>
  );
};

SeekBar.propTypes = {
  ariaLabel: PropTypes.string,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default SeekBar;
