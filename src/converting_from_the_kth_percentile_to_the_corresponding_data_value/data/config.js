import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/converting_from_the_kth_percentile_to_the_corresponding_data_value.mp3";
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
        startTime: 80.9022,
        endTime: 104.8653,
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
          "<p class='heading'>Sort the data.</p><p class='content'>(Arrange the data in order of lowest to highest.)</p>",
        classes: ["process", "blue"],
        startTime: 80.9022,
        endTime: 104.8453,
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
    id: "comp",
    textNode: [
      {
        id: "compute",
        // type: "maths",
        name: `<p class='heading'>Compute</p><div class='heading maths'><div class='wrapper'><em>L</em> <span>=</span> <div class='maths-exp'><div class='parenthesis'>(</div><div class='division-block'><span class='numerator'><em>k</em></span><span>100</span></div><div class='parenthesis'>)</div></div><em>n</em><span>where</span></div><em>n</em> = number of values<br /><em>k</em> = percentile in question</div>`,
        label: "Compute. L = start fraction k over 100 end fraction times n, where n = number of values, k = percentile in question.",
        classes: ["process", "blue"],
        vTime: 225.52899,
        startTime: 104.8653,
        endTime: 152.086791,
        visitedS: 199.474179,
        visitedE: 225.52899,
        textNode: [],
        background: "#EFFBFF",
        border: "#00749B",
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
          "<div class='decision'><p class='heading'>Is <em>L</em> a whole number?</p></div>",
        label: "is l a whole number?",
        classes: ["decision-box"],
        startTime: 152.096791,
        endTime: 165.998421,

        visitedStartTime: 225.52899,
        visitedEndTime: 284.492365,
        hiddenStart: 199.474179,
        hiddenEnd: 252.403231,
        textNode: [
          {
            textNode: [],
            type: "child",
            startTime: 152.096791,
            endTime: 165.998421,
            hiddenStart: 199.474179,
            hiddenEnd: 284.492365,

            id: "wholenumber-child-left",
            name: "<p class='heading'>No</p>",
            classes: ["condition-node", "row"],
          },
          {
            textNode: [],
            endTime: 179.613056,
            startTime: 166.871588,
            hiddenStart: 199.474179,
            hiddenEnd: 284.492365,
            classes: ["process", "pink"],
            id: "whole-number-no-child",
            name:
              "<p class='content'>Change <em>L</em> by rounding it up to the next larger whole number.</p>",
            label:
              "Change L by rounding it up to the next larger whole number.",
            background: "#FFF7FC",
            border: "#941E61",
            arrow: true,
          },
          {
            textNode: [],
            endTime: 199.474179,
            startTime: 179.613056,
            hiddenStart: 199.474179,
            hiddenEnd: 284.492365,
            classes: ["end-child", "process", "pink"],
            id: "left-child",
            name:
              "<p class='content'>The value of <em>P</em><sub><em>k</em></sub> is the <em>L</em>th value, counting from the lowest.</p>",
            label:
              "The value of P sub k is the L th value, counting from the lowest.",
            background: "#FFF7FC",
            border: "#941E61",
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
            endTime: 284.492365,
            startTime: 225.52899,
            visitedStartTime: 152.096791,
            visitedEndTime: 165.998421,
            id: "wholenumber-child-left-yes",
            name: "<p class='heading'>Yes</p>",
            classes: ["condition-node", "column"],
          },
          {
            endTime: 284.492365,
            startTime: 225.52899,
            classes: ["end-child", "process", "green"],
            id: "whole-number-yes-child",
            name:
              "<p class='content'>The value of <em>k</em>th percentile is midway between the <em>L</em>th value and the next value in the sorted set of data. Find <em>P</em><sub><em>k</em></sub> by adding the <em>L</em>th value and the next value and dividing the total by 2.</p>",
            label:
              "The value of kth percentile is midway between the Lth value and the next value in the sorted set of data. Find P subscript k by adding the Lth value and the next value and dividing the total by 2.",
            background: "#ECFDED",
            border: "#397F3C",
            textNode: [],
          },
        ],
      },
    ],
  },
];

export const nodeTimestamp = [
  {
    id: "example1",
    startTime: 80.9022,
    endTime: 104.8453,
  },
  {
    id: "compute",
    startTime: 104.8653,
    endTime: 152.086791,
  },
  {
    id: "wholenumber",
    startTime: 152.096791,
    endTime: 165.998421,
  },
  {
    id: "whole-number-no-child",
    endTime: 179.613056,
    startTime: 166.871588,
  },
  {
    id: "left-child",
    endTime: 199.474179,
    startTime: 179.613056,
  },
  {
    id: "compute",
    startTime: 199.474179,
    endTime: 225.52899,
  },
  {
    id: "whole-number-yes-child",
    endTime: 284.492365,
    startTime: 225.52899,
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

export const activityTitle =
  "Converting from the kth Percentile to the Corresponding Data Value";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "A flow diagram titled, Converting from the kth percentile to the corresponding data value.",
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
