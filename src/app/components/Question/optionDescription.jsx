import PropType from "prop-types";
import React, { useEffect, useRef } from "react";

const OptionDescription = (props) => {
  const ref = useRef(null);
  const { answerResponse, correct, description } = props;
  const classes = `option-description ${correct ? "correct" : "incorrect"}`;

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (ref && ref.current) {
  //       // console.log("ref.current==>",ref.current.children[0])
  //       // const paragraph = ref.current.querySelector("p");
  //       if (paragraph) {
  //         // paragraph.focus();
  //       }
  //     }
  //   }, 100);
  // }, []);

  return (
    <div className={classes}>
      <div className="correct-incorrect-logo"></div>
      <div className="description-text" ref={ref} role="alert">
        <p>{answerResponse}</p>
        {description ? (
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        ) : null}
      </div>
    </div>
  );
};

OptionDescription.propTypes = {
  correct: PropType.bool.isRequired,
  description: PropType.any.isRequired,
  answerResponse: PropType.string.isRequired,
};

export default OptionDescription;
