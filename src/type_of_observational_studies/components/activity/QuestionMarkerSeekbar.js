import React from "react";

import SeekBar from "../../containers/Seekbar";
import QuestionMarker from "../../containers/QuestionMarker";

const QuizMarkerSeekbar = (props) => {
  return (
    <div role="complementary" className="question-marker-seekbar">
      <SeekBar />
      <QuestionMarker />
    </div>
  );
};

export default QuizMarkerSeekbar;
