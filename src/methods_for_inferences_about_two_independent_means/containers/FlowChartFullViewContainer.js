import { connect } from "react-redux";

import ChartActivity from "../components/activity/ChartActivity";
import { onScreenText, timestampsForAttempts, data, nodeTimestamp,altText } from "../data/config";

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
    altText:altText
  };
};

const mapDispatch = (dispatch) => {
  return {

  };
};

export default connect(mapState, mapDispatch)(ChartActivity);
