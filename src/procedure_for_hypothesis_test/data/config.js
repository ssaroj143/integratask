import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/procedure_for_hypothesis_test.mp3";
import pdf from "../assets/documents/document.pdf";
import textFile from "../assets/documents/texfile.docx";
console.log("textFile", textFile)
export const audioSrc = audio;
export const pdfDocument = pdf;
export const captionJson = captions;
export const onScreenText = ostText;
export const tocJsonData = tocItems;
export const boundary = boundariesData;
export const transcript = textFile;

export const defaultTocItem = "title";

export const hideChartTime = {
  showTable: 267.423546,
  hideTable: 302.865328,
  startTime: 435.959018,
  endTime: 440.104461,
  hideAgainStartTime: 523.666269,
  hideAgainEndTime: 526.755539,
}

export const timestampsForAttempts = {
  condition1: [
    {
      id: "question_1",
      startTime: 330.745479,
      endTime: 341.666994,
      "P-Value": 338.561554,
      "Critical-Value": 440.003417,
      correct: "P-Value"
    },
    {
      id: "question_1",
      startTime: 330.745479,
      endTime: 341.666994,
      "P-Value": 338.561554,
      "Critical-Value": 440.003417,
      correct: "Critical-Value"
    }
  ],
  condition2: [
    {
      id: "question_2",
      startTime: 541.432086,
      endTime: 550.6688,
      "P-Value": 338.561554,
      "Critical-Value": 440.003417,
      correct: "P-Value"
    },
    {
      id: "question_2",
      startTime: 541.432086,
      endTime: 550.6688,
      "P-Value": 338.561554,
      "Critical-Value": 440.003417,
      correct: "Critical-Value"
    }
  ]
};

export const correctAnswerSequence = {
  condition1: ["P-Value", "Critical-Value"],
  condition2: ["P-Value", "Critical-Value"],
};

export const data = [
  {
    id: "chart-start",
    startTime: 137.6086599,//137.608660,
    endTime: 161.943723,
    classes: ["process", "blue"],
    name: "<h2 class='heading'>1. Identify the Claim</h2><p>Identify the claim to be tested and express it in symbolic form.</p>",
    label: "Identify the claim. Identify the claim to be submitted and express it in symbolic form.",
    textNode: [],
  },
  {
    id: "good_model_arrow_1",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    startTime: 163.364336,
    endTime: 181.051719,
    textNode: []
  },
  {

    id: "chart-start2",
    textNode: [],
    startTime: 163.364336,
    endTime: 181.051719,
    classes: ["process", "blue",],
    name: "<h2 class='heading'>2. Give Symbolic Form</h2><p>Give the symbolic form that must be true when the original claim is false.</p>",
    label: "Give the symbolic form. Give the symbolic form that must be true when the original claim is false.",
  },
  {
    id: "good_model_arrow_2",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    startTime: 181.75409,
    endTime: 433.275934,
    textNode: []
  },
  {

    id: "chart-start3",
    startTime: 181.75409,
    endTime: 433.275934,
    textNode: [],
    classes: ["process", "blue"],
    name: `<h2 class='heading'>3. Identify Null and Alternative Hypothesis</h2><p>Consider the two symbolic expressions obtained so far:</p>
    <ul>
      <li><span class='heading2'>Alternative hypothesis <em>H</em><sub>1</sub></span> is the one <em>NOT</em> containing equality, so <em>H</em><sub>1</sub> uses the symbol &gt; or &lt; or &ne;.</li>
      <li><span class='heading2'>Null hypothesis <em>H</em><sub>0</sub></span> is the symbolic expression that the parameter equals the fixed value being considered.</li>
    </ul>`,
    label: " Identify null and alternative hypothesis. Consider the two symbolic expressions obtained so far. Alternative hypothesis H sub 1 is not containing equality, so H sub 1 uses the symbol greater than or smaller than or not equal to. Null hypothesis H sub zero is the symbolic expression that the parameter equals the fixed value being considered.",
  },
  {
    id: "good_model_arrow_3",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    startTime: 221.462404,
    endTime: 433.275934,
    textNode: []
  },
  {

    id: "chart-start4",
    startTime: 221.462404,
    endTime: 433.275934,
    textNode: [],
    classes: ["process", "blue"],
    name: `<h2 class='heading'>4. Select Significance Level</h2><p>Select the <span class='heading2'>significance level <i>&alpha;</i></span> based on the seriousness of a type l error.
    Make <span class='heading2'><i>&alpha;</i></span> small if the consequences of rejecting a true <em>H</em><sub>0</sub> are severe.
    </p>
    <ul><li>The values of 0.05 and 0.01 are very common.</li></ul>`,
    label: 'Select significance level. Select the significance level Alpha based on the seriousness of a type one error. Make alpha small if the consequences of rejecting a true H sub zero are severe. The true values of zero point zero five and zero point zero one are very common',
  },
  {
    id: "good_model_arrow_4",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    startTime: 246.277854,
    endTime: 433.275934,
    textNode: []
  },
  {

    id: "chart-start5",
    startTime: 246.277854,
    endTime: 433.275934,
    textNode: [],
    classes: ["process", "blue"],
    name: `<h2 class='heading'>5. Identify the Test Statistic</h2>
    <p>Identify the test statistic that is relevant to the test and determine its sampling distribution (such as normal, <i>t</i>, chi-square).</p>`,
    label: ' Identify the test statistics. Identify the test statistic that is relevant to the test and determine its sampling distribution (such as normal, t, chi-square). There are two methods. P value method and critical value method.',
  },
  {
    id: "exam1",
    textNode: [
      {
        id: "good_model",
        textNode: [{
          id: "good_model_arrow_1",
          name: "<p><em>P</em>-Value Method</p>",
          label: "P Value Method",
          classes: ["green", "arrow-text"],
          keyValue: "P-Value",
          type: "button",
          startTime: 303.061247,
          endTime: 436.566704,
          textNode: [
            {
              id: "good_model_content_1",
              name:
                `<h2 class='heading'>6. Find Values</h2>
              <p>Find the value of the <span class='heading2'>test statistic</span> and the <span class='heading2'><em>P</em>-value</span> (see Figure 8-3). Draw a graph and show the text statistic and <em>P</em>-value.</p>`,
              label: "Find the value of the test statistic and the P value (see Figure 8-3). Draw a graph and show the text statistic and P value.",
              classes: ["process", "green"],
              textNode: [],
              startTime: 304.061247,
              endTime: 436.566704,
              glow: true,
              highlightStartTime: 24.0000,
              highlightEndTime: 38.0000,
            }
          ],
        },
        {
          id: "good_model_arrow_2",
          name: " ",
          label: "",
          classes: ["green", "arrow-text"],
          type: "arrow",
          startTime: 382.756395,
          endTime: 436.566704,
          textNode: [
            {
              id: "good_model_content_2",
              name: `<h2 class='heading'>7. Make a Decision</h2>
            
              <ul>
                <li><span class='heading2'>Reject <em>H</em><sub>0</sub></span> if <em>P</em>-value &le; <i>&alpha;</i>.</li>
                <li><span class='heading2'>Fail to reject <em>H</em><sub>0</sub></span> if <em>P</em>-value > <i>&alpha;</i>.</li>
              </ul> 
            `,
              label: "P-value method. Make a decision. Reject H sub zero if P value is smaller than  equal to alpha. Fail to reject H sub zero is P value is greater than alpha. ",
              classes: ["process", "green"],
              textNode: [],
              startTime: 382.756395,
              endTime: 436.566704,
              glow: true,
              highlightStartTime: 24.0000,
              highlightEndTime: 38.0000,
            }
          ],
        }]
      },
      {
        id: "not_good_model",
        textNode: [
          {
            id: "not_good_model_arrow_6",
            name: "<p>Critical Value Method</p>",
            label: "Critical Value Method",
            classes: ["pink", "arrow-text"],
            keyValue: "Critical-Value",
            type: "button",
            startTime: 303.061247,
            endTime: 338.241554,
            visitedStart: 439.124967,
            visitedEnd: 523.751503,
            textNode: [
              {
                id: "not_model_content_1",
                name: `<h2 class='heading'>6. Find Values</h2>
                <p>Find the value of the <span class='heading2'>test statistic</span> and the <span class='heading2'>critical values</span>. Draw a graph showing the test statistic, critical value(s) and critical region.</p>`,
                label: "Find the value of the test statistic and the critical values. Draw a graph showing the test statistic, critical value(s) and critical region.",
                classes: ["process", "pink"],
                textNode: [],
                startTime: 303.061247,
                endTime: 338.241554,
                visitedStart: 439.124967,
                visitedEnd: 523.751503,
                glow: true,
                highlightStartTime: 39.0000,
                highlightEndTime: 50.0000,
              }
            ],
          },
          {
            id: "not_good_model_arrow_7",
            name: " ",
            label: "",
            classes: ["pink", "arrow-text"],
            type: "arrow",
            startTime: 475.157268,
            endTime: 523.751503,
            textNode: [
              {
                id: "not_model_content_2",
                name: `<h2 class='heading'>7. Make a Decision</h2>
                
                  <ul>
                    <li><span class='heading2'>Reject <em>H</em><sub>0</sub></span> if the test statistic is in the critical region.</li>
                    <li><span class='heading2'>Fail to reject <em>H</em><sub>0</sub></span> if the test statistic is not in the critical region.</li>
                  </ul> 
                `,
                label: "Critical value method. Make a decision. Reject H sub zero if the test statistic is in the critical region. Fail to reject H sub zero if the test statistic is not in the critical region. ",
                classes: ["process", "pink"],
                textNode: [],
                startTime: 475.157268,
                endTime: 523.751503,
                glow: true,
                highlightStartTime: 39.0000,
                highlightEndTime: 50.0000,
              }
            ],
          },
        ],
      }
    ],
  },
  {
    id: "exam3",
    textNode: [
      {
        id: "good_model_arrow_8",
        name: " ",
        label: "",
        classes: ["green", "arrow-text"],
        type: "arrow",
        startTime: 413.703832,
        endTime: 436.566704,
        textNode: [],
      },
      {
        id: "not_good_model_arrow_8",
        name: " ",
        label: "",
        classes: ["pink", "arrow-text"],
        type: "arrow",
        startTime: 504.017398,
        endTime: 523.751503,
        textNode: [],
      },
    ],
  },
  {
    id: "chart-start_last",
    startTime: 413.703832,
    endTime: 436.566704,
    visitedStart: 504.017398,
    visitedEnd: 523.751503,
    textNode: [],
    classes: ["process", "blue"],
    name: "<h2 class='heading'>8. Restate Decision in Nontechnical Terms</h2><p>Restate this previous decision in simple nontechnical terms, and address the original claim.</p>",
    label: 'Restate decision in nontechnical terms. Restate this previous decision in simple nontechnical terms and address the original claims.',
  },

];

export const nodeTimestamp = [
  {
    id: "chart-start",
    startTime: 137.233179,
    endTime: 161.364336,
  },
  {
    id: "chart-start2",
    startTime: 163.364336,
    endTime: 181.65409,
  },
  {
    id: "chart-start3",
    startTime: 181.75409,
    endTime: 221.174531,
  },
  {
    id: "chart-start4",
    startTime: 221.462404,
    endTime: 246.090998,
  },
  {
    id: "chart-start5",
    startTime: 246.277854,
    endTime: 264.774606,
  },
  {
    id: "exam1",
    startTime: 303.417023,
    endTime: 336.410012,
  },
  {
    id: "good_model_content_1",
    startTime: 338.381189,
    endTime: 384.369249,
  },
  {
    id: "good_model_content_2",
    startTime: 384.756395,
    endTime: 413.191499,
  },
  {
    id: "chart-start_last",
    startTime: 413.703832,
    endTime: 433.275934,
  },
  {
    id: "not_model_content_1",
    startTime: 439.124967,
    endTime: 475.057512,
  },
  {
    id: "not_model_content_2",
    startTime: 475.157268,
    endTime: 502.100815,
  },
  {
    id: "chart-start_last",
    startTime: 502.517398,
    endTime: 523.751503,
  },
];
export const answerResponse = {
  correct: "This option is correct.",
  incorrect: "This option is incorrect.",
};

export const questionTopHeading = "Question";
export const continueButtonText = "Continue";
export const submitButtonText = "Submit Answer";


export const selectedAllNodes = ["goal", "example", "summary"];

export const activityTitle =
  "Procedure for Hypothesis Tests";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle:
    "A flow diagram titled, procedure for hypothesis tests.",
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
