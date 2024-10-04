import ostText from "./ostText";
import tocItems from "./tocItems";
import captions from "./closedCaptions";
import questionsData from "./questions";
import boundariesData from "./boundary";
import audio from "../assets/audios/relationship_between_f_test_and_p_value.mp3";
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
  endTime: 66.836507
}

export const hideTimeStamp = {
  startTime: 108.634089,
  endTime: 111.053007
}

export const data = [

  {
    id: "exam1",
    textNode: [
      {
        id: "left_child",
        textNode: [
          {
            id: "good_model_arrow",
            name:
              "<p class='content'>Sample means are all close</p>",
            classes: ["green", "arrow-text"],
            type: "text",
            startTime: 41.56564,
            endTime: 68.594412,
            textNode: []
          },
          {
            id: "good_model_content",
            name:
              "<div  class='text-content sr-only'><p>Small F test statistic, large P-value</p><p class='down-text'>F here</p></div><div  class='text-content' aria-hidden='true'><p>Small <i>F</i> test statistic, large <i>P</i>-value</p><div class='gr-graph'></div><p class='down-text'><i>F</i> here</p></div>",
            classes: ["process", "green", "text-align-left"],
            textNode: [],
            startTime: 41.56564,
            endTime: 68.594412,
            glowStartTime: 122.596774,
            glowEndTime: 128.751118,
            glow: true,
            ariaLabel: "When sample means are all close, there is small F Test statistic and large P value. This is depicted as a right skewed distribution curve with region under skewed region on the right, shaded. The region that is not shaded is labeled, F here."
          },
          {
            id: "fail_reject_arrow",
            name: "1",
            classes: ["green", "arrow-text"],
            type: "arrow",
            startTime: 55.734863,
            endTime: 68.594412,
            glowStartTime: 122.596774,
            glowEndTime: 128.751118,
            textNode: [
              {
                id: "fail_reject_content",
                name:
                  "<div><p>Fail to reject equality of population means</p></div>",
                classes: ["process", "green"],
                textNode: [],
                startTime: 55.734863,
                endTime: 68.594412,
                glowStartTime: 122.596774,
                glowEndTime: 128.751118,
                glow: true,

                ariaLabel: "Thus fail to reject equality of population means."
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
              "<p class='content'>At least one sample mean is very different</p>",
            classes: ["pink", "arrow-text"],
            type: "text",
            startTime: 68.60594412,
            endTime: 111.153007,
            textNode: [],
          },
          {
            id: "not_model_content",
            name:
              "<div class='sr-only'><p>Large F test statistic, small P-value</p><p class='down-text'>F here</p></div><div aria-hidden='true'><p>Large <i>F</i> test statistic, small <i>P</i>-value</p><div class='pn-graph'></div><p class='down-text'><i>F</i> here</p></div>",
            classes: ["process", "pink", "text-align-left"],
            textNode: [],
            startTime: 68.909257,
            endTime: 111.153007,
            glowStartTime: 129.151607,
            glowEndTime: 138.65988,
            glow: true,
            ariaLabel: "When at least one sample mean is very different, there is large F test statistic and small P value. This is depicted as a right skewed distribution curve with region under skewed region on the right, shaded and labeled, F here."
          },
          {
            id: "reject_arrow",
            name: "1",
            classes: ["pink", "arrow-text"],
            type: "arrow",
            startTime: 79.471387,
            endTime: 111.153007,
            textNode: [
              {
                id: "reject_content",
                name:
                  "<p>Reject equality of population means</p>",
                classes: ["process", "pink"],
                textNode: [
                  // {
                  //   id: "sideText",
                  //   startTime: 122.885929,
                  //   endTime: 133.554721,
                  //   textNode: [],
                  //   classes: ["pink", "side-text"],
                  //   name: '<p class="heading"><i>"If the P is low, independence must go."</i></p>',
                  //   data: "",
                  //   glowStartTime: 154.153877,
                  //   glowEndTime: 159.260086
                  // }
                ],
                startTime: 79.471387,
                endTime: 111.153007,
                glowStartTime: 129.151607,
                glowEndTime: 138.65988,
                glow: true,
                ariaLabel: "Thus, reject equality of population means."
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
    id: "good_model_content",
    startTime: 41.56564,
    endTime: 68.594412,
  },
  {
    id: "fail_reject_content",
    startTime: 55.734863,
    endTime: 68.594412,
  },
  {
    id: "not_model_content",
    startTime: 68.909257,
    endTime: 108.127003,
  },
  {
    id: "reject_content",
    startTime: 79.471387,
    endTime: 108.127003,
  },


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

export const activityTitle = "Relationship Between the F Test Statistic and the P-Value";

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
export const questions = questionsData;

export const altText = {
  logo: "Pearson Logo",
  titleLogo: "Triola Stats Logo",
  activityTitle: "A diagram explains the relationship between F Test statistic and the P Value, when sample means are all close and at least one sample mean is very different.",
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
  flowChartAltText: ""
};
