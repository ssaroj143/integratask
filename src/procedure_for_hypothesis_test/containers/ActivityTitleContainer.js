import { connect } from "react-redux";
import ActivityTitle from "../../app/components/Title";
import { activityTitle, altText } from "../data/config";

const mapState = (state) => {
  return {
    title: activityTitle,
    overlay: state.overlayState,
    skipToContent: state.skipToContent,
    selectedToc: state.selectedTocItem == "title",
    altText: altText.titleLogo,
  };
};

const mapDispatch = (dispatch) => {
  return {
    togglePlay: (state) => {
      dispatch(thunk.togglePlay(state));
    },
  };
};

export default connect(mapState, mapDispatch)(ActivityTitle);
