import React, { Component } from "react";
import MathJax from "react-mathjax-preview";

export class ChartActivity extends Component {
  constructor(props) {
    super(props);
  }

  renderFlowchart = (data) => {
    const { activeNode, currentTime, selectAll } = this.props;

    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const selectedAll = selectAll ? "selected" : "";
      const selectedBox =
        (activeNode &&
          activeNode.length > 0 &&
          activeNode.includes(data[i].id)) ||
          (data[i].startTime <= currentTime && data[i].endTime >= currentTime)
          ? "selected"
          : "";
      const visitedBox =
        data[i].endTime < currentTime ||
          (data[i].visited && data[i].visited < currentTime)
          ? "visited"
          : "";
      const nonVisited =
        !selectAll && data[i].startTime > currentTime ? "no-visited" : "";

      const _classes =
        data[i].classes && Array.isArray(data[i].classes)
          ? data[i].classes.join(" ")
          : "";

      const _classes2 = `text ${data[i].type == "child" ? `child ${_classes}` : ""
        } ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes}`;

      arr.push(
        <div
          key={data[i].id}
          id={data[i].id}
          className={`node ${_classes} ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
        >
          {data[i].textNode.length > 0 ? (
            this.renderFlowchart(data[i].textNode)
          ) : (
              <div className="node-container">
                {data[i].type && data[i].type == "staticcontent" ? (
                  <div
                    className={_classes2}
                    dangerouslySetInnerHTML={{ __html: data[i].name }}
                  ></div>
                ) : (
                    <div className={_classes2}>
                      <MathJax
                        math={data[i].name}
                        id={`${data[i].id}-mathjax`}
                        className="maxjax-top-container"
                      />
                    </div>
                  )}

                <div
                  className={`arrow ${_classes} ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
                  aria-hidden="true"
                ></div>
                {data[i].classes.includes("has-child-2") ? (
                  <div
                    className={`condtion-arrow-two-nodes ${nonVisited}`}
                    aria-hidden="true"
                  >
                    <div className="condition1"></div>
                    <div className="condition2"></div>
                  </div>
                ) : null}
              </div>
            )}
        </div>
      );
    }

    return arr;
  };

  render() {
    const { data } = this.props;
    console.log("data", data)
    return (
      <>
        <div aria-hidden="true" className="chart-container">
          {this.renderFlowchart(data)}
        </div>
        {this.props.children}
      </>
    );
  }
}

ChartActivity.defaultProps = {
  selectAll: false,
};
export default ChartActivity;
