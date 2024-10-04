import { connect } from "react-redux";
import { toggleToc, thunk, updateLiveMessage } from "../actions";
import { altText, pdfDocument } from "../data/config";
import Header from "../../app/components/Header";

const mapState = (state) => ({
  pdfDocument,
  altText: altText,
  ns: "pehtmlflowcharts",
  tocData: state.tocData,
  disableDownloadPDF: false,
  overlay: state.overlayState,
  tocOpened: state.tocMenuToggled,
  selectedToc: state.selectedTocItem,
  pdfDocumentTitle: ACTIVITY_CONFIG.title,
});

const matchDispatch = (dispatch) => ({
  toggleToc: (value) => {
    dispatch(toggleToc(value));
  },
  setToc: (value) => {
    dispatch(thunk.setToc(value));
  },
  toggleOverlay: () => {
    dispatch(thunk.toggleOverlay());
  },
  updateLiveMessage: (message) => {
    dispatch(updateLiveMessage(message));
  },
});

export default connect(mapState, matchDispatch)(Header);
