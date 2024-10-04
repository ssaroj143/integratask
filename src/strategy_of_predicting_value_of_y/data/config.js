import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/strategy_of_predicting_value_of_y.mp3";
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


  startTime: 124.897486,
  endTime: 128.722839,
}

const node1DOM = [
  {

    startTime: 23.656274,
    endTime: 30.712571,
    id: "context",
    name: "The regression line graphed in the scatterplot shows that the line fits the points well."

  },
  {

    startTime: 30.722571,
    endTime: 35.508535,
    id: "sourceofdata",
    name: "<span aria-hidden='true'><em>r</em> indicates that there is a linear correlation.</span><span class='sr-only'>r indicates that there is linear correlation.</span>"

  },
  {

    startTime: 35.528535,
    endTime: 42.721038,
    id: "samplingmethod",
    name: "The prediction is not much beyond the scope of the available sample data."

  },
];

export const data = [
  {

    id: "chart-start",
    startTime: 11.813351,
    endTime: 42.721038,

    textNode: [],

    classes: ["process", "blue"],
    name: "<p class='heading'>Is the regression equation a good model?</p>",
    data: node1DOM,
  },
  {
    id: "exam1",
    textNode: [
      {
        id: "good_model_arrow",
        name:
          "<p >Yes.</p><p class='content'>The regression equation is a good model.</p>",
        classes: ["green", "arrow-text"],
        type: "arrow",
        startTime: 42.741038,
        endTime: 81.749675,
        textNode: [
          {
            id: "good_model_content",
            name:
              `<p>
              Substitute the given value of <em>x</em> into the regression equation<br/>
              <div class='expression'>
              <span class='caret'>
              <span class='hat'></span>
              <span><em>y</em></span>
              </span>
              
              <span class='exp'>&nbsp;=&nbsp;<em>b</em><sub>0</sub>&nbsp;+&nbsp;<em>b</em><sub>1</sub><span class='sub-x'><em>x</em></span></span></div></p>`,
            label: "Substitute the given value of x into the regression equation y hat = b sub 0 + b sub 1 x.",
            classes: ["process", "green"],
            textNode: [],
            startTime: 42.741038,
            endTime: 81.749675,
          }
        ],
      },
      {
        id: "not_good_model_arrow",
        name:
          "<p>No.</p><p class='content'>The regression equation <em>is not</em> a good model.</p>",
        // label:"The regression equation is not a good model",
        classes: ["pink", "arrow-text"],
        type: "arrow",
        startTime: 81.864759,
        endTime: 128.602093,
        textNode: [
          {
            id: "not_model_content",
            name:
              "<p>Regardless of the value of <em>x</em>, the best predicted value of <em>y</em> is the value of <span class='bar'><span class='line'></span><span><em>y</em></span></span> (the mean of the <em>y</em> values).</p>",
            label: "Regardless of the value of x, the best predicted value of y is the value of y, the mean of the y values.",
            classes: ["process", "pink"],
            textNode: [],
            startTime: 81.864759,
            endTime: 128.602093,
          }
        ],
      },
    ],
  },


];

export const nodeTimestamp = [
  {
    id: "good_model_content",
    startTime: 42.741038,
    endTime: 81.749675,
  },
  {
    id: "not_model_content",
    startTime: 81.864759,
    endTime: 128.602093,
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
  "Strategy for Predicting <br/>Values of y";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "A flow chart depicts Strategy for Predicting Values of y",
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
