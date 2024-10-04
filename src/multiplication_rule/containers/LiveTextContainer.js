import { connect } from "react-redux";
import LiveText from "../../app/components/LiveText";
import { updateLiveMessage } from "../actions";

const mapState = (state) => {
  return {
    message: state.liveMessage,
    ariaLive: "polite",
    role: "status",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLiveMessage: (message) => {
      dispatch(updateLiveMessage(message));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(LiveText);
