import { connect } from "react-redux";
// import { accessibleChartDOM, accessibleChartData } from "../data/config";
import { AccessibleChartNodes } from "../../app/components/Activity";

const mapState = (state) => ({
  // nodesDOM: accessibleChartDOM,
  // nodesData: accessibleChartData,
  skipToContent: state.skipToContent,
  currentTime: state.audioCurrentTime,
});
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(AccessibleChartNodes);
