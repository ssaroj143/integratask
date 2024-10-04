import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/relationships_chi_square_p_value_goodness_of_fit.mp3";
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

export const hideTimeStamp = {
  startTime: 117.529845,
  endTime: 123.099196
}

export const data = [
  {
    id: "chart-start",
    startTime: 23.2122,
    endTime: 70.629845,
    name:
      "<p>Compare the observed <i>O</i> values to the corresponding expected <i>E</i> values.</p>",
    classes: ["process", "blue"],
    textNode: [],
  },
  {
    id: "exam1",
    textNode: [
      {
        id: "left_child",
        textNode: [
          {
            id: "good_model_arrow",
            name:
              "<p class='content'><i>O</i>s and <i>E</i>s are close</p>",
            classes: ["good_model_arrow", "green", "arrow-text"],
            type: "arrow",
            startTime: 45.883475,
            endTime: 79.886014,
            textNode: []

          },
          {
            id: "good_model_content",
            name:
              "<p>Small <em>χ</em><sup>2</sup> value, large <i>P</i>-value</p><div class='gr-graph'></div><p class='graph-text gr-text'><em>χ</em><sup>2</sup> here</p>",
            classes: ["process", "green", "pb0"],
            textNode: [],
            startTime: 45.883475,
            endTime: 79.886014,
          },
          {
            id: "good_model_arrow2",
            classes: ["good_model_arrow", "green", "arrow-text"],
            type: "arrow",
            name: " ",
            textNode: [],
            startTime: 59.660213,
            endTime: 79.886014,
          },
          {
            id: "good_model_content2",
            name: "<p>Fail to reject <i>H</i><sub>0</sub></p>",
            classes: ["process", "green", "minH100", "text_center"],
            textNode: [],
            startTime: 59.660213,
            endTime: 79.886014,
          },
          {
            id: "good_model_arrow3",
            classes: ["good_model_arrow", "green", "arrow-text"],
            type: "arrow",
            name: " ",
            textNode: [],
            startTime: 72.515843,
            endTime: 79.886014,
          },
          {
            id: "good_model_content3",
            name: "<p>Good fit with assumed distribution</p>",
            classes: ["process", "green", "minH100"],
            textNode: [],
            startTime: 72.515843,
            endTime: 79.886014,
          }
        ],
      },
      {

        id: "right_child",
        textNode: [{
          id: "not_good_model_arrow",
          name:
            "<p class='content'><i>O</i>s and <i>E</i>s are far apart</p>",
          classes: ["not_good_model_arrow", "pink", "arrow-text"],
          type: "arrow",
          startTime: 79.906718,
          endTime: 117.629845,
          textNode: []
        },
        {
          id: "not_model_content",
          name:
            "<p class='graph-text'>Large <em>χ</em><sup>2</sup> value, small <i>P</i>-value</p><div class='pn-graph'></div><p class='graph-text pn-text'><em>χ</em><sup>2</sup> here</p>",
          classes: ["process", "pink", "pb0"],
          textNode: [],
          startTime: 79.906718,
          endTime: 117.629845,
        },
        {
          id: "not_good_model_arrow2",
          name: " ",
          classes: ["not_good_model_arrow", "pink", "arrow-text"],
          type: "arrow",
          startTime: 95.170533,
          endTime: 117.629845,
          textNode: []
        },

        {
          id: "not_model_content2",
          name: "<p>Reject <i>H</i><sub>0</sub></p>",
          classes: ["process", "pink", "minH100", "text_center"],
          textNode: [{
            id: "not_model_content4",
            classes: ["pink", "side_content"],
            type: "",
            name: `<p>"If the P is low, the null must go."</p>`,
            textNode: [],
            startTime: 95.170533,
            endTime: 117.629845,
          }],
          startTime: 95.170533,
          endTime: 117.629845,
        },
        {
          id: "not_good_model_arrow3",
          classes: ["not_good_model_arrow", "pink", "arrow-text"],
          type: "arrow",
          name: " ",
          textNode: [],
          startTime: 102.237731,
          endTime: 117.629845,
        },
        {
          id: "not_model_content3",
          name: "<p>Not a good fit with assumed distribution</p>",
          classes: ["process", "pink", "minH100"],
          textNode: [],
          startTime: 102.237731,
          endTime: 117.629845,
        }
        ]
      },
    ],
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

export const activityTitle = "Relationships Among <em>χ</em><sup>2</sup> Test Statistic, P-Value and Goodness-of-Fit";

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

export const nodeTimestamp = [
  {
    id: "good_model_content",
    startTime: 45.5653,
    endTime: 59.00899,
  },
  {
    id: "good_model_content2",
    startTime: 59.660213,
    endTime: 71.925149,
  },
  {
    id: "good_model_content3",
    startTime: 72.515843,
    endTime: 79.886014,
  },
  {
    id: "not_model_content",
    startTime: 79.906718,
    endTime: 94.170533,
  },
  {
    id: "not_model_content2",
    startTime: 95.170533,
    endTime: 102.8653,
  },
  {
    id: "not_model_content3",
    startTime: 102.237731,
    endTime: 117.071752,
  },


];
export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "Relationships Among <em>χ</em><sup>2</sup> Test Statistic, P-Value and Goodness-of-Fit",
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
