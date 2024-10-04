import React from "react";
import PropTypes from "prop-types";

const QuestionMarker = (props) => {
  const {
    ns,
    markers,
    onClick,
    selected,
    question,
    currentTime,
    answeredQuestions,
  } = props;

  const _onClick = (e, marker) => {
    e.stopPropagation();
    onClick(marker);
  };

  const calculatePercentage = (time) => {
    const p = (time / props.duration) * 100;
    return p;
  };

  return (
    <div aria-hidden={props.overlay} className={`${ns}-question-marker`}>
      {markers.map((m) => {
        const active = m.id == selected && question ? "active" : "";
        const left = calculatePercentage(m.activeTimestamp) + "%";
        const visited = answeredQuestions.indexOf(m.id) >= 0 ? "visited" : "";
        return (
          <button
            key={m.id}
            name={m.id}
            title={m.markerTitle}
            aria-label={m.markerLabel}
            disabled={m.id == selected}
            aria-hidden={props.overlay}
            onClick={(e) => _onClick(e, m)}
            tabIndex={props.overlay ? "-1" : ""}
            style={{ left: `calc(${left} - 5px)` }}
            className={`marker ${visited} ${active}`}
          ></button>
        );
      })}
    </div>
  );
};

QuestionMarker.propTypes = {
  onClick: PropTypes.func.isRequired,
  markers: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
  selected: PropTypes.string.isRequired,
  currentTime: PropTypes.number.isRequired,
  answeredQuestions: PropTypes.array.isRequired,
};

export default QuestionMarker;
