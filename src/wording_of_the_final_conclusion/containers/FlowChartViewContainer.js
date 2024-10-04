import { connect } from "react-redux";
import { nodeTimeStamp, onScreenText ,buttonNode,timestampsForAttempts,hideTimeStamp, altText} from "../data/config";
import { thunk, setTocItem,setFlowChartVisible } from "../actions";
import ChartActivityNew from "../components/activity/ChartActivityNew";

const mapState = (state) => {
  return {
    overlay: state.overlayState,
    onScreenText: onScreenText,
    activeNode: state.activeNode,
    nodeTimeStamp: nodeTimeStamp,
    visitedNode: state.visitedNode,
    caption: state.toggleCaptionState,
    skipToContent: state.skipToContent,
    currentTime: state.audioCurrentTime,
    playState: state.audioPlayState,
    buttonNode:buttonNode,
    flowChartVisible:state.flowChartVisible,
    timestampsForAttempts:timestampsForAttempts,
    hideTimeStamp:hideTimeStamp,
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
    onBranchClick: (object) => {
      dispatch(thunk.onButtonClick({ ...object }));
    },
    setFlowChartVisible:(value)=>{
      dispatch(setFlowChartVisible(value));
  },
  updateCurrentTime:(value)=>{
    dispatch(thunk.setUpdatedCurrentTime(value));
}
  };
};

export default connect(mapState, mapDispatch)(ChartActivityNew);
