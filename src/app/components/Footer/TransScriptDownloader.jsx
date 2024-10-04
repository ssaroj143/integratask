import React from "react";

const TransScriptDownloader = (props) => {
  const { classes, disabled, label,ext ,icon} = props;

  return (
    <a
      role="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      className={classes}
      href={props.transcriptDocument}
      download={`${props.transcriptTitle}.${ext}`}
      
    ></a>
  );
};

export default TransScriptDownloader;
