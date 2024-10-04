import React from "react";
import PropTypes from "prop-types";

const Option = (props) => {
  const {
    index,
    option,
    submitted,
    selectOption,
    selectedOption,
    correctOptionSubmitted,
    overlayState,
  } = props;
  let classes = "";
  const refDesc = `option-desc-${index}`;
  const checked = option.id === selectedOption;
  if (checked && submitted) {
    if (correctOptionSubmitted) {
      classes = "submitted correct";
    } else {
      classes = "submitted incorrect";
    }
  }
  return (
    <div className={`option ${classes}`}>
      <input
        name="mcq"
        type="radio"
        checked={checked}
        aria-labelledby={refDesc}
        disabled={correctOptionSubmitted}
        tabIndex={!index || checked ? "0" : "-1"}
        onChange={(e) => selectOption(option.id)}
        aria-hidden={overlayState ? overlayState : false}
      />
      <div>
        <span aria-hidden="true"></span>
      </div>
      {
        option.label ?
          <span>
            <span
              aria-hidden="true"
              className="option-text"
              dangerouslySetInnerHTML={{
                __html: option.text,
              }}
            ></span>
            <span aria-hidden="true" id={refDesc} className="sr-only" dangerouslySetInnerHTML={{
              __html: option.label,
            }} ></span>
          </span> : <span
            id={refDesc}
            aria-hidden="true"
            className="option-text"
            dangerouslySetInnerHTML={{
              __html: option.text,
            }}
            aria-label={option.label}
          ></span>
      }

    </div>
  );
};

Option.propTypes = {
  index: PropTypes.number.isRequired,
  option: PropTypes.object.isRequired,
  selectOption: PropTypes.func.isRequired,
  selectedOption: PropTypes.any.isRequired,
};

export default Option;
