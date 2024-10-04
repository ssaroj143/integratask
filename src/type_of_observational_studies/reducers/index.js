import { combineReducers } from "redux";
import * as Types from "../actions/Types";
import { defaultTocItem, tocJsonData } from "../data/config";
const initialState = {
  currentTime: 0,
  play: false,
  mute: false,
  volume: 0.5,
};

const tocMenuToggled = (state = false, { type, value }) => {
  switch (type) {
    case Types.TOGGLE_TOC_MENU:
      return value;
    default:
      return state;
  }
};

const audioCurrentTime = (
  state = initialState.currentTime,
  { type, value }
) => {
  switch (type) {
    case Types.SET_AUDIO_CURRENT_TIME:
      return value;
    default:
      return state;
  }
};

const audioPlayState = (state = initialState.play, { type, value }) => {
  switch (type) {
    case Types.TOGGLE_AUDIO_STATE:
      return value;
    default:
      return state;
  }
};

const audioMuteState = (state = initialState.mute, { type, value }) => {
  switch (type) {
    case Types.TOGGLE_AUDIO_MUTE:
      return value;
    default:
      return state;
  }
};

const selectedTocItem = (state = defaultTocItem, { type, value }) => {
  switch (type) {
    case Types.SELECT_TOC_ITEM:
      return value;
    default:
      return state;
  }
};

const widthChange = (state = {}, action) => {
  switch (action.type) {
    case Types.WIDTH_CHANGE:
      console.log(action.type);
      return { ...action.data };
    default:
      return state;
  }
};

const audioDuration = (state = 0, { type, duration }) => {
  switch (type) {
    case Types.GET_DURATION:
      return duration;
    default:
      return state;
  }
};

const audioEnded = (state = false, { type, value }) => {
  switch (type) {
    case Types.AUDIO_ENDED:
      return value;
    default:
      return state;
  }
};

export const audioVolume = (state = initialState.volume, { type, value }) => {
  switch (type) {
    case Types.UPDATE_AUDIO_VOLUME:
      return Number(value);
    default:
      return state;
  }
};

export const updatedCurrentTime = (state = 0, { type, value }) => {
  switch (type) {
    case Types.UPDATE_CURRENT_TIME:
      return value;
    default:
      return state;
  }
};

export const startAudio = (state = false, { type }) => {
  switch (type) {
    case Types.START_AUDIO:
      return true;
    default:
      return state;
  }
};
export const selectedQuestion = (state = "", { type, id }) => {
  switch (type) {
    case Types.SHOW_QUESTION:
      return id;
    default:
      return state;
  }
};

export const selectedTocItemIndex = (state = 0, { type, index }) => {
  switch (type) {
    case Types.SELECTED_TOC_ITEM_INDEX:
      return index;
    default:
      return state;
  }
};

export const selectedAnswer = (state = "", { type, id }) => {
  switch (type) {
    case Types.SELECT_QUESTION_OPTION:
      return id;
    default:
      return state;
  }
};

export const answerSubmitted = (state = false, { type }) => {
  switch (type) {
    case Types.ANSWER_SUBMITTED:
      return true;
    case Types.RESET_ANSWER_SUBMITTED:
      return false;
    default:
      return state;
  }
};

export const correctOptionSubmitted = (state = false, { type }) => {
  switch (type) {
    case Types.CORRECT_ANSWER_SUBMITTED:
      return true;
    case Types.INCORRECT_ANSWER_SUBMITTED:
      return false;
    default:
      return state;
  }
};

export const question = (state = null, { type, question }) => {
  switch (type) {
    case Types.SELECT_QUESTION_OBJECT:
      return { ...question };
    case Types.RESET_SELECT_QUESTION_OBJECT:
      return null;
    default:
      return state;
  }
};

export const answersRecorded = (state = {}, { type, answer }) => {
  switch (type) {
    case Types.RECORD_CORRECT_ANSWER:
      const _state = { ...state };

      if (_state[answer.branch]) {
        _state[answer.branch] = [..._state[answer.branch], answer.key];
      } else {
        _state[answer.branch] = [answer.key];
      }

      return _state;
    default:
      return state;
  }
};

const restartState = (state = false, { type, value }) => {
  switch (type) {
    case Types.SET_RESTART:
      return value;
    default:
      return state;
  }
};

const activeNode = (state = [], { type, node }) => {
  switch (type) {
    case Types.ACTIVE_NODE:
      return node;
    default:
      return state;
  }
};

const tocData = (state = tocJsonData, { type, value }) => {
  switch (type) {
    case Types.TOC_DATA:
      const _state = [...tocData, value];
      return _state;
    default:
      return state;
  }
};

const visitedNode = (state = [], { type, node }) => {
  switch (type) {
    case Types.VISITED_NODE:
      return node;
    default:
      return state;
  }
};

const skipToContent = (state = false, { type, skipContent }) => {
  switch (type) {
    case Types.SKIP_TO_CONTENT:
      return skipContent;
    default:
      return state;
  }
};

const answeredQuestions = (state = [], { type, key }) => {
  switch (type) {
    case Types.QUESTION_CORRECTLY_ANSWERED:
      const _state = [...state, key];
      return _state;
    default:
      return state;
  }
};

const toggleCaptionState = (state = false, { type }) => {
  switch (type) {
    case Types.AUDIO_CAPTION:
      return !state;
    default:
      return state;
  }
};

const feedbackAudioType = (state = "", { type, audioType }) => {
  switch (type) {
    case Types.SELECTED_ANSWER_AUDIO_FEEDBACK:
      return audioType;
    default:
      return state;
  }
};

const liveMessage = (state = "", { type, message }) => {
  switch (type) {
    case Types.SET_LIVE_MESSAGE:
      return message;
    default:
      return state;
  }
};

const overlayState = (state = true, { type }) => {
  switch (type) {
    case Types.TOGGLE_OVERLAY:
      return !state;
    default:
      return state;
  }
};

const playButtonState = (state = false, { type, value }) => {
  switch (type) {
    case Types.PLAY_BUTTON_STATE:
      return value;
    default:
      return state;
  }
};
const activityOrientation = (state = "", { type, orientation }) => {
  switch (type) {
    case Types.ACTIVITY_ORIENTATION_CHANGED:
      return orientation;
    default:
      return state;
  }
};

const audioAutoPaused = (state = false, { type, autoPaused }) => {
  switch (type) {
    case Types.AUDIO_AUTO_PAUSED:
      return autoPaused;
    default:
      return state;
  }
};

const isMobileDevice = (state = false, { type, deviceType }) => {
  switch (type) {
    case Types.CHECK_DEVICE_TYPE:
      return deviceType;
    default:
      return state;
  }
};

const attemptedFlowchartPath = (state = "", { type, key }) => {
  switch (type) {
    case Types.ATTEMPTED_FLOWCHART_PATH:
      return key;
    default:
      return state;
  }
};

const audioCurrentTimeChanged = (state = false, { type, value }) => {
  switch (type) {
    case Types.AUDIO_CURRENT_TIME_CHANGED:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  tocMenuToggled,
  audioCurrentTime,
  audioMuteState,
  audioPlayState,
  selectedTocItem,
  widthChange,
  audioDuration,
  audioEnded,
  audioVolume,
  updatedCurrentTime,
  startAudio,
  selectedQuestion,
  selectedTocItemIndex,
  selectedAnswer,
  answerSubmitted,
  correctOptionSubmitted,
  question,
  answersRecorded,
  restartState,
  activeNode,
  tocData,
  visitedNode,
  skipToContent,
  answeredQuestions,
  toggleCaptionState,
  feedbackAudioType,
  liveMessage,
  overlayState,
  playButtonState,
  activityOrientation,
  audioAutoPaused,
  isMobileDevice,
  attemptedFlowchartPath,
  audioCurrentTimeChanged,
});
