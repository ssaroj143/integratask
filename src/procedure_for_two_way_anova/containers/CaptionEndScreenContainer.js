import { connect } from "react-redux";
import Caption from "../../app/components/Captions";
import { captionJson } from "../data/config";

const mapState = (state) => {
  return {
    ns: "pehtmlflowcharts",
    caption: state.toggleCaptionState,
    captionJson: captionJson,
    currentTime: state.audioCurrentTime,
    landscape: true,
    screen: state.selectedTocItem == "success" ? "end-screen" : "",
    toc: state.selectedTocItem,
  };
};

export default connect(mapState)(Caption);
