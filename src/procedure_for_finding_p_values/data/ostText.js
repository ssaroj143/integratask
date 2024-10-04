export default [
  {
    id: "ost1",
    text:
      "<span aria-hidden='true'><h2> <ul><li><em>P</em>-value: </li></ul></h2><p>In a hypothesis test, the <strong><em>P</em>-value</strong> is the probability of getting a value of the test statistic that is <em>at least as extreme</em> as the test statistic obtained from the sample data, assuming that the null hypothesis is true.</p></span><span class='sr-only'><h2> P value: </h2><p>In a hypothesis test, the P value is the probability of getting a value of the test statistic that is at least as extreme as the test statistic obtained from the sample data, assuming that the null hypothesis is true.</p></span>",
    startTime: 7.874965,
    middleTime: 30.839217,
    endTime: 70.4908,
    transform: true,
    hiddenChart: true

  },
  {
    id: "ost2",
    text: "<h2><ul><li>IQ Scores:</li></ul></h2><p>Population mean is 100.</p>",
    startTime: 94.58678,
    middleTime: 97.757961,
    endTime: 172.625518,
    transform: true,
  },
  {
    id: "ost3",
    text: "<h2><ul><li>Statistics Students IQ Scores:</li></ul></h2><p>Sample mean is 120.</p>",
    startTime: 100.216069,
    endTime: 172.625518,
    middleTime: 104.291401,
    transform: true,
  },
  {
    id: "ost4",
    text:
      "<h2><ul><li>Hypothesis:</li></ul></h2><p>Statistics students have a mean IQ score that is <em>GREATER THAN</em> 100.</p>",
    startTime: 107.806445,
    endTime: 172.625518,
    middleTime: 112.596593,
    transform: true,
  },
  {
    id: "ost5",
    heading: "<ul><li>What type of test? Choose One:</li></ul>",

    // text:
    //   "<div class='button-group'><button data-time='101.82904'>Two-tailed test?</button><button data-time='400' >Left-tailed test?</button><button data-time='156.69'>Right-tailed test?</button></div>",
    startTime: 116.516978,
    endTime: 145.834323,

    id: "question1",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost5btn1",
        key: "two-tailed",
        startTime: 116.516978,
        endTime: 145.834323,
        label: "Two-tailed test?",
      },
      {
        id: "ost5btn2",
        key: "left-tailed",
        startTime: 118.755983,
        endTime: 145.834323,
        label: "Left-tailed test?",
      },
      {
        id: "ost5btn3",
        key: "right-tailed",
        startTime: 120.769395,
        endTime: 145.834323,
        label: "Right-tailed test?",
      },
    ],
  },

  {
    id: "ost7",
    type: "message",
    startTime: 123.398901,
    endTime: 145.834323,

    value: {
      "two-tailed":"<div class='incorrect message'><span class='icon'></span><p>Two-tailed test is incorrect.</p></div>",
      "left-tailed":"<div class='incorrect message'><span class='icon'></span><p>Left-tailed test is incorrect.</p></div>",
    }
     

  },
  {
    id: "ost8",
    text:
      "<p><ul><li>The alternative hypothesis is that the mean IQ score of statistics students is <em>GREATER THAN</em> 100. The critical region is in the <em>RIGHT</em> tail of the distribution.</li></ul></p>",
    startTime: 131.450727,
    endTime: 145.834323,
    middleTime: 143.690141,
    transform: true
  },
  {
    id: "ost9",
    text: "<h2>Try Again!</h2>",
    startTime: 143.837636,
    endTime: 145.834323,
  },

  {
    id: "ost15",
    text:
      "<div class='correct message'><span class='icon'></span><p >Right-tailed test is correct!!!</p></div>",
    startTime: 147.023675,
    endTime: 172.625518,
  },
  {
    id: "ost16",
    text:
      "<span aria-hidden='true'><p><ul><li>For this right-tailed test, the <em>P</em>-value is the area to the <em>RIGHT</em> of the test statistic that represents the sample mean.</p></span><span class='sr-only'><p>For this right-tailed test, the p value is the area to the <em>RIGHT</em> of the test statistic that represents the sample mean.</li></ul></p></span>",
    startTime: 165.316942,
    endTime: 172.625518,
    middleTime: 169.723131,
    transform: true
  },
  {
    id: "ost17",
    text: "<h2><ul><li>Professional Wrestlers IQ Scores:</li></ul></h2><p>Sample mean is 98.</p>",
    startTime: 177.162142,
    endTime: 249.150655,
    middleTime: 180.832769, 
    transform: true,
  },
  {
    id: "ost18",
    text:
      "<h2><ul><li>Hypothesis:</h2><p>Professional wrestlers have a mean IQ score that is <em>LESS THAN</em> 100.</li></ul></p>",
    startTime: 184.674481,
    endTime: 249.150655,
    middleTime: 189.607511,
    transform: true,
  },
  {
    id: "ost19",
    heading: "What type of test? Choose One:",
    // text:
    //   "<div class='button-group'><button data-time='101.82904'>Two-tailed test?</button><button data-time='400' >Left-tailed test?</button><button data-time='156.69'>Right-tailed test?</button></div>",
    startTime: 193.626531,
    endTime: 221.401737,

    id: "question2",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost5btn1",
        key: "two-tailed",
        label: "Two-tailed test?",
        startTime: 193.626531,
        endTime: 221.401737,
      },
      {
        id: "ost5btn2",
        key: "left-tailed",
        label: "Left-tailed test?",
        startTime: 195.849839,
        endTime: 221.401737,
      },
      {
        id: "ost5btn3",
        key: "right-tailed",
        label: "Right-tailed test?",
        startTime: 197.467172,
        endTime: 221.401737,
      },
    ],
  },

  {
    id: "ost21",
    type: "message",
    startTime: 200.243437,
    endTime: 221.401737,
    value:{
      "two-tailed":"<div class='incorrect message'><span class='icon'></span><p>Two-tailed test is incorrect.</p></div>",
      "right-tailed": "<div class='incorrect message'><span class='icon'></span><p>Right-tailed is Incorrect.</p></div>",
    } 


  },
  {
    id: "ost22",
    text:
      "<p><ul><li>The alternative hypothesis is that the mean IQ score of wrestlers is <em>LESS THAN</em> 100 and the critical region is in the <em>LEFT</em> tail of the distribution.</li></ul></p>",
    startTime: 207.416525,
    endTime: 221.401737,
    middleTime: 218.660302,
    transform: true
  },
  {
    id: "ost23",
    text: "<h2>Try Again!</h2>",

    startTime: 219.766512,
    endTime: 221.401737,
  },


  {
    id: "ostt29",
    text:
      "<div class='correct message'><span class='icon'></span><p>Left-tailed is correct!!!</p></div>",
    startTime: 221.501737,
    endTime: 249.150655,
  },
  {
    id: "ost30",
    text:
      "<span aria-hidden='true'><p><ul><li>For this left-tailed test, the <em>P</em>-value is the area to the <em>LEFT</em> of the test statistic that represents the sample mean.</li></ul></p></span><span class='sr-only'><p>For this left-tailed test, the p value is the area to the <em>LEFT</em> of the test statistic that represents the sample mean.</p>",
    startTime: 240.141439,
    endTime: 249.150655,
    middleTime: 244.670968,
    transform: true
  },
  {
    id: "ost31",
    text: "<h2><ul><li>Statistics Students IQ Scores:</h2><p>Sample mean is 120.</li></ul></p>",
    startTime: 254.078562,
    endTime: 379.327846,
    middleTime: 258.341388,
    transform: true,
  },
  {
    id: "ost32",

    text:
      "<h2><ul><li>Hypothesis:</h2><p>Statistics students have a mean IQ score that is <em>DIFFERENT THAN</em> 100.</li></ul></p>",
    startTime: 261.831739,
    endTime: 379.327846,
    middleTime: 266.582094,
    transform: true,
  },
  {
    id: "ost33",
    heading: "What type of test? Choose One:",
    // text:
    //   "<div class='button-group'><button data-time='101.82904'>Two-tailed test?</button><button data-time='400' >Left-tailed test?</button><button data-time='156.69'>Right-tailed test?</button></div>",
    startTime: 271.226252,
    endTime: 300.791332,
    id: "question3",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost5btn1",
        key: "two-tailed",
        label: "Two-tailed test?",
        startTime: 271.226252,
        endTime: 300.791332
      },
      {
        id: "ost5btn2",
        key: "left-tailed",
        label: "Left-tailed test?",
        startTime: 272.602421,
        endTime: 300.791332
      },
      {
        id: "ost5btn3",
        key: "right-tailed",
        label: "Right-tailed test?",
        startTime: 273.969271,
        endTime: 300.791332
      },
    ],
  },

  {
    id: "ost35",
    type: "message",
    startTime: 276.63219,
    endTime: 300.791332,
    value:{
      "left-tailed":"<div class='incorrect message'><span class='icon'></span><p>Left-tailed is Incorrect.</p></div>",
      "right-tailed": "<div class='incorrect message'><span class='icon'></span><p>Right-tailed is Incorrect.</p></div>",
    }
  },
  {
    id: "ost36",
    text:
      "<p><ul><li>The alternative hypothesis is that the mean IQ score of statistics students is <em>NOT EQUAL TO</em> 100 and the critical region is in <em>BOTH</em> the <em>LEFT TAIL</em> and the <em>RIGHT Tail</em> of the distribution.</li></ul></p>",
    startTime: 283.721534,
    endTime: 300.791332,
    middleTime: 298.431023,
    transform: true
  },
  {
    id: "ost27",
    text: "<h2>Try Again!</h2>",

    startTime: 299.4655,
    endTime: 300.791332,
  },



  {
    id: "ost43",
    text:
      "<div class='correct message'><span class='icon'></span><p>Two-tailed is correct!!!</p></div>",
    startTime: 300.891332,
    endTime: 340.841262,
  },
  {
    id: "ost44",
    text: "<p><ul><li>The critical region is located to the right and to the left.</li></ul></p>",
    startTime: 304.48523,
    endTime: 379.327846,
    middleTime: 308.575648,
    transform: true
  },

  {
    id: "ost46",
    text: "<p><ul><li>Area to RIGHT of test statistic = 0.03</li></ul></p>",
    startTime: 358.186089,
    endTime: 379.327846,
  },
  {
    id: "ost47",
    text:
      "<span aria-hidden='true'><p><ul><li>For a two-tailed test, the <em>P</em>-value is <em>TWICE</em> the area beyond the test statistic.</p></span><span class='sr-only'><p>For a two-tailed test, the p value is <em>TWICE</em> the area beyond the test statistic.</li></ul></p></span>",
    startTime: 368.241301,
    endTime: 379.327846,
  },
  {
    id: "ost48",
    text: "   <span aria-hidden='true'><ul><li><em>P</em>-value = 0.06.</p></span><span class='sr-only'>p value  = 0.06.</p></li></ul></span>",
    startTime: 375.496855,
    endTime: 379.327846,
  },
  {
    id: "ost49",
    text: "<h2><ul><li>Statistics Students IQ Scores:</h2><p>Sample mean is 98.</li></ul></p>",
    startTime: 383.152308,
    endTime: 415.497721,
  },
  {
    id: "ost50",
    text:
      "<h2><ul><li>Hypothesis:</li></ul></h2><p>Statistics students have a mean IQ score that is <em>DIFFERENT THAN</em> 100.</p>",
    startTime: 383.152308,
    endTime: 415.497721,
  },
  {
    id: "ost51",
    text: "<p><ul><li>Area to LEFT of test statistic = 0.03</li></ul></p>",
    startTime: 394.263532,
    endTime: 415.497721,
  },
  {
    id: "ost52",
    text:
      "<span aria-hidden='true'><p><ul><li>For a two-tailed test, the <em>P</em>-value is <em>TWICE</em> the area beyond the test statistic.</li></ul></p></span><span class='sr-only'><p>For a two-tailed test, the p value is <em>TWICE</em> the area beyond the test statistic.</p></span>",
    startTime: 404.605796,
    endTime: 415.497721,
  },
  {
    id: "ost53",
    text: "<span aria-hidden='true'><p><ul><li> <em>P</em>-value = 0.06.</li></ul></p></span><span class='sr-only'><p> p value = 0.06.</p></span.",
    startTime: 410.740471,
    endTime: 415.497721,
  },
  {
    id: "ost54",
    text:
      "<span aria-hidden='true'><p><ul><li>In both the first and second cases, the <em>P</em>-value is 0.06, which is TWICE the area beyond the test statistic.</li></ul></p></span><span class='sr-only'><p>In both the first and second cases, the p value is 0.06, which is TWICE the area beyond the test statistic.</p></span>",
    startTime: 415.673482,
    endTime: 428.851738,
  },
  {
    id: "ost55",
    text:
      "<span aria-hidden='true'><h2>Summary:</h2><div class='option'><ul><li>Left-tailed test: <em>P</em>-value is area to left of test statistic.</li></ul></div></span>",
    startTime: 431.411949,
    endTime: 449.879976,
  },
  {
    id: "ost56",
    text:
      "<span aria-hidden='true'><div class='option'><ul><li>Right-tailed test: <em>P</em>-value is area to right of test statistic.</li></ul></div></span>",
    startTime: 437.068911,
    endTime: 449.879976,
  },
  {
    id: "ost57",
    text:
      "<span aria-hidden='true'><div class='option'><ul><li>Two-tailed test: <em>P</em>-value is twice the area in the tail.</li></ul></div></span><span class='sr-only'><h2>Summary:</h2><div class='option'><ul><li>Left-tailed test: p value is area to left of test statistic.</li><li>Right-tailed test: p value is area to right of test statistic.</li><li>Two-tailed test: p value is twice the area in the tail.</li></ul></div></span>",
    startTime: 443.627108,
    endTime: 449.879976,
  },
];
