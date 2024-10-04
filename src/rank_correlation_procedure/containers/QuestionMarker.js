import { connect } from "react-redux";

import { thunk } from "../actions";
import { data, questions } from "../data/config";
import QuestionMarker from "../../app/components/QuestionMarker";

const mapState = (state) => ({
  ns: "pehtmlflowcharts",
  markers: questions,
  question: state.question,
  overlay: state.overlayState,
  duration: state.audioDuration,
  selected: state.selectedQuestion,
  currentTime: state.audioCurrentTime,
  answeredQuestions: state.answeredQuestions,
});

const matchDispatch = (dispatch) => ({
  onClick: (marker) => {
    dispatch(thunk.onQuestionMarkerClick(marker));
  },
});

export default connect(mapState, matchDispatch)(QuestionMarker);
