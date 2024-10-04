// import { spaceMountainWaitTimesTable } from "./dataTable";

export default [
  {
    id: "ost1",
    startTime: 24.781364, // first
    middleTime:32.906982, // good model
    endTime: 104.3565,  //these criteria. ppt frame end
    text: '<div class="option"><ul><li>Claim: Percentage of workers who get jobs through networking is greater than 50%.</li></ul></div>', 
    transform:true
  },
  {
    id: "ost2",
    startTime: 33.617313, 
    middleTime:39.449324, 
    endTime: 41.403745,  
    text: '<div class="option"><ul><li>Reject Null Hypothesis.</li></ul></div>',
    transform:true
  },
  {
    id: "ost3",    
    heading: "Does this claim contain the condition of equality? ",
    startTime: 59.494762,
    endTime: 76.973947,
    id: "example1",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost4btn1",
        key: "yes",
        startTime: 59.494762,
        endTime: 76.973947,
        label: "Yes",
      },
      {
        id: "ost4btn2",
        key: "no",
        startTime: 59.494762,
    endTime: 76.973947,
        label: "No",
      },
    ],
  },
  {
    id: "ost4",
    startTime: 63.393448,
    
    endTime: 76.973947,
    text: "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost5",
    startTime: 65.16454,
    middleTime:73.415097,
    endTime: 76.973947,
    text: "<div class='option'><ul><li>The original claim is that the percentage is greater than 50%, which does not include equality.</li></ul></div>",
    transform:true
  },
  {
    id: "ost6",
    startTime:73.715097,
    endTime: 76.973947,
    text: "<h2>Try Again.</h2>",
  },
  {
    id: "ost7",
    startTime: 76.973947,
    endTime: 93.300423,
    text: "<div class='correct message'><span class='icon'></span><p>CORRECT!</p></div>",
  },
  {
    id: "ost8",
    startTime: 78.85588,
    middleTime:89.642272,
    endTime:93.300423,
    text: "<div class='option'><ul><li>The original claim is that the percentage of workers who get jobs through networking is greater than 50%, and “greater than 50%” does not include equality.</li></ul></div>",
    transform:true
  },
  {
    id: "ost9",
    startTime: 93.300423,
    middleTime:97.191921,
    endTime: 104.3565,
    text: '<div class="option"><ul><li>Reject Null Hypothesis.</li></ul></div>',
    transform:true
  },
  {
    id: "ost10",
    startTime: 104.3565,
    middleTime:107.615905,
    endTime: 129.908632,
    text: '<div class="option"><ul><li>Reject the null hypothesis.</li></ul></div>',
    transform:true
  },
  {
    id: "ost11",
    startTime: 113.281433,
    middleTime:122.423397,
    endTime: 129.908632,
    text: '<div class="option"><ul><li><i>“There is sufficient evidence to support the claim that the percentage of workers who get jobs through networking is greater than 50%.”</i></li></ul></div>',
    transform:true
  },
  {
    id: "ost12",
    startTime: 130.744772,
    middleTime:139.615845,
    endTime: 156.478037,
    text: '<div class="option"><ul><li>Fail to reject the null hypothesis.</li></ul></div>',
    transform:true
  },
   {
    id: "ost13",
    startTime: 144.537702,
    middleTime: 154.653547,
    endTime: 156.378037,
    text: '<div class="option"><ul><li><i>“There is <span style="font-weight:600">NOT</span> sufficient evidence to support the claim that the percentage of workers who get jobs through networking is greater than 50%.”</i></li></ul></div>',
    transform:true
  },
  {
    id: "ost14",
    startTime: 158.809436,
    middleTime:168.151046,
    endTime: 231.024137,
    text: '<div class="option"><ul><li>Claim: Soda cans contain a mean of 12 ounces of soda.</li></ul></div>',
    transform:true
  },
   {
    id: "ost15",
    startTime: 168.351046,
    middleTime:174.364212,
    endTime: 175.289086,
    text: '<div class="option"><ul><li>(Fail to reject null hypothesis)</li></ul></div>',
    transform:true
  },
 {
    id: "ost16",
    heading: "Does this claim contain the condition of equality?",
    startTime: 175.289086,
    endTime: 199.546909,

    id: "example2",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost14btn1",
        key: "yes",
        startTime: 175.289086,
        endTime: 199.546909,
        label: "Yes",
      },
      {
        id: "ost14btn2",
        key: "no",
        startTime: 175.289086,
        endTime: 199.546909,
        label: "No",
      },
    ]
  },
  {
    id: "ost17",
    startTime: 179.535641,
    endTime: 199.546909,
    text: "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost18",
    startTime: 181.485735,
    middleTime: 196.645179,
    endTime: 199.546909,
    text: "<div class='option'><ul><li>The original claim is that the soda cans have a mean of 12 ounces of soda, which can be expressed as “the mean is EQUAL TO 12 ounces.” So the original claim does contain the condition of equality.</li></ul></div>",
    transform:true
  },
  {
    id: "ost19",
    startTime: 197.865179,
    endTime: 199.546909,
    text: "<h2>Try Again.</h2>",
  },
  {
    id: "ost20",
    startTime: 199.546909,
    // middleTime:94.778041,
    endTime: 218.197926,
    text: "<div class='correct message'><span class='icon'></span><p>CORRECT!</p></div>",
  },
  {
    id: "ost21",
    startTime: 200.445837,
    middleTime:216.650605,
    endTime: 218.197926,
    text: "<div class='option'><ul><li>The original claim is that the soda cans contain a mean of 12 ounces of soda, which can be expressed as “the mean is EQUAL TO 12 ounces,” so the original claim does contain the condition of equality.</li></ul></div>",
    transform:true
  },
  
  {
    id: "ost23",
    startTime: 218.428372,
    middleTime:223.323372,
    endTime: 231.024137,
    text: "<div class='option'><ul><li>Fail to reject null hypothesis.</li></ul></div>",
    transform:true
  },
  {
    id: "ost24",
    startTime: 232.264044,
    middleTime:235.075859,
    endTime: 251.053435,
    text: '<div class="option"><ul><li>Fail to reject the null hypothesis.</li></ul></div>',
    transform:true
  },
  {
    id: "ost25",
    startTime: 239.850438,
   middleTime: 249.647329,
    endTime: 251.053435,
    text: '<div class="option"><ul><li><i>“There is not sufficient evidence to warrant rejection of the claim that the soda cans have a mean equal to 12 ounces.”</i></li></ul></div>',
    transform:true
  },
  {
    id: "ost26",
    startTime: 251.053435,
    middleTime:260.285516,
    endTime: 282.65476,
    text: '<div class="option"><ul><li>Reject the null hypothesis.</li></ul></div>',
    transform:true
  },
  {
    id: "ost27",
    startTime: 264.203889,
    middleTime: 272.992643,
    endTime: 282.65476,
    text: '<div class="option"><ul><li><i>“There is sufficient evidence to warrant rejection of the claim that the soda cans contain a mean equal to 12 ounces of soda.”</i></li></ul></div>',
    transform:true
  },
  {
    id: "ost28",
    startTime: 283.446406,
  middleTime: 288.079866,
  endTime: 288.079866,
    text: 'Let’s try another one.',
   transform:true
  },
  {
  //   id: "ost29",
  //   startTime: 286.568219,
  //   middleTime: 288.079866,
  //   endTime: 288.079866,
  //   text: 'Let’s try another one.',
  //  transform:true
  },
];
