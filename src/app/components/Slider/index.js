import React, { Component } from "react";
import PropTypes from "prop-types";

export class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      min,
      max,
      step,
      onChange,
      value,
      ariaValueText,
      overlay,
      isMobileDevice,
    } = this.props;
    return (
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={overlay}
        aria-valuenow={value}
        aria-label={ariaValueText}
        aria-valuetext={`${ariaValueText} ${value}`}
        onInput={(e) => onChange(e.target.value)}
        onChange={(e) => onChange(e.target.value)}
        className={overlay ? "disable" : ""}
        style={{ display: isMobileDevice ? "none" : "" }}
      ></input>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
Slider.defaultProps = {
  min: 0,
  max: 1,
  step: 0.1,
  value: 0.5,
  ariaValueText: "",
};
export default Slider;
