import * as Types from "./Types";
import {
  data,
  questions,
  boundary,
  correctAnswerSequence,
  timestampsForAttempts,
  altText,
} from "../data/config";
export const toggleToc = () => ({ type: Types.TOGGLE_TOC_MENU });
export const toggleMute = (value) => ({ type: Types.TOGGLE_AUDIO_MUTE, value });
export const togglePlay = (value) => ({
  type: Types.TOGGLE_AUDIO_STATE,
  value,
});
export const setCurrentTime = (value) => ({
  value,
  type: Types.SET_AUDIO_CURRENT_TIME,
});

export const thunk = {
  togglePlay: (data) => {
    return (dispatch, getState) => {
      const { playButtonState, audioPlayState, restartState } = getState();

      dispatch(audioAutoPaused(false));
      if (getState().selectedQuestion) {
        dispatch(thunk.onContinueQuestion());
      } else {
        console.log("here");
        if (restartState) {
          console.log("here[if]: ", data);
          dispatch(togglePlay(data));
          dispatch(togglePlayButton(data));
          dispatch(startAudio());
        } else {
          console.log("here[else]");
          dispatch(togglePlayButton(!playButtonState));
        }
      }

      if (data) {
        dispatch(thunk.skipToContent(true));
      }
    };
  },
  toggleMute: (data) => {
    return (dispatch, getState) => {
      dispatch(toggleMute());
    };
  },

  setCurrentTime: (val) => {
    return (dispatch, getState) => {
      const {
        selectedTocItem,
        audioPlayState,
        activeNode,
        tocData,
      } = getState();

      dispatch(setCurrentTime(val));
      dispatch(audioAutoPaused(false));
      const item = getDataItemFromTimestamp(val, tocData);
      if (item && item.id) {
        const tocIds = tocData.map((t) => t.id);
        const index = tocIds.indexOf(item.id);
        dispatch(selectedTocItemIndex(index));
        dispatch(setTocItem(item.id));
      }

      const visitedItem = getVisitedItemData(val, tocData);
      if (visitedItem && visitedItem.length > 0) {
        let visitedArr = [];
        for (let i = 0; i < visitedItem.length; i++) {
          visitedArr.push(visitedItem[i].id);
        }
        dispatch(setVisited(visitedArr));
      }

      if (selectedTocItem && boundary[selectedTocItem]) {
        const _boundary = boundary[selectedTocItem].filter(
          (b) => val >= b.cutoffStartTime && val < b.cutoffEndTime
        );

        if (_boundary && _boundary.length > 0) {
          for (let i = 0; i < _boundary.length; i++) {
            const _boundary_val = _boundary[i];
            if (_boundary_val.hasOwnProperty("oncutoff")) {
              const { oncutoff } = _boundary_val;

              //if (audioPlayState) {

              if (oncutoff.question) {
                const question = questions.filter(
                  (q) => q.id == oncutoff.id
                )[0];
                dispatch(thunk.onQuestionMarkerClick(question));
              } else if (oncutoff.pause) {
                dispatch(togglePlay(false));
                dispatch(togglePlayButton(false));
              } else if (oncutoff.active) {
                const nodes = [...activeNode];

                if (!nodes.includes(oncutoff.id)) {
                  nodes.push(oncutoff.id);
                }
                dispatch(setActive(nodes));
              }
              //}
            }
          }
        } else {
          if (activeNode.length > 0) {
            dispatch(setActive([]));
          }
        }
      }
    };
  },
  getCurrentTime: (val) => {
    return (dispatch, getState) => {
      dispatch(getCurrentTime(val));
    };
  },

  updateAudioVolume: (value) => {
    return (dispatch, getState) => {
      const { audioMuteState } = getState();

      dispatch(updateAudioVolume(value));

      if (value == 0) {
        dispatch(toggleMute(true));
      } else {
        if (audioMuteState) {
          dispatch(toggleMute(false));
        }
      }
    };
  },

  selectPrevFrame: () => {
    return (dispatch, state) => {
      const { selectedTocItem, tocData } = state();
      const tocIds = tocData.map((t) => t.id);
      const index = tocIds.indexOf(selectedTocItem);
      dispatch(audioAutoPaused(false));

      if (index > 0) {
        dispatch(thunk.setToc(tocIds[index - 1]));
        setTimeout(() => {
          dispatch(
            updateLiveMessage(
              altText.frameButton.prev + " " + tocData[index - 1].name
            )
          );
        }, 100);
      }
    };
  },

  selectNextFrame: () => {
    return (dispatch, state) => {
      const { selectedTocItem, tocData } = state();
      const tocIds = tocData.map((t) => t.id);
      const index = tocIds.indexOf(selectedTocItem);
      dispatch(audioAutoPaused(false));

      if (index < tocIds.length - 1) {
        dispatch(thunk.setToc(tocIds[index + 1]));
        setTimeout(() => {
          dispatch(
            updateLiveMessage(
              altText.frameButton.next + " " + tocData[index + 1].name
            )
          );
        }, 100);
      }
    };
  },

  setToc: (id) => {
    return (dispatch, state) => {
      const { tocData } = state();
      const currentTime = tocData.filter((e) => e.id == id)[0].startTime;
      dispatch(setTocItem(id));
      dispatch(audioAutoPaused(false));
      dispatch(setUpdatedCurrentTime(currentTime + 0.01));
      setTimeout(() => {
        dispatch(setUpdatedCurrentTime(currentTime));
      });
      const tocIds = tocData.map((t) => t.id);
      const index = tocIds.indexOf(id);
      dispatch(selectedTocItemIndex(index));
      setTimeout(() => {
        dispatch(selectOption(""));
        dispatch(showQuestion(""));
        dispatch(resetSubmitAnswer());
        dispatch(incorrectAnswerSubmitted());
        dispatch(resetSelectQuestionObject(null));
      });
    };
  },

  onQuestionMarkerClick: (marker) => {
    return (dispatch, getState) => {
      dispatch(togglePlay(false));
      dispatch(togglePlayButton(false));
      //dispatch(toggleAudioCaption());
      dispatch(selectOption(""));
      dispatch(audioAutoPaused(false));
      dispatch(resetSubmitAnswer());
      dispatch(incorrectAnswerSubmitted());
      dispatch(resetSelectQuestionObject(null));
      dispatch(setUpdatedCurrentTime(marker.activeTimestamp + 0.01));
      // setTimeout(() => {
      //   dispatch(setUpdatedCurrentTime(marker.activeTimestamp));
      // });
      dispatch(selectQuestionObject({ ...marker }));
      setTimeout(() => {
        dispatch(showQuestion(marker.id));
      }, 100);
    };
  },

  selectOption: (id) => {
    return (dispatch, getState) => {
      dispatch(selectOption(id));
      dispatch(resetSubmitAnswer());
      dispatch(answerAudioFeedback("selected"));
      setTimeout(() => {
        dispatch(answerAudioFeedback(""));
      }, 10);
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const { question, selectedAnswer, answeredQuestions } = getState();
      dispatch(submitAnswer());
      dispatch(answerAudioFeedback(""));
      if (selectedAnswer == question.correctAnswer) {
        dispatch(correctAnswerSubmitted());
        dispatch(answerAudioFeedback("correct"));
        if (answeredQuestions.indexOf(question.id) == -1) {
          dispatch(answerSubmitted(question.id));
        }
      } else {
        dispatch(incorrectAnswerSubmitted());
        dispatch(answerAudioFeedback("incorrect"));
      }
    };
  },

  onContinueQuestion: () => {
    return (dispatch, getState) => {
      const { question } = getState();
      dispatch(showQuestion(""));
      dispatch(selectOption(""));
      dispatch(resetSubmitAnswer());
      dispatch(incorrectAnswerSubmitted());
      dispatch(resetSelectQuestionObject(null));
      dispatch(thunk.setUpdatedCurrentTime(question.onContinueTimestamp));
      dispatch(togglePlay(true));
      dispatch(togglePlayButton(true));
    };
  },

  setUpdatedCurrentTime: (time) => {
    return (dispatch, state) => {
      const { tocData } = state();
      dispatch(audioAutoPaused(false));
      dispatch(setUpdatedCurrentTime(time));
      dispatch(showQuestion(""));
      dispatch(selectOption(""));
      dispatch(resetSubmitAnswer());
      dispatch(incorrectAnswerSubmitted());
      dispatch(resetSelectQuestionObject(null));
      dispatch(setRestartButtonState(true));
      const item = getDataItemFromTimestamp(time, tocData);
      if (item && item.id) {
        const tocIds = tocData.map((t) => t.id);
        const index = tocIds.indexOf(item.id);
        dispatch(selectedTocItemIndex(index));
        dispatch(setTocItem(item.id));
      }
    };
  },

  onButtonClick: (object) => {
    return (dispatch, getState) => {
      const { key, branch } = object;
      if (timestampsForAttempts[branch]) {
        const { answersRecorded, visitedNode, audioCurrentTime } = getState();

        const attemptObject = { ...timestampsForAttempts[branch] };

        setTimeout(() => {
          dispatch(updateLiveMessage(key + " selected"));
        }, 100);
        let length = 0;
        if (attemptObject) {
          const isButtonVisited = visitedNode.filter((item) =>
            correctAnswerSequence[branch].includes(item)
          );

          if (isButtonVisited && isButtonVisited.length > 0) {
            length = isButtonVisited.length;
          } else {
            if (
              answersRecorded[branch] &&
              answersRecorded[branch].includes(key)
            ) {
              answersRecorded[branch].splice(
                answersRecorded[branch].indexOf(key),
                1
              );
            } else {
              if (answersRecorded[branch]) {
                length = answersRecorded[branch].length;
              }

              if (
                timestampsForAttempts[branch][length][key] > audioCurrentTime &&
                answersRecorded[branch] &&
                answersRecorded[branch].length > 0
              ) {
                answersRecorded[branch].length = 0;
                length = 0;
              }
            }

            // if (answersRecorded[branch] && answersRecorded[branch].length) {

            // }
          }

          const _attemptObject = attemptObject[length];
          const time = _attemptObject[key];
          if (correctAnswerSequence[branch][length] == key) {
            // correct attempt, answer matched

            dispatch(onInteractiveSectionButtonClick({ ...object }));
            dispatch(recordedAnswer({ ...object }));
          }
          dispatch(thunk.setUpdatedCurrentTime(time - 0.001));
          setTimeout(() => {
            dispatch(thunk.setUpdatedCurrentTime(time));
            dispatch(togglePlay(true));
            dispatch(togglePlayButton(true));
          });
        }
      }
    };
  },

  restartAudio: () => {
    return (dispatch, getState) => {
      dispatch(thunk.setUpdatedCurrentTime(0.11));

      const to = setTimeout(() => {
        clearTimeout(to);
        dispatch(thunk.setUpdatedCurrentTime(0.1));
        dispatch(togglePlay(true));
        dispatch(togglePlayButton(true));
        setTimeout(() => {
          dispatch(updateLiveMessage(altText.restart));
        }, 100);
      });
    };
  },

  skipToContent: (status) => {
    return (dispatch) => {
      dispatch(skipToContent(status));
      setTimeout(() => {
        dispatch(skipToContent(false));
      }, 300);
    };
  },

  toggleOverlay: () => {
    return (dispatch, state) => {
      const { restartState } = state();
      if (!restartState) {
        dispatch(thunk.togglePlay(true));
        dispatch(togglePlayButton(true));
      }
      dispatch(toggleOverlay());
    };
  },
};

const getDataItemFromTimestamp = (timestamp, tocData) => {
  const item = tocData.filter(
    (e) => e.startTime <= timestamp && e.endTime >= timestamp
  )[0];
  return item;
};

const getVisitedItemData = (timestamp, tocData) => {
  const item = tocData.filter((e) => e.endTime < timestamp);
  return item;
};

export const setTocItem = (value) => ({
  type: Types.SELECT_TOC_ITEM,
  value,
});

export const selectedTocItemIndex = (index) => ({
  index,
  type: Types.SELECTED_TOC_ITEM_INDEX,
});

export const widthChange = (data) => ({ type: Types.WIDTH_CHANGE, data });

export const getDuration = (duration) => ({
  duration,
  type: Types.GET_DURATION,
});

export const audioEnded = () => ({ type: Types.AUDIO_ENDED });

export const updateAudioVolume = (value) => ({
  value,
  type: Types.UPDATE_AUDIO_VOLUME,
});

export const setUpdatedCurrentTime = (value) => ({
  value,
  type: Types.UPDATE_CURRENT_TIME,
});

export const startAudio = () => ({ type: Types.START_AUDIO });
export const showQuestion = (id) => ({ id, type: Types.SHOW_QUESTION });

export const selectOption = (id) => ({
  id,
  type: Types.SELECT_QUESTION_OPTION,
});
export const submitAnswer = () => ({ type: Types.ANSWER_SUBMITTED });
export const resetSubmitAnswer = () => ({
  type: Types.RESET_ANSWER_SUBMITTED,
});
export const correctAnswerSubmitted = () => ({
  type: Types.CORRECT_ANSWER_SUBMITTED,
});
export const incorrectAnswerSubmitted = () => ({
  type: Types.INCORRECT_ANSWER_SUBMITTED,
});
export const selectQuestionObject = (question) => ({
  question,
  type: Types.SELECT_QUESTION_OBJECT,
});
export const resetSelectQuestionObject = () => ({
  type: Types.RESET_SELECT_QUESTION_OBJECT,
});
export const onInteractiveSectionButtonClick = (object) => ({
  object: { ...object },
  type: Types.ON_INTERACTIVE_SECTION_BUTTON_CLICK,
});

export const setRestartButtonState = (value) => ({
  type: Types.SET_RESTART,
  value,
});

export const recordedAnswer = (answer) => ({
  type: Types.RECORD_CORRECT_ANSWER,
  answer,
});

export const setActive = (node) => ({
  type: Types.ACTIVE_NODE,
  node,
});

export const setVisited = (node) => ({
  type: Types.VISITED_NODE,
  node,
});

export const skipToContent = (skipContent) => {
  return {
    skipContent,
    type: Types.SKIP_TO_CONTENT,
  };
};

export const answerSubmitted = (key) => ({
  key,
  type: Types.QUESTION_CORRECTLY_ANSWERED,
});

export const toggleAudioCaption = () => ({
  type: Types.AUDIO_CAPTION,
});

export const answerAudioFeedback = (audioType) => ({
  audioType,
  type: Types.SELECTED_ANSWER_AUDIO_FEEDBACK,
});

export const updateLiveMessage = (message) => ({
  type: Types.SET_LIVE_MESSAGE,
  message,
});

export const toggleOverlay = () => ({ type: Types.TOGGLE_OVERLAY });

export const togglePlayButton = (value) => ({
  type: Types.PLAY_BUTTON_STATE,
  value,
});

export const orientationChange = (orientation) => ({
  orientation,
  type: Types.ACTIVITY_ORIENTATION_CHANGED,
});

export const audioAutoPaused = (autoPaused) => ({
  autoPaused,
  type: Types.AUDIO_AUTO_PAUSED,
});

export const isMobileDevice = (deviceType) => ({
  deviceType,
  type: Types.CHECK_DEVICE_TYPE,
});
