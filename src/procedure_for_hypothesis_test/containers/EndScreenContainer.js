import { connect } from "react-redux";
import EndScreen from "../../app/components/EndScreen";
import { audioEnded, thunk, updateLiveMessage } from "../actions";
import { altText } from "../data/config";
const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
    overlay: state.overlayState,
    skipToContent: state.skipToContent,
    selectedToc: state.selectedTocItem == "success",
    caption: state.toggleCaptionState,
    altText: altText,
    audioEnded:state.audioEnded
  };
};

const matchDispatch = (dispatch) => {
  return {
    restartAudio: () => {
      dispatch(thunk.restartAudio());
    },
    updateLiveMessage: (message) => {
      dispatch(updateLiveMessage(message));
    },
  };
};
export default connect(mapState, matchDispatch)(EndScreen);
