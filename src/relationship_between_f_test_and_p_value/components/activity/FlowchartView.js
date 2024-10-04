import React from "react";
import ScalableContainer from "../../containers/ScalableContainer";
import AccessibleChartNodes from "../../containers/AccessibleChartNodes";
import OnScreenTextContainer from "../../containers/OnScreenTextContainer";
import FlowChartViewContainer from "../../containers/FlowChartViewContainer";
import FlowChartFullViewContainer from "../../containers/FlowChartFullViewContainer";
import CaptionContainer from "../../containers/CaptionLandscapeContainer";

const FlowchartView = (props) => {
  const { selectedToc, selectedAllNodes, caption, breakPoint  } = props;
  const chartClasses = selectedToc ? "hide" : "show";
  const toggleHeight = caption ? "toggleHeight" : "";
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  const addWidth = isIE11 ? 110 : 0

  return (
    <div className={`flow-chart-container ${chartClasses} ${toggleHeight}`}>
      <div className="left-section nonprintable-flowchart">
      {selectedAllNodes ? (
          <ScalableContainer portraitScale={true}  width={{
            extraSmall: 205 + addWidth,
            small: 145 + addWidth,
            medium: 168 + addWidth,
            large: 145 + addWidth,
            extralarge: 205 + addWidth
          }}>
            <FlowChartFullViewContainer />
          </ScalableContainer>
        ) : breakPoint == "extraSmall" ? (
          <ScalableContainer portraitScale={true} width={{
            extraSmall: 205 + addWidth,
            small: 145 + addWidth,
            medium: 168 + addWidth,
            large: 145 + addWidth,
            extralarge: 205 + addWidth
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
