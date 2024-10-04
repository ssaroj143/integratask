import { connect } from "react-redux";
import { tocData, altText, transcript } from "../data/config";
import Footer from "../../app/components/Footer";
import {
  thunk,
  toggleMute,
  toggleAudioCaption,
  setRestartButtonState,
  togglePlayButton,
  updateLiveMessage,
  audioEnded,
} from "../actions";

const mapState = (state) => ({
  min: 0,
  max: 1,
  step: 0.1,
  ns: "pehtmlflowcharts",
  question: state.question,
  play: state.audioPlayState,
  mute: state.audioMuteState,
  audioEnded: state.audioEnded,
  ariaValueText: "audio volume",
  selectedToc: state.selectedTocItem,
  audioDuration: state.audioDuration,
  currentTime: state.audioCurrentTime,
  selectedAudio: state.selectedTocItem,
  isRestartEnabled: state.restartState,
  disablePrev: state.selectedTocItemIndex == 0,
  value: state.audioMuteState ? 0 : state.audioVolume,
  disableNext:
    state.selectedTocItemIndex == state.tocData.length - 2 ||
    state.selectedTocItem == "success",
  caption: state.toggleCaptionState,
  jumpDifference: 10,
  selectedQuestion: state.selectedQuestion,
  audioStartTime: 0.1,
  overlay: state.overlayState,
  playButtonState: state.playButtonState,
  altText: altText,
  audioAutoPaused: state.audioAutoPaused,
  isMobileDevice: state.isMobileDevice,
  transcript,
  textTitle: ACTIVITY_CONFIG.title,
  overlay: state.overlayState,

});

const matchDispatch = (dispatch) => ({
  togglePlay: (state) => {
    dispatch(thunk.togglePlay(state));
  },
  toggleMute: (value) => {
    dispatch(toggleMute(value));
  },
  restartAudio: () => {
    dispatch(thunk.restartAudio());
  },
  onChange: (value) => {
    dispatch(thunk.updateAudioVolume(value));
  },
  selectPrevFrame: () => {
    dispatch(thunk.selectPrevFrame());
  },
  selectNextFrame: () => {
    dispatch(thunk.selectNextFrame());
  },
  toggleAudioCaption: () => {
    dispatch(toggleAudioCaption());
  },
  setUpdatedCurrentTime: (time) => {
    dispatch(thunk.setUpdatedCurrentTime(time));
  },
  initiallyButtonState: (value) => {
    dispatch(setRestartButtonState(value));
  },
  togglePlayButton: (value) => {
    dispatch(togglePlayButton(value));
  },
  updateLiveMessage: (message) => {
    dispatch(updateLiveMessage(message));
  },

});

export default connect(mapState, matchDispatch)(Footer);
