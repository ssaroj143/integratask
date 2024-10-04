import { connect } from "react-redux";
import EndScreen from "../../app/components/EndScreen";
import { thunk, updateLiveMessage } from "../actions";
import { altText } from "../data/config";
const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
    overlay: state.overlayState,
    skipToContent: state.skipToContent,
    selectedToc: state.selectedTocItem == "success",
    caption: state.toggleCaptionState,
    altText: altText,
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
