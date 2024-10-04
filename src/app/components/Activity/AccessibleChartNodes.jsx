import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const accessibleChartNode = (props) => {
  const ref = useRef(null);
  const [focussedNode, setFocussedNode] = useState(null);

  useEffect(() => {
    handleNodeFocus(props.nodesData, props.currentTime);
  }, []);

  useEffect(() => {
    handleNodeFocus(props.nodesData, props.currentTime);
  }, [props.currentTime]);

  // useEffect(() => {
  //   if (props.skipToContent) {
  //     const { nodesData, currentTime } = props;
  //     const filteredNode = nodesData.filter(
  //       (e) => e.startTime <= currentTime && e.endTime > currentTime
  //     )[0];

  //     if (filteredNode && filteredNode.id) {
  //       focusNode(filteredNode.id);
  //     }
  //   }
  // }, [props.skipToContent]);

  const handleNodeFocus = (nodesData, currentTime) => {
    const filteredNode = nodesData.filter(
      (e) => e.startTime <= currentTime && e.endTime > currentTime
    )[0];

    if (filteredNode && filteredNode.id) {
      if (filteredNode.id !== focussedNode) {
        focusNode(filteredNode.id);
      }
    }
  };

  const focusNode = (id) => {
    if (ref && ref.current) {
      const div = ref.current.querySelector(`#${id}-anode`);
      if (div) {
        const p = div.querySelector("p");
        if (p) {
          p.tabIndex = -1;
          p.focus();
        }
      }
    }
    setFocussedNode(id);
  };

  return (
    <div
      ref={ref}
      className="accessible-chart-nodes"
      dangerouslySetInnerHTML={{ __html: props.nodesDOM }}
    ></div>
  );
};

accessibleChartNode.propsTypes = {
  nodesDOM: PropTypes.string.isRequired,
  nodesData: PropTypes.array.isRequired,
  skipToContent: PropTypes.bool.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default accessibleChartNode;
