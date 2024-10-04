import React, { useEffect, useRef } from "react";

const ActivityTitle = (props) => {
  const ref = useRef(null);
  const { title, overlay, selectedToc, altText, altTitle } = props;
  const titleClass = selectedToc ? "show" : "hide";
  useEffect(() => {
    // console.log("selectedToc->", selectedToc)
    if (ref && ref.current) {
      if (titleClass == "show" && props.skipToContent) {
        ref.current.focus();
      }
    }
  }, [props.skipToContent]);

  return (
    <div aria-hidden={overlay} className={`flowchart-title ${titleClass}`}>
      <div className="logo" role="img" aria-label={altText}></div>
      <p ref={ref} tabIndex="-1" className="author-details">
        Mario F. Triola
      </p>
      {altTitle?<h1
        className="chart-title"
        dangerouslySetInnerHTML={{ __html: title }}
        aria-label={altTitle}
      ></h1>:<h1
      className="chart-title"
      dangerouslySetInnerHTML={{ __html: title }}      
    ></h1>}      
    </div>
  );
};

ActivityTitle.defaultProps = {
  interval: 4000,
  altText: "",
};
export default ActivityTitle;
