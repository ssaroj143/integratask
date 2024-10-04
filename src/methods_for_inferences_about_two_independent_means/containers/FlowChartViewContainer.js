import { connect } from "react-redux";
import { onScreenText, timestampsForAttempts, data, nodeTimestamp,altText } from "../data/config";

import ChartActivity from "../components/activity/ChartActivity";

const mapState = (state) => {
  return {
    overlay: state.overlayState,
    onScreenText: onScreenText,
    activeNode: state.activeNode,
    nodeTimestamp: nodeTimestamp,
    visitedNode: state.visitedNode,
    caption: state.toggleCaptionState,
    skipToContent: state.skipToContent,
    currentTime: state.audioCurrentTime,
    playState: state.audioPlayState,

    flowChartVisible: state.flowChartVisible,
    timestampsForAttempts: timestampsForAttempts,
    data: data,
    altText:altText
  };
};

const mapDispatch = (dispatch) => {
  return {


  };
};

export default connect(mapState, mapDispatch)(ChartActivity);
