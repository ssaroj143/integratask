import React, { useEffect, useRef } from "react";
import { svgImages } from "../../data/svgJson";
const OverlayScreen = (props) => {
  const { ns, toggleOverlay, overlay } = props;
  const ref = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    setFocus()
  }, []);

  useEffect(() => {
    overlay && setFocus()
  }, [overlay])
  const setFocus = () => {
    if (ref && ref.current) {
      toRef.current = setTimeout(() => {
        const button = ref.current.querySelector("body button");
        if (button) {
          clearTimeout(toRef.current);
          button.focus();
        }
      }, 400);
    }

    return () => {
      clearTimeout(toRef.current);
    };
  }
  const overlayClasses = overlay ? "show" : "hide";
  const mobileView = props.isMobileDevice ? "mobile-view" : "";
  return (
    <div ref={ref} className={`${ns}-overlay-container ${overlayClasses}`}>
      <div className="header">
        <div className="logo"></div>
        <div className="toc-container" aria-hidden="true">
          <div
            className="toc-arrow"
            dangerouslySetInnerHTML={{ __html: svgImages.tocArrow }}
            role="img"
            tabIndex="-1"
          ></div>
          <span aria-hidden="true" aria-label="Table of Contents" tabIndex="0">Table of Contents</span>
        </div>
        <div className="right-container">
          {/* <div className="pdf">
            <span>Download PDF</span>
            <div dangerouslySetInnerHTML={{ __html: svgImages.pdfArrow }}></div>
          </div> */}
          <div className="help">
            <span aria-hidden="true" aria-label="help" tabIndex="0">Help</span>
            <div
              dangerouslySetInnerHTML={{ __html: svgImages.infoArrow }}
            ></div>
          </div>
        </div>
      </div>
      <div className="body">
        <div onClick={toggleOverlay} className="start-activity">
          {props.children}
        </div>
      </div>
      <div className="footer">
        <div className="restart-section">
          <span aria-hidden="true" aria-label="Restart Flowchart" tabIndex="0" >Restart Flowchart</span>
          <div
            role="img"
            dangerouslySetInnerHTML={{ __html: svgImages.restartArrow }}
            tabIndex="-1"
            aria-hidden="true"
          ></div>
        </div>
        <div className="question-marker">
          <div className="quiz-section">
            <span aria-hidden="true" aria-label="Quiz" tabIndex="0">Quiz</span>
            <div
              className="arrow"
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.quizArrow }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
            <div
              className="icon"
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.quizIcon }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <div className="play-controls">
          <div className="prev-section">
            <span aria-hidden="true" aria-label="Previous Step" tabIndex="0" >Previous Step</span>
            <div
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.prevArrow }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
          </div>
          <div className="rewind-section">
            <span aria-hidden="true" aria-label="Move backward 10 seconds" tabIndex="0" >Move backward 10 seconds</span>
            <div
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.rewindArrow }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
          </div>
          <div className="pause-section">
            <span aria-hidden="true" aria-label="Play/Pause" tabIndex="0">Play/Pause</span>
            <div
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.pauseArrow }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
          </div>
          <div className="forward-section">
            <span aria-hidden="true" aria-label="Move forward 10 seconds" tabIndex="0" >Move forward 10 seconds</span>
            <div
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.forwardArrow }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
          </div>
          <div className="next-section">
            <span aria-hidden="true" aria-label="Next Step" tabIndex="0">Next Step</span>
            <div
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.nextArrow }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <div className={`audio-controls ${mobileView}`}>
          <div className="caption-section">
            <span aria-hidden="true" aria-label="Closed Captions" tabIndex="0">Closed Captions</span>
            <div role="img" dangerouslySetInnerHTML={{ __html: svgImages.ccArrow }} tabIndex="-1"
              aria-hidden="true" ></div>
          </div>
          <div className={`volume-section`}>
            <span aria-hidden="true" aria-label="Volume Control" tabIndex="0">Volume Control</span>
            <div
              role="img"
              dangerouslySetInnerHTML={{ __html: svgImages.volumeControlArrow }}
              tabIndex="-1"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayScreen;
