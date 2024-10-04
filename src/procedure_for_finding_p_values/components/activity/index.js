import React from "react";

import Header from "../../containers/Header";
import Question from "../../containers/Question";
import Footer from "../../containers/FooterContainer";
import QuestionMarkerSeekbar from "./QuestionMarkerSeekbar";
import AudioPlayer from "../../containers/AudioPlayerContainer";
import ActivityContainer from "../../containers/ActivityContainer";
import FlowChartContainer from "../../containers/FlowChartContainer";
import EndScreenContainer from "../../containers/EndScreenContainer";
import ActivityTitleContainer from "../../containers/ActivityTitleContainer";
import SkipToContent from "../../containers/SkipToContent";
import CaptionContainer from "../../containers/CaptionPortraitContainer";
import CaptionEndScreenContainer from "../../containers/CaptionEndScreenContainer";
import VirtualAudioPlayer from "../../containers/VirtualAudioPlayer";
import OverlayContainer from "../../containers/OverlayContainer";
import LiveTextContainer from "../../containers/LiveTextContainer";

const Activity = (props) => {
  const { selectedQuestion } = props;
  return (
    <div className="pehtmlflowcharts-activity-container">
      <SkipToContent />
      <Header />
      <ActivityContainer>
        {!selectedQuestion && (
          <>
            <ActivityTitleContainer />
            <FlowChartContainer />

            <EndScreenContainer />
            <CaptionContainer />
            <CaptionEndScreenContainer />
          </>
        )}
        {selectedQuestion && <Question />}
      </ActivityContainer>
      <QuestionMarkerSeekbar />
      <Footer></Footer>
      <VirtualAudioPlayer />
      <OverlayContainer>
        <AudioPlayer />
      </OverlayContainer>
      <LiveTextContainer />
    </div>
  );
};

export default Activity;
