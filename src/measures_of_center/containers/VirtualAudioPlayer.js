import { connect } from "react-redux";
import VirtualAudioPlayer from "../../app/components/VirtualAudioPlayer/index.jsx";

import optionSelected from "../../app/assets/audios/answer_option_selected.mp3";
import submitCorrect from "../../app/assets/audios/answer_submitted_correct.mp3";
import submitinCorrect from "../../app/assets/audios/answer_submitted_incorrect.mp3";

const mapState = (state) => {
  return {
    virtualAudioTracks: {
      correct: submitCorrect,
      selected: optionSelected,
      incorrect: submitinCorrect,
    },
    audioSrc: state.feedbackAudioType,
    audioMuteState:state.audioMuteState,
  };
};

export default connect(mapState)(VirtualAudioPlayer);
