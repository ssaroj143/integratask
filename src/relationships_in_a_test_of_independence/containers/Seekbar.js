import { connect } from "react-redux";
import SeekBar from "../../app/components/Seekbar";
import { thunk } from "../actions";

const mapState = (state) => ({
  ns: "pehtmlflowcharts",
  duration: state.audioDuration,
  ariaLabel: "flowchart seek bar",
  overlay: state.overlayState,
  skipToContent: state.skipToContent,
  currentTime: state.audioCurrentTime,
});

const matchDispatch = (dispatch) => ({
  setCurrentTime: (updatedTime) => {
    dispatch(thunk.setUpdatedCurrentTime(updatedTime));
  },
});

export default connect(mapState, matchDispatch)(SeekBar);
