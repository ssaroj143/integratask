import { connect } from "react-redux";
// import { widthChange } from "../../converting_from_the_kth_percentile_to_the_corresponding_data_value/actions";
import FlowchartView from "../components/activity/FlowchartView";
import { selectedAllNodes } from "../data/config";

const mapState = (state) => {
  return {
    selectedAllNodes: selectedAllNodes.includes(state.selectedTocItem),
    selectedToc:
      state.selectedTocItem == "title" || state.selectedTocItem == "success",
    caption: state.toggleCaptionState,
    breakPoint: state.widthChange.breakpoint
  };
};

export default connect(mapState)(FlowchartView);
