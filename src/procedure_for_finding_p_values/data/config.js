import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/procedure_for_finding_p_values.mp3";
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

export const timestampsForAttempts = {
  condition1: [
    {
      id: "question1",
      startTime: 116.526089,
      endTime: 146.823675,
      "right-tailed": 146.723675,
      "left-tailed": 123.098901,
      "two-tailed": 123.098901,
      correct:"right-tailed"
    },
    {
      id: "question2",
      startTime: 193.543743,
      endTime: 221.401737,
      "two-tailed": 199.943437,
      "left-tailed": 221.301737,
      "right-tailed": 199.943437,
      correct:"left-tailed"
    }, 
    {
      id: "question3",
      startTime: 270.923988,
      endTime: 300.791332,
      "two-tailed": 300.791332,
      "left-tailed": 276.43219,
      "right-tailed": 276.43219,
      correct:"two-tailed"
    }
  ]

};

export const correctAnswerSequence = {
  condition1: ["right-tailed", "left-tailed", "two-tailed"],
};

export const selectedAllNodes = ["goal", "summary"];

export const activityTitle = "<span class='sr-only'>Procedure for Finding P Values</span><span aria-hidden='true'>Procedure for Finding P-Values</span>";

export const buttonNode = [
  // {
  //   startTime: 73.353906,
  //   endTime: 73.553906,
  //   classes: ["start"],
  //   type: "button"
  // }
]
export const nodeTimeStamp = {

  "startarrow": {
    startTime: 72.804537,
    endTime: 428.740186,
    classes: ["active"],
    focusItemId: "",
  },
  "typeoftest": [
    {
      startTime: 72.904537,
      endTime: 147.162344,
      classes: ["active"],
      focusItemId: "typeoftest",
    },
    {
      startTime: 147.162344,
      endTime: 172.307914,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 172.307914,
      endTime: 221.677553,
      classes: ["active"],
      focusItemId: "typeoftest",
    },
    {
      startTime: 221.677553,
      endTime: 249.083507,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 249.083507,
      endTime: 301.407853,
      classes: ["active"],
      focusItemId: "typeoftest",
    },
    {
      startTime: 301.407853,
      endTime:  428.740186,
      classes: ["active"],
      focusItemId: "",
    },
  ],

  "right-tailed-arrow": [
    {
      startTime: 81.182613,
      endTime: 221.677553,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 249.083507,
      endTime: 301.407853,
      classes: ["active"],
      focusItemId: "",
    }

  ],

  "left-tailed-arrow": [
    {
      startTime: 79.027899,
      endTime: 147.162344,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 172.307914,
      endTime: 301.407853,
      classes: ["active"],
      focusItemId: "",
    }
  ],

  "two-tailed-arrow": [
    {
      startTime: 76.809494,
      endTime: 147.162344,
      classes: ["active"],
      focusItemId: "",
    }, {
      startTime: 172.307914,
      endTime: 221.677553,
      classes: ["active"],
      focusItemId: "",
    }, {
      startTime: 249.083507,
      endTime: 428.740186,
      classes: ["active"],
      focusItemId: "",
    }
  ],

  "right-tailed": {
    startTime: 147.162344,
    endTime: 172.307914,
    classes: ["active"],
    focusItemId: "node-right-tailed",
  },
  "left-tailed": {
    startTime: 221.677553,
    endTime: 249.083507,
    classes: ["active"],
    focusItemId: "node-left-tailed",
  },
  // condition1: [
  //   {
  //     startTime: 393.544003,
  //     endTime: 430.40622,
  //     classes: ["hidden"],
  //   },
  //   {
  //     startTime: 156.49,
  //     endTime: 185.41,
  //     classes: ["hidden-left-bottom"],
  //   },
  //   {
  //     startTime: 270.999922,
  //     endTime: 299.122444,
  //     classes: ["hidden-right-bottom"],
  //   },

  // ],
  condition2: [
    {
      startTime: 301.407853,
      endTime: 341.717584,
      classes: ["active"],
      focusItemId: "two-tailed-parent",
    },
    {
      startTime: 341.717584,
      endTime: 428.740186,
      classes: ["active"],
      focusItemId: "",
    }
  ],
  "right-child": [
    {
      endTime: 379.226594,
      startTime: 341.717584,
      classes: ["active"],
      focusItemId: "two-tailed-right-child",
    },
    {
      endTime: 428.740186,
      startTime: 415.600653,
      classes: ["active", "hidden"],
      focusItemId: "two-tailed-right-child",
    },
  ],
  "left-child": [
    {
      endTime: 415.000653,
      classes: ["active"],
      startTime: 379.226594,
      focusItemId: "two-tailed-left-child",
    },
    {
      endTime: 428.740186,
      classes: ["active", "show"],
      startTime: 415.600653,
      focusItemId: "two-tailed-left-child",
    },
  ],
  "drawing-right-value1": [
    {
      startTime: 361.707053,
      endTime: 379.226594,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 415.600653,
      endTime: 428.740186,
      classes: ["active"],
      focusItemId: "",
    }

  ],
  "drawing-right-value2": {
    startTime: 375.813797,
    endTime: 379.226594,
    classes: ["active"],
    focusItemId: "",
  },
  "drawing-left-value1": [
    {
      startTime: 397.689247,
      endTime: 415.000653,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 415.600653,
      endTime: 428.740186,
      classes: ["active"],
      focusItemId: "",
    }
  ],
  "drawing-left-value2": [
    {
      startTime: 410.841384,
      endTime: 415.000653,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime:  415.600653,
      endTime: 428.740186,
      classes: ["active", "show"],
      focusItemId: "",
    }
  ],
  "glowing-right-child":{
    startTime: 436.392289,
    endTime: 442.513685,
    classes: ["active","show"],
    focusItemId: "",
  },
  "glowing-left-child":{
    startTime: 431.884895,
    endTime: 436.292289,
    classes: ["active","show"],
    focusItemId: "",
  },
  "glowing-two-child":{
    startTime: 442.813685,
    endTime: 449.656572,
    classes: ["active","show"],
    focusItemId: "",
  }
};

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  restart: "Chart has been reset.",
  activityTitle: "A flowchart depicts the process of finding p values.",
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
  dummy: "dummy"
};
