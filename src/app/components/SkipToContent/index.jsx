import React from "react";
import PropTypes from "prop-types";

const SkipToContent = (props) => {
  const { label, onClick, overlay } = props;
  return (
    <a
      href="#"
      onClick={onClick}
      aria-hidden={overlay}
      className="skip-to-content"
      tabIndex={overlay ? -1 : 0}
    >
      {label}
    </a>
  );
};

SkipToContent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SkipToContent;
