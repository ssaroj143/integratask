import { spaceMountainWaitTimesTable } from "./dataTable";
export default [
  {
    frame: "frame1",
    id: "question1",
    activeTimestamp: 174.418495,
    onContinueTimestamp: 174.918495,
    text: "When testing the claim that the proportion of defects is less than 0.2, a sample result consists of 30 defects among 100 items. Does that result contradict the alternative hypothesis?",
    markerLabel: "Question 1",
    markerTitle: "Question 1",
    questionLabel: "",
    correctAnswer: "opta",
    options: [
      {
        id: "opta",
        text: "Yes, because 30/100 contradicts <em>p</em> < 0.2.",
        label: "",
      },
      {
        id: "optb",
        text: "No, because 30/100 does not contradict <em>p</em> < 0.2.",
        label: "",
        description: "Try again.",
      },
      {
        id: "optc",
        text: "No, because 30/100 is less than 0.2",
        label: "",
        description: "Try again.",
      },
    ],
  },
  {
    frame: "frame2",
    id: "question2",
    activeTimestamp: 247.259389,
    onContinueTimestamp: 247.597038,
    text: "The claim is that a manufacturing process has a defect rate that is less than 12%. A sample consists of 200 defective items among 1000 that are produce. What should you conclude?",
    markerLabel: "Question 2",
    markerTitle: "Question 2",
    questionLabel: "",
    correctAnswer: "optc",
    options: [
      {
        id: "opta",
        text: "There is sufficient evidence to support the claim that the process has a defect rate that is less than 12%.",
        label: "",
        description: "Try again.",
      },
      {
        id: "optb",
        text: "There is sufficient evidence to support the claim that the defect rate is equal to 12%",
        label: "",
        description: "Try again. ",
      },
      {
        id: "optc",
        text: "There is not sufficient evidence to support the claim that the process has a defect rate that is less than 12%.",
        label: "",
        description: "",
      },
      {
        id: "optd",
        text: "There is not sufficient evidence to support the claim that the defect rate is equal to 12%",
        label: "",
        description: "Try again.",
      },
    ],
  },
  // {
  //   frame: "frame11",
  //   id: "question3",
  //   activeTimestamp: 284.492365,
  //   onContinueTimestamp: 285.492365,
  //   text: "What is the 20<sup>th</sup> percentile of the data?",
  //   tabularData:
  //     "<div class='question3-data-table'>" +
  //     spaceMountainWaitTimesTable +
  //     "</div>",
  //   markerLabel: "Question 3",
  //   markerTitle: "Question 3",
  //   questionLabel: "What is the 20 superscript th  percentile of the data?",
  //   correctAnswer: "optb",
  //   options: [
  //     {
  //       id: "opta",
  //       text: "20",
  //       label: "",
  //       description:
  //         "Please review the procedure for calculating percentiles and try again.",
  //     },
  //     {
  //       id: "optb",
  //       text: "22.5",
  //       label: "",
  //       description: "Nice job!",
  //     },
  //     {
  //       id: "optc",
  //       text: "25",
  //       label: "",
  //       description:
  //         "Please review the procedure for calculating percentiles and try again.",
  //     },
  //     {
  //       id: "optd",
  //       text: "30",
  //       label: "",
  //       description:
  //         "Please review the procedure for calculating percentiles and try again.",
  //     },
  //   ],
  // },
];
