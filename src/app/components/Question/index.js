import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer.jsx";
import Options from "./options.jsx";

const Question = (props) => {
  return (
    <div className="question-container">
      <div className="question-wrapper">
        {props.question ? (
          <>
            <Header {...props} />
            <Options {...props} />
            <Footer {...props} />
          </>
        ) : null}
      </div>
    </div>
  );
};

Question.propTypes = {};

export default Question;
