import React from "react";
import ScalableContainer from "../../containers/ScalableContainer";

import OnScreenTextContainer from "../../containers/OnScreenTextContainer";
import FlowChartViewContainer from "../../containers/FlowChartViewContainer";
import FlowChartFullViewContainer from "../../containers/FlowChartFullViewContainer";
import CaptionContainer from "../../containers/CaptionLandscapeContainer";

const FlowchartView = (props) => {
  const { selectedToc, selectedAllNodes, caption, breakPoint} = props;
  const chartClasses = selectedToc ? "hide" : "show";
  const toggleHeight = caption ? "toggleHeight" : "";
  return (
    <div className={`flow-chart-container ${chartClasses} ${toggleHeight}`}>
      <div className="left-section nonprintable-flowchart">
        {selectedAllNodes ? (
          <ScalableContainer portraitScale={true} width={{
            small: 50,
            medium: 100,
            large: 100,
            extralarge: 100,
            extraSmall: 300
          }}>
            <FlowChartFullViewContainer />
          </ScalableContainer>
        ) : breakPoint == "extraSmall" ? (
          <ScalableContainer portraitScale={true}  width={{
            small: 150,
            medium: 150,
            large: 150,
            extralarge: 150,
            extraSmall: 350
          }}>
            <FlowChartViewContainer />
          </ScalableContainer>) : (
          <FlowChartViewContainer />
        )}
        <CaptionContainer />
      </div>
      <OnScreenTextContainer />
      {/* <div className="left-section printable-flowchart" aria-hidden="true">
        <FlowChartFullViewContainer />
      </div> */}
    </div>
  );
};

export default FlowchartView;
