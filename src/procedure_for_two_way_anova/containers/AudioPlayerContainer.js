import { connect } from "react-redux";
import { audioSrc, activityTitle } from "../data/config";
import AudioPlayer from "../../app/components/AudioPlayer";
import { updateLiveMessage } from "../actions";
import {
  audioEnded,
  getDuration,
  audioAutoPaused,
  thunk,
} from "../actions/index";

const mapState = (state) => ({
  activityTitle,
  audioSrc: audioSrc,
  allowAutoPlay: true,
  volume: state.audioVolume,
  play: state.audioPlayState,
  mute: state.audioMuteState,
  currentTime: state.audioCurrentTime,
  updatedCurrentTime: state.updatedCurrentTime,
  overlay: state.overlayState,
  restartState: state.restartState,
  audioCurrentTimeChanged: state.audioCurrentTimeChanged,
});

const mapDispatch = (dispatch) => {
  return {
    audioEnded: () => {
      //dispatch(audioEnded(true));
    },
    getDuration: (duration) => {
      dispatch(getDuration(duration));
    },
    setCurrentTime: (value) => {
      dispatch(thunk.setCurrentTime(value));
    },
    togglePlay: (state) => {
      dispatch(thunk.togglePlay(state));
    },
    autoPaused: (state) => {
      dispatch(audioAutoPaused(state));
    },
    updateLiveMessage: (message) => {
      dispatch(updateLiveMessage(message));
    },
  };
};

export default connect(mapState, mapDispatch)(AudioPlayer);
