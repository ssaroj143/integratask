import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { findKey } from "lodash";

class ResponsiveWrapper extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = null;
    this.state = {
      breakpoint: "",
      orientation: "landscape",
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    window.onresize = () => {
      this.adjustForContainerSize();
    };
    this.adjustForContainerSize();
  }

  getBreakpoint() {
    const { breakpoints } = this.props;
    const containerSize = this.getContainerSize();
    const breakpoint =
      breakpoints &&
      findKey(breakpoints, (ar) => {
        const firstPass = containerSize >= ar[0];
        return firstPass && (ar[1] === "~" || containerSize <= ar[1]);
      });
    return breakpoint || "";
  }

  getWindowSize() {
    return window.innerWidth;
  }

  getContainerSize() {
    return this.wrapperRef.clientWidth;
  }

  getWindowHeight() {
    return window.innerHeight;
  }

  getContainerHeight() {
    return this.wrapperRef.clientHeight;
  }

  getOrientation() {
    return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      if (this.state.orientation !== prevState.orientation) {
        this.props.onOrientationChange &&
          this.props.onOrientationChange(this.state.orientation);
      }
    }
  }

  adjustForContainerSize() {
    const orientation = this.getOrientation();
    const breakpoint = this.getBreakpoint();
    const containerSize = this.getContainerSize();
    const windowSize = this.getWindowSize();
    const containerHeight = this.getContainerHeight();
    const windowHeight = this.getWindowHeight();

    this.props.onResize({
      orientation,
      breakpoint,
      containerSize,
      containerHeight,
      windowSize,
      windowHeight,
    });
    this.setState({
      orientation,
      breakpoint,
    });

    return containerSize;
  }

  render() {
    const { ns, children } = this.props;
    const appClasses = classnames(
      ns,
      `${ns}-responsive-wrapper`,
      this.state.orientation,
      this.state.breakpoint
    );

    return (
      <div
        className={appClasses}
        ref={(el) => {
          this.wrapperRef = el;
        }}
      >
        {children}
      </div>
    );
  }
}

ResponsiveWrapper.propTypes = {
  onResize: PropTypes.func,
  children: PropTypes.object,
  breakpoints: PropTypes.object,
  ns: PropTypes.string.isRequired,
};

ResponsiveWrapper.defaultProps = {
  ns: "",
  children: {},
  breakpoints: {},
  onResize: () => {},
};

export default ResponsiveWrapper;
