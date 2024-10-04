import React from "react";

const PDFDownloader = (props) => {
  const { classes, disabled, label } = props;

  return (
    <a
      role="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      className={classes}
      href={props.pdfDocument}
      download={`${props.pdfTitle}.${ext}`}
    ></a>
  );
};

export default PDFDownloader;
