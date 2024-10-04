import { over } from "lodash";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { footerIcons } from "../../data/svgJson";
import { convertDuration } from "../../helpers";
import TransScriptDownloader from "./TransScriptDownloader.jsx";


import Slider from "../Slider/index";

const Footer = (props) => {
  const {
    ns,
    togglePlay,
    play,
    mute,
    toggleMute,
    disablePrev,
    disableNext,
    audioDuration,
    audioEnded,
    currentTime,
    selectNextFrame,
    selectPrevFrame,
    restartAudio,
    isRestartEnabled,
    caption,
    toggleAudioCaption,
    selectedQuestion,
    overlay,
    playButtonState,
    initiallyButtonState,
    updateLiveMessage,
    altText,
    question,
    selectedAudio,

  } = props;
  console.log("props.transcript", props.transcript)
  const playRef = useRef(null);
  const timeoutRef = useRef(null);
  const currentTimeRef = useRef(props.current);

  const [screenReaderText, setScreenReaderText] = useState("");
  const [currentSongTimer, setCurrentSongTimer] = useState("00:00");
  const [convertedDuration, setConvertedDuration] = useState(null);
  const [goForward, setGoForward] = useState(false);
  const [goBackward, setGoBackward] = useState(false);

  const playButtonTitle = playButtonState ? "pause" : "play";
  const muteButtonTitle = mute ? "unmute" : "mute";
  const disableRestart = isRestartEnabled ? "" : "disable";

  useEffect(() => {
    const endDuration = convertDuration(audioDuration);
    setConvertedDuration(endDuration);
  }, [audioDuration]);

  useEffect(() => {
    if (!isRestartEnabled && !overlay && playButtonState) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        initiallyButtonState(true);
        togglePlay(true);
      }, 2000);
    }

    if (
      (!playButtonState && !isRestartEnabled && !overlay) ||
      (question && !isRestartEnabled)
    ) {
      // click before timeout

      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      initiallyButtonState(true);
      togglePlay(false);
    }
  }, [overlay, playButtonState, isRestartEnabled]);

  useEffect(() => {
    const endDuration = convertDuration(currentTime);

    if (selectedAudio == "title") {
      setGoForward(true);
      setGoBackward(false);
      // console.log("1", currentTime, audioDuration)
    } else if (currentTime + 0.250 >= audioDuration) {
      setGoForward(false);
      setGoBackward(true);
      // console.log("2", currentTime, audioDuration)
    } else {
      // alert(false)
      setGoForward(true);

      setGoBackward(true);
      // console.log("3", currentTime, audioDuration)
    }
    setCurrentSongTimer(endDuration);
  }, [currentTime]);

  useEffect(() => {
    if (audioEnded) {

      togglePlay(false);
      setGoForward(false);

      const getButton = document.querySelector(".start-again");

      if (getButton) {

        setTimeout(() => {
          //getButton.removeAttribute("tabindex")
          getButton.focus();

        }, 100)
      }
    }
  }, [audioEnded]);

  // useEffect(() => {
  //   if (props.question !== question) {
  //     if (props.question == null) {
  //       setTimeout(() => {
  //         if (playRef && playRef.current) {

  //           playRef.current.focus();
  //         }
  //       }, 100);
  //     }
  //     setQuestion(props.question);
  //   }
  // }, [props.question]);

  const restart = (e) => {
    e.stopPropagation();
    // restart seek baar/ audio
    restartAudio();
  };

  useEffect(() => {
    const currentPart = screenReaderReadableTime(props.currentTime);
    const durationPart = screenReaderReadableTime(props.audioDuration);
    setScreenReaderText(`${currentPart} elapsed out of ${durationPart}`);
  }, [props.currentTime, props.audioDuration]);

  useEffect(() => {
    if (
      Math.abs(props.currentTime - currentTimeRef.current) >= 0.3 &&
      props.audioAutoPaused
    ) {
      initiallyButtonState(true);
      togglePlay(true);
    }
    currentTimeRef.current = props.currentTime;
  }, [props.currentTime]);

  const screenReaderReadableTime = (time) => {
    const minutesTime = parseInt(time / 60);
    const secondsTime = time % 60;
    const minutesElapsed =
      minutesTime == 0
        ? ""
        : `${minutesTime} ${minutesTime == 1 ? "minute" : "minutes"}`;
    const secondsElapsed = `${parseInt(secondsTime)} ${parseInt(secondsTime) == 1 ? "second" : "seconds"
      }`;
    const string = minutesElapsed
      ? `${minutesElapsed} and ${secondsElapsed}`
      : secondsElapsed;
    return string;
  };

  const jump = (e, time) => {
    let calcTime = props.currentTime + time;

    if (time < 0 && calcTime <= 0) {
      calcTime = 0//props.audioStartTime;
    } else if (time > 0 && calcTime > props.audioDuration) {
      calcTime = props.audioDuration;
      setGoForward(false);

    }

    props.setUpdatedCurrentTime(Math.floor(calcTime) + 0.01);
    setTimeout(() => {
      props.setUpdatedCurrentTime(Math.floor(calcTime));
    });


    setTimeout(() => {
      if (calcTime < currentTime) {
        updateLiveMessage(altText.frameButton.rewind);
      } else {
        updateLiveMessage(altText.frameButton.forward);
      }
    }, 100);
  };

  const _toggleAudioCaption = () => {
    const _caption = caption;

    setTimeout(() => {
      // if (_caption) {
      //   updateLiveMessage(altText.caption.active);
      // } else {
      //   updateLiveMessage(altText.caption.inactive);
      // }
    }, 100);
    toggleAudioCaption();
  };

  const _tooglePlay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    if (!play && playButtonState) {
      togglePlay(!playButtonState);
    } else {
      togglePlay(!play);
    }
  };


  const _toggleMute = (value) => {

    toggleMute(value);
    setTimeout(() => {
      if (value) {
        updateLiveMessage(altText && altText.volume.mute)
      } else {
        updateLiveMessage(altText && altText.volume.unmute)
      }
    }, 100)
  }

  const captionClasses = caption ? "active" : "";
  const _overlay = overlay ? "overlay" : "";
  const timeDivClasses = `timerdiv ${_overlay}`;
  const playControlsClass = `play-controls ${_overlay}`;
  const restartAudioContainerClasses = `restart-audio-container ${_overlay}`;

  return (
    <footer aria-hidden={overlay} className={`${ns}-footer`}>
      <div className={restartAudioContainerClasses}>
        <button
          className={`restart ${disableRestart} `}
          title="restart"
          aria-label="restart"
          onClick={restart}
          disabled={!isRestartEnabled || overlay}
        >
          <span className="icon"></span>
          <span className="text">Restart</span>
        </button>
      </div>

      <div className={playControlsClass}>
        <button
          title="Previous frame"
          aria-label="Previous frame"
          disabled={disablePrev || overlay}
          onClick={selectPrevFrame}
          className={`prev ${disablePrev || overlay ? "disable" : ""}`}
          dangerouslySetInnerHTML={{ __html: footerIcons.previousIcon }}
        ></button>
        <button
          title="Rewind"
          aria-label="Rewind"
          disabled={!goBackward || overlay}
          onClick={(e) => jump(e, -props.jumpDifference)}
          className={`rewind ${!goBackward || overlay ? "disable" : ""}`}
          dangerouslySetInnerHTML={{ __html: footerIcons.rewindIcon }}
        ></button>
        <button
          ref={playRef}
          disabled={overlay}
          className={`play-btn`}
          title={playButtonTitle}
          aria-label={playButtonTitle}
          onClick={_tooglePlay}
        >
          <span
            className={playButtonTitle}
            dangerouslySetInnerHTML={{
              __html:
                playButtonTitle == "play"
                  ? footerIcons.playIcon
                  : footerIcons.pauseIcon,
            }}
          ></span>
        </button>
        <button
          title="Forward"
          aria-label="Forward"
          disabled={!goForward || overlay}
          onClick={(e) => jump(e, props.jumpDifference)}
          className={`forward ${!goForward || overlay ? "disable" : ""}`}
          dangerouslySetInnerHTML={{ __html: footerIcons.forwardIcon }}
        ></button>
        <button
          title="Next frame"
          aria-label="Next frame"
          disabled={disableNext || overlay}
          onClick={selectNextFrame}
          className={`next ${disableNext || overlay ? "disable" : ""}`}
          dangerouslySetInnerHTML={{ __html: footerIcons.nextIcon }}
        ></button>
      </div>

      <div className={timeDivClasses}>
        <TransScriptDownloader
          classes={`${overlay ? "disable" : ""} transcript-btn`}
          label="Download Transcript"
          transcriptDocument={props.transcript}
          transcriptTitle={props.textTitle}
          disabled={overlay}
          ext='doc'
          icon={footerIcons.transcriptIcon}
        />
        <button
          className={`caption ${disableRestart} ${captionClasses} ${selectedQuestion || disablePrev ? "disable" : ""
            }`}
          title="Closed captions"
          aria-label="Closed captions"
          aria-hidden={overlay}
          onClick={_toggleAudioCaption}
          aria-pressed={caption}
          disabled={
            disablePrev || !isRestartEnabled || selectedQuestion || overlay
          }
        >
          {overlay && (
            <span
              dangerouslySetInnerHTML={{ __html: footerIcons.ccIcon }}
            ></span>
          )}
        </button>
        <span className="time">
          <span aria-hidden="true" className="current-time">
            {currentSongTimer}
          </span>
          <span aria-hidden="true" className="slash">
            /
          </span>
          <span aria-hidden="true" className="end-time">
            {convertedDuration}
          </span>
          <span className="sr-only">{screenReaderText}</span>
        </span>
        <button
          className={`volume-icon ${muteButtonTitle}`}
          title={muteButtonTitle}
          aria-label={muteButtonTitle}
          onClick={() => _toggleMute(!mute)}
          disabled={overlay}
        >
          {overlay && (
            <span
              dangerouslySetInnerHTML={{ __html: footerIcons.muteIcon }}
            ></span>
          )}
        </button>
        <Slider {...props} />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  play: PropTypes.bool,
  mute: PropTypes.bool,
  togglePlay: PropTypes.func,
  toggleMute: PropTypes.func,
  play: PropTypes.bool.isRequired,
  currentTime: PropTypes.number,
  selectedAudio: PropTypes.string.isRequired,
  disablePrev: PropTypes.bool,
  disableNext: PropTypes.bool,
  audioDuration: PropTypes.number,
};

Footer.defaultProps = {
  play: false,
  mute: false,
  currentTime: 0,
  selectedAudio: null,
  disablePrev: true,
  disableNext: false,
  audioDuration: 0,
};
export default Footer;
