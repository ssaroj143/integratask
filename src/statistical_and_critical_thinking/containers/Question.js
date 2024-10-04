import { connect } from "react-redux";
import { thunk } from "../actions";
import {
  answerResponse,
  submitButtonText,
  continueButtonText,
  questionTopHeading,
} from "../data/config";
import Question from "../../app/components/Question";

const mapState = (state) => ({
  answerResponse,
  submitButtonText,
  continueButtonText,
  question: state.question,
  header: questionTopHeading,
  submitted: state.answerSubmitted,
  skipToContent: state.skipToContent,
  selectedOption: state.selectedAnswer,
  correctOptionSubmitted: state.correctOptionSubmitted,
  overlayState: state.overlayState,
});

const matchDispatch = (dispatch) => ({
  selectOption: (id) => {
    dispatch(thunk.selectOption(id));
  },
  submitAnswer: () => {
    dispatch(thunk.submitAnswer());
  },
  onContinue: () => {
    dispatch(thunk.onContinueQuestion());
  },
});

export default connect(mapState, matchDispatch)(Question);
