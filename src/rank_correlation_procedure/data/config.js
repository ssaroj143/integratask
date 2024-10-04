import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/rank_correlation_procedure.mp3";
import pdf from "../assets/documents/document.pdf";
import textFile from "../assets/documents/texfile.docx";
import { formula1, formula2, formula3 } from "./formula";

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
        startTime: 42.70579,
        endTime: 59.403077,
        classes: ["startend", "end"],
        name: "<p class='heading'>Start</p>",
      },
      {
        id: "start-empty",
        classes: ["empty", "start"],
      },
    ],
  },
  {
    id: "condition1",
    textNode: [
      {
        id: "decision1",
        name:
          "<div class='decision'><p class='heading'>Are the <em>n</em> pairs of data in the form of ranks?</p></div>",
        label: "Check if the n pairs of data are in the form of ranks.",
        classes: ["decision-box", "no-arrow", "end"],
        startTime: 42.70579,
        endTime: 59.403077,

      },
      {
        id: 'decision1-no',
        classes: ["start"],
        textNode: [
          {
            startTime: 42.70579,
            endTime: 59.403077,

            hideStartTime: 119.984859,//120.326069,
            hideEndTime: 144.727167,
            id: "decision1-no-arrow",
            name: "<p class='heading'>No</p>",
            classes: ["condition-node", "column"],
            textNode: [
              {
                startTime: 42.70579,
                endTime: 59.403077,
                hideStartTime: 119.984859,//120.326069,
                hideEndTime: 144.727167,
                classes: ["process", "pink"],
                id: "decision1-no-process",
                name:
                  "<p class='content'>Convert the data of the first sample to ranks from 1 to <em>n</em> and then do the same for the second sample.</p>",
                label:
                  "Convert the data of the first sample to ranks from 1 to n and then do the same for the second sample.",
              },
            ]
          },

        ],

      },
    ],
  },
  {
    id: "decision1-yes",
    textNode: [
      {
        id: "decision1-yes-arrow",
        startTime: 59.503077,
        endTime: 68.218933,
        classes: ["end"],
        name: "<p class='heading'>Yes</p>",
      },
      {
        id: "decision1-yes-empty",
        classes: ["empty", "start"],
      },
    ]

  },
  {
    id: "condition2",
    textNode: [
      {
        id: "decision2",
        name:
          "<div class='decision'><p class='heading'>Does either variable have ties among its ranks?</p></div>",
        label: "check if either variable have ties among its ranks.",
        classes: ["decision-box", "no-arrow", "end"],
        startTime: 59.503077,
        endTime: 68.218933,
      },
      {
        id: 'decision2-no',
        classes: ["condition-node", "start"],
        startTime: 78.264031,
        endTime: 84.839566,
        hideStartTime: 119.984859,//120.326069,
        hideEndTime: 144.727167,
        name: "<p class='heading'>No</p>",

        textNode: [
          {
            id: "decision2-process",
            startTime: 78.264031,
            endTime: 84.839566,
            hideStartTime: 119.984859,//120.326069,
            hideEndTime: 144.727167,
            classes: ["inner-child", "process", "pink", "nested-child"],
            name:
              "<p class='content'>Calculate the difference <em>d</em> for each pair of ranks by subtracting the lower rank from the higher rank.</p>",
            label:
              " Calculate the difference d for each pair of ranks by subtracting the lower rank from the higher rank.",

          },
        ]

      },
    ],
  },
  {
    id: "condition3",
    textNode: [
      {
        id: "decision2-no-process",
        classes: ["column", "start"],
        textNode: [
          {
            startTime: 85.219311,
            endTime: 91.615523,
            hideStartTime: 119.984859,//120.326069,
            hideEndTime: 144.727167,
            classes: ["process", "pink"],
            id: "decision2-no-process2",
            name: `<p class='heading'>Square each difference <em>d</em> and then find the sum of those squares to get &Sigma;(<em>d</em><sup>2</sup>). </p>`,
            label: "Next, Square each difference d and then find the sum of those squares to get the sum of d squared. ",
          },
          {
            startTime: 92.003768,
            endTime: 119.984859,
            hideStartTime: 119.984859,//120.326069,
            hideEndTime: 144.727167,
            classes: ["inner-child", "process", "pink", "nested-child"],
            id: "decision2-no-process3",
            name: "<p class='heading'>Complete the computation of</p>" + formula2 + "<p>to get the test statistic.</p>",
            label: "Then, Complete the computation of r sub s =1 minus start fraction 6 times the sum of d squared over n left parenthesis n squared minus 1 right parenthesis end fraction to get me test statistic. Next check if n is less than or equal to 30."
          }
        ]
      },
      {
        id: "decision2-yes",
        classes: ["column", "end"],
        textNode: [
          {
            id: "decision2-yes-arrow",
            startTime: 119.984859,//120.326069,
            endTime: 144.727167,
            classes: [""],
            name: "<p class='heading'>Yes</p>",
          },
          {
            startTime: 119.984859,//120.326069,
            endTime: 144.727167,
            classes: ["process", "green"],
            id: "decision2-yes-process",
            name: "<p class='heading'>Calculate <em>r</em><sub>s</sub> using Formula 10-1 with the ranks: " + formula1 + "</p>",
            label: "if either variable have ties among its ranks, then Calculate r sub s, using Formula 10 1 with the ranks, r sub s = start fraction n the sum of x y minus the sum of x times the sum of y over the square root of start expression n times the sum of x squared minus the sum of x the whole squared end expression times the square root of start expression n times the sum of y squared minus the sum of y the whole squared end expression end fraction."
          },
        ]
      },

    ]
  },
  {
    id: "condition4",
    textNode: [
      {
        id: "condition4-arrow",// left only arrow
        startTime: 144.827167,
        endTime: 147.10422,
        classes: ["no-arrow"],
        name: "<div class='arrows'><div class='arrow-top'></div><div class='arrow-bottom'></div></div>"
      },
      {
        id: "decision3",
        classes: ["start"],
        updateStartTime: 159.042626,
        updateEndTime: 196.320907,                        // right decision box with yes/no branch
        textNode: [{
          id: "decision3-left",
          classes: ["column"],
          textNode: [
            {
              id: "decision3-box",
              name:
                "<div class='decision'><p class='heading'>Is <em>n</em><span class='operator'>&nbsp;&leq;&nbsp; </span>30?</p></div>",
              label: "Then, check if n is less than or equal to 30.",
              classes: ["decision-box", "no-arrow"],
              startTime: 144.827167,
              endTime: 147.10422,
            },
            {
              id: "decision3-left-bottom",
              textNode: [
                {
                  id: "decision3-yes-arrow",
                  startTime: 147.10422,
                  endTime: 158.689753,
                  updateStartTime: 159.042626,
                  updateEndTime: 196.320907,
                  classes: ["end"],
                  name: "<p class='heading'>Yes</p>",
                },
                {
                  startTime: 147.10422,
                  endTime: 158.689753,
                  hideArrowStartTime: 158.689753,
                  hideArrowEndTime: 196.320907,
                  updateStartTime: 159.042626,
                  updateEndTime: 196.320907,
                  classes: ["process", "green"],
                  id: "decision3-left-process",
                  name:
                    "<p class='content'>Find the negative and positive critical values of <em>r</em><sub>s</sub> from Table A-9.</p>",
                  label:
                    "if n is less than or equal to 30, Find the negative value positive critical values of r sub s, from Table A 9.",

                }
              ]
            }

          ]
        }, {
          id: "decision3-right",
          textNode: [
            {
              startTime: 159.042626,
              endTime: 196.320907,
              id: "decision3-no-arrow",
              name: "<p class='heading'>No</p>",
              classes: ["condition-node"],
              textNode: [
                {
                  startTime: 159.042626,
                  endTime: 196.320907,

                  classes: ["process", "pink"],
                  id: "decision3-no-process",
                  name:
                    "<p class='content'>Calculate the critical values " + formula3 + "  where <em>z</em> corresponds  to the significance level.</p>",
                  label:
                    "if n is not less than or equal to 30, then Calculate the critical values r sub s = + or minus start fraction z over the square root of start expression n minus 1 end expression end fraction, where z corresponds to the significance level.",
                },

              ]
            },

          ]
        }]

      }
    ]
  },
  {
    id: "condition5",
    startTime: 196.577472,
    endTime: 227.122086,
    classes: ["process", "no-arrow", "green"],
    label: "if r sub s is between the negative and positive critical values, fail to reject the null hypothesis, rho sub s = 0, no correlation. If r sub s is not between the negative and positive critical vanes, reject the null hypothesis, rho sub s = 0 and conclude that there is sufficient evidence to support a claim of a correlation.",
    name: `<ul><li>If <em>r<sub>s</sub></em> is between the negative and positive critical values, fail to reject the null hypothesis <em>&rho;<sub>s</sub></em> = 0 (no correlation).</li><li>If <em>r<sub>s</sub></em> is not between the negative and positive critical values, reject the null hypothesis <em>&rho;<sub>s</sub></em> = 0 and conclude that there is sufficient evidence to support a claim of a correlation.</li></ul>`,
  },
];

export const nodeTimestamp = [
  {
    id: "decision1",
    startTime: 42.70579,
    endTime: 47.938671,
  },
  {
    id: "decision1-no-process",
    startTime: 47.938671,
    endTime: 59.403077,
  },
  {
    id: "decision2",
    startTime: 59.503077,
    endTime: 68.051652,
  },
  {
    id: "decision2-process",
    startTime: 78.264031,
    endTime: 84.839566,
  },
  {
    id: "decision2-no-process2",
    startTime: 85.219311,
    endTime: 91.615523,
  },
  {
    id: "decision2-no-process3",
    startTime: 92.003768,
    endTime: 119.984859,
  },
  {
    id: "decision2-yes-process",
    startTime: 119.984859,//120.326069,
    endTime: 144.827167,
  },
  {
    id: "decision3-box",
    startTime: 144.827167,
    endTime: 147.10422,
  },
  {
    id: "decision3-left-process",
    startTime: 147.10422,
    endTime: 158.689753,
  },
  {
    id: "decision3-no-process",
    startTime: 159.042626,
    endTime: 196.320907,
  },
  {
    id: "condition5",
    startTime: 196.577472,
    endTime: 227.122086,
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
  "Rank Correlation Procedure";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle:
    "A flow chart titled, Rank correlation procedure for Testing, H sub 0, rho sub s = 0.",
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
