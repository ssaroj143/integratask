import { connect } from "react-redux";
import { nodeTimeStamp, onScreenText, data, altText } from "../data/config";
import { thunk, setTocItem } from "../actions";
import ChartActivity from "../components/activity/ChartActivity";

const mapState = (state) => {
  return {
    overlay: state.overlayState,
    onScreenText: onScreenText,
    activeNode: state.activeNode,
    visitedNode: state.visitedNode,
    caption: state.toggleCaptionState,
    skipToContent: state.skipToContent,
    currentTime: state.audioCurrentTime,
    playState: state.audioPlayState,
    data: data,
    altText: altText,
    nodeTimeStamp: nodeTimeStamp
  };
};

const mapDispatch = (dispatch) => {
  return {
    togglePlay: (state) => {
      dispatch(thunk.togglePlay(state));
    },
    setToc: (value) => {
      dispatch(setTocItem(value));
    },
    onBranchClick: (object) => {
      dispatch(thunk.onButtonClick({ ...object }));
    },
  };
};

export default connect(mapState, mapDispatch)(ChartActivity);
