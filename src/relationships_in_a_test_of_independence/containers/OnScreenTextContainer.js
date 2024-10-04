import { thunk, updateLiveMessage } from "../actions";
import { connect } from "react-redux";
import { onScreenText } from "../data/config";
import OnScreenText from "../../app/components/Activity/OnScreenText";

const mapState = (state) => {
  return {
    overlay: state.overlayState,
    currentTime: state.audioCurrentTime,
    onScreenText: onScreenText,
  };
};

const matchDispatch = (dispatch) => ({
  onButtonClick: (object) => {
    dispatch(thunk.onButtonClick({ ...object }));
  },
  updateLiveMessage: (message) => {
    dispatch(updateLiveMessage(message));
  },
});

export default connect(mapState, matchDispatch)(OnScreenText);
