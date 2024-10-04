import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/methods_for_Inferences_about-two_independent_means.mp3";
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
  // Start Begin
  {
    id: "start",
    textNode: [
      {
        id: "chart-start",
        endTime: 168.226003,
        startTime: 33.099520,
        textNode: [],
        startingPoint: true,
        classes: ["startend", 'down-arrow', 'black'],
        name: "<p class='heading'>Start</p>",
      }
    ],
  },
  // First Chart Condition
  {
    id: "condition1",
    textNode: [
      {
        id: "wholenumber",
        name: ` <div class= 'decision'>
                  <p class='heading'>
                    <span>Are</span>
                    <span><sup class='font-size-20'>&#963;</sup>1 and <sup class='font-size-20'>&#963;</sup>2</span>
                    <span>known?</span>
                  </p>
                </div >`,
        label: "Are Sigma one and Sigma two known.",
        classes: ["decision-box", 'pink-bg', "end-child", "process", "yellow"],
        startTime: 33.099520,
        endTime: 170.226003,
        textNode: [],
      },
      {
        id: 'distribution-with-standard-yes',
        startTime: 38.103395,
        endTime: 55.829683,
        textNode: [],
        name: "<p class='heading'>Yes</p>",
        classes: ['arrow-right'],
      },
      {
        id: 'distribution-with-standard-error',
        startTime: 38.103395,
        endTime: 55.829683,
        classes: ["end-child", "process", "yellow"],
        //id: "whole-number-yes-child",
        name:
          `<p class='content'>Use normal distribution with standard error.
              <div class="root">
              <div class="radicand">
                  <div style="display: flex; align-items: center;">
                      <div style="display: flex;
                      flex-direction: column;
                      align-items: center;">
                          <div class="squre-root-wrapper">
                              <div>
                                  <span>&#963;</span>
                              </div>
                              <div>
                                  <span>2</span>
                                  <span>1</span>
                              </div>
                          </div>
                          <div class='squre-root-bottom-child'>
                              <sup>n</sup>
                              <span>1</span>
                          </div>
                      </div>
                      <div class='plus-sign'>+</div>
                      <div style="    display: flex;
                      flex-direction: column;
                      align-items: center;">
                          <div class="squre-root-wrapper">
                              <div>
                                  <span>&#963;</span>
                              </div>
                              <div>
                                  <span>2</span>
                                  <span>2</span>
                              </div>
                          </div>
                          <div class='squre-root-bottom-child'>
                              <sup>n</sup>
                              <span>2</span>
                          </div>
                      </div>
                  </div>
      
              </div>
          </div>
          </p>`,
        label: "use normal distribution with standard error. Under root whole sigma one squared upon n one plus sigma two squared upon n two.",
        border: "#DE9707",
        background: "#FFF3AA",
        textNode: [],
      },
      {
        id: 'distribution-with-standard-notes',
        startTime: 38.103395,
        endTime: 55.829683,
        textNode: [],
        name: "<p class='heading'>This case almost never occurs in reality.</p>",
        classes: ["end-child", 'side-notes'],
      },
    ],
  },
  {
    id: "condition2",
    textNode: [{
      id: 'can-assumed-no-arrow',
      startTime: 55.909683,
      endTime: 170.226003,
      textNode: [],
      name: "<p class='heading'>No</p>",
      classes: ['down-arrow'],
    },]
  },
  {
    id: "condition3",
    textNode: [
      {
        id: "can-assumed",
        name: `<div class= 'decision'>
                  <p class='heading'>
                    <span>Can</span>
                    <span>it be</span>
                    <span>assumed that</span>
                    <span><sup class='font-size-20'>&#963;</sup>1 = <sup class='font-size-20'>&#963;</sup>2</span>
                    <span>?</span>
                  </p>
                </div >`,
        label: "Can it be assumed that sigma one equals sigma two.",
        classes: ["decision-box", 'pink-bg', "end-child", "process", "yellow"],
        startTime: 55.909683,
        endTime: 170.226003,
        textNode: [],
      },
      {
        id: 'can-assumed-yes-arrow',
        startTime: 67.006133,
        endTime: 129.123499,
        textNode: [],
        name: "<p class='heading'>Yes</p>",
        classes: ['arrow-right'],
      },
      {
        id: 'distribution-with-pooled',
        startTime: 67.006133,
        endTime: 129.123499,
        classes: ["end-child", "process", "yellow"],
        //id: "whole-number-yes-child",
        name: `<p class='content'>Use <em>t</em> distribution with POOLED standard error.</p> `,
        label: "use t distribution with pooled standard error.",
        border: "#DE9707",
        background: "#FFF3AA",
        textNode: [],
      },
      {
        id: 'edistribution-with-pooled-notes',
        startTime: 67.006133,
        endTime: 129.123499,
        textNode: [],
        name: "<p class='heading'>Some statisticians recommend against this approach.</p>",
        label: 'Some statisticians recommend against this approach.',
        classes: ["end-child", 'side-notes'],
      },
    ],
  },
  {
    id: "condition4",
    textNode: [{
      id: 'condition4-yes',
      startTime: 156.522088,
      endTime: 170.226003,
      textNode: [],
      name: "<p class='heading'>No</p>",
      classes: ['down-arrow'],
    }
    ]
  },
  {
    id: "condition5",
    textNode: [
      {
        id: 'approx-method-error',
        startTime: 156.522088,
        endTime: 170.226003,
        classes: ["end-child", "process", "yellow"],
        //id: "whole-number-yes-child",
        name:
          `<p class='content'> Approximate method: Use <em> t</em> distribution with standard error.
          <div class="root">
              <div class="radicand">
                  <div style="display: flex; align-items: center;">
                      <div style="display: flex;
                  flex-direction: column;
                  align-items: center;">
                          <div class="squre-root-wrapper">
                              <div>
                                  <span>s</span>
                              </div>
                              <div>
                                  <span>2</span>
                                  <span>1</span>
                              </div>
                          </div>
                          <div class='squre-root-bottom-child'>
                              <sup>n</sup>
                              <span>1</span>
                          </div>
                      </div>
                      <div class='plus-sign'>+</div>
                      <div style="    display: flex;
                  flex-direction: column;
                  align-items: center;">
                          <div class="squre-root-wrapper">
                              <div>
                                  <span>s</span>
                              </div>
                              <div>
                                  <span>2</span>
                                  <span>2</span>
                              </div>
                          </div>
                          <div class='squre-root-bottom-child'>
                              <sup>n</sup>
                              <span>2</span>
                          </div>
                      </div>
                  </div>
      
              </div>
          </div>
          </p>`,
        label: "approximate method. Use t distribution with standard error. Under root whole S one squared upon n one plus S two squared upon n two.",
        border: "#DE9707",
        background: "#FFF3AA",
        textNode: [],
      },
      // {
      //   id: 'approx-method-error-yes-arrow',
      //   startTime: 162.837142,
      //   endTime: 162.837142,
      //   textNode: [],
      //   name: "<p class='heading'>Yes</p>",
      //   classes: ['arrow-right'],
      // },
      {
        id: 'approx-method-error-notes',
        startTime: 156.522088,
        endTime: 170.226003,
        textNode: [],
        name: "<p class='heading'>Use this method unless instructed otherwise.</p>",
        classes: ["end-child", 'side-notes'],
      },
      {
        id: "start-empty",
        textNode: [],
        classes: ["empty"],
      },
    ],
  },
];


export const nodeTimestamp = [
  {
    id: "wholenumber",
    startTime: 33.099520,
    startTime: 38.103395,
  },
  {
    id: "distribution-with-standard-error",
    startTime: 38.103395,
    endTime: 55.829683,
  },
  {
    id: "can-assumed",
    startTime: 55.909683,
    endTime: 66.903706,
  },
  {
    id: "distribution-with-pooled",
    startTime: 67.006133,
    endTime: 127.244071,
  },
  {
    id: 'approx-method-error',
    startTime: 156.522088,
    endTime: 167.915736,
  },
]

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
  "Methods for Inferences About Two Independent Means";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "A flow diagram titled, Method for Inferences About Two Independent Means.",
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
