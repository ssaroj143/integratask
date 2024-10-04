import { connect } from "react-redux";

import { thunk } from "../actions";
import SkipToContent from "../../app/components/SkipToContent/index.jsx";

const mapState = (state) => ({
  overlay: state.overlayState,
  label: "Skip to main content",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.skipToContent(true));
  },
});

export default connect(mapState, matchDispatch)(SkipToContent);
