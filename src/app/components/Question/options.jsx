import React from "react";
import PropTypes from "prop-types";

import Option from "./option.jsx";
import OptionDescription from "./optionDescription.jsx";

const Options = (props) => {
  const {
    question,
    submitted,
    selectedOption,
    answerResponse,
    correctOptionSubmitted: correct,
  } = props;
  const _answerResponse = correct
    ? answerResponse.correct
    : answerResponse.incorrect;
  return (
    <div className="question-options">
      <ul role="radiogroup" className="options" aria-labelledby="question-text">
        {question &&
          question.options &&
          question.options.map((o, i) => {
            const checked = o.id === selectedOption;
            return (
              <li key={o.id} role="none" className="option-wrapper">
                <Option {...props} index={i} option={o} />
                {checked && submitted && (
                  <OptionDescription
                    correct={correct}
                    description={o.description}
                    answerResponse={_answerResponse}
                  />
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Options.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Options;
