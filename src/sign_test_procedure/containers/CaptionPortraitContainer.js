import { connect } from "react-redux";
import Caption from "../../app/components/Captions";
import { captionJson } from "../data/config";

const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
    caption: state.toggleCaptionState,
    captionJson: captionJson,
    currentTime: state.audioCurrentTime,
    portrait: true,
    screen: "",
    overlay: state.overlayState,
    toc: state.selectedTocItem,
  };
};

export default connect(mapState)(Caption);
