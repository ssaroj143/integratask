import React, { Component } from "react";
import { responsiveDrag, responsiveDrop } from "../../helpers/jquery";

class ScalableWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      scale: null,
      leftWidth: null,
      leftHeight: null,
      childWidth: null,
      childHeight: null,
      browserSupportCSSZoomProperty: false,
    };
    this.timeout = '';
  }

  componentDidMount() {
    const screen = this.props.widthChange;
    const browserSupportCSSZoomProperty = this.checkCSSZoomProperty("zoom");
    this.setState(
      {
        opacity: 0,
        browserSupportCSSZoomProperty,
      },
      () => {
        this.calculateScale(screen);
      }
    );
  }

  checkCSSZoomProperty = (cssProperty) => {
    const element = document.createElement("div");
    return cssProperty in element.style;
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    const screen = newProps.widthChange;
    console.log("newProps", newProps)

    if (
      newProps.widthChange.windowSize !== this.props.widthChange.windowSize ||
      newProps.widthChange.windowHeight !== this.props.widthChange.windowHeight ||
      this.props.activityOrientation !== newProps.activityOrientation
    ) {
      this.updateState(screen);
    } else {
      this.updateState(screen);
    }
    if (this.props.activityOrientation !== newProps.activityOrientation) {
    }
  }

  updateState = (screen) => {
    if (this.timeout)
      clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      this.calculateScale(screen);
    }, 300);
  };

  calculateScale = (screen) => {
    const { browserSupportCSSZoomProperty } = this.state;
    const { zoomProps, width } = this.props;
    this.scaleWrapperRef.style.width = "";
    this.scaleWrapperRef.style.height = "";
    this.scaleWrapperRef.style.transform = "";

    this.scaleWrapperContainerRef.style.width = "";
    this.scaleWrapperContainerRef.style.height = "";
    setTimeout(() => {
      console.log("width[screen.breakpoint]", width[screen.breakpoint], screen.breakpoint)
      const parentWidth = this.activityScaleWrapperContainerRef.clientWidth;
      const parentHeight = this.activityScaleWrapperContainerRef.clientHeight;
      const childWidth = this.scaleWrapperRef.children[0].clientWidth + 20 + width[screen.breakpoint];//125 + 17 +
      const childHeight = this.scaleWrapperRef.children[0].clientHeight + 20 //;+ width[screen.breakpoint]; //125 + 17;
      const scaleX = parentWidth / childWidth;
      const scaleY = parentHeight / childHeight;
      var scale = Math.min(scaleX, scaleY);
      // console.log("widthChange", parentWidth, parentHeight, childWidth, childHeight, scale)

      let leftWidth = childWidth * scale;
      let leftHeight = childHeight * scale;

      if (screen.orientation === "portrait") {
        if (!this.props.portraitScale) {
          scale = 1;
        }
      }

      this.scaleWrapperRef.style.width = childWidth + "px";
      this.scaleWrapperRef.style.height = childHeight + "px";
      console.log("..........................................")
      if (browserSupportCSSZoomProperty && navigator.userAgent.indexOf("Chrome") !== -1 && zoomProps) {
        this.scaleWrapperRef.style.zoom = scale;
        //this.scaleWrapperRef.style.transform = `scale(${scale})`;
      } else {
        this.scaleWrapperRef.style.transform = `scale(${scale})`;

      }


      this.scaleWrapperContainerRef.style.width = leftWidth + "px";
      this.scaleWrapperContainerRef.style.height = leftHeight + "px";
      // this.setState({
      //   // opacity: 0,
      //   scale: null,
      //   leftWidth: null,
      //   leftHeight: null,
      //   childWidth: null,
      //   childHeight: null,

      // });
      this.setState({
        scale,
        leftWidth,
        leftHeight,
        childWidth,
        childHeight,

      });

      responsiveDrag(scale);
      responsiveDrop(scale);
    })
  };

  render() {
    const { ns, classes, children } = this.props;
    const { scale,
      leftWidth,
      leftHeight,
      childWidth,
      childHeight,
    } = this.state
    // const parentStyle = {
    //   height: leftHeight,
    //   width: leftWidth,
    //   "position": "relative",
    //   "display": "block",
    //   "margin": "0 auto",
    // }
    // const childStyle = {
    //   "margin": "0 auto",
    //   "position": "relative",
    //   "left": "0",
    //   "top": "0",
    //   "transformOrigin": "left top",
    //   "display": "inline-block",
    //   height: childHeight,
    //   width: childWidth,
    //   transform: `scale(${scale})`,
    // }
    return (
      <div
        className={`${ns}-scalable-wrapper-container ${classes}`}
        ref={(div) => {
          this.activityScaleWrapperContainerRef = div;
        }}
      >
        <div
          ref={(div) => {
            this.scaleWrapperContainerRef = div;
          }}
          className="scalable-wrapper-container"
          style={{
            "position": "relative",
            "display": "block",
            "margin": "0 auto",
          }}
        // style={parentStyle}
        >
          <div
            ref={(div) => {
              this.scaleWrapperRef = div;
            }}
            className="scalable-wrapper-inner"
            style={{
              "margin": "0 auto",
              "position": "relative",
              "left": "0",
              "top": "0",
              "transformOrigin": "left top",
              "display": "inline-block"
            }}
          // style={childStyle}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

ScalableWrapper.defaultProps = {
  portraitScale: true,
  zoomProps: true,
  width: {
    small: 0,
    medium: 0,
    large: 0,
    extralarge: 0,
    extraSmall:0,
  }
};

export default ScalableWrapper;
