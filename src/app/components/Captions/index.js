import React from "react";

const Caption = (props) => {
  const {
    ns,
    caption,
    captionJson,
    currentTime,
    portrait,
    overlay,
    landscape,
    screen,
    audioEnded,
    toc
  } = props;

  const cc = captionJson.filter(
    (e) => e.startTime <= currentTime && e.endTime > currentTime
  )[0];

  const showCaption = caption && currentTime > 0 ? "show" : "hide";
  const classes = portrait ? "portrait" : "landscape";
  return (
    toc != "title" && <div
      aria-hidden={overlay}
      className={`${ns}-caption-container ${showCaption} ${classes} ${screen}`}
    >
      <div
        className="caption-inner"


      > <p dangerouslySetInnerHTML={{ __html: audioEnded ? "" : cc && cc.text }}></p></div>
    </div>
  );
};

export default Caption;
