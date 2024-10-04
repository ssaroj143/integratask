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
    startTime: 95.95169,
    middleTime: 99.478846,
    endTime: 173.506718,
    transform: true,
  },
  {
    id: "ost3",
    text: "<h2><ul><li>Statistics Students IQ Scores:</li></ul></h2><p>Sample mean is 120.</p>",
    startTime: 102.774426,
    endTime: 173.506718,
    middleTime: 106.297448,
    transform: true,
  },
  {
    id: "ost4",
    text:
      "<h2><ul><li>Hypothesis:</li></ul></h2><p>Statistics students have a mean IQ score that is <em>GREATER THAN</em> 100.</p>",
    startTime: 109.423719,
    endTime: 173.506718,
    middleTime: 114.678668,
    transform: true,
  },
  {
    id: "ost5",
    heading: "<ul><li>What type of test? Choose One:</li></ul>",

    // text:
    //   "<div class='button-group'><button data-time='101.82904'>Two-tailed test?</button><button data-time='400' >Left-tailed test?</button><button data-time='156.69'>Right-tailed test?</button></div>",
    startTime: 118.526089,
    endTime: 148.546171,

    id: "question1",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost5btn1",
        key: "two-tailed",
        startTime: 118.526089,
        endTime: 148.546171,
        label: "Two-tailed test?",
      },
      {
        id: "ost5btn2",
        key: "left-tailed",
        startTime: 120.159767,
        endTime: 148.546171,
        label: "Left-tailed test?",
      },
      {
        id: "ost5btn3",
        key: "right-tailed",
        startTime: 121.358481,
        endTime: 148.546171,
        label: "Right-tailed test?",
      },
    ],
  },

  {
    id: "ost7",
    type: "message",
    startTime: 124.866152,
    endTime: 148.546171,

    value: {
      "two-tailed":"<div class='incorrect message'><span class='icon'></span><p>Two-tailed test is incorrect.</p></div>",
      "left-tailed":"<div class='incorrect message'><span class='icon'></span><p>Left-tailed test is incorrect.</p></div>",
    }
     

  },
  {
    id: "ost8",
    text:
      "<p><ul><li>The alternative hypothesis is that the mean IQ score of statistics students is <em>GREATER THAN</em> 100. The critical region is in the <em>RIGHT</em> tail of the distribution.</li></ul></p>",
    startTime: 133.059318,
    endTime: 148.546171,
    middleTime: 145.211027,
    transform: true
  },
  {
    id: "ost9",
    text: "<h2>Try Again!</h2>",
    startTime: 145.411027,
    endTime: 148.546171,
  },

  {
    id: "ost15",
    text:
      "<div class='correct message'><span class='icon'></span><p >Right-tailed test is correct!!!</p></div>",
    startTime: 148.746171,
    endTime: 173.506718,
  },
  {
    id: "ost16",
    text:
      "<span aria-hidden='true'><p><ul><li>For this right-tailed test, the <em>P</em>-value is the area to the <em>RIGHT</em> of the test statistic that represents the sample mean.</p></span><span class='sr-only'><p>For this right-tailed test, the p value is the area to the <em>RIGHT</em> of the test statistic that represents the sample mean.</li></ul></p></span>",
    startTime: 166.945868,
    endTime: 173.506718,
    middleTime: 171.106718,
    transform: true
  },
  {
    id: "ost17",
    text: "<h2><ul><li>Professional Wrestlers IQ Scores:</li></ul></h2><p>Sample mean is 98.</p>",
    startTime: 180.43795,
    endTime: 250.831481,
    middleTime: 183.052844,
    transform: true,
  },
  {
    id: "ost18",
    text:
      "<h2><ul><li>Hypothesis:</h2><p>Professional wrestlers have a mean IQ score that is <em>LESS THAN</em> 100.</li></ul></p>",
    startTime: 187.663135,
    endTime: 250.831481,
    middleTime: 191.650809,
    transform: true,
  },
  {
    id: "ost19",
    heading: "What type of test? Choose One:",
    // text:
    //   "<div class='button-group'><button data-time='101.82904'>Two-tailed test?</button><button data-time='400' >Left-tailed test?</button><button data-time='156.69'>Right-tailed test?</button></div>",
    startTime: 195.543743,
    endTime: 223.19375,

    id: "question2",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost5btn1",
        key: "two-tailed",
        label: "Two-tailed test?",
        startTime: 195.543743,
        endTime: 223.19375,
      },
      {
        id: "ost5btn2",
        key: "left-tailed",
        label: "Left-tailed test?",
        startTime: 197.151531,
        endTime: 223.19375,
      },
      {
        id: "ost5btn3",
        key: "right-tailed",
        label: "Right-tailed test?",
        startTime: 198.606853,
        endTime: 223.19375,
      },
    ],
  },

  {
    id: "ost21",
    type: "message",
    startTime: 201.530665,
    endTime: 223.19375,
    value:{
      "two-tailed":"<div class='incorrect message'><span class='icon'></span><p>Two-tailed test is incorrect.</p></div>",
      "right-tailed": "<div class='incorrect message'><span class='icon'></span><p>Right-tailed is Incorrect.</p></div>",
    } 


  },
  {
    id: "ost22",
    text:
      "<p><ul><li>The alternative hypothesis is that the mean IQ score of wrestlers is <em>LESS THAN</em> 100 and the critical region is in the <em>LEFT</em> tail of the distribution.</li></ul></p>",
    startTime: 208.814924,
    endTime: 223.19375,
    middleTime: 221.143832,
    transform: true
  },
  {
    id: "ost23",
    text: "<h2>Try Again!</h2>",

    startTime: 221.343832,
    endTime: 223.19375,
  },


  {
    id: "ostt29",
    text:
      "<div class='correct message'><span class='icon'></span><p>Left-tailed is correct!!!</p></div>",
    startTime: 223.22375,
    endTime: 250.831481,
  },
  {
    id: "ost30",
    text:
      "<span aria-hidden='true'><p><ul><li>For this left-tailed test, the <em>P</em>-value is the area to the <em>LEFT</em> of the test statistic that represents the sample mean.</li></ul></p></span><span class='sr-only'><p>For this left-tailed test, the p value is the area to the <em>LEFT</em> of the test statistic that represents the sample mean.</p>",
    startTime: 241.754113,
    endTime: 250.831481,
    middleTime: 246.131481,
    transform: true
  },
  {
    id: "ost31",
    text: "<h2><ul><li>Statistics Students IQ Scores:</h2><p>Sample mean is 120.</li></ul></p>",
    startTime: 256.991264,
    endTime: 380.337444,
    middleTime: 259.838834,
    transform: true,
  },
  {
    id: "ost32",

    text:
      "<h2><ul><li>Hypothesis:</h2><p>Statistics students have a mean IQ score that is <em>DIFFERENT THAN</em> 100.</li></ul></p>",
    startTime: 264.985882,
    endTime: 380.337444,
    middleTime: 268.328705,
    transform: true,
  },
  {
    id: "ost33",
    heading: "What type of test? Choose One:",
    // text:
    //   "<div class='button-group'><button data-time='101.82904'>Two-tailed test?</button><button data-time='400' >Left-tailed test?</button><button data-time='156.69'>Right-tailed test?</button></div>",
    startTime: 272.923988,
    endTime: 302.854799,
    id: "question3",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost5btn1",
        key: "two-tailed",
        label: "Two-tailed test?",
        startTime: 272.923988,
        endTime: 302.854799
      },
      {
        id: "ost5btn2",
        key: "left-tailed",
        label: "Left-tailed test?",
        startTime: 274.122711,
        endTime: 302.854799
      },
      {
        id: "ost5btn3",
        key: "right-tailed",
        label: "Right-tailed test?",
        startTime: 275.3694,
        endTime: 302.854799
      },
    ],
  },

  {
    id: "ost35",
    type: "message",
    startTime: 278.167018,
    endTime: 302.854799,
    value:{
      "left-tailed":"<div class='incorrect message'><span class='icon'></span><p>Left-tailed is Incorrect.</p></div>",
      "right-tailed": "<div class='incorrect message'><span class='icon'></span><p>Right-tailed is Incorrect.</p></div>",
    }
  },
  {
    id: "ost36",
    text:
      "<p><ul><li>The alternative hypothesis is that the mean IQ score of statistics students is <em>NOT EQUAL TO</em> 100 and the critical region is in <em>BOTH</em> the <em>LEFT TAIL</em> and the <em>RIGHT Tail</em> of the distribution.</li></ul></p>",
    startTime: 285.09514,
    endTime: 302.854799,
    middleTime: 300.726548,
    transform: true
  },
  {
    id: "ost27",
    text: "<h2>Try Again!</h2>",

    startTime: 300.926548,
    endTime: 302.854799,
  },



  {
    id: "ost43",
    text:
      "<div class='correct message'><span class='icon'></span><p>Two-tailed is correct!!!</p></div>",
    startTime: 302.954799,
    endTime: 342.192557,
  },
  {
    id: "ost44",
    text: "<p><ul><li>The critical region is located to the right and to the left.</li></ul></p>",
    startTime: 304.169721,
    endTime: 380.337444,
    middleTime: 320.192557,
    transform: true
  },

  {
    id: "ost46",
    text: "<p><ul><li>Area to RIGHT of test statistic = 0.03</li></ul></p>",
    startTime: 362.895245,
    endTime: 380.337444,
  },
  {
    id: "ost47",
    text:
      "<span aria-hidden='true'><p><ul><li>For a two-tailed test, the <em>P</em>-value is <em>TWICE</em> the area beyond the test statistic.</p></span><span class='sr-only'><p>For a two-tailed test, the p value is <em>TWICE</em> the area beyond the test statistic.</li></ul></p></span>",
    startTime: 369.521508,
    endTime: 380.337444,
  },
  {
    id: "ost48",
    text: "   <span aria-hidden='true'><ul><li><em>P</em>-value = 0.06.</p></span><span class='sr-only'>p value  = 0.06.</p></li></ul></span>",
    startTime: 376.910461,
    endTime: 380.337444,
  },
  {
    id: "ost49",
    text: "<h2><ul><li>Statistics Students IQ Scores:</h2><p>Sample mean is 98.</li></ul></p>",
    startTime: 385.534812,
    endTime: 416.064185,
  },
  {
    id: "ost50",
    text:
      "<h2><ul><li>Hypothesis:</li></ul></h2><p>Statistics students have a mean IQ score that is <em>DIFFERENT THAN</em> 100.</p>",
    startTime: 385.534812,
    endTime: 416.064185,
  },
  {
    id: "ost51",
    text: "<p><ul><li>Area to LEFT of test statistic = 0.03</li></ul></p>",
    startTime: 398.623272,
    endTime: 416.064185,
  },
  {
    id: "ost52",
    text:
      "<span aria-hidden='true'><p><ul><li>For a two-tailed test, the <em>P</em>-value is <em>TWICE</em> the area beyond the test statistic.</li></ul></p></span><span class='sr-only'><p>For a two-tailed test, the p value is <em>TWICE</em> the area beyond the test statistic.</p></span>",
    startTime: 405.811461,
    endTime: 416.064185,
  },
  {
    id: "ost53",
    text: "<span aria-hidden='true'><p><ul><li> <em>P</em>-value = 0.06.</li></ul></p></span><span class='sr-only'><p> p value = 0.06.</p></span.",
    startTime: 411.595212,
    endTime: 416.064185,
  },
  {
    id: "ost54",
    text:
      "<span aria-hidden='true'><p><ul><li>In both the first and second cases, the <em>P</em>-value is 0.06, which is TWICE the area beyond the test statistic.</li></ul></p></span><span class='sr-only'><p>In both the first and second cases, the p value is 0.06, which is TWICE the area beyond the test statistic.</p></span>",
    startTime: 416.998044,
    endTime: 430.40622,
  },
  {
    id: "ost55",
    text:
      "<span aria-hidden='true'><h2>Summary:</h2><div class='option'><ul><li>Left-tailed test: <em>P</em>-value is area to left of test statistic.</li></ul></div></span>",
    startTime: 432.791899,
    endTime: 451.361826,
  },
  {
    id: "ost56",
    text:
      "<span aria-hidden='true'><div class='option'><ul><li>Right-tailed test: <em>P</em>-value is area to right of test statistic.</li></ul></div></span>",
    startTime: 438.119272,
    endTime: 451.361826,
  },
  {
    id: "ost57",
    text:
      "<span aria-hidden='true'><div class='option'><ul><li>Two-tailed test: <em>P</em>-value is twice the area in the tail.</li></ul></div></span><span class='sr-only'><h2>Summary:</h2><div class='option'><ul><li>Left-tailed test: p value is area to left of test statistic.</li><li>Right-tailed test: p value is area to right of test statistic.</li><li>Two-tailed test: p value is twice the area in the tail.</li></ul></div></span>",
    startTime: 444.65818,
    endTime: 451.361826,
  },
];
