// import { spaceMountainWaitTimesTable } from "./dataTable";

export default [
  {
    id: "ost1",
    startTime: 25.312109, // first
    middleTime:32.906982, // good model
    endTime: 101.260006,  //these criteria. ppt frame end
    text: 'Claim: Percentage of workers who get jobs through networking is greater than 50%.', 
    transform:true
  },
  {
    id: "ost2",
    startTime: 34.031903, 
    middleTime:39.549324, 
    endTime: 39.549324,  
    text: 'Reject Null Hypothesis.',
    transform:true
  },
  {
    id: "ost3",    
    heading: "Does this claim contain the condition of equality? ",
    startTime: 61.604959,
    endTime: 75.572102,
    id: "example1",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost4btn1",
        key: "yes",
        startTime: 61.604959,
        endTime: 75.572102,
        label: "Yes",
      },
      {
        id: "ost4btn2",
        key: "no",
        startTime: 61.604959,
    endTime: 75.572102,
        label: "No",
      },
    ],
  },
  {
    id: "ost4",
    startTime: 62.835782,
    
    endTime: 75.572102,
    text: "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost5",
    startTime: 64.76454,
    middleTime:72.455995,
    endTime: 75.572102,
    text: "The original claim is that the percentage is greater than 50%, which does not include equality.",
    transform:true
  },
  {
    id: "ost6",
    startTime:72.568212,
    endTime: 75.572102,
    text: "<h2>Try again.</h2>",
  },
  {
    id: "ost7",
    startTime: 75.572102,
    endTime:90.70094,
    text: "<div class='correct message'><span class='icon'></span><p>CORRECT!</p></div>",
  },
  {
    id: "ost8",
    startTime: 77.039466,
    middleTime:90.70094,
    endTime:90.70094,
    text: " The original claim is that the percentage of workers who get jobs through networking is greater than 50%, and “greater than 50%” does not include equality.",
    transform:true
  },
  {
    id: "ost9",
    startTime: 90.70094,
    middleTime:95.102684,
    endTime: 101.260006,
    text: 'Reject Null Hypothesis.',
    transform:true
  },
  {
    id: "ost10",
    startTime: 103.054907,
    middleTime:109.78936,
    endTime: 127.43262,
    text: 'Reject the null hypothesis.',
    transform:true
  },
  {
    id: "ost11",
    startTime: 111.399017,
    middleTime:119.818373,
    endTime: 127.43262,
    text: '<i>“There is sufficient evidence to support the clam that the percentage of workers who get jobs through networking is greater than 50%.”</i>',
    transform:true
  },
  {
    id: "ost12",
    startTime: 129.063802,
    middleTime:142.242074,
    endTime: 152.215653,
    text: 'Fail to reject the null hypothesis.',
    transform:true
  },
   {
    id: "ost13",
    startTime: 143.262656,
    //middleTime:152.812881,
    endTime: 152.215653,
    text: '<i>“There is NOT sufficient evidence to support the clam that the percentage of workers who get jobs through networking is greater than 50%.”</i>',
    transform:true
  },
  {
    id: "ost14",
    startTime: 156.08491,
    middleTime:164.846374,
    endTime: 213.150725,
    text: 'Claim: Soda cans contain a mean of 12 ounces of soda.',
    transform:true
  },
   {
    id: "ost15",
    startTime: 165.451444,
    //middleTime:195.105505,
    endTime: 171.04143,
    text: '(Fail to reject null hypothesis)',
    transform:true
  },
 {
    id: "ost16",
    heading: "Does this claim contain the condition of equality?",
    startTime: 175.537508,
    endTime: 195.455737,

    id: "example2",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost14btn1",
        key: "yes",
        startTime: 175.537508,
        endTime: 195.455737,
        label: "Yes",
      },
      {
        id: "ost14btn2",
        key: "no",
        startTime: 175.537508,
        endTime: 195.455737,
        label: "No",
      },
    ]
  },
  {
    id: "ost17",
    startTime: 176.125389,
    endTime: 195.455737,
    text: "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost18",
    startTime: 178.069126,
    middleTime:192.729152,
    endTime: 195.455737,
    text: "The original claim is that the soda cans have a mean of 12 ounces of soda, which can be expressed as “the mean is EQUAL TO 12 ounces.” So the original claim does contain the condition of equality.",
    transform:true
  },
  {
    id: "ost19",
    startTime: 193.652215,
    endTime: 195.455737,
    text: "<h2>Try again.</h2>",
  },
  {
    id: "ost20",
    startTime: 195.455737,
    // middleTime:94.778041,
    endTime: 212.617831,
    text: "<div class='correct message'><span class='icon'></span><p>CORRECT!</p></div>",
  },
  {
    id: "ost21",
    startTime: 196.141872,
    middleTime:212.617831,
    endTime: 212.617831,
    text: "The original claim is that the soda cans contain a mean of 12 ounces of soda, which can be expressed as “the mean is EQUAL TO 12 ounces,” so the original claim does contain the condition of equality.",
    transform:true
  },
  {
    id: "ost22",
    startTime: 214.035951,
    middleTime:218.887972,
    endTime: 226.294725,
    text: 'Claim: Soda cans contain a mean of 12 ounces of soda.',
    transform:true
  },
  {
    id: "ost23",
    startTime: 219.396752,
    //middleTime:147.10511,
    endTime: 226.294725,
    text: "Fail to reject null hypothesis.",
    transform:true
  },
  {
    id: "ost24",
    startTime: 228.472052,
    middleTime:235.075859,
    endTime: 245.188322,
    text: 'Fail to reject the null hypothesis.',
    transform:true
  },
  {
    id: "ost25",
    startTime: 235.705287,
   // middleTime:158.294562,
    endTime: 245.188322,
    text: '<i>“There is not sufficient evidence to warrant rejection of the claim that the soda cans have a mean equal to 12 ounces.”</i>',
    transform:true
  },
  {
    id: "ost26",
    startTime: 246.182786,
    middleTime:258.674428,
    endTime: 273.681982,
    text: 'Reject the null hypothesis.',
    transform:true
  },
  {
    id: "ost27",
    startTime: 259.211644,
    //middleTime:172.547375,
    endTime: 273.681982,
    text: '<i>“There is sufficient evidence to warrant rejection of the claim that the soda cans contain a mean equal to 12 ounces of soda.”</i>',
    transform:true
  },
  
 
];
