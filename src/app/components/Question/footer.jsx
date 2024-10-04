import React,{ useEffect,useRef }  from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  const {
    submitted,
    onContinue,
    submitAnswer,
    selectedOption,
    submitButtonText,
    continueButtonText,
    correctOptionSubmitted,
    overlayState,
  } = props;

  const disableSubmitButton = submitted || !selectedOption;
  const buttonRef = useRef(null);

  // useEffect(() => {
  //   if(correctOptionSubmitted){
  //     setTimeout(()=>{
  //       buttonRef && buttonRef.current.focus()
  //     },2500)
  //   }
  
  // }, [correctOptionSubmitted]);
  return (
    <div className="question-footer">
      <button
        type="button"
        onClick={submitAnswer}
        title={submitButtonText}
        className="button-submit"
        disabled={disableSubmitButton}
        tabIndex={overlayState ? -1 : 0}
        aria-hidden={overlayState ? overlayState : false}
      >
        {submitButtonText}
      </button>
      {correctOptionSubmitted && (
        <button
          type="button"
          onClick={onContinue}
          className="button-continue"
          title={continueButtonText}
          tabIndex={overlayState ? -1 : 0}
          aria-hidden={overlayState ? overlayState : false}
          ref= {buttonRef}
        >
          {continueButtonText}
        </button>
      )}
    </div>
  );
};

Footer.propTypes = {
  onContinue: PropTypes.func.isRequired,
  submitAnswer: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  continueButtonText: PropTypes.string.isRequired,
  correctOptionSubmitted: PropTypes.bool.isRequired,
};

export default Footer;
