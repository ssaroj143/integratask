import { connect } from "react-redux";
import Caption from "../../app/components/Captions";
import { captionJson } from "../data/config";

const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
    overlay: state.overlayState,
    caption: state.toggleCaptionState,
    captionJson: captionJson,
    currentTime: state.audioCurrentTime,
    screen: state.selectedTocItem !== "success" ? "chart-screen" : "",
    toc: state.selectedTocItem,
  };
};

export default connect(mapState)(Caption);
