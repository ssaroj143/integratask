import { connect } from "react-redux";
import ScalebleWrapper from "../../app/components/ScalableWrapper";

const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
    widthChange: state.widthChange,
    caption: state.toggleCaptionState,
    activityOrientation: state.activityOrientation,
    classes: state.toggleCaptionState ? "toggleHeight" : "",
  };
};

export default connect(mapState)(ScalebleWrapper);
