import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/procedure_for_finding_p_values.mp3";
import pdf from "../assets/documents/document.pdf";

import leftSectionText from "./leftSectionText";

export const audioSrc = audio;
export const pdfDocument = pdf;
export const captionJson = captions;
export const onScreenText = ostText;
export const tocJsonData = tocItems;
export const boundary = boundariesData;
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
      startTime: 118.526089,
      endTime: 148.746171,
      "right-tailed": 148.746171,
      "left-tailed": 124.866152,
      "two-tailed": 124.866152,
      correct:"right-tailed"
    },
    {
      id: "question2",
      startTime: 195.543743,
      endTime: 223.22375,
      "two-tailed": 201.530665,
      "left-tailed": 223.22375,
      "right-tailed": 201.530665,
      correct:"left-tailed"
    }, {
      id: "question3",
      startTime: 272.923988,
      endTime: 302.854799,
      "two-tailed": 302.954799,
      "left-tailed": 278.167018,
      "right-tailed": 278.167018,
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
  {
    startTime: 73.353906,
    endTime: 73.553906,
    classes: ["start"],
    type: "button"
  }
]
export const nodeTimeStamp = {

  "startarrow": {
    startTime: 73.853906,
    endTime: 550.1,
    classes: ["active"],
    focusItemId: "",
  },
  "typeoftest": {
    startTime: 73.993906,
    endTime: 550.1,
    classes: ["active"],
    focusItemId: "",
  },

  "right-tailed-arrow": [
    {
      startTime: 82.542607,
      endTime: 223.22375,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 251.450131,
      endTime: 302.954799,
      classes: ["active"],
      focusItemId: "",
    }

  ],

  "left-tailed-arrow": [
    {
      startTime: 80.311392,
      endTime: 148.746171,
      classes: ["active"],
      focusItemId: "",
    },
    {
      startTime: 174.506718,
      endTime: 302.954799,
      classes: ["active"],
      focusItemId: "",
    }
  ],

  "two-tailed-arrow": [
    {
      startTime: 78.176638,
      endTime: 148.746171,
      classes: ["active"],
      focusItemId: "",
    }, {
      startTime: 174.506718,
      endTime: 223.22375,
      classes: ["active"],
      focusItemId: "",
    }, {
      startTime: 251.450131,
      endTime: 430.40622,
      classes: ["active"],
      focusItemId: "",
    }
  ],

  "right-tailed": {
    startTime: 148.746171,
    endTime: 173.506718,
    classes: ["active"],
    focusItemId: "node-right-tailed",
  },
  "left-tailed": {
    startTime: 223.22375,
    endTime: 250.831481,
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
  condition2: {
    startTime: 302.954799,
    endTime: 430.40622,
    classes: ["active"],
    focusItemId: "two-tailed-parent",
  },
  "right-child": [
    {
      endTime: 380.337444,
      startTime: 343.166357,
      classes: ["active"],
      focusItemId: "two-tailed-right-child",
    },
    {
      endTime: 430.40622,
      startTime: 416.998044,
      classes: ["active", "hidden"],
      focusItemId: "two-tailed-right-child",
    },
  ],
  "left-child": [
    {
      endTime: 416.064185,
      classes: ["active"],
      startTime: 380.337444,
      focusItemId: "two-tailed-left-child",
    },
    {
      endTime: 430.40622,
      classes: ["active", "show"],
      startTime: 416.998044,
      focusItemId: "two-tailed-left-child",
    },
  ],
  "drawing-right-value1": [
    {
      startTime: 362.895245,
      endTime: 380.337444,
      classes: ["active"],

      focusItemId: "",
    },
    {
      startTime: 416.998044,
      endTime: 430.40622,
      classes: ["active"],

      focusItemId: "",
    }

  ],
  "drawing-right-value2": {
    startTime: 376.910461,
    endTime: 380.337444,
    classes: ["active"],

    focusItemId: "",
  },
  "drawing-left-value1": [
    {
      startTime: 398.623272,
      endTime: 416.064185,
      classes: ["active"],

      focusItemId: "",
    },
    {
      startTime: 416.998044,
      endTime: 430.40622,
      classes: ["active"],

      focusItemId: "",
    }
  ],
  "drawing-left-value2": [
    {
      startTime: 411.595212,
      endTime: 416.064185,
      classes: ["active"],

      focusItemId: "",
    },
    {
      startTime: 416.998044,
      endTime: 430.40622,
      classes: ["active", "show"],

      focusItemId: "",
    }
  ],
  "glowing-right-child":{
    startTime: 438.119272,
    endTime: 444.25818,
    classes: ["active","show"],
    focusItemId: "",
  },
  "glowing-left-child":{
    startTime: 432.791899,
    endTime: 437.999272,
    classes: ["active","show"],
    focusItemId: "",
  },
  "glowing-two-child":{
    startTime: 444.65818,
    endTime: 451.361826,
    classes: ["active","show"],
    focusItemId: "",
  }
};

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  restart: "Chart has been reset.",
  activityTitle:"A flowchart depicts the process of finding p values.",
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
  dummy:"dummy"
};
