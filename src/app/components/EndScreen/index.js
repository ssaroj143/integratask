import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

const endScreen = (props) => {
  const ref = useRef(null);
  const {
    selectedToc,
    ns,
    restartAudio,
    setToc,
    togglePlay,
    caption,
    overlay,
    updateLiveMessage,
    altText,
  } = props;

 
  const endScreenClass = selectedToc ? "show" : "hide";
  const toggleHeight = caption ? "toggleHeight" : "";


  const sendFocusToHeader = (check) => {
    if (check) {
      if (ref && ref.current) {
        const h4 = ref.current.querySelector("h2");
        if (h4) {
          h4.tabIndex = "-1";
          h4.focus();
        }
      }
    }
  };

  useEffect(() => {
    sendFocusToHeader(props.skipToContent);
  }, []);

  useEffect(() => {
    sendFocusToHeader(props.skipToContent);
  }, [props.skipToContent]);


  return (
    <div
      ref={ref}
      aria-hidden={overlay}
      className={`${ns}-end-screen-container ${endScreenClass} ${toggleHeight}`}
    >
      <div className="end-screen-inner-container">
        <div className="success-message">
          <h2>Success!</h2>
          <p>You have reached the end of the interactive flowchart.</p>
        </div>
        <div className="restart">
          <button
            title="start again"
            onClick={restartAudio}
            aria-label="start-again"
            tabIndex={overlay ? -1 : 0}
            className='start-again'
            
          >
            <span className="icon" aria-hidden="true"></span>
            <span>Start Again</span>
          </button>
        </div>
      </div>
    </div>
  );
};

endScreen.propTypes = {
  selectedToc: PropTypes.bool.isRequired,
  skipToContent: PropTypes.bool.isRequired,
};

export default endScreen;
