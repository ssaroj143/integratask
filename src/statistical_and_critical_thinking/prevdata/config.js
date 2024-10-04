import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/Statistical_and_Critical_Thinking.mp3";
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

const node1DOM = [
  {
    name: "Context",
    startTime: 29.126795,
    endTime: 102.945632,
    id: "context",

    nodes: [
      {
        name: "What do the data represent?",
        startTime: 29.126795,
      },
      {
        name: "What is the goal of study?",
        startTime: 62.863241,
      },
    ],
  },
  {
    name: "Source of the Data",
    startTime: 94.608018,
    endTime: 159.232193,
    id: "sourceofdata",

    nodes: [
      {
        name:
          "Are the data from a source with a special interest so that there is pressure to obtain results that are favorable to the source?",
      },
    ],
  },
  {
    name: "Sampling Method",
    startTime: 146.307377,
    endTime: 257.387254,
    id: "samplingmethod",

    nodes: [
      {
        name:
          "Were the data collected in a way that is unbiased, or were the data collected in a way that is biased (such as a procedure in which respondents volunteer to participate)?",
      },
    ],
  },
];

const node2DOM = [
  {
    name: "Graph the Data",
    startTime: 234.855126,
    endTime: 292.804295,
    id: "grpahdata",
    nodes: [
      // {
      //   name: "<span class='graph_data'></span>",
      //   startTime: 234.855126,
      //   endTime: 279.137778,


      // }
    ],
  },
  {
    name: "Explore the Data",
    startTime: 281.324815,
    endTime: 351.713485,
    id: "exploredata",
    nodes: [
      {
        name:
          "Are there any outliers (numbers very far away from almost all of the other data)?",
        startTime: 283.978389,

      },
      {
        name:
          "What important statistics summarize the data (such as the mean and standard deviation described in chapter 3)?",
        startTime: 301.951686,
      },
      {
        name: "How are the data distributed?",
        startTime: 302.280203,
      },
      {
        name: "Are there missing data?",
        startTime: 310.193287
      },
      {
        name: "Did many selected subjects refuse to respond?",
        startTime: 314.089169
      },
    ],
  },
  {
    name: "Apply Statistical Methods",
    startTime: 318.192956,
    endTime: 392.886274,
    id: "applymethods",
    nodes: [
      {
        name: "Use technology to obtain results.",
        startTime: 358.371861
      },
    ],
  },
];

const node3DOM = [
  {
    name: "Significance",
    startTime: 367.52905,
    endTime: 406.892826,
    id: "conclude",
    nodes: [
      {
        name: "Do the results have statistical significance?",
      },
      {
        name: "Do the results have practical significance?",
      },
    ],
  },
];

export const data = [
  {
    id: "context-div",
    data: node1DOM,
    heading: "Prepare",
    classes: ["end-child"],
    startTime: 29.126795,
    endTime: 233.837407,
    textNode: [],
    border: "#00749B",
    background: "#EFFBFF",
  },
  {
    id: "exploredata-div",
    data: node2DOM,
    heading: "Analyze",
    classes: ["no-child"],
    startTime: 234.405126,
    endTime: 366.752625,
    textNode: [],
    border: "#DE9707",
    background: "#FFF3AA",
  },
  {
    id: "conclude-div",
    heading: "Conclude",
    data: node3DOM,
    classes: ["no-child"],
    startTime: 367.52905,
    endTime: 415.297662,
    textNode: [],
    border: "#397F3C",
    background: "#ECFDED",
  },
];

export const answerResponse = {
  correct: "This option is correct.",
  incorrect: "This option is incorrect.",
};

export const questionTopHeading = "Question";
export const continueButtonText = "Continue";
export const submitButtonText = "Submit Answer";

export const timestampsForAttempts = {};

export const correctAnswerSequence = {};

export const selectedAllNodes = ["goal", "summary"];

export const activityTitle = "Statistical and Critical Thinking";

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
    startTime: 157.89,
    endTime: 185.41,
  },
];
export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "Statistical and Critical Thinking",
  restart: "Chart has been reset.",
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
