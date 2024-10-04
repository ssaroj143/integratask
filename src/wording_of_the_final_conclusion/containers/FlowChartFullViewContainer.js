import { connect } from "react-redux";
import { thunk, setTocItem,setFlowChartVisible } from "../actions";
import ChartActivityNew from "../components/activity/ChartActivityNew";
import { buttonNode, onScreenText ,timestampsForAttempts,nodeTimeStamp,data,altText} from "../data/config";

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
    buttonNode: buttonNode,
    flowChartVisible:state.flowChartVisible,
    timestampsForAttempts:timestampsForAttempts,
    nodeTimeStamp: nodeTimeStamp,
    data:data,
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
    setFlowChartVisible:(value)=>{
      dispatch(setFlowChartVisible(value));
  },
  updateCurrentTime:(value)=>{
    dispatch(thunk.setUpdatedCurrentTime(value));
}
  };
};

export default connect(mapState, mapDispatch)(ChartActivityNew);
