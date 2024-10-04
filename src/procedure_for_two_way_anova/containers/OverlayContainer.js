import { connect } from "react-redux";
import OverlayScreen from "../../app/components/Overlay";
import { thunk } from "../actions";
const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
    overlay: state.overlayState,
    isMobileDevice: state.isMobileDevice,
  };
};

const matchDispatch = (dispatch) => {
  return {
    toggleOverlay: () => {
      dispatch(thunk.toggleOverlay());
    },
  };
};

export default connect(mapState, matchDispatch)(OverlayScreen);
