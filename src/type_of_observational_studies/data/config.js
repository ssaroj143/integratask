import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/type_of_observational_studies.mp3";
import pdf from "../assets/documents/document.pdf";
import textFile from "../assets/documents/texfile.docx";

export const audioSrc = audio;
export const pdfDocument = pdf;
export const captionJson = captions;
export const onScreenText = ostText;
export const tocJsonData = tocItems;
export const boundary = boundariesData;
export const transcript = textFile;

export const defaultTocItem = "title";
export const hideChartTime = {
  startTime: 139.711623,
  endTime: 142.913493
}

export const data = [
  {
    textNode: [],
    endTime: 39.336221,
    startTime: 0.14,
    id: "chart-start",
    startingPoint: true,
    classes: ["no-child", "startend"],
    name:
      "<p class='content'>Observational Study:</p><p class='content'>Observe and measure, but do not modify.</p>",
  },
  {
    id: "observationmade",
    name: "<div class='decision'><p>When are the observations made?</p></div>",
    classes: ["decision-box", "end-child"],
    startTime: 38.003286,
    endTime: 47.862768,
    textNode: [],
  },
  {
    id: "condition1",
    classes: [],
    textNode: [
      {
        type: "child",

        visitedEnd: 76.45829,
        visitedStart: 50.71899,
        startTime: 41.075146,
        endTime: 47.862768,
        id: "retrospectivestudy",
        name: "<p class='heading'>Past period of time</p>",
        classes: ["condition-node", "child-node", "first-child"],
        textNode: [
          {
            textNode: [],
            endTime: 76.45829,
            startTime: 54.725221,
            classes: ["end-child", "process"],
            id: "retrospective-child",
            border: "#397F3C",
            background: "#ECFDED",
            name:
              "<p class='heading'>Retrospective <br/> (or case-control) study:</p><p class='content'>Go back in time to collect data over some past period.</p>",
          },
          {
            id: "01",
            startTime: 159.724262,
            endTime: 165.294043,
            classes: ["glow-arrow", "left-highlited-arrow"],
            textNode: [],
            name: '',
            type: 'highlitedArrow'
          },
        ],
      },
      {
        type: "child",

        id: "crosectional",
        visitedEnd: 91.630383,
        visitedStart: 77.07682,
        startTime: 43.759183,
        endTime: 47.862768,
        classes: ["condition-node", "child-node", "middle-child "],
        name: "<p class='heading'>One point in time</p>",
        textNode: [
          {
            textNode: [],
            endTime: 91.630383,
            startTime: 82.565119,
            classes: ["end-child", "process"],
            id: "cross-sectional-child",
            border: "#397F3C",
            background: "#ECFDED",
            name:
              "<p class='heading'>Cross-sectional study:</p><p class='content'>Data are measured at one point in time.</p>",
          },
          {
            id: "02",
            startTime: 165.760628,
            endTime: 171.218299,
            classes: ["glow-arrow", "center-highlited-arrow"],
            textNode: [],
            name: '',
            type: 'highlitedArrow'
          },
        ],
      },
      {
        type: "child",
        visitedEnd: 142.903493,
        visitedStart: 92.220756,
        startTime: 46.849204,
        endTime: 47.862768,
        id: "prospectivestudy",
        name: "<p class='heading'>Forward in time</p>",
        classes: ["condition-node", "child-node", "last-child"],

        textNode: [
          {
            textNode: [],
            endTime: 142.903493,
            startTime: 99.69903,
            classes: ["end-child", "process"],
            id: "prospective-child",
            border: "#397F3C",
            background: "#ECFDED",
            name:
              "<p class='heading'>Prospective <br/> (or longitudinal or cohort) study:</p><p class='content'>Go forward in time and observe groups sharing common factors, such as smokers and nonsmokers.</p>",
          },
          {
            id: "03",
            startTime: 171.537789,
            endTime: 178.859226,
            classes: ["glow-arrow", "right-highlited-arrow"],
            textNode: [],
            name: '',
            type: 'highlitedArrow'
          },
        ],
      },
    ],
  },
];

export const nodeTimeStamp = {
  // "right-tailed": {
  //   startTime: 156.49,
  //   endTime: 185.41,
  //   classes: ["active"],
  //   focusItemId: "node-right-tailed",
  // },
  // "left-tailed": {
  //   startTime: 270.999922,
  //   endTime: 301.0,
  //   classes: ["active"],
  //   focusItemId: "node-left-tailed",
  // },
  // condition1: [
  //   {
  //     startTime: 393.544003,
  //     endTime: 550.19,
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
  // condition2: {
  //   startTime: 393.544003,
  //   endTime: 550.19,
  //   classes: ["active"],
  //   focusItemId: "two-tailed-parent",
  // },
  // "right-child": [
  //   {
  //     endTime: 487.533868,
  //     startTime: 439.476976,
  //     classes: ["active"],
  //     focusItemId: "two-tailed-right-child",
  //   },
  //   {
  //     endTime: 550.19,
  //     startTime: 537.141413,
  //     classes: ["active"],
  //     focusItemId: "two-tailed-right-child",
  //   },
  // ],
  // "left-child": [
  //   {
  //     endTime: 534.751399,
  //     classes: ["active"],
  //     startTime: 487.533868,
  //     focusItemId: "two-tailed-left-child",
  //   },
  //   {
  //     endTime: 550.19,
  //     classes: ["active"],
  //     startTime: 537.141413,
  //     focusItemId: "two-tailed-left-child",
  //   },
  // ],
};
export const answerResponse = {
  correct: "This option is correct.",
  incorrect: "This option is incorrect.",
};

export const questionTopHeading = ""; // Question
export const continueButtonText = "Continue";
export const submitButtonText = "Submit Answer";

export const timestampsForAttempts = {};

export const correctAnswerSequence = {};

export const selectedAllNodes = ["goal", "summary"];

export const activityTitle = "Type of Observational Studies";

export const accessibleChartData = [
  {
    id: "node1",
    endTime: 45.28,
    startTime: 0.14,
  },
  {
    id: "node2",
    startTime: 46.61,
    endTime: 156.16645,
  },
  {
    id: "node3",
    endTime: 185.41,
    startTime: 157.89,
  },
];
export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "A flow diagram titled, Types of Observational Studies.",
  restart: "Chart is reset.",
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
