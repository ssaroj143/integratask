import React, { Component, createRef } from "react";
import FadeInOut from "../../containers/FadeInFadeOutContainer"
import { hideChartTime } from "../../data/config";

export class ChartActivity extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.focussedNodeRef = createRef();
    this.state = {
      overClass: false,
      ostText: null,
      ostClass: null,
      visibleChart: true,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.playState != this.props.playState) {
      if (this.props.playState && this.props.selectAll) {
        if (this.containerRef && this.containerRef.current) {
          const start = this.containerRef.current.querySelector(".startend");
          const innerDivStart = start.querySelector(".text");

          if (innerDivStart) {
            setTimeout(() => {
              innerDivStart.tabIndex = -1;
              innerDivStart.focus();
            });
          }
        }
      }
    }

    if (prevProps.currentTime != this.props.currentTime) {
      const nodeDiv = this.containerRef.current.querySelectorAll(".text");

      for (let i = 0; i < nodeDiv.length; i++) {
        const classes = nodeDiv[i].classList;

        const parentNode = nodeDiv[i].parentNode.parentNode;
        if (
          classes.contains("selected-text") &&
          !this.props.selectAll &&
          this.focussedNodeRef.current != parentNode.id
        ) {
          if (nodeDiv[i].classList.contains("decision-box")) {
            nodeDiv[i].children[0].tabIndex = -1;
            nodeDiv[i].children[0].focus();
            this.focussedNodeRef.current = parentNode.id;
            break;
          } else {
            if (
              !nodeDiv[i].classList.contains("condition-node") &&
              parentNode.id != this.focussedNodeRef.current
            ) {
              nodeDiv[i].tabIndex = -1;
              nodeDiv[i].focus();
              this.focussedNodeRef.current = parentNode.id;
            }
          }
        }
      }
      const { onScreenText, currentTime } = this.props
      if (onScreenText) {
        const ost1 = onScreenText.filter(
          (e) => e.startTime <= currentTime && e.endTime > currentTime
        );
        let show1 = false;
        let text = [];
        let chartShow = true
        let classData = []
        for (let i = 0; i < ost1.length; i++) {
          if (ost1[i].transform && currentTime < ost1[i].middleTime && ost1[i].startTime < currentTime) {
            show1 = true;
            text.push(ost1[i].text);
            classData.push(ost1[i].id)
            chartShow = ost1[i].hiddenChart ? false : true
          }
        }

        this.setState({ ostText: text.join(' '), overClass: show1, ostClass: classData.join(' '), visibleChart: chartShow })
      }
    }
    
  }

  renderFlowchart = (data) => {
    
    const { activeNode, currentTime, selectAll } = this.props;

    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const selectedAll = selectAll ? "selected" : "";
      const selectedBox =
        data[i].startTime <= currentTime && data[i].endTime >= currentTime
          ? "selected-text"
          : "";

      const visitedBox =
        data[i].endTime < currentTime && !selectedAll ? "visited" : "";

      const nonVisited =
        !selectAll && data[i].startTime > currentTime ? "no-visited" : "";

      const showBranch =
        data[i].type == "child" &&
          data[i].visitedStart <= currentTime &&
          data[i].visitedEnd >= currentTime
          ? "branch"
          : "";

      const _classes =
        data[i].classes && Array.isArray(data[i].classes)
          ? data[i].classes.join(" ")
          : "";
          
      const hidden = selectAll || showBranch == "branch";
      arr.push(
        <div
          key={data[i].id}
          id={data[i].id}
          className={`node ${_classes} ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
        >
          {data[i].name && (
            <div className={`node-container`}>
              <div
                className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${showBranch}`}
                dangerouslySetInnerHTML={{ __html: data[i].name }}
                style={{
                  background: `${data[i].background && data[i].background}`,
                  border: `2px solid ${data[i].border && data[i].border}`,
                }}
              ></div>
              <div
                className={`arrow ${_classes} ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${showBranch}`}
                aria-hidden="true"
              ></div>
            </div>
          )}
          {data[i].textNode.length > 0
            ? this.renderFlowchart(data[i].textNode)
            : null}
        </div>
      );
    }

    return arr;
  };

  render() {

    
    const { data, caption,currentTime } = this.props;
    let showChart = true;
    if(currentTime>=hideChartTime.startTime && currentTime <= hideChartTime.endTime){
      showChart = false;      
    }
    const showCaption = caption ? "toggleHeight" : "";
    const { overClass, ostText, ostClass, visibleChart } = this.state;

    return (
      <>
        <div
          className={`chart-container ${showCaption}`}
          ref={this.containerRef}
          aria-hidden={this.props.overlay}
        >
        <div className="sr-only" tabIndex="-1" aria-hidden={this.props.overlay}>{this.props.altText.activityTitle}</div>
          {showChart && visibleChart && this.renderFlowchart(data)}
          <FadeInOut animation={!overClass} animationState={!overClass} text={ostText} classes={`main-screen-text ${ostClass}`} />
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
