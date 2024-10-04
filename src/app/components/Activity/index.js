import React from "react";

import OnScreenText from "./OnScreenText";
import ChartActivity from "./ChartActivity";
import AccessibleChartNodes from "./AccessibleChartNodes.jsx";

const Activity = (props) => {
  const { ns } = props;
  return (
    <div className={`${ns}-activity`} role="main">
      {props.children}
    </div>
  );
};

export { AccessibleChartNodes, ChartActivity, OnScreenText };

export default Activity;
