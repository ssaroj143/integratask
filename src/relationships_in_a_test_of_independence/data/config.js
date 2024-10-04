import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/relationships_in_test_for_independence.mp3";
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

export const timeStamp = {
  startTime: 29.604787,
  endTime: 67.836507
}

export const hideTimeStamp = {
  startTime: 134.554721,
  endTime: 140.216735
}

export const data = [
  {
    id: "chart-start",
    startTime: 67.936507,
    endTime: 72.985971,

    textNode: [],

    classes: ["process", "blue"],
    name: "<p class='heading'>Compare the observed <i>O</i> values to the corresponding expected <i>E</i> values.</p>",
    data: "",
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
              "<p class='content'><i>O</i>s and <i>E</i>s are <i>close</i></p>",
            classes: ["green", "arrow-text"],
            type: "arrow",
            startTime: 73.585971,
            endTime: 108.765308,
            textNode: []
          },
          {
            id: "good_model_content",
            name:
              "<div class='sr-only'>A branch from step 1 labeled O’s and E’s are close points to small chi squared value, large P value. A graph displays a normal curve that is skewed right with the region toward the end of the right tail shaded. The remaining region under the curve is chi squared.</div><div aria-hidden='true' class='text-content'><p>Small χ<sup>2</sup> value, large <i>P</i>-value</p><div class='gr-graph'></div><p class='down-text'>χ<sup>2</sup> here</p></div>",
            classes: ["process", "green"],
            textNode: [],
            startTime: 73.585971,
            endTime: 108.765308,
            glowStartTime: 147.958977,
            glowEndTime: 154.153877
          },
          {
            id: "fail_reject_arrow",
            name: "1",
            classes: ["green", "arrow-text"],
            type: "arrow",
            startTime: 85.94362,
            endTime: 108.765308,
            textNode: [
              {
                id: "fail_reject_content",
                name:
                  "<p>Fail to reject  independence</p>",
                classes: ["process", "green"],
                textNode: [],
                startTime: 85.94362,
                endTime: 108.765308,
                glowStartTime: 147.958977,
                glowEndTime: 154.153877
              }
            ],
          },
        ],
      },
      {
        id: "right_child",
        textNode: [
          {
            id: "not_good_model_arrow",
            name:
              "<p class='content'><i>O</i>s and <i>E</i>s are <i>far apart</i></p>",
            classes: ["pink", "arrow-text"],
            type: "arrow",
            startTime: 108.865308,
            endTime: 134.554721,
            textNode: [],
          },
          {
            id: "not_model_content",
            name:
              "<div class='sr-only'>A branch from step 1 labeled O’s and E’s are far apart points to large chi squared value, small P value. A graph displays a normal curve that is skewed right with the region toward the end of the right tail shaded. The shaded region under the curve is chi squared.</div><div aria-hidden='true'><p>Large χ<sup>2</sup> value, small <i>P</i>-value</p><div class='pn-graph'></div><p class='down-text'>χ<sup>2</sup> here</p></div>",
            classes: ["process", "pink"],
            textNode: [],
            startTime: 108.865308,
            endTime: 134.554721,
            glowStartTime: 155.153877,
            glowEndTime: 160.260086
          },
          {
            id: "reject_arrow",
            name: "1",
            classes: ["pink", "arrow-text"],
            type: "arrow",
            startTime: 123.885929,
            endTime: 134.554721,
            textNode: [
              {
                id: "reject_content",
                name:
                  "<p class='sr-only'>Reject independence</p> <p aria-hidden='true'>Reject <br/> independence</p>",
                classes: ["process", "pink"],
                glowStartTime: 155.153877,
                glowEndTime: 160.260086,
                textNode: [
                  {
                    id: "sideText",
                    startTime: 123.885929,
                    endTime: 134.554721,
                    textNode: [],
                    classes: ["pink", "side-text"],
                    name: '<p class="heading"><i>"If the P is low, independence must go."</i></p>',
                    data: "",

                  }
                ],
                startTime: 123.885929,
                endTime: 134.554721,
              }
            ],
          },
        ]
      },
    ],
  },
];

export const nodeTimestamp = [
  {
    id: "chart-start",
    startTime: 67.936507,
    endTime: 72.985971,
  },
  {
    id: "good_model_content",
    startTime: 73.585971,
    endTime: 85.94362
  },
  {
    id: "not_model_content",
    startTime: 108.865308,
    endTime: 123.885929
  },
  {
    id: "fail_reject_content",
    startTime: 85.94362,
    endTime: 108.765308,
  },
  {
    id: "reject_content",
    startTime: 123.885929,
    endTime: 134.554721,
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

export const selectedAllNodes = ["goal", "observednexpected", "summary"];

export const activityTitle = "Relationships Among Key Components in a Test of Independence";

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
  activityTitle: "A flowchart comparing the observed and expected values.",
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
