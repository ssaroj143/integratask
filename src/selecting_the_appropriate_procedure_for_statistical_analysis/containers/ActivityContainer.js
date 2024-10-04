import { connect } from "react-redux";
import Activity from "../../app/components/Activity";

const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Activity);
