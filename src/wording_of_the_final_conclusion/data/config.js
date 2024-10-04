import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/wording_of_final_conclusion.mp3";
import pdf from "../assets/documents/document.pdf";
import textFile from "../assets/documents/texfile.docx";

import leftSectionText from "./leftSectionText";

export const audioSrc = audio;
export const pdfDocument = pdf;
export const captionJson = captions;
export const onScreenText = ostText;
export const tocJsonData = tocItems;
export const boundary = boundariesData;
export const transcript = textFile;
export const leftSectionData = leftSectionText;

export const defaultTocItem = "title";

export const answerResponse = {
  correct: "This option is correct.",
  incorrect: "This option is incorrect.",
};

export const questionTopHeading = "Question";
export const continueButtonText = "Continue";
export const submitButtonText = "Submit Answer";

export const hideTimeStamp = [
  {
    startTime: 284.846406,
    endTime: 290.079866,
  }
]



export const timestampsForAttempts = {
  condition1: [
    {
      id: "example1",
      startTime: 59.494762,
      endTime: 76.973947,
      "no": 76.973947,
      "yes": 63.119561,
      // "two-tailed": 62.835782,
      correct: "no" // key 

    },
    {
      id: "example2",
      startTime: 176.289086,
      endTime: 200.546909,
      // "two-tailed": 201.530665,
      "yes": 200.246909,
      "no": 180.687066,
      correct: "yes"
    }
  ]

};

export const correctAnswerSequence = {
  condition1: ["right-tailed", "left-tailed", "two-tailed"],
};

export const selectedAllNodes = ["goal", "example1_scale", "example2_scale", "summary"];

export const activityTitle = "Hypothesis Tests: Wording of Final Conclusion";

export const buttonNode = [
  {
    startTime: 40.403906,
    endTime: 61.753906,
    classes: ["start"],
    type: "button"
  }
]
export const nodeTimeStamp = {
  "decision1": {
    startTime: 41.403745,
    endTime: 76.973947,
    classes: ["active"],
    focusItemId: "decision1-box",
  },
  "decision2": {
    startTime: 76.973947,
    endTime: 156.378037,
    classes: ["active"],
    focusItemId: "decision2-box",
  },
  "decision1-no-branch": {
    startTime: 41.403745,
    endTime: 200.546909,
    classes: ["active"],
    focusItemId: "",
  },

  "decision2-no-branch": [{
    startTime: 76.973947,
    endTime: 104.3565,
    classes: ["active"],
    focusItemId: "",
  },
  {
    startTime: 130.744772,
    endTime: 156.378037,
    classes: ["active"],
    focusItemId: "",
  }
  ],
  "decision2-yes-branch": {
    startTime: 76.973947,
    endTime: 130.744772,
    classes: ["active"],
    focusItemId: "",
  },

  "decision2-yes": {
    startTime: 104.3565,
    endTime: 130.744772,
    classes: ["active"],
    focusItemId: "process1",
  },
  "decision2-no": {
    startTime: 130.744772,
    endTime: 156.378037,
    classes: ["active"],
    focusItemId: "process2",
  },
  "decision1-yes-branch": [
    {
      startTime: 41.403745,
      endTime: 76.973947,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 176.289086,
      endTime: 289.59626,
      classes: ["active"],
      focusItemId: "",
    }
  ],
  "decision3": {
    startTime: 200.546909,
    endTime: 289.59626,
    classes: ["active"],
    focusItemId: "decision3-box",
  },
  "decision3-no-branch": {
    startTime: 200.546909,
    endTime: 253.053435,
    classes: ["active"],
    focusItemId: "",
  },
  "decision3-yes-branch": [{
    startTime: 200.546909,
    endTime: 234.264044,
    classes: ["active"],
    focusItemId: "",
  }, {
    startTime: 253.053435,
    endTime: 289.59626,
    classes: ["active"],
    focusItemId: "",
  }],

  "decision3-no": {
    startTime: 234.264044,
    endTime: 253.053435,
    classes: ["active"],
    focusItemId: "process4",
  },
  "decision3-yes": {
    startTime: 253.053435,
    endTime: 289.59626,
    classes: ["active"],
    focusItemId: "process3",
  },
  "decision2-side-text": [{
    startTime: 104.3565,
    endTime: 130.744772,
    classes: ["active", "shift-bottom"],
    focusItemId: "",
  },
  {
    startTime: 130.744772,
    endTime: 156.378037,
    classes: ["active"],
    focusItemId: "",
  },
  ],
  "glow-decision2-yes": {
    startTime: 123.944928,
    endTime: 130.744772,
    classes: ["glow"],
    focusItemId: "",
  },
  "glow-decision3-yes": {
    startTime: 276.111805,
    endTime: 289.59626,
    classes: ["glow"],
    focusItemId: "",
  }
};

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  restart: "Chart has been reset.",
  activityTitle: "A flowchart shows the steps to word the final conclusion.",
  caption: {
    active: "Closed captions active",
    inactive: "Closed captions inactive",
  },
  frameButton: {
    prev: "Jumped to previous frame",
    next: "Jumped to next frame",
    rewind: "audio rewinded 10 seconds",
    forward: "audio forwarded 10 seconds",
  },
  volume: {
    mute: "volume muted",
    unmute: "volume unmuted",
  },

};
