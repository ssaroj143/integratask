import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/hypothesis_test_linear_correlation.mp3";
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
  // startTime: 139.711623,
  // endTime:142.913493
}

export const data = [
  {
    textNode: [],
    startTime: 0.144992,
    endTime: 169.027611,
    id: "chart-start",
    startingPoint: true,
    classes: ["no-child", "startend"],
    name: "<p class='content'>Start</p>",
    label: "start"
  },
  {
    id: 'first',
    classes: ["condition-node", "child-node"],
    textNode: [
      {
        textNode: [],
        startTime: 28.238354,
        endTime: 169.027611,
        classes: ["end-child", "process", 'prospective-child1'],
        id: "prospective-child1",
        border: "#397F3C",
        background: "#ECFDED",
        name: "<p class='heading' aria-hidden='true'>Let <em>H</em><sub>0</sub>: <em>ρ</em> = 0 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>H</em><sub>1</sub>: <em>ρ</em> &ne; 0</p>",
        label: " Let H sub 0. Rho equals 0. Let H sub 1. Rho is not equal to 0."
      }
    ],
  },
  {
    id: "arrow1",
    textNode: [{
      id: 'yesqqqq',
      startTime: 28.238354,
      endTime: 169.027611,
      textNode: [],
      name: "<p class='heading'></p>",
      classes: ['down-arrow'],
    },]
  },
  {
    id: 'second',
    classes: ["condition-node", "child-node"],
    textNode: [
      {
        textNode: [],
        startTime: 28.238354,
        endTime: 169.027611,
        classes: ["end-child", "process", 'prospective-child2'],
        id: "prospective-child2",
        border: "#397F3C",
        background: "#ECFDED",
        name: "<p class='heading'>Select a significance level <em>&alpha;</em></p>",
        label: "Select a significance level of alpha.",
      }
    ],
  },
  {
    id: "arrow2",
    textNode: [{
      id: 'dddd',
      startTime: 28.238354,
      endTime: 169.027611,
      textNode: [],
      name: "<p class='heading'></p>",
      classes: ['down-arrow'],
    },]
  },
  {
    id: 'sdsdsd',
    classes: ["condition-node", "child-node"],
    textNode: [
      {
        textNode: [],
        startTime: 28.238354,
        endTime: 169.027611,
        classes: ["end-child", "process", 'prospective-child3'],
        id: "prospective-child3",
        border: "#397F3C",
        background: "#ECFDED",
        name: "<p class='heading'>Find the value of <i>r</i>.</p>",
        label: "Find the value of r."

      }
    ],
  },
  {
    id: "arrow3",
    textNode: [{
      id: 'eee',
      startTime: 61.485534,
      endTime: 169.027611,
      textNode: [],
      name: "<p class='heading'></p>",
      classes: ['down-arrow no-arrow-tip'],
    },]
  },
  {
    id: "condition1",
    classes: [],
    startTime: 61.485534,
    endTime: 169.027611,
    textNode: [
      {
        type: "child",
        visitedStart: 118.371721,
        visitedEnd: 169.027611,
        startTime: 61.485534,
        endTime: 100.499886,
        id: "retrospectivestudy",
        name: "<p class='heading'>Method 1 (Follows format of earlier chapters)</p>",
        classes: ["condition-node", "child-node", "first-child",],
        textNode: [
          {
            textNode: [],
            visitedStart: 118.371721,
            visitedEnd: 169.027611,
            startTime: 61.485534,
            endTime: 100.499886,
            classes: ["end-child", "process", 'retrospective-child'],
            id: "retrospective-child",
            border: "#397F3C",
            background: "#ECFDED",
            name:
              '<p class="heading" aria-hidden="true">The test statistic is</p>' +
              '<p class="line" aria-hidden="true"><i>t</i> = <span class="radicant-position">r</span></p>' +
              '<div class="root">' +
              '<div class="radicand">' +
              '<div style="display: flex; align-items: center;">' +
              '<div style="display: flex; flex-direction: column; align-items: center;">' +
              '<div class="squre-root-wrapper" aria-hidden="true">' +
              '<span class="numerator">' +
              '<i>1 - r </i><sup>2</sup>' +

              '</span>' +
              '<span>' +
              '<i>n</i> - 2' +
              '</span>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '<p class="heading" aria-hidden="true">Critical values of <i>t</i> are from Table A-3 with <i>n</i> - 2 degrees of freedom.</p>',
            label: "Method 1: Follows format of earlier chapters.  The test statistic is t equals r upon under root 1 minus r squared whole upon n minus 2. Critical values of t are from Table A-3 with n - 2 degrees of freedom.",
          },
        ],
      },
      {
        type: "child",
        id: "crosectional",
        // visitedEnd: 91.630383,
        // visitedStart: 77.07682,
        startTime: 100.499886,
        endTime: 169.027611,
        classes: ["condition-node", "child-node", "last-child"],
        name: "<p class='heading'>Method 2 (Uses fewer calculations)</p>",
        textNode: [
          {
            textNode: [],
            startTime: 100.499886,
            endTime: 169.027611,
            classes: ["end-child", "process", 'cross-sectional-child'],
            id: "cross-sectional-child",
            border: "#397F3C",
            background: "#ECFDED",
            name: "<p class='heading'>The test statistic is <i>r</i>.<br>Critical values of <i>r</i> are from Table A-6.</p>",
            label: "Method 2: Uses fewer calculations. The test statistic is r. Critical values of r are from table A-6."
          },
        ],
      },
    ],
  },
  {
    id: "bottomgroup",
    classes: [],
    textNode: [
      {
        type: "child",
        startTime: 118.371721,
        endTime: 169.027611,
        id: "retrospectivestudy",
        name: "<p class='heading'></p>",
        classes: ["condition-node", "child-node", "first-child", "no-arrow-tip"],
        textNode: [],
      },
      {
        type: "child",
        id: "crosectional",
        startTime: 118.371721,
        endTime: 169.027611,
        classes: ["condition-node", "child-node", "last-child"],
        name: "<p class='heading'></p>",
        textNode: [],
      },
    ],
  },
  {
    id: "bottomgroupdownarrow",
    textNode: [{
      id: 'yesqqqq',
      startTime: 118.371721,
      endTime: 169.027611,
      textNode: [],
      name: "<p class='heading'></p>",
      classes: ['down-arrow'],
    },]
  },
  {
    id: 'exceedsthevalue',
    classes: ["condition-node", "child-node"],
    textNode: [
      {
        textNode: [],
        startTime: 118.371721,
        endTime: 169.027611,
        classes: ["end-child", "process", 'prospective-child4'],
        id: "prospective-child4",
        border: "#397F3C",
        background: "#ECFDED",
        name: "<p class='heading'>If the absolute value of the test statistic exceeds the critical values, reject <em>H</em><sub>0</sub>: <em>ρ</em> = 0. <br> Otherwise, fail to reject <em>H</em><sub>0</sub>.</p>",
        label: "If the absolute value of the test statistic exceeds the critical values, reject H sub 0. Rho equals 0. Otherwise fail to reject H sub 0."
      }
    ],
  },
  {
    id: "condition5",
    textNode: [{
      id: 'yesqqqq',
      startTime: 146.403570,
      endTime: 169.027611,
      textNode: [],
      name: "<p class='heading'></p>",
      classes: ['down-arrow'],
    },]
  },
  {
    id: 'isrejected',
    classes: ["condition-node", "child-node"],
    textNode: [
      {
        textNode: [],
        startTime: 146.403570,
        endTime: 169.027611,
        classes: ["end-child", "process", 'prospective-child5'],
        id: "prospective-child5",
        border: "#397F3C",
        background: "#ECFDED",
        name: "<p class='heading'>If <em>H</em><sub>0</sub> is rejected, conclude that there is a linear correlation.<br>If you fail to reject <em>H</em><sub>0</sub>, then there is not sufficient evidence to conclude that there is a linear correlation.</p>",
        label: "If H sub 0 is rejected, conclude that there is a linear correlation. If you fail to reject H sub zero then there is not sufficient evidence to conclude that there is a linear correlation."
      }
    ],
  },
];

export const nodeTimeStamp = [
  {
    id: "prospective-child1",
    startTime: 28.238354,
    endTime: 46.155891,
  },
  {
    id: "prospective-child2",
    startTime: 46.155891,
    endTime: 50.009172
  },
  {
    startTime: 50.009172,
    endTime: 57.100615,
    id: "prospective-child3",
  },
  {
    startTime: 61.485534,
    endTime: 100.499886,
    id: "retrospective-child",
  },
  {
    startTime: 100.499886,
    endTime: 115.987703,
    id: "cross-sectional-child",
  },
  {
    startTime: 118.371721,
    endTime: 146.403570,
    id: "prospective-child4",
  },
  {
    startTime: 146.403570,
    endTime: 169.814568,
    id: "prospective-child5",
  }
]
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

export const activityTitle = "Hypothesis Test for Linear Correlation";

export const accessibleChartData = [
  {
    id: "node1",
    endTime: 45.28,
    startTime: 0.14,
  },
  {
    id: "node2",
    startTime: 46.61,
    endTime: 157.16645,
  },
  {
    id: "node3",
    endTime: 186.41,
    startTime: 158.89,
  },
];
export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "A flow diagram titled, hypothesis test for linear correlation.",
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
