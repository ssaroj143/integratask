import { thunk, updateLiveMessage } from "../actions";
import { connect } from "react-redux";
import { onScreenText } from "../data/config";
import OnScreenText from "../../app/components/Activity/OnScreenText";

const mapState = (state) => {

  return {
    onScreenText: onScreenText,
    overlay: state.overlayState,
    currentTime: state.audioCurrentTime,
    attemptedFlowchartPath: state.attemptedFlowchartPath,
    orientation:state.activityOrientation
  };
};

const matchDispatch = (dispatch) => ({
  onButtonClick: (object) => {
    dispatch(thunk.onButtonClick({ ...object }));
    // console.log("From OST Container "+object.branch); //for debug
  },
  updateLiveMessage: (message) => {
    dispatch(updateLiveMessage(message));
  },
});

export default connect(mapState, matchDispatch)(OnScreenText);
