export default [
  {
    id: "cc1",
    startTime: 0.065140,
    endTime: 5.015761,
    text: "In this activity we review the procedure for the rank correlation test",
  },
  {
    id: "cc2",
    startTime: 5.093929,
    endTime: 10.754574,
    text:
      "(or Spearman’s rank correlation test). This is a nonparametric test",
  },
  {
    id: "cc3",
    startTime: 10.754574,
    endTime: 15.477207,
    text: "that uses ranks of sample data consisting of matched pairs.",
  },
  {
    id: "cc4",
    startTime: 15.705196,
    endTime: 20.010934,
    text:
      "It is used to test for an association between two variables.",
  },
  {
    id: "cc5",
    startTime: 20.219381,
    endTime: 24.55637,
    text:
      "A major advantage of using rank correlation instead of linear",
  },
  {
    id: "cc6",
    startTime: 24.55637,
    endTime: 29.325920,
    text:
      "correlation is that there is no requirement of a normal distribution,",
  },
  {
    id: "cc7",
    startTime: 29.325920,
    endTime: 33.683770,
    text:
      "and the original data can be in the form of ranks.",
  },
  {
    id: "cc8",
    startTime: 33.761937,
    endTime: 37.826658,
    text:
      "Also, the rank correlation test can be used to detect",
  },
  {
    id: "cc9",
    startTime: 37.826658,
    endTime: 41.344205,
    text: "some relationships that are not linear.",
  },
  {
    id: "cc10",
    startTime:42.70579,
    endTime: 45.24515,
    text:
      "First we need to check to see if the",
  },
  {
    id: "cc11",
    startTime: 45.24515,
    endTime: 47.827547,
    text:
      "pairs of data consist of ranks.",
  },
  {
    id: "cc12",
    startTime: 48.120339,
    endTime: 51.800669,
    text:
      "If the sample data are not already ranks,",
  },
  {
    id: "cc13",
    startTime: 51.800669,
    endTime: 56.894775,
    text:
      "convert the data of the first sample to ranks from 1 to <em>n</em>",
  },
  {
    id: "cc14",
    startTime: 56.894775,
    endTime: 59.403077,
    text:
      "and then do the same for the second sample.",
  },
  {
    id: "cc15",
    startTime: 59.503077,
    endTime: 63.539687,
    text: "With the data pairs now in the form of ranks, we determine",
  },
  {
    id: "cc16",
    startTime: 63.539687,
    endTime:  68.218933,
    text:
      "whether there are any TIES among the ranks of <em>either</em> variable.",
  },
  // {
  //   id: "cc17",
  //   startTime: 68.266468,
  //   endTime: 71.797043,
  //   text:
  //     "If the P-value for the interaction is small,",
  // },
  // {
  //   id: "cc18",
  //   startTime: 71.797043,
  //   endTime: 75.627261,
  //   text:
  //     "such as less than or equal to 0.05,",
  // },
  // {
  //   id: "cc19",
  //   startTime: 75.627261,
  //   endTime: 80.004652,
  //   text:
  //     "<em>REJECT</em> the null hypothesis of <em>NO INTERACTION</em> effect.",
  // },
  // {
  //   id: "cc20",
  //   startTime: 80.004652,
  //   endTime: 84.271307,
  //   text: "There <em>DOES</em> appear to be an interaction effect.",
  // },
  // {
  //   id: "cc21",
  //   startTime: 84.694715,
  //   endTime: 91.254289,
  //   text:
  //     "If the interaction P-value is large, such as greater than 0.05,",
  // },
  // {
  //   id: "cc22",
  //   startTime: 91.254289,
  //   endTime: 96.940990,
  //   text: "<em>FAIL TO REJECT</em> the null hypothesis of NO INTERACTION effect.",
  // },
  // {
  //   id: "cc23",
  //   startTime: 97.019158,
  //   endTime: 101.956751,
  //   text: "There DOES NOT appear to be an interaction effect.",
  // },
  {
    id: "cc24",
    startTime: 68.518933,
    endTime: 73.590351,
    text:
      "If there are no ties in either variable, a simpler formula",
  },
  {
    id: "cc25",
    startTime: 73.590351,
    endTime: 78.188506,
    text:
      "can be used to calculate the value of the rank correlation coefficient.",
  },
  {
    id: "cc26",
    startTime: 78.188506,
    endTime: 81.701355,
    text:
      "First calculate the difference <em>d</em> for each pair ranks",
  },
  {
    id: "cc27",
    startTime: 81.701355,
    endTime: 84.839566,
    text:
      "by subtracting the lower rank from the higher rank.",
  },
  {
    id: "cc28",
    startTime: 85.219311,  
    endTime:91.615523, 
    text:
      "Square each difference <em>d</em> and then find the sum of those squares.",
  },
  {
    id: "cc29",
    startTime: 92.003768,
    endTime: 99.343036,
    text: "Complete the computation of the rank correlation coefficient <em>r<sub>s</sub></em> by evaluating",
  },
  {
    id: "cc30",
    startTime: 99.343036,
    endTime: 106.487869,
    text: "1 minus the quantity (6 times the sum of the <em>d</em>-squares)",
  },
  {
    id: "cc31",
    startTime: 106.487869,
    endTime: 113.116678,
    text: "divided by the quantity (<em>n</em> times the quantity n-squared minus 1).",
  },
  {
    id: "cc32",
    startTime: 113.423536,
    endTime: 117.389715,
    text:
      "where <em>n</em> is the number of PAIRS of sample data.",
  },
  {
    id: "cc33",
    startTime: 117.901251,
    endTime: 119.984859,
    text:
      "Now, it is time to test your knowledge.",
  },
  {
    id: "cc34",
    startTime: 120.626069,
    endTime: 125.58946,
    text: "However, if either variable has ties among its ranks,",
  },
  {
    id: "cc35",
    startTime: 125.58946,
    endTime: 133.464158,
    text: "then you calculate the rank correlation coefficient <em>r<sub>s</sub></em> using the equation shown.",
  },
  {
    id: "cc36",
    startTime: 133.780569,
    endTime: 137.986409,
    text: "Note that this formula is the same as the formula for the",
  },
  {
    id: "cc37",
    startTime: 137.986409,
    endTime: 143.398661,
    text: "linear correlation coefficient given in Chapter 10 of the Triola textbook.",
  },
  {
    id: "cc38",
    startTime: 144.827167,
    endTime: 147.10422,
    text:
      "Next consider the sample size.",
  },
  {
    id: "cc39",
    startTime: 147.695687,
    endTime: 149.605965,
    text: "If the number of pairs of data,",
  },
  {
    id: "cc40",
    startTime: 149.605965,
    endTime: 152.198155,
    text:
      "is less than or equal to 30,",
  },
  {
    id: "cc41",
    startTime: 152.713129,
    endTime: 156.484709,
    text: "find the critical values of the rank correlation coefficient",
  },
  {
    id: "cc42",
    startTime: 156.484709,
    endTime: 158.689753,
    text: "from table A-9.",
  },
  {
    id: "cc43",
    startTime: 159.042626,
    endTime: 163.866518,
    text: "If the sample size is GREATER THAN 30, calculate the critical values",
  },
  {
    id: "cc44",
    startTime: 163.866518,
    endTime: 172.170247,
    text: "of the rank correlation coefficient by evaluating plus and minus <em>z</em> divided",
  },
  {
    id: "cc45",
    startTime: 172.170247,
    endTime: 176.155181,
    text:
      "by the square root of the quantity n minus 1,",
  },
  {
    id: "cc46",
    startTime: 176.155181,
    endTime: 179.670298,
    text:
      "where <em>z</em> corresponds to the significance level.",
  },
  {
    id: "cc47",
    startTime:  180.419042,
    endTime: 185.569496,
    text: "For example, if the significance level is 0.05,",
  },
  {
    id: "cc48",
    startTime: 185.957903,
    endTime: 194.180907,
    text: "then use <em>z</em> = 1.96 and <em>z</em> = negative 1.96.",
  },
  {
    id: "cc49",
    startTime: 196.577472,
    endTime: 201.683436,
    text:
      "If the rank correlation coefficient is between the negative and positive",
  },
  {
    id: "cc50",
    startTime: 201.683436,
    endTime:207.392753,
    text:
      "critical values, <em>fail to reject</em> the null hypothesis of no correlation.",
  },
  {
    id: "cc51",
    startTime: 207.911686,
    endTime: 212.724266,
    text:
      "If the rank correlation coefficient <em>is not</em> between the negative and positive",
  },
  {
    id: "cc52",
    startTime: 212.724266,
    endTime: 218.99866,
    text: "critical values, <em>reject</em> the null hypothesis and conclude that there",
  },
  {
    id: "cc53",
    startTime: 218.99866,
    endTime: 224.866238,
    text:
      "is sufficient evidence to support the claim of a correlation.",
  },
  {
    id: "cc54",
    startTime: 226.325308,
    endTime: 228.622086,
    text: "Now, it is time to test your knowledge.",
  },
  {
    id: "cc55",
    startTime: 229.176036,
    endTime: 234.893572,
    text:
      "In this activity we reviewed the procedure for the rank correlation test.",
  },
  {
    id: "cc56",
    startTime: 235.894643,
    endTime: 241.259121,
    text:
      "This procedure uses ranks of sample data consisting of matched pairs",
  },
  {
    id: "cc57",
    startTime: 241.259121,
    endTime:245.03986,
    text:
      "to test for an association between two variables.",
  },
  {
    id: "cc58",
    startTime:245.588624,
    endTime: 249.861893,
    text:
      "An advantage of the rank correlation test is that it can be used",
  },
  {
    id: "cc59",
    startTime: 249.861893,
    endTime: 254.549137,
    text:
      "to detect some, but not all, relationships that are not linear.",
  },
  {
    id: "cc60",
    startTime: 256.489375,
    endTime: 262.040328,
    text:
      "Congratulations, you have mastered an important concept of Statistics!",
  },
  {
    id: "cc61",
    startTime: 262.373399,
    endTime: 265.008838,
    text:
      "When it comes to rank, don’t go blank.",
  },
];
