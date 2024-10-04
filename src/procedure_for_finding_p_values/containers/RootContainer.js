import Root from "../components";
import { connect } from "react-redux";
import { isMobileDevice, thunk, updateAudioVolume } from "../actions";

const mapState = (state) => ({
  selectedQuestion: state.question,
  preloadImages: [
    "assets/images/graph01.svg",
    "assets/images/graph02.svg",
    "assets/images/caption.svg",
    "assets/images/caption_active.svg",
    "assets/images/check.svg",
    "assets/images/chevron.svg",
    "assets/images/correct.svg",
    "assets/images/download_pdf.svg",
    "assets/images/incorrect.svg",
    "assets/images/info.svg",
    "assets/images/info_active.svg",
    "assets/images/list_icon.svg",
    "assets/images/logo.svg",
    "assets/images/questionicon.svg",
    "assets/images/questionicon-active.svg",
    "assets/images/questionicon-visited.svg",
    "assets/images/restart.svg",
    "assets/images/restart_again.svg",
    "assets/images/volume_mute.svg",
    "assets/images/volume_unmute.svg",
    "assets/images/left-tailed.png",
    "assets/images/right-tailed.png",
    "assets/images/two-tailed.png",
  ],
});

const mapDispatch = (dispatch) => ({
  setDeviceType: (deviceType) => {
    dispatch(isMobileDevice(deviceType));
  },
  setAudioVolume: (value) => {
    dispatch(thunk.updateAudioVolume(value));
  },
});

export default connect(mapState, mapDispatch)(Root);
