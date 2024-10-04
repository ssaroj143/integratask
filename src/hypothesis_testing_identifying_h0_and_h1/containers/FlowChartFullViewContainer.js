import { connect } from "react-redux";

import ChartActivity from "../components/activity/ChartActivity";
import { onScreenText, timestampsForAttempts, nodeTimestamp, data, hideChartTime,altText } from "../data/config";

const mapState = (state) => {
  return {
    selectAll: true,
    overlay: state.overlayState,
    activeNode: state.activeNode,
    skipToContent: state.skipToContent,
    currentTime: state.audioCurrentTime,
    caption: state.toggleCaptionState,
    playState: state.audioPlayState,
    onScreenText: onScreenText,

    flowChartVisible: state.flowChartVisible,
    timestampsForAttempts: timestampsForAttempts,
    nodeTimestamp: nodeTimestamp,
    data: data,
    hideChartTime: hideChartTime,
    altText:altText
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
    setFlowChartVisible: (value) => {
      dispatch(setFlowChartVisible(value));
    },
    updateCurrentTime: (value) => {
      dispatch(thunk.setUpdatedCurrentTime(value));
    }
  };
};

export default connect(mapState, mapDispatch)(ChartActivity);
