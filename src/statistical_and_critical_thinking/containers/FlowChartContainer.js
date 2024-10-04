import { connect } from "react-redux";
import FlowchartView from "../components/activity/FlowchartView";
import { selectedAllNodes } from "../data/config";

const mapState = (state) => {
  return {
    selectedAllNodes: selectedAllNodes.includes(state.selectedTocItem),
    selectedToc:
      state.selectedTocItem == "title" || state.selectedTocItem == "success",
    caption: state.toggleCaptionState,
  };
};

export default connect(mapState)(FlowchartView);
