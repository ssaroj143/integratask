import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";

const AudioPlayer = (props) => {
  const audioEl = useRef(null);
  const {
    audioEnded,
    getDuration,
    setCurrentTime,
    togglePlay: _togglePlay,
    volume,
    overlay,
    updateLiveMessage
  } = props;
  const _getCurrentTime = (e) => {
    setCurrentTime(audioEl.current.currentTime);
  };

  const onEnded = (e) => {
    //audioEnded();
  };

  const setVolume = (volume) => {
    audioEl.current.volume = volume;
  };

  const onLoadedMetadata = (e) => {
    if (audioEl.current.readyState >= 1) {
      setCurrentTime(0);
      getDuration(audioEl.current.duration);
    }
  };

  const setUpdatedCurrentTime = (updatedTime) => {
    if (
      updatedTime >= 0 &&
      updatedTime <= audioEl.current.duration &&
      updatedTime !== audioEl.current.currentTime
    ) {
      audioEl.current.currentTime = updatedTime;
    }
  };

  useEffect(() => {
    audioEl.current.muted = props.mute;
  }, [props.mute]);

  useEffect(() => {
    if (audioEl && audioEl.current) {
      setVolume(volume);
    }
  }, [volume]);

  useEffect(() => {
    if (audioEl && audioEl.current) {
      if (!props.play) {
        audioEl.current.pause();
      } else {
        audioEl.current.play();
      }
    }
  }, [props.play]);

  useEffect(() => {
    if (audioEl && audioEl.current) {
      setUpdatedCurrentTime(props.updatedCurrentTime);
    }
  }, [props.audioCurrentTimeChanged]);

  useEffect(() => {
    if (audioEl && audioEl.current) {
      // set the audio settings as per initial props
      setVolume(volume);
      audioEl.current.muted = !!props.mute;
      setUpdatedCurrentTime(props.currentTime);

      // set the audio source and then call the load function
      audioEl.current.src = props.audioSrc;
      audioEl.current.load();
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          artist: "Mario F. Triola",
          title: props.activityTitle,
          album: "Pearson Interactive Flowcharts",
        });

        navigator.mediaSession.setActionHandler("play", () => {
          audioEl.current.play();
          _togglePlay(true);
        });
        navigator.mediaSession.setActionHandler("pause", () => {
          audioEl.current.pause();
          _togglePlay(false);
        });
      }
    }
  }, []);

  return (
    <>
      <audio
        ref={audioEl}
        controls={false}
        onEnded={onEnded}
        aria-hidden={true}
        onTimeUpdate={_getCurrentTime}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      <button
        type="button"
        onClick={(e) => {
          if (!props.play && !props.restartState) {
            audioEl.current.play();
            //props.togglePlay(!props.play);
            setTimeout(() => {
              audioEl.current.pause();
              if (props.autoPaused) {
                props.autoPaused(true);
                updateLiveMessage("Audio is getting played");
              }
            });
          }
        }}
        title="go to flowchart"
        aria-label="go to flowchart"
      >
        Go to Flowchart
      </button>
    </>
  );
};

AudioPlayer.propTypes = {
  mute: PropTypes.bool,
  volume: PropTypes.number,
  audioEnded: PropTypes.func,
  getDuration: PropTypes.func,
  getCurrentTime: PropTypes.func,
  play: PropTypes.bool.isRequired,
  updateCurrentTime: PropTypes.number,
  audioSrc: PropTypes.string.isRequired,
};

AudioPlayer.defaultProps = {
  mute: false,
  play: false,
  volume: 0.5,
  updateCurrentTime: 0,
  audioEnded: () => { },
  getDuration: () => { },
  getCurrentTime: () => { },
};

export default AudioPlayer;
