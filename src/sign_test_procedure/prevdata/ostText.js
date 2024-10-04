import { spaceMountainWaitTimesTable } from "./dataTable";

export default [
  {
    id: "ost1",
    startTime: 13.889474, // first
    middleTime: 23.120327, // good model
    endTime: 47.821039,  //these criteria. ppt frame end
    text: '<li>Sign Test Procedure:</li>',
    transform: true
  },
  {
    id: "ost2",
    startTime: 23.584518,  //particular text start
    middleTime: 30.326708, // particular text end
    endTime: 47.821039,  // ppt frame end
    text: '<li>1 – Check whether sample data contradict the alternative hypothesis</li>',
    transform: true
  },
  {
    id: "ost3",
    startTime: 30.753164,
    middleTime: 39.253947,
    endTime: 47.821039,
    text: '<li>2 – Based on sample size, determine whether to use Table A-7 or the normal distribution</li>',
    transform: true
  },
  {
    id: "ost4",
    startTime: 39.550806,
    middleTime: 42.281264,
    endTime: 47.821039,
    text: '<li>3- Form the conclusion</li>',
    transform: true
  },
  {
    id: "ost5",
    startTime: 83.161843,
    middleTime: 92.271312,
    endTime: 138.717582,
    text: '<li>Claim: Probability of boy is greater than 0.5</li>',
    transform: true

  },
  {
    id: "ost6",
    startTime: 92.271312,
    middleTime: 97.908495,
    endTime: 138.717582,
    text: '<li>Sample Data: 10 boys in 100 births</li>',
    transform: true
  },
  {
    id: "ost7",
    heading: "Does the sample data contradict the alternative hypothesis?",
    startTime: 111.202762,
    endTime: 123.367724,
    id: "example1",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost7btn1",
        key: "yes",
        startTime: 111.202762,
        endTime: 123.367724,
        label: "Yes",
      },
      {
        id: "ost7btn2",
        key: "no",
        startTime: 111.202762,
        endTime: 123.367724,
        label: "No",
      },
    ],
  },
  {
    id: "ost8",
    type: "message",
    startTime: 111.850954,
    endTime: 123.206905,
    text:
      "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost16",
    type: "message",
    startTime: 111.992977,
    middleTime: 120.612858,
    endTime: 123.206905,
    transform: true,
    text: '<li>Remember, the alternative hypothesis is that the probability of a boy is <em>greater than</em> 0.5.</li>',
  },
  {
    id: "ost17",
    startTime: 120.612858,
    middleTime: 120.612858,
    endTime: 123.206905,
    transform: true,
    text: '<b>Try Again.</b>'
  },
  {
    id: "ost9",
    text:
      "<div class='correct message'><span class='icon'></span><p >CORRECT!</p></div>",
    startTime: 123.227724,
    endTime: 138.717582,
  },
  {
    id: "ost10",
    startTime: 125.032727,
    middleTime: 137.716612,
    endTime: 138.717582,
    text: '<li>The sample proportion of 0.10 contradicts alternative hypothesis of <em>p</em> > 0.5</li>',
    transform: true
  },
  {
    id: "ost11",
    startTime: 160.734519,
    middleTime: 170.614758,
    endTime: 174.143168,
    text: '<li>When the sample data contradict the alternative hypothesis, go directly to the conclusion of failing to reject the null hypothesis.</li>',
    transform: true
  },
  {
    id: "ost12",
    startTime: 250.158796,
    middleTime: 256.619034,
    endTime: 278.474289,
    text: '<li>Sign Test Procedure:</li>',
    transform: true
  },
  {
    id: "ost13",
    startTime: 257.528883,
    middleTime: 263.971199,
    endTime: 278.474289,
    text: '<li>1 – Check whether sample data contradict the alternative hypothesis</li>',
    transform: true
  },
  {
    id: "ost14",
    startTime: 264.677163,
    middleTime: 273.130088,
    endTime: 278.474289,
    text: '<li>2 – Based on sample size, determine whether to use Table A-7 “Critical Values for the Sign Test” or the normal distribution</li>',
    transform: true
  },
  {
    id: "ost15",
    startTime: 273.908171,
    middleTime: 276.428547,
    endTime: 278.474289,
    text: '<li>3- Form the conclusion</li>',
    transform: true
  },
  


];
