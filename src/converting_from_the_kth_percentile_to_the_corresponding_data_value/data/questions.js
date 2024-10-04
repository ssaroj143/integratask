import { spaceMountainWaitTimesTable } from "./dataTable";
export default [
  {
    frame: "frame1",
    id: "question1",
    activeTimestamp: 80.1022,
    onContinueTimestamp: 80.9022,
    text: "Which of the following is the same as the 25th percentile?",
    markerLabel: "Question 1",
    markerTitle: "Question 1",
    questionLabel: "",
    correctAnswer: "opta",
    options: [
      {
        id: "opta",
        text: "Q<sub>1</sub>",
        label: "",
        description: "The 25th percentile is the same as the first quartile.​",
      },
      {
        id: "optb",
        text: "Q<sub>2</sub>",
        label: "",
        description: "Try again.",
      },
      {
        id: "optc",
        text: "Q<sub>3</sub>",
        label: "",
        description: "Try again.",
      },
      {
        id: "optd",
        text: "Q<sub>25</sub>",
        label: "",
        description: "Try again.​",
      },
    ],
  },
  {
    frame: "frame2",
    id: "question2",
    activeTimestamp: 165.988421,
    onContinueTimestamp: 166.908421,
    text: "Which one of the following is a whole number?",
    markerLabel: "Question 2",
    markerTitle: "Question 2",
    questionLabel: "",
    correctAnswer: "optc",
    options: [
      {
        id: "opta",
        text: "50/100",
        label: "",
        description:
          "50/100 = 0.5. Whole numbers have no fractional or decimal part.",
      },
      {
        id: "optb",
        text: "27.5",
        label: "",
        description: "Whole numbers have no fractional or decimal part​.",
      },
      {
        id: "optc",
        text: "38",
        label: "",
        description: "",
      },
      {
        id: "optd",
        text: "2/3",
        label: "",
        description:
          "2/3 = 0.67 (rounded). Whole numbers have no fractional or decimal part.",
      },
    ],
  },
  {
    frame: "frame11",
    id: "question3",
    activeTimestamp: 284.492365,
    onContinueTimestamp: 285.492365,
    text: "What is the 20<sup>th</sup> percentile of the data?",
    tabularData:
      "<div class='question3-data-table'>" +
      spaceMountainWaitTimesTable +
      "</div>",
    markerLabel: "Question 3",
    markerTitle: "Question 3",
    questionLabel: "What is the 20 superscript th  percentile of the data?",
    correctAnswer: "optb",
    options: [
      {
        id: "opta",
        text: "20",
        label: "",
        description:
          "Please review the procedure for calculating percentiles and try again.",
      },
      {
        id: "optb",
        text: "22.5",
        label: "",
        description: "Nice job!",
      },
      {
        id: "optc",
        text: "25",
        label: "",
        description:
          "Please review the procedure for calculating percentiles and try again.",
      },
      {
        id: "optd",
        text: "30",
        label: "",
        description:
          "Please review the procedure for calculating percentiles and try again.",
      },
    ],
  },
];
