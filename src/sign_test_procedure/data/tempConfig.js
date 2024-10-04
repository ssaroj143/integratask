import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/sign_test_procedure.mp3";
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

export const data = [
  {
    id: "start",
    textNode: [
      {
        id: "chart-start",
        startTime: 0,
        endTime: 171.075435,
        vTime: 225.52899,
        textNode: [],
        startingPoint: true,
        classes: ["startend"],
        name: "<p class='heading'>Start</p>",
      },
      {
        id: "start-empty",
        textNode: [],
        classes: ["empty"],
      },
    ],
  },
  {
    id: "exam1",
    textNode: [
      {
        id: "example1",
        name:
          "<p class='heading'>Assign positive and negative signs and discard any zeros.</p>",
        classes: ["process", "blue"],
        startTime: 0,
        endTime: 171.075435,
        vTime: 225.52899,
        textNode: [],
        background: "#EFFBFF",
        border: "#00749B",
      },
      {
        id: "example1-empty",
        textNode: [],
        classes: ["empty"],
      },
    ],
  }, {
    id: "exam1",
    textNode: [
      {
        id: "example1",
        name:
          "<p class='heading'>Let <i>n</i> equal the total number of signs.</p>",
        classes: ["process", "blue"],
        startTime: 0,
        endTime: 171.075435,
        vTime: 225.52899,
        textNode: [],
        background: "#EFFBFF",
        border: "#00749B",
      },
      {
        id: "example1-empty",
        textNode: [],
        classes: ["empty"],
      },
    ],
  }, {
    id: "exam1",
    textNode: [
      {
        id: "example1",
        name:
          "<p class='heading'>Let the test statics x equal the number of the less frequent sign</p>",
        classes: ["process", "blue"],
        startTime: 0,
        endTime: 171.075435,
        vTime: 225.52899,
        textNode: [],
        background: "#EFFBFF",
        border: "#00749B",
      },
      {
        id: "example1-empty",
        textNode: [],
        classes: ["empty"],
      },
    ],
  },
  {
    id: "condition1",
    textNode: [
      // {
      //   id: "whole-number-yes",
      //   visitedE: 284.492365,
      //   visitedS: 225.52899,
      //   textNode: [
      //     {
      //       textNode: [],
      //       type: "child",
      //       endTime: 284.492365,
      //       startTime: 225.52899,
      //       visitedStartTime: 152.096791,
      //       visitedEndTime: 165.998421,
      //       id: "wholenumber-child-left-yes",
      //       name: "<p class='heading'>Yes</p>",
      //       classes: ["condition-node", "row"],
      //     },
      //   ]
      // },
      {
        id: "compute",
        // type: "maths",
        name: `<div class='decision'><p class='heading'>Do the sample data contradict H<sub>1</sub>?</p></div>`,
        label:
          "Do the sample data contradict H1?",
        classes: ["decision-box"],
        vTime: 225.52899,
        startTime: 74.2024,
        endTime: 171.075435,
        visitedS: 199.474179,
        visitedE: 225.52899,
        textNode: [],
        // background: "#EFFBFF",
        // border: "#00749B",
      },
      {
        id: "compute-empty",
        textNode: [],
        classes: ["empty"],
      },
    ],
  },
  {
    id: "condition1",
    textNode: [
      {
        id: "wholenumber",
        name:
          "<div class='decision'><p class='heading'>Is n &le; 25?</p></div>",
        label: "",
        classes: ["decision-box"],
        startTime: 174.382029,
        endTime: 235.895211,

        visitedStartTime: 225.52899,
        visitedEndTime: 284.492365,
        hiddenStart: 199.474179,
        hiddenEnd: 252.403231,
        textNode: [
          {
            textNode: [],
            type: "child",
            startTime: 184.768569,
            endTime: 235.895211,
            hiddenStart: 199.474179,
            hiddenEnd: 284.492365,
            id: "wholenumber-child-left",
            name: "<p class='heading'>No</p>",
            classes: ["condition-node", "row"],
          },
          {
            textNode: [],
            startTime: 184.768569,
            endTime: 235.895211,
            hiddenStart: 199.474179,
            hiddenEnd: 284.492365,
            classes: ["process", "pink"],
            id: "whole-number-no-child",
            name:
              "<p class='content'>Find the critical value from Table A-7.</p>",
            label:
              "Find the critical value from Table A-7.",
            background: "#ECFDED",
            border: "#397F3C",
            arrow: true,
          },
          {
            id: "condition1",
            startTime: 217.941248,
            endTime: 244.966757,
            hiddenStart: 199.474179,
            hiddenEnd: 284.492365,
            classes: ["decision-box", "child"],
            id: "whole-number-no-child",
            name:
              "<div class='decision'><p class='content'>Is the test statics less than or equal to the critical value(s)?</p></div>",
            label:
              "Is the test statics less than or equal to the critical value(s)?",
            // background: "#ECFDED",
            // border: "#397F3C",
            arrow: true,
            textNode: [
              // {
              //   textNode: [],
              //   type: "child",
              //   endTime: 284.492365,
              //   startTime: 225.52899,
              //   visitedStartTime: 152.096791,
              //   visitedEndTime: 165.998421,
              //   id: "wholenumber-child-left-no",
              //   name: "<p class='heading'>Yes</p>",
              //   classes: ["condition-node", "row","prospective-child"],
              // },
              // {
              //   endTime: 284.492365,
              //   startTime: 225.52899,
              //   classes: ["end-child", "process", "green"],
              //   id: "whole-number-yes-child",
              //   name:
              //     "<p class='content'>Reject the null hypothesis.</p>",
              //   label:
              //     "Reject the null hypothesis.",
              //     background: "#ECFDED",
              //     border: "#397F3C",
              //   textNode: [],
              // },
            ],
          },
          {
            textNode: [],
            startTime: 138.523866,
            endTime: 171.075435,
            hiddenStart: 199.474179,
            hiddenEnd: 284.492365,
            classes: ["end-child", "process", "pink"],
            id: "left-child",
            name:
              "<p class='content'>Fail to reject the null hypothesis.</p>",
            label:
              "Fail to reject the null hypothesis.",
            background: "#ECFDED",
            border: "#397F3C",
            arrow: true,
          },
        ],
      },

      {
        id: "whole-number-yes",
        visitedE: 284.492365,
        visitedS: 225.52899,
        textNode: [
          {
            textNode: [],
            type: "child",

            startTime: 200.762752,
            endTime: 235.395719,
            visitedStartTime: 152.096791,
            visitedEndTime: 165.998421,
            id: "wholenumber-child-left-yes",
            name: "<p class='heading'>Yes</p>",
            classes: ["condition-node", "column"],
          },
          {
            startTime: 200.762752,
            endTime: 235.395719,
            classes: ["end-child", "process", "green"],
            id: "whole-number-yes-child",
            name:
              "<p class='content'>Convert the test statics <i>x</i> to the test statistic<br /><div class='heading maths'><div class='wrapper'><em>Z</em> <span>=</span> <div class='maths-exp'><div class='division-block'><span class='numerator'><em>(x + 0.5) - (n/2)</em></span><span>&#8730;n/2</span></div></div></div></div></p>",
            label:
              "Convert the test statics x to the test statistic z ",
            background: "#FFF7FC",
            border: "#941E61",
            textNode: [
              // {
              //   endTime: 284.492365,
              //   startTime: 225.52899,
              //   classes: ["child", "process", "green"],
              //   id: "whole-number-yes-child",
              //   name:
              //     "<p class='content'>Find the critical <i>z</i> value(s) from Table A-2 in the usual way.</p>",
              //   label:
              //     "Find the critical z values from Table A-2 in the usual way.",
              //   background: "#FFF7FC",
              //   border: "#941E61",
              //   textNode: [],
              // }
            ],
          },
        ],
      },
    ],
  },
];

export const nodeTimestamp = [
  //   {
  //     id: "example1",
  //     startTime: 80.9022,
  //     endTime: 104.8653,
  //   },
  //   {
  //     id: "compute",
  //     startTime: 104.8653,
  //     endTime: 152.086791,
  //   },
  //   {
  //     id: "wholenumber",
  //     startTime: 152.096791,
  //     endTime: 165.998421,
  //   },
  //   {
  //     id: "whole-number-no-child",
  //     endTime: 179.613056,
  //     startTime: 166.871588,
  //   },
  //   {
  //     id: "left-child",
  //     endTime: 199.474179,
  //     startTime: 179.613056,
  //   },
  //   {
  //     id: "compute",
  //     startTime: 199.474179,
  //     endTime: 225.52899,
  //   },
  //   {
  //     id: "whole-number-yes-child",
  //     endTime: 284.492365,
  //     startTime: 225.52899,
  //   },
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

export const activityTitle =
  "Sign Test Procedure";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle:
    "Sign Test Procedure",
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
