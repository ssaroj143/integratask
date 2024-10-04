import { connect } from "react-redux";
import FadeInOutcontainer from "../../app/components/FadeInOutcontainer";

const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(FadeInOutcontainer);
