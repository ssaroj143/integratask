import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/null_and_alt_hypothesis_updated_new1.mp3";
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

export const hideChartTime = {  //to hide the chart
  startTime: 193.573358, //+3seconds after 2.06
  endTime: 196.337485,
  // hideAgainStartTime: 46.201524,
  // hideAgainEndTime: 513.455539,

}

export const timestampsForAttempts = {
  // condition1: [
  //   {
  //     id: "question_1",
  //     startTime: 87.430585,
  //     endTime: 101.990433,
  //     "p>0.05": 99.158667, 
  //     "p=0.05": 99.158667, 
  //     "p≥0.05": 87.567439, 
  //     correct: "p≥0.05"
  //     // 1: 99.158667, 
  //     // 2: 99.158667, 
  //     // 3: 87.567439, 
  //     // correct: 3
  //   },
  //   {
  //     id: "question_1",
  //     startTime: 87.430585,
  //     endTime: 101.990433,
  //     "p>0.05": 99.158667, 
  //     "p=0.05": 99.158667, 
  //     "p≥0.05": 87.567439, 
  //     correct: "p>0.05"
  //   },
  //   {
  //     id: "question_1",
  //     startTime: 87.430585,
  //     endTime: 101.990433,
  //     "p>0.05": 99.158667, 
  //     "p=0.05": 99.158667, 
  //     "p≥0.05": 87.567439, 
  //     correct: "p=0.05"
  //   },
  //   {
  //     id: "question_2",
  //     startTime: 116.467279,
  //     endTime: 153.258112,
  //     "p<0.051": 135.637789,
  //     "p≥0.052": 124.113409,
  //     correct: "p<0.051"
  //   },
  //   {
  //     id: "question_2",
  //     startTime: 116.467279,
  //     endTime: 153.258112,
  //     "p<0.051": 135.637789,
  //     "p≥0.052": 124.113409,
  //     correct: "p≥0.052"
  //   },
  //   {
  //     id: "question_3",
  //     startTime: 157.694056,
  //     endTime: 182.995506,
  //     "p=0.05": 162.449703,
  //     "p≥0.05": 171.780159,
  //     correct:"p=0.05"
  //     // 6: 162.449703,
  //     // 7: 171.780159,
  //     // correct:6
  //   },
  //   {
  //     id: "question_3",
  //     startTime: 157.694056,
  //     endTime: 182.995506,
  //     "p=0.05": 162.449703,
  //     "p≥0.05": 171.780159,
  //     correct:"p≥0.05"
  //   },
  // ]
  condition1: [
    {
      id: "question_1",
      startTime: 89.629344,
      endTime: 105.990433,//+2sec after 1.32
      "first1": 90.55376,//+1sec after 1.29
      "second1": 90.55376,
      "third1": 94.704338,//+2sec after 1.32
      correct: "third1"
    },

  ],
  condition2: [
    {
      id: "question_2",
      startTime: 129.653929,//+2sec after 1.32
      endTime: 160.258112, //+3sec after 2.06
      "first": 142.807789,
      "second": 131.307856,
      correct: "first"
    },
    {
      id: "question_2",
      startTime: 122.467279,
      endTime: 160.258112,
      "first": 141.637789,
      "second": 131.113409,
      correct: "second"
    },
  ],
  condition3: [
    {
      id: "question_3", //+3sec after 2.06
      startTime: 165.694056,
      endTime: 190.995506,
      "first": 170.759703,
      "second": 179.40966,
      correct: "first"
      // 6: 162.449703,
      // 7: 171.780159,
      // correct:6
    },
    {
      id: "question_3",
      startTime: 165.694056,
      endTime: 190.995506,
      "first": 170.509703,
      "second": 179.40966,
      correct: "second"
      // 6: 162.449703,
      // 7: 171.780159,
      // correct:6
    },

  ]
};

export const correctAnswerSequence = {
  condition1: ["third", "first", "second"],
  condition2: ["first", "second"],
  condition3: ["first", "second"],
};

export const data = [
  {
    id: "chart-start",
    highlightStartTime: 0.064028,
    highlightEndTime: 46.188911,
    glow: true,
    startTime: 46.201524,
    endTime: 59.555692,
    // startTime: 59.555692,
    // endTime: 161.943723,
    classes: ["process", "blue"],
    name: "<p class='heading'>1. Identify the Claim</p><span class='chart-content'>Identify the claim to be tested and express it in symbolic form.</span>",
    label: "1. Identify the Claim. Identify the claim to be tested and express it in symbolic form.",
    textNode: [],
  },
  {
    id: "good_model_arrow_1",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    // startTime: 59.555692,
    // endTime: 179.051719,
    startTime: 46.201524,
    endTime: 59.555692,
    hiddenStart: 59.555692,
    hiddenEnd: 77.052378, //+1sec
    textNode: []
  },
  {

    id: "chart-start2",
    textNode: [],
    highlightStartTime: 0.064028,
    highlightEndTime: 46.188911,
    glow: true,
    // startTime: 75.072378,
    // endTime: 179.051719,
    startTime: 46.201524,
    endTime: 59.555692,
    hiddenStart: 59.555692,
    hiddenEnd: 77.052378,//+1sec
    classes: ["process", "blue"],
    name: "<p class='heading'>2. Give Symbolic Form</p><span class='chart-content'>Give the symbolic form that must be true when the original claim is false.</span>",
    label: "2. Give Symbolic Form. Give the symbolic form that must be true when the original claim is false",
  },
  {
    id: "good_model_arrow_2",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    // startTime: 102.001304,
    // endTime: 422.275934,
    startTime: 46.201524,
    endTime: 59.555692,
    hiddenStart: 59.555692,
    hiddenEnd: 107.951304, //104.956165,//+2sec after 1.29
    textNode: []
  },
  {

    id: "chart-start3",
    highlightStartTime: 0.064028,
    highlightEndTime: 46.188911,
    glow: true,
    // startTime: 102.001304,
    // endTime: 422.275934,
    startTime: 46.201524,
    endTime: 59.555692,
    hiddenStart: 59.555692,
    hiddenEnd: 107.951304,//104.956165,//+2sec after 1.29
    textNode: [],
    classes: ["process", "blue"],
    name: `<p class='heading'>3. Identify Null and Alternative Hypothesis</p><span class='chart-content'>Consider the two symbolic expressions obtained so far:</span>
    <ul  class='chart-content'>
      <li><b>Alternative hypothesis <em>H</em><sub>1</sub></b> is the one <em>NOT</em> containing equality, so <em>H</em><sub>1</sub> uses the symbol &gt; or &lt; or &ne;.</li>
      <li><b>Null hypothesis <em>H</em><sub>0</sub></b> is the symbolic expression that the parameter equals the fixed value being considered.</li>
    </ul>`,
    label: "Identify Null and Alternative Hypothesis. Consider the two symbolic expressions obtained so far. Alternative hypothesis H sub 1 is the one not containing equality, so H sub 1 uses the symbol greater than or less than or not equal to. Null hypothesis H sub 0 is the symbolic expression that the parameter equals the fixed value being considered."
  },
  {
    id: "good_model_arrow_3",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    // startTime: 217.462404,
    // endTime: 422.275934,
    hiddenStart: 46.201524,
    hiddenEnd: 193.573358, //+1sec

    textNode: []
  },
  {

    id: "chart-start4",
    // startTime: 217.462404,
    // endTime: 422.275934,
    hiddenStart: 46.201524,
    hiddenEnd: 193.573358, //+1sec
    textNode: [],
    classes: ["process", "blue"],
    name: `<p class='heading'>4. Select Significance Level</p><span class='chart-content'>Select the <b>significance level<em> &alpha;</em> </b>based on the seriousness of a type I error.
    Make <b><span><em>&alpha;</em></span></b> small if the consequences of rejecting a true <em>H</em><sub>0</sub> are severe.
    </span>
    <ul><li>The values of 0.05 and 0.01 are very common.</li></ul>`,
    label: "Select Significance Level. Select the significance level Alpha based on the seriousness of a type one error. Make alpha small if the consequences of rejecting a true H sub 0 are severe. The values of 0.05 and 0.01 are very common."
  },
  {
    id: "good_model_arrow_4",
    name: " ",
    classes: ["green", "arrow-text"],
    type: "arrow",
    // startTime: 241.277854,
    // endTime: 422.275934,
    hiddenStart: 46.201524,
    hiddenEnd: 193.573358, //+1sec
    textNode: []
  },
  {

    id: "chart-start5",
    // startTime: 241.277854,
    // endTime: 422.275934,
    hiddenStart: 46.201524,
    hiddenEnd: 193.573358, //+1sec
    textNode: [],
    classes: ["process", "blue"],
    name: `<p class='heading'>5. Identify the Test Statistic</p>
    <span class='chart-content'>Identify the test statistic that is relevant to the test and determine its sampling distribution (such as normal, <i>t</i>, chi-square).</span>`,
    label: '5. Identify the Test Statistic. Identify the test statistic that is relevant to the test and determine its sampling distribution, such as normal, t, chi square. From here the flow branches out into two, p value method and critical value method.'
  },
  {
    id: "exam1",
    textNode: [
      {
        id: "good_model",
        textNode: [{
          id: "good_model_arrow_1_exam",
          name: " ",
          label: "P-Value Method",
          classes: ["green", "arrow-text"],
          type: "arrow",
          // startTime: 298.061247,
          // endTime: 422.275934,
          hiddenStart: 46.201524,
          hiddenEnd: 193.573358, //+1sec
          textNode: [
            {
              id: "p_value_title",
              name: "<em>P</em>-Value Method",
              classes: ["green-value"],
              textNode: [
                {
                  id: "good_model_content_1",
                  name:
                    `<p class='heading'>6. Find Values</p>
              <span class='chart-content'>Find the value of the <b>test statistic</b> and the <b><em>P</em>-value</b> (see Figure 8-3). Draw a graph and show the test statistic and &nbsp;<em>P</em>-value.</span>`,
                  label: "6. Find Values. Find the value of the test statistic and the P value, see Figure 8 3. Draw a graph and show the test statistic and P value.",
                  classes: ["process", "green"],
                  textNode: [],
                  // startTime: 298.061247,
                  // endTime: 422.275934,
                  hiddenStart: 46.201524,
                  hiddenEnd: 193.573358, //+1sec
                }
              ]
            }
          ],
        },
        {
          id: "good_model_arrow_2_exam",
          name: " ",
          label: "",
          classes: ["green", "arrow-text"],
          type: "arrow",
          // startTime: 375.756395,
          // endTime: 422.275934,
          hiddenStart: 46.201524,
          hiddenEnd: 193.573358, //+1sec
          textNode: [
            {
              id: "good_model_content_2",
              name: `<p class='heading'>7. Make a Decision</p>
            <span class='chart-content'>
              <ul>
                <li><b>Reject <em>H</em><sub>0</sub></b> if <em>P</em>-value &#8804; <em>&alpha;</em>.</li>
                <li><b>Fail to reject <em>H</em><sub>0</sub></b> if <em>P</em>-value > <em>&alpha;</em>.</li>
              </ul> 
            </span>`,
              label: "7. Make a decision. Reject H sub 0 if P value is less than or equal to alpha. Fail to reject H sub 0 if P value is greater than alpha.",
              classes: ["process", "green"],
              textNode: [],
              // startTime: 375.756395,
              // endTime: 422.275934,
              hiddenStart: 46.201524,
              hiddenEnd: 193.573358, //+1sec
            }
          ],
        }]
      },
      {
        id: "not_good_model",
        textNode: [
          {
            id: "not_good_model_arrow_6_exam",
            name: " ",
            label: "Critical Value Method",
            classes: ["pink", "arrow-text"],
            type: "arrow",
            // startTime: 298.061247,
            // endTime: 330.862479,
            // visitedStart: 428.124967,
            // visitedEnd: 507.864243,
            hiddenStart: 46.201524,
            hiddenEnd: 193.573358, //+1sec
            textNode: [
              {
                id: "p_value_title_ngm",
                name: "Critical Value Method",
                classes: ["pink-value"],
                textNode: [
                  {
                    id: "not_model_content_1",
                    name: `<p class='heading'>6. Find Values</p>
                <span class='chart-content'>Find the value of the <b>test statistic</b> and the <b>critical values</b>. Draw a graph showing the test statistic, critical <span class='nowrap'>value(s)</span> and critical region.</span>`,
                    label: "6. Find Values. Find the value of the test statistic and the critical values. Draw a graph showing the test statistic, critical value or values and critical region.",
                    classes: ["process", "pink"],
                    textNode: [],
                    // startTime: 298.061247,
                    // endTime: 330.862479,
                    // visitedStart: 428.124967,
                    // visitedEnd: 507.864243,
                    hiddenStart: 46.201524,
                    hiddenEnd: 193.573358, //+1sec
                  }
                ]
              }
            ],
          },
          {
            id: "not_good_model_arrow_7_exam",
            name: " ",
            label: "",
            classes: ["pink", "arrow-text"],
            type: "arrow",
            // startTime: 463.157268,
            // endTime: 507.864243,
            hiddenStart: 46.201524,
            hiddenEnd: 193.573358,//+1sec
            textNode: [
              {
                id: "not_model_content_2",
                name: `<p class='heading'>7. Make a Decision</p>
                <span class='chart-content'>
                  <ul>
                    <li><b>Reject <em>H</em><sub>0</sub></b> if the test statistic is in the critical region.</li>
                    <li><b>Fail to reject <em>H</em><sub>0</sub></b> if the test statistic is not in the critical region.</li>
                  </ul> 
                </span>`,
                label: "7. Make a decision.Reject H sub 0 if the test statistic is in the critical region. Fail to reject H sub 0 if the test statistic is not in the critical region.",
                classes: ["process", "pink"],
                textNode: [],
                // startTime: 463.157268,
                // endTime: 507.864243,
                hiddenStart: 46.201524,
                hiddenEnd: 193.573358, //+1sec
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
        // startTime: 402.703832,
        // endTime: 422.275934,
        hiddenStart: 46.201524,
        hiddenEnd: 193.573358,//+1sec
        textNode: [],
      },
      {
        id: "not_good_model_arrow_8",
        name: " ",
        label: "",
        classes: ["pink", "arrow-text"],
        type: "arrow",
        // startTime: 490.517398,
        // endTime: 507.864243,
        hiddenStart: 46.201524,
        hiddenEnd: 193.573358,//+1sec
        textNode: [],
      },
    ],
  },
  {
    id: "chart-start_last",
    // startTime: 402.703832,
    // endTime: 422.275934,
    // visitedStart: 490.517398,
    // visitedEnd: 507.864243,
    hiddenStart: 46.201524,
    hiddenEnd: 193.573358, //+1sec
    textNode: [],
    classes: ["process", "blue"],
    name: "<p class='heading'>8. Restate Decision in Nontechnical Terms</p><span class='chart-content'>Restate this previous decision in simple nontechnical terms, and address the original claim.</span>",
    label: 'Both steps 7 lead to step 8. Restate Decision in Nontechnical Terms. Restate this previous decision in simple nontechnical terms, and address the original claim.',
  },

];

export const nodeTimestamp = [
  {
    id: "chart-start",
    startTime: 59.555692,
    endTime: 74.874988, //76.409623,

  },
  {
    id: "chart-start2",
    startTime: 77.052378, //+1sec
    endTime: 103.676165,
  },
  {
    id: "chart-start3", //+1second added 
    startTime: 107.951304, //105.001304, //103.301055,
    endTime: 192.755654, //186.558371, 186.600717,
  },
  {
    id: "chart-start",
    startTime: 194.719579,
    endTime: 249.002449,
  },
  // {
  //   id: "chart-start4",
  //   startTime: 217.462404,
  //   endTime: 241.090998,
  // },
  // {
  //   id: "chart-start5",
  //   startTime: 241.277854,
  //   endTime: 259.774606,
  // },
  // {
  //   id: "chart-start_last",
  //   startTime: 402.703832,
  //   endTime: 422.275934,
  // },
  // {
  //   id: "good_model_content_1",
  //   startTime: 330.961554,
  //   endTime: 375.369249,
  // },
  // {
  //   id: "good_model_content_2",
  //   startTime: 375.756395,
  //   endTime: 402.191499,
  // },
  // {
  //   id: "not_model_content_1",
  //   startTime: 428.124967,
  //   endTime: 463.057512,
  // },
  // {
  //   id: "not_model_content_2",
  //   startTime: 463.157268,
  //   endTime: 490.100815,
  // },
  // {
  //   id: "chart-start_last",
  //   startTime: 490.517398,
  //   endTime: 507.864243,
  // },
];
export const answerResponse = {
  correct: "This option is correct.",
  incorrect: "This option is incorrect.",
};

export const questionTopHeading = "Question";
export const continueButtonText = "Continue";
export const submitButtonText = "Submit Answer";


export const selectedAllNodes = ["goal", "summary"]; //toc

export const activityTitle =
  "Hypothesis Testing: Identifying <em>H</em><sub>0</sub> and <em>H</em><sub>1</sub>";

export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle:
    "Hypothesis Testing: Identifying H sub 0  and H sub 1",
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
