export default [
  {
    frame: "frame1",
    id: "question1",
    activeTimestamp: 119.529845,
    onContinueTimestamp: 120.719497,
    text:
      `Consider the <em>χ</em><sup>2</sup> test statistic used for a goodness-of-fit test:<br/><div class="maths-exp"><span class="left-eq"><em class="lhs">χ</em><sup>2</sup></span><span class="equal">=</span><span class="sigma">&Sigma;</span><div class="division-block"><span class="numerator">(<i>O</i>&minus;<i>E</i>)<sup>2</sup></span><span><i>E</i></span></div></div><p>“Goodness-of-fit” means that the observed <i>O</i> values fit well with the expected <i>E</i> values. If there is goodness-of-fit, which of the following correctly describes the behavior of the above <em>χ</em><sup>2</sup> test statistic?</p>`,
    markerLabel: "Question 1",
    markerTitle: "Question 1",
    questionLabel:
      "Consider the chi-square test statistic used for a goodness-of-fit test: square of x equals sum of fraction numerator with square of (O minus E) over denominator E end fraction. “Goodness-of-fit” means that the observed O values fit well with the expected E values. If there is goodness-of-fit, which of the following correctly describes the behavior of the above chi-square test statistic?",
    correctAnswer: "optc",
    options: [
      {
        id: "opta",
        text: "The values of <i>O</i> and <i>E</i> are far apart, so the values of (<i>O</i> &minus; <i>E</i>)<sup>2</sup> will be large and the <em>χ</em><sup>2</sup> test statistic will be large.",
        label: "The values of O and E are far apart, so the values of square of (O minus E) will be large and the chi-square test statistic will be large.",
        description: "Try again.",
      },
      {
        id: "optb",
        text: "The values of <i>O</i> and <i>E</i> are far apart, so the values of (<i>O</i> &minus; <i>E</i>)<sup>2</sup> will be small and the <em>χ</em><sup>2</sup> test statistic will be small.",
        label: "The values of O and E are far apart, so the values of square of (O minus E) will be small and the chi-square test statistic will be small.",
        description: "Try again.",

      },
      {
        id: "optc",
        text: "The values of <i>O</i> and <i>E</i> are close together, so the values of (<i>O</i> &minus; <i>E</i>)<sup>2</sup> will be small and the <em>χ</em><sup>2</sup> test statistic will be small.",
        label: "The values of O and E are close together, so the values of square of (O minus E) will be small and the chi-square test statistic will be small.",
        description: false,
      },
      {
        id: "optd",
        text: "The values of <i>O</i> and <i>E</i> are close together, so the values of (<i>O</i> &minus; <i>E</i>)<sup>2</sup> will be small and the <em>χ</em><sup>2</sup> test statistic will be large.",
        label: "The values of O and E are close together, so the values of square of (O minus E) will be small and the chi-square test statistic will be large.",
        description: "Try again.",
      },
    ],
  },
  {
    frame: "frame2",
    id: "question2",
    activeTimestamp: 122.551582,
    onContinueTimestamp: 123.585219,
    text: "In a goodness-of-fit test, which of the following describes a correct relationship between the <em>χ</em><sup>2</sup> test statistic and the <i>P</i>-value?",
    markerLabel: "Question 2",
    markerTitle: "Question 2",
    questionLabel: "In a goodness-of-fit test, which of the following describes a correct relationship between the  chi-square test statistic and the P-value?",
    correctAnswer: "opta",
    options: [
      {
        id: "opta",
        text:
          "If the test statistic is large, the <i>P</i>-value is small.",
        label: "",
        description: false,
      },
      {
        id: "optb",
        text:
          "If the test statistic is large, the <i>P</i>-value is large.",
        label:
          "",
        description: "Try again.",
      },
      {
        id: "optc",
        text:
          "If the test statistic is small, the <i>P</i>-value is small.",
        label:
          "",
        description: "Try again.",
      },
      {
        id: "optd",
        text: "If the test statistic is negative, the <i>P</i>-value is small.",
        label: "",
        description: "Try again.",
      },
    ],
  },
  {
    frame: "frame3",
    id: "question3",
    activeTimestamp: 125.099196,
    onContinueTimestamp: 126.161594,
    text:
      "In a goodness-of-fit test, which of the following is correct?",
    markerLabel: "Question 3",
    markerTitle: "Question 3",
    questionLabel:
      "",
    correctAnswer: "optb",
    options: [
      {
        id: "opta",
        text: "If the <i>P</i>-value is large, there does not appear to be a good fit with the claimed distribution.",
        label: "",
        description: "Try again.",
      },
      {
        id: "optb",
        text: "If the <i>P</i>-value is large, there does appear to be a good fit with the claimed distribution",
        label: "",
        description: false,
      },
      {
        id: "optc",
        text: "If the <i>P</i>-value is small, there appears to be a good fit with the claimed distribution",
        label: "",
        description: "Try again.",
      },

    ],
  },
];
