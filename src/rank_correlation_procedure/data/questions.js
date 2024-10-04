import { spaceMountainWaitTimesTable } from "./dataTable";
export default [
  {
    frame: "frame1",
    id: "question1",
    activeTimestamp: 119.984859,
    onContinueTimestamp: 120.626069,
    text: "Given the following paired data consisting of ranks, find the value of the rank correlation coefficient <em>r<sub>s</sub></em>.",
    tabularData:
      "<div class='question3-data-table'>" +
      spaceMountainWaitTimesTable +
      "</div>",
    markerLabel: "Question 1",
    markerTitle: "Question 1",
    questionLabel: "Given the following paired data consisting of ranks, find the value of the rank correlation coefficient r sub s",
    correctAnswer: "optd",
    options: [
      {
        id: "opta",
        text: "0",
        label: "",
        description: "Try again.",
      },
      {
        id: "optb",
        text: "1",
        label: "",
        description: "Try again.",
      },
      {
        id: "optc",
        text: "&minus;0.964",
        label: "",
        description: "Try again.",
      },
      {
        id: "optd",
        text: "0.964",
        label: "",
        description: false,
      },
      {
        id: "opte",
        text: "0.5",
        label: "",
        description: "Try again.​",
      },
    ],
  },
  {
    frame: "frame2",
    id: "question2",
    activeTimestamp: 228.422086,
    onContinueTimestamp: 229.122086,
    text: "With 50 pairs of data it is found that the rank correlation coefficient is <em>r<sub>s</sub></em> =  &minus;0.445. The critical values for a 0.05 significance level are &minus;0.280 and 0.280.Which of the following is a correct conclusion?",
    markerLabel: "Question 2",
    markerTitle: "Question 2",
    questionLabel: "With 50 pairs of data it is found that the rank correlation coefficient is r sub s =  minus 0.445. The critical values for a 0.05 significance level are minus 0.280 and 0.280.Which of the following is a correct conclusion?",
    correctAnswer: "optb",
    options: [
      {
        id: "opta",
        text: "There is not sufficient evidence to support the claim that there is a rank correlation.",
        label: "",
        description:
          "Try again.",
      },
      {
        id: "optb",
        text: "There is sufficient evidence to support the claim that there is a rank correlation.",
        label: "",
        description: false,
      },
      {
        id: "optc",
        text: "There is sufficient evidence to support the claim that the population of paired values has a rank correlation equal to &minus;0.445.",
        label: "",
        description: "Try again.",
      },
      {
        id: "optd",
        text: "There is sufficient evidence to reject the claim that the population of paired values has a rank correlation equal to &minus;0.445.",
        label: "",
        description: "Try again.",
      },
    ],
  },
];
