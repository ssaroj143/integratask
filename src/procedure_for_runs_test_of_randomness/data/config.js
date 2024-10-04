import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/procedure_for_runs_test_of_randomness.mp3";
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
        startTime: 55.599198,
        endTime: 86.13787,
        vTime: 225.52899,
        textNode: [],
        startingPoint: true,
        classes: ["startend"],
        name: "<p class='heading'>Start</p>",
      },
    ],
  },
  {
    id: "exam1",
    textNode: [
      {
        id: "example1",
        name:
          "<p>Identify a sequence of two different characteristics.</p>",
        classes: ["process", "blue"],
        startTime: 55.599198,
        endTime: 62.874152,
        vTime: 225.52899,
        textNode: [],
        // background: "#EFFBFF",
        // border: "#00749B",
      },

    ],
  },
  {
    id: "comp",
    textNode: [
      {
        id: "compute",
        // type: "maths",
        name: `<p>
        Determine the value of <em>n</em><sub>1</sub>, the number of elements of the first type.
        </p>`,
        label: "Determine the value of n sub 1, the number of elements of the first type",
        classes: ["process", "blue"],
        vTime: 225.52899,
        startTime: 62.874152,
        endTime: 68.027418,
        visitedS: 86.13787,
        visitedE: 225.52899,
        textNode: [],
        // background: "#EFFBFF",
        // border: "#00749B",
      },

    ],
  },
  {
    id: "comp1",
    textNode: [
      {
        id: "compute1",
        // type: "maths",
        name: ` <p>Determine the value of <em>n</em><sub>2</sub>, the number of elements of the second type.</p>`,
        label: "Determine the value of n sub 2, the number of elements of the second type",
        classes: ["process", "blue"],
        vTime: 225.52899,
        startTime: 68.027418,
        endTime: 73.574611,
        visitedS: 199.474179,
        visitedE: 225.52899,
        textNode: [],
        // background: "#EFFBFF",
        // border: "#00749B",
      },

    ],
  },
  {
    id: "comp2",
    textNode: [
      {
        id: "compute2",
        // type: "maths",
        name: `<p>Determine the value of <em>G</em>, the number of runs.</p>`,
        label: "determine the value of G, the number of runs.",
        classes: ["process", "blue"],
        vTime: 225.52899,
        startTime: 73.574611,
        endTime: 86.13787,
        visitedS: 199.474179,
        visitedE: 225.52899,
        textNode: [
          // {
          //   textNode: [],
          //   type: "child",
          //   startTime: 86.14787,
          //   endTime: 165.998421,
          //   // hiddenStart: 199.474179,
          //   // hiddenEnd:226.289,

          //   id: "wholenumber-child-left5",
          //   name: "<p class='heading'></p>",
          //   classes: ["condition-node", "row", "arrow-show"],
          // },
        ],
        // background: "#EFFBFF",
        // border: "#00749B",
      },

    ],
  },
  {
    id: "condition1",
    textNode: [
      {
        id: "left-section",
        textNode: [
          {
            id: "wholenumber2",
            name: "<div class='decision'><div aria-hidden='true' class='decision-text' ><p>Is <em>n</em><sub>1</sub> > 20?</p></div><div class='sr-only-max-width'>if n sub 1 is greater than 20,</div></div>",
            // label: "if n sub 1 is not greater than 20,",
            classes: ["decision-box"],
            startTime: 86.14787,
            endTime: 93.763676,
            textNode: [
              {
                textNode: [],
                type: "child",
                startTime: 93.763676,
                endTime: 165.998421,


                id: "wholenumber-child-left",
                name: "<p class='heading'>No</p>",
                classes: ["condition-node", "row"],
              },
            ],
          },
          {
            id: "wholenumber3",
            name: "<div class='decision'><div aria-hidden='true' class='decision-text' ><p>Is <em>n</em><sub>2</sub> > 20?</p></div><div class='sr-only-max-width'>then check if n sub 2 is greater than 20.If yes go to step 6 a.</div></div>",
            // label: " ",
            classes: ["decision-box"],
            startTime: 93.763676,
            endTime: 97.231718,

            visitedStartTime: 225.52899,
            visitedEndTime: 226.289,

            textNode: [
              {
                textNode: [],
                type: "child",
                startTime: 97.231718,
                endTime: 165.998421,

                id: "wholenumber-child-left2",
                name: "<p class='heading'>No</p>",
                classes: ["condition-node", "row"],
              }
            ],
          },
          {
            id: "wholenumber1",
            name: "<div class='decision'><div aria-hidden='true' class='decision-text' ><p>Does <em>&alpha;</em> = 0.05?</p></div><div class='sr-only-max-width'> check if alpha = 0.05. If not go to step 6 a.</div></div>",
            // label: "",
            classes: ["decision-box"],
            startTime: 97.231718,
            endTime: 102.106514,
            visitedStartTime: 225.52899,
            visitedEndTime: 226.289,


            textNode: [
              {
                textNode: [],
                type: "child",
                startTime: 102.106514,
                endTime: 165.998421,

                hiddenStart: 113.528921,
                hiddenEnd: 162.607307,
                id: "wholenumber-child-left3",
                name: "<p class='heading'>Yes</p>",
                classes: ["condition-node", "row"],
              },

            ],
          },
          {
            endTime: 113.528921,
            startTime: 102.106514,
            classes: [, "process", "green"],
            id: "whole-number-yes-child",
            name:
              "<p class='content'>The test statistic is <em>G</em>. Use Table A-10 to get the critical values.</p>",
            label: "<p class='content'>The test statistic is G. Use Table A-10 to get the critical values.</p>",
            //   "the test statistic is G. Use Table A-10 to get the critical values.",
            // background: "#ECFDED",
            // border: "#397F3C",
            textNode: [
              // {
              //   textNode: [],
              //   type: "child",
              //   startTime: 98.010641,
              //   endTime:226.289,
              //   // hiddenStart: 199.474179,
              //   // hiddenEnd:226.289,

              //   id: "wholenumber-child-left5",
              //   name: "<p class='heading'></p>",
              //   classes: ["condition-node", "row", "arrow-show"],
              // },
            ],
            hiddenStart: 113.528921,
            hiddenEnd: 162.507307,
          },
          {
            endTime: 226.289,
            startTime: 162.607307,
            classes: ["end-child", "process", "green"],
            id: "whole-number-yes-child2",
            name:
              "<p class='content'>Reject randomness if the test statistic is less than or equal to the smaller critical value or greater than or equal to the larger critical value. Otherwise, fail to reject the null hypothesis of randomness.</p>",
            // label:
            //   "Reject randomness if the test statistic is less than or equal to the smaller critical value or greater than or equal to the larger critical value. Otherwise, fail to reject the null hypothesis of randomness.",
            //background: "#ECFDED",
            //border: "#397F3C",
            textNode: [
              {
                textNode: [],
                type: "child",
                endTime: 284.492365,
                startTime: 162.607307,
                // hiddenStart: 199.474179,
                // hiddenEnd: 284.492365,

                id: "wholenumber-child-left4",
                name: "<p class='heading'></p>",
                classes: ["condition-node", "row", "back"],
              }

            ]
          },

        ]
      },
      {
        id: "right-section",
        textNode: [
          {
            endTime: 135.344733,
            startTime: 113.890511,
            classes: ["process", "pink", "equation-container"],
            id: "whole-number-yes-child9",
            name: "",
            // label: "calculate mu sub G = start fraction 2 n sub 1 n sub 2 over n sub 1 + n sub 2 end fraction + 1",
            background: "rgb(255, 247, 252)",
            border: "rgb(148, 30, 97)",
            textNode: [
              {
                textNode: [],
                type: "child",
                startTime: 113.890511,
                endTime: 165.998421,
                // hiddenStart: 199.474179,
                // hiddenEnd:226.289,

                id: "wholenumber-child-left4",
                name: "<p class='heading'>Yes</p>",
                classes: ["condition-node", "row", "from-box1"],
              },
              {
                textNode: [],
                type: "child",
                startTime: 113.890511,
                endTime: 165.998421,
                // hiddenStart: 199.474179,
                // hiddenEnd:226.289,

                id: "wholenumber-child-left5",
                name: "<p class='heading'>Yes</p>",
                classes: ["condition-node", "row", "from-box2"],
              },
              {
                textNode: [],
                type: "child",
                startTime: 113.890511,
                endTime: 165.998421,
                // hiddenStart: 199.474179,
                // hiddenEnd:226.289,

                id: "wholenumber-child-left6",
                name: "<p class='heading'>No</p>",
                classes: ["condition-node", "row", "from-box3"],
              },
              // {
              //   textNode: [],
              //   type: "child",
              //   startTime: 138.270318,
              //   endTime: 226.289,


              //   id: "wholenumber-child-left7",
              //   name: "<p class='heading'></p>",
              //   classes: ["condition-node", "row"],
              // },
            ]
          },
          {
            endTime: 135.344733,
            startTime: 113.890511,
            classes: ["process", "pink", "equation-container"],
            id: "whole-number-yes-child3",
            name:
              "<div class='content'><div class='description'>Calculate</div> <div class='fraction'><div class='value'><em>&mu;<sub>G</sub></em><span class='sign'>=</span></div><div class='fraction-equestion'><div  class='numerator'>2<em>n</em><sub>1</sub><em>n</em><sub>2</sub></div><div class='denominator'><em>n</em><sub>1</sub> <span>+</span><em>n</em><sub>2</sub></div></div><div class='extra-fraction'><span class='sign'>+</span>1</div></div>",
            label: "calculate mu sub G = start fraction 2 n sub 1 n sub 2 over n sub 1 + n sub 2 end fraction + 1",
            // background: "rgb(255, 247, 252)",
            // border: "rgb(148, 30, 97)",
            textNode: []
          },
          {
            endTime: 145.001382,
            startTime: 135.444733,
            classes: ["process", "pink", "equation-container"],
            id: "whole-number-yes-child4",
            name:
              "<div class='content'><div class='description'>Calculate</div> <div class='fraction'><div class='value'><em>&sigma;<sub>G</sub></em><span class='sign'>=</span></div><div class='squar-root'><div class='fraction-equestion '><div  class='numerator root'>2<em>n</em><sub>1</sub><em>n</em><sub>2</sub>(2<em>n</em><sub>1</sub><em>n</em><sub>2</sub>-<em>n</em><sub>1</sub>-<em>n</em><sub>2</sub>)</div><div class='denominator'>(<em>n</em><sub>1</sub> <span>+</span><em>n</em><sub>2</sub>)<sup>2</sup> (<em>n</em><sub>1</sub> <span>+</span><em>n</em><sub>2</sub> - 1)</div></div></div></div>",
            label: "Then, go to step 6 a. Calculate sigma sub G = the square root of start fraction 2 n sub 1 n sub 2 left parenthesis 2 n sub 1 n sub 2 minus n sub 1 minus n sub 2 right parenthesis over left parenthesis n sub 1 + n sub 2 right parenthesis squared left parenthesis n sub 1 + n sub 2 minus 1 right parenthesis end fraction",
            //   "The value of kth percentile is midway between the Lth value and the next value in the sorted set of data. Find P subscript k by adding the Lth value and the next value and dividing the total by 2.",
            // background: "rgb(255, 247, 252)",
            // border: "rgb(148, 30, 97)",
            textNode: []
          },
          {
            endTime: 157.294188,
            startTime: 145.001382,
            classes: ["process", "pink", "equation-container"],
            id: "whole-number-yes-child5",
            name:
              "<div class='content'><div class='description'>Calculate the test statistic</div> <div class='fraction'><div class='value'><em>z</em><span class='sign'>=</span></div><div class='fraction-equestion'><div  class='numerator'><em>G - &mu;<sub>G</sub></em></div><div class='denominator'><em>&sigma;<sub>G</sub></em></div></div></div>",
            label: "Next, Calculate the test statistic z = start fraction G minus mu sub G over sigma sub G end fraction.",
            //   "The value of kth percentile is midway between the Lth value and the next value in the sorted set of data. Find P subscript k by adding the Lth value and the next value and dividing the total by 2.",
            // background: "rgb(255, 247, 252)",
            // border: "rgb(148, 30, 97)",
            textNode: [

            ]
          },
          {
            endTime: 226.289,
            startTime: 157.294188,
            classes: ["end-child", "process", "pink", "equation-container",],
            id: "whole-number-yes-child6",
            name:
              "<p class='content'>Determine the critical values of <em>z</em> from Table A-2 as usual. (If <em>&alpha;</em> = 0.05, the critical values are -1.96 and 1.96.)</p>",
            label: "Then, Determine the critical values of z from Table A 2 as usual. If alpha = 0.05, the critical values are negative 1.96 and 1.96.",
            //   "determine the critical values of z from the table A-2 as usual (if alpha -0.05, the critical values are -1.96 and 1.96.)",
            // background: "rgb(255, 247, 252)",
            // border: "rgb(148, 30, 97)",
            textNode: [

            ]
          },
        ]
      },
    ]
  }




];

export const nodeTimestamp = [
  {
    id: "example1",
    startTime: 55.599198,
    endTime: 62.874152,
  },
  {
    id: "compute",
    startTime: 62.874152,
    endTime: 68.027418,
  },
  {
    id: "compute1",
    startTime: 68.027418,
    endTime: 73.574611,
  },
  {
    id: "compute2",
    startTime: 73.574611,
    endTime: 86.13787,
  },
  {
    id: "wholenumber2",
    startTime: 86.14787,
    endTime: 93.763676,
  },
  {
    id: "wholenumber3",
    startTime: 93.763676,
    endTime: 97.231718,
  },
  {
    id: "wholenumber1",
    startTime: 97.231718,
    endTime: 102.106514,
  },
  {
    id: "wholenumber2",
    startTime: 115.233464,
    endTime: 117.837061,
  },
  {
    id: "wholenumber3",
    startTime: 118.784602,
    endTime: 120.943707,
  },
  {
    id: "wholenumber1",
    startTime: 121.444631,
    endTime: 125.776274,
  },

  {
    id: "whole-number-yes-child",
    startTime: 102.106514,
    endTime: 113.518921,
  },

  {
    id: "whole-number-yes-child3",
    startTime: 126.314092,
    endTime: 135.344733,
  },
  {
    id: "whole-number-yes-child4",
    startTime: 135.444733,
    endTime: 145.001382,
  },
  {
    id: "whole-number-yes-child5",
    startTime: 145.001382,
    endTime: 157.294188,
  },
  {
    id: "whole-number-yes-child6",
    startTime: 157.294188,
    endTime: 162.607307,
  },
  {
    id: "whole-number-yes-child2",
    startTime: 162.607307,
    endTime: 187.585930,
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
  "Procedure for Runs Test of Randomness";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle:
    "A flowchart titled, Procedure for Runs Test for randomness.",
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
