import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { set } from "lodash";

const Header = (props) => {
  const ref = useRef(null);
  const timerRef = useRef(null);
  const questioRef = useRef(null)
  const {
    header,
    question: { text, questionLabel: label },
    overlayState,
    correctOptionSubmitted,
    submitted
  } = props;

  useEffect(() => {
    if (ref && ref.current && props.question) {
      timerRef.current = setTimeout(() => {
        clearTimeout(timerRef.current);

        timerRef.current = null;
        try {
          const header = ref.current.querySelector(".q-heading");
          if (header) {
            header.focus();
          }
        } catch (error) {
          console.warn("error", error);
        }
      }, 100);
    }

    if (!props.question) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [props.question]);

  useEffect(() => {
    return () => {
      if (!props.question) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }
    };
  }, []);

  useEffect(() => {
    if (props.skipToContent) {
      console.log("skipcontent Called");
      if (ref && ref.current) {
        setTimeout(() => {
          const header = ref.current.querySelector(".q-heading");
          if (header) {
            header.focus();
          }
        }, 100);
      }
    }
  }, [props.skipToContent]);


  // useEffect(() => {
  //   if (!correctOptionSubmitted && submitted) {
  //     setTimeout(() => {
  //       questioRef && questioRef.current.focus()
  //     }, 2500)
  //   }
  // }, [correctOptionSubmitted, submitted])

  return (
    <div
      className="question-header"
      ref={ref}
      aria-hidden={overlayState ? overlayState : false}
    >
      {/* <h1 tabIndex="-1">{header}</h1> */}
      {label ? <div>
        <h2 id="question-text" ref={questioRef} className="sr-only q-heading"
          tabIndex="-1" aria-label={ label }></h2>
        <h2
          className="question-text-wrapper"
          dangerouslySetInnerHTML={{ __html: text }}
          aria-hidden="true"
        ></h2>
      </div> : <h2
        id="question-text"
        // aria-label={label || text}
        className="question-text-wrapper q-heading"
        dangerouslySetInnerHTML={{ __html: text }}
        ref={questioRef}
        tabIndex="-1"
      ></h2>}

      {props.question && props.question.tabularData ? (
        <div
          dangerouslySetInnerHTML={{ __html: props.question.tabularData }}
        ></div>
      ) : null}
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
};

export default Header;
