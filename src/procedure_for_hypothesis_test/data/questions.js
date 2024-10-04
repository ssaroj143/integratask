
export default [
  {
    frame: "frame1",
    id: "question1",
    activeTimestamp: 267.413548,
    onContinueTimestamp: 267.793717,
    text: "Which of the following test statistics should be used for the claim that MOST medical malpractice lawsuits are dropped or dismissed?",
    type:"table",
    markerLabel: "Question 1",
    markerTitle: "Question 1",
    questionLabel: "",
    correctAnswer: "opta",
    options: [
      {
        id: "opta",
        text: `<div class="tableRow"> 
                <div class="tableColumn column1">Proportion <em><i>p</i></em></div>
                <div class="tableColumn column2">-</div>
                <div class="tableColumn column3">Normal (<i>z</i>)</div>
                <div class="tableColumn column4">-</div>
                <div class="tableColumn column5"><i>n<em>p</em></i> &#8805; 5 and <br/><i>n<em>q</em></i> &#8805; 5 </div>
                <div class="tableColumn column6">-</div>
                <div class="tableColumn column7">
                <div class="maths">
                <div class="wrapper">
                  <em class = "formulaAlign"><i>z</i></em>
                  <span class = "formulaAlign">=</span>
                  <i>
                  <div class="maths-exp">
                    <div class="division-block">
                      <span class="numerator">
                        <em class="rohCap"><i>^</i></em>
                        <em>p - p</em>
                      </span>
                      <span>
                        <div class="root">
                          <span class="numerator">
                            <em>pq</em>
                          </span>
                          <span>n</span>
                        </div>
                      </span>
                    </div>
                  </div>
                  </i>
                </div>
              </div>
                </div>
              </div>`,
        label: "proportion rho normal z n rho greater than equal to 5 and  n q greater than equal to 5 z equal to rho hat minus rho divide by square root of p q divide by n",
        description: false,
      },
      {
        id: "optb",
        text: `<div class="tableRow">
                  <div class="tableColumn column1">Mean <i>&mu;</i></div> 
                  <div class="tableColumn column2">-</div>
                  <div class="tableColumn column3"><i>t</i></div>
                  <div class="tableColumn column4">-</div>
                  <div class="tableColumn column5"><i>&sigma;</i> not known and normally distributed population or &sigma; not known and <br/><i>n</i> &gt; 30</div>
                  <div class="tableColumn column6">-</div>
                  <div class="tableColumn column7">
                  <div class="heading maths">
                  <div class="wrapper">
                    <em class = "formulaAlign">t</em>
                    <span class = "formulaAlign">=</span>
                    <i>
                    <div class="maths-exp">
                      <div class="division-block">
                        <span class="numerator">
                          <em class="rohCap"><i>-</i></em>
                          <em>x - &mu;</em>
                        </span>
                        <span>
                          <span class="numerator">
                            <em>s</em>
                          </span>
                          <span>
                            <div class="root">n</div>
                          </span>
                        </span>
                      </div>
                    </div>
                    </i>
                  </div>
                </div>
                  </div>
                </div>`,
        label: "mean mew t n sigma not known and normally distributed population or sigma not known and n greater than 30 t equal to x baar minus mew divide by s divide by square root of n.",
        description: "Try again. <i>Hint: </i>The claim involves a proportion.",
      },
      {
        id: "optc",
        text: `<div class="tableRow">
                <div class="tableColumn column1">Mean <i>&mu;</i></div>
                <div class="tableColumn column2">-</div> 
                <div class="tableColumn column3">Normal (<i>z</i>)</div> 
                <div class="tableColumn column4">-</div> 
                <div class="tableColumn column5"><i>&sigma;</i> known and normally distributed population or <i>&sigma;</i> known and <br/><i>n</i> &gt; 30</div>
                <div class="tableColumn column6">-</div> 
                <div class="tableColumn column7">
                <div class="heading maths">
                <div class="wrapper">
                  <em class = "formulaAlign"><i>z</i></em>
                  <span class = "formulaAlign">=</span>
                  <i>
                  <div class="maths-exp">
                    <div class="division-block">
                      <span class="numerator">
                        <em class="rohCap"><i>-</i></em>
                        <em>x - &mu;</em>
                      </span>
                      <span>
                        <span class="numerator">
                          <em>&sigma;</em>
                        </span>
                        <span>
                          <div class="root">n</div>
                        </span>
                      </span>
                    </div>
                  </div>
                  </i>
                </div>
              </div>
                </div>
              </div>`,
        label: "mean mew normal z sigma not known and normally distributed population or sigma not known and n greater than 30 z equal to x baar minus mew divide by sigma divide by square root of n.",
        description: "Try again. <i>Hint: </i>The claim involves a proportion.",
      },
      {
        id: "optd",
        text: `<div class="tableRow">
                <div class="tableColumn column1">St. dev. <i>&sigma;</i> or variance <i>&sigma;</i><sup>2</sup></div> 
                <div class="tableColumn column2">-</div>  
                <div class="tableColumn column3"><i>&chi;</i><sup>2</sup></div>  
                <div class="tableColumn column4">-</div>  
                <div class="tableColumn column5">Strict requirement: normally distributed population</div>  
                <div class="tableColumn column6">-</div>  
                <div class="tableColumn column7">
                  <div class="heading maths">
                    <div class="wrapper">
                      <em><i>&chi;</i><sup>2</sup></em>
                      <span>=</span>
                      <i>
                      <div class="maths-exp">
                        <div class="division-block">
                          <span class="numerator">
                            <em>(n - 1)s<sup>2</sup></em>
                          </span>
                          <span>&sigma;<sup>2</sup></span>
                        </div>
                      </div>
                      </i>
                    </div>
                  </div> 
                </div>
              </div>`,
        label: "St. dev. sigma or variance sigma square chi square Strict requirement: normally distributed population chi square equal to paranthesis n minus 1 s square divide by sigma square.",
        description: "Try again. <i>Hint: </i>The claim involves a proportion.",
      },
    ],
  },
  {
    frame: "frame2",
    id: "question2",
    activeTimestamp: 436.038196,
    onContinueTimestamp: 436.566704,
    text: "For this example, if the <i>P</i>-value had been 0.1234 instead of 0.000, which of the following would be correct?",
    markerLabel: "Question 2",
    markerTitle: "Question 2",
    questionLabel: "",
    correctAnswer: "optb",
    options: [
      {
        id: "opta",
        text: "Reject the null hypothesis",
        label: "Reject the null hypothesis",
        description:"Reject the null hypothesis only if the <i>P</i>-value is less than or equal to the significance level, but 0.1234 is not less than or equal to 0.05.",
      },
      {
        id: "optb",
        text: "Fail to reject the null hypothesis",
        label: "Fail to reject the null hypothesis",
        description: "Because 0.1234 is not less than or equal to 0.05, we should fail to reject the null hypothesis.",
      }
    ],
  },
  {
    frame: "frame3",
    id: "question3",
    activeTimestamp: 438.702277,
    onContinueTimestamp: 527.455539,
    text: "Suppose a hypothesis test results in a test statistic of <i>z</i> = 1.88, so the area to the right of that test statistic is 0.0301. If the alternative hypothesis is <i>H<sub>1</sub>: p</i> ≠ 0.75, what is the <i>P</i>-value for this test?",
    markerLabel: "Question 3",
    markerTitle: "Question 3",
    questionLabel: "",
    correctAnswer: "optb",
    options: [
      {
        id: "opta",
        text: "0.0301",
        label: "0.0301",
        description: "Try again.",
      },
      {
        id: "optb",
        text: "0.0602",
        label: "0.0602",
        description: "In a two-tailed hypothesis test, the <i>P</i>-value is <i>twice</i> the area in the tail beyond the test statistic.",
      },
      {
        id: "optc",
        text: "0.9699",
        label: "0.9699",
        description: "Try again.",
      },
      {
        id: "optd",
        text: "0.1030",
        label: "0.1030",
        description: "Try again.",
      },
      {
        id: "opte",
        text: "0.75",
        label: "0.75",
        description: "Try again.",
      },
    ],
  },
  {
    frame: "frame4",
    id: "question4",
    activeTimestamp: 523.999751,
    onContinueTimestamp: 524.292403,
    text: "For this example, if the test statistic had been <i>z</i>  = 1.25 instead of <i>z</i> = 13.81, which of the following would be correct?",
    markerLabel: "Question 4",
    markerTitle: "Question 4",
    questionLabel: "",
    correctAnswer: "optb",
    options: [
      {
        id: "opta",
        text: "Reject the null hypothesis",
        label: "Reject the null hypothesis.",
        description:
        "Reject the null hypothesis only if the test statistic falls in the critical region bounded by <i>z</i> = 1.645. The test statistic of <i>z</i> = 125 does not fall in the critical region.",
      },
      {
        id: "optb",
        text: "Fail to reject the null hypothesis",
        label: "Fail to reject the null hypothesis",
        description: "Because a test statistic of <i>z</i>  = 1.25 does not fall in the critical region bounded by the critical value of <i>z</i>  = 1.645, we should fail to reject the null hypothesis.",
      }
    ],
  },
  {
    frame: "frame5",
    id: "question5",
    activeTimestamp: 526.758394,
    onContinueTimestamp: 527.655539,
    text: "Suppose this right-tailed hypothesis test is conducted with a significance level of 0.01 instead of 0.05. What is the critical value for this test?",
    markerLabel: "Question 5",
    markerTitle: "Question 5",
    questionLabel: "",
    correctAnswer: "optb",
    options: [
      {
        id: "opta",
        text: " &minus;2.33",
        label: "minus 2.33",
        description: "Try again.",
      },
      {
        id: "optb",
        text: " 2.33",
        label: "2.33",
        description: false,
      },
      {
        id: "optc",
        text: " 2.575",
        label: "2.575",
        description: "Try again.",
      },
      {
        id: "optd",
        text: " &minus;2.575",
        label: "minus 2.575",
        description: "Try again.",
      },
      {
        id: "opte",
        text: " 0.01",
        label: "0.01",
        description: "Try again.",
      },
    ],
  } 
];
