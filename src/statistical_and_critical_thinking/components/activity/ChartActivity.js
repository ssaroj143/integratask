import React, { Component, createRef } from "react";
import FadeInOut from "../../containers/FadeInFadeOutContainer"


export class ChartActivity extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.focussedNodeRef = createRef();
    this.state = {
      overClass: false,
      ostText: null,
      ostClass: null,
      visibleChart: true,
      showImagedata: false
    }
    this.imageShowTime = {
      startTime: 238.805126,
      endTime: 283.248581,
    }
  }

  componentDidMount() {
    this.handleNodeFocus(this.props.selectedToc);
  }

  componentDidUpdate(prevProps, preState) {
    if (prevProps.currentTime != this.props.currentTime) {
      console.log("this.props.currentTime====>", this.props.currentTime)
      const { onScreenText, currentTime } = this.props
      if (onScreenText) {
        const ost1 = onScreenText.filter(
          (e) => e.startTime <= currentTime && e.endTime > currentTime
        );
        let show1 = false;
        let text = null;
        let chartShow = true
        let classData = null;
        const showImage = this.imageShowTime.startTime <= currentTime && this.imageShowTime.endTime >= currentTime;
        console.log("showImage====>", showImage)
        for (let i = 0; i < ost1.length; i++) {
          if (ost1[i].transform && currentTime < ost1[i].middleTime && ost1[i].startTime < currentTime) {
            show1 = true;
            text = ost1[i].text;
            classData = ost1[i].id
            chartShow = ost1[i].chartHidden ? false : true
          }
        }

        this.setState({ ostText: text, overClass: show1, ostClass: classData, visibleChart: chartShow, showImagedata: showImage })

      }
    }
    if (prevProps.playState != this.props.playState) {
      if (this.props.playState && this.props.selectAll) {
        if (this.ref && this.ref.current) {
          const start = this.ref.current.querySelector("#context-div");

          const innerDivStart = start && start.querySelector(".text");

          if (innerDivStart) {
            setTimeout(() => {
              innerDivStart.tabIndex = -1;
              innerDivStart.focus();
            });
          }
        }
      }

    }
    if (
      (prevProps.selectedToc != this.props.selectedToc &&
        this.props.selectedToc) ||
      (prevProps.currentTime != this.props.currentTime &&
        this.props.currentTime)
    ) {
      this.handleNodeFocus(this.props.selectedToc);
    }
  }

  handleNodeFocus = (toc) => {
    const { data } = this.props;

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].data.length; j++) {
        if (data[i].data[j].id == toc && toc !== this.focussedNodeRef.current) {
          this.focussedNodeRef.current = toc;
          this.focusNode(toc);
        }
      }
    }
  };

  focusNode = (id) => {
    if (this.ref && this.ref.current) {
      const div = this.ref.current.querySelector(`#${id}`);
      console.log(div, id);
      if (div) {
        setTimeout(() => {
          div.tabIndex = -1;
          div.focus();
        }, 100);
      }
    }
  };

  textStyle = (node) => {
    return {
      background: node.background,
      border: `2px solid ${node.border}`,
    };
  };

  renderFlowchart = (data) => {
    const { activeNode, currentTime, selectAll } = this.props;

    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const selectedAll = selectAll ? "visible selected" : "";
      const selectedBox =
        data[i].startTime <= currentTime && data[i].endTime >= currentTime
          ? "selected-text"
          : "";

      const visitedBox =
        data[i].endTime < currentTime ||
          (data[i].visited && data[i].visited < currentTime) ||
          (data[i].data &&
            data[i].data.every((d) => d.startTime <= this.props.currentTime))
          ? "visited"
          : "";

      const nonVisited =
        !selectAll && data[i].startTime > currentTime || data[i].endTime <= currentTime ? "no-visited" : "";

      const _classes =
        data[i].classes && Array.isArray(data[i].classes)
          ? data[i].classes.join(" ").trim()
          : "";
      const visible = data[i].startTime <= currentTime && data[i].endTime <= currentTime ? "visible" : "";
      const topClasses = `node ${visible} ${_classes} ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`.trim();
      arr.push(
        <div key={data[i].id} id={data[i].id} className={topClasses}>
          <div className="node-container">
            <div className={`arrow ${_classes}`} aria-hidden="true"></div>
            <div className="text" style={this.textStyle(data[i])}>
              <h2 className="heading">{data[i].heading}</h2>
              <ol>
                {data[i].data.map((d, index) => {
                  const visitedBoxChild =
                    d.endTime < currentTime ||
                      (d.visited && d.visited < currentTime)
                      ? "visited"
                      : "";
                  const nonVisitedChild =
                    !selectAll && d.startTime > currentTime ? "no-visited" : "";
                  const ariaHidden = nonVisitedChild.length > 0;
                  const visible = d.startTime <= currentTime ? "visible" : "";

                  return (
                    <li
                      id={d.id}
                      key={index}
                      aria-hidden={ariaHidden}
                      className={`${visible} ${visitedBoxChild} ${nonVisitedChild}`}
                    >
                      {d.name}
                      {d.nodes.length > 0 && (
                        <ul>
                          {d.nodes.map((n, index1) => {
                            const non_Visited =
                              !selectAll && n.startTime > currentTime ? "no-visited" : "";
                            const visible_line = n.startTime <= currentTime ? "visible" : "";
                            return <li key={index1} className={`${non_Visited} ${visible_line}`} dangerouslySetInnerHTML={{ __html: n.name }} ></li>;
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      );
    }

    return arr;
  };

  render() {
    const { data, caption } = this.props;
    const showCaption = caption ? "toggleHeight" : "";
    const { overClass, ostText, ostClass, visibleChart, showImagedata } = this.state;

    return (
      <>
        <div
          aria-hidden={this.props.overlay}
          //aria-label={this.props.altText && this.props.altText.activityTitle}
          className={`chart-container ${showCaption}`}
          ref={this.ref}
        >
        <div className="sr-only" tabIndex="-1" aria-hidden={this.props.overlay}>{this.props.altText && this.props.altText.activityTitle}</div>
          {visibleChart && this.renderFlowchart(data)}
          {showImagedata ? <div className="graph_data" /> : ""}
          <FadeInOut animation={!overClass} animationState={!overClass} text={ostText} classes={`main-screen-text ${ostClass}`} />
          {/* showImagedata ? <FadeInOut animation={!showImagedata} animationState={!overClass} text={ostText} classes={`main-screen-text ${ostClass}`} /> */}
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
