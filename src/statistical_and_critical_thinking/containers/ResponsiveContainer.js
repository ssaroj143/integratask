import { connect } from "react-redux";
import ResponsiveWrapper from "../../app/components/ResponsiveWrapper";
import { widthChange, orientationChange } from "../actions";

const mapState = (state) => ({
  ns: "pehtmlflowcharts",
  breakpoints: {
    small: [0, 767],
    medium: [768, 991],
    large: [992, 1199],
    extralarge: [1200, "~"],
  },
});

const matchDispatch = (dispatch) => ({
  onResize: (data) => {
    dispatch(widthChange(data));
  },
  onOrientationChange: (orientation) => {
    console.log("orientation: ", orientation);
    dispatch(orientationChange(orientation));
  },
});

export default connect(mapState, matchDispatch)(ResponsiveWrapper);
