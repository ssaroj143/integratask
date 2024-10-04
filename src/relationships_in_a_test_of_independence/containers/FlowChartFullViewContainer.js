import { connect } from "react-redux";
import { thunk, setTocItem } from "../actions";
import ChartActivity from "../components/activity/ChartActivity";
import { data, altText, onScreenText, timeStamp,nodeTimestamp } from "../data/config";
const mapState = (state) => {
  return {
    selectAll: true,
    overlay: state.overlayState,
    activeNode: state.activeNode,
    skipToContent: state.skipToContent,
    currentTime: state.audioCurrentTime,
    caption: state.toggleCaptionState,
    playState: state.audioPlayState,
    data: data,
    altText: altText,
    onScreenText: onScreenText,
    timeStamp: timeStamp,
    nodeTimestamp: nodeTimestamp
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
  };
};

export default connect(mapState, mapDispatch)(ChartActivity);
