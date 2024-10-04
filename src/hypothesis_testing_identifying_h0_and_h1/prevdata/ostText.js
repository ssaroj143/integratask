import { spaceMountainWaitTimesTable } from "./dataTable";

export default [
  {
    id: "ost1",
    startTime: 21.558277, // first
    middleTime:27.208692, // good model
    endTime: 45.888826,  //these criteria. ppt frame end
    text: '<div class="option"><ul><li>Express the null hypothesis (<em>H</em><sub>0</sub>) using ONLY the equal <span class="nowrap">sign (=)</span>.</li></ul></div>', 
    transform:true
  },
  {
    id: "ost21",
    startTime: 28.007779,  //particular text start
    middleTime: 32.954337, // particular text end
    endTime: 45.888826,  // ppt frame end
    text: `<div class="option">
            <ul>
              <li> Express the alternative hypothesis (<em>H</em><sub>1</sub>) using one of the following:
                  
              </li>
            </ul>
          </div>`,
    transform:true
    // <ul>  
    // • less than sign (<)<br>• greater than sign (>)<br>• inequality sign (≠)
    // </ul>
  },
  {
    id: "ost22",
    startTime: 33.495261,  //particular text start
    middleTime: 35.009681, // particular text end
    endTime: 45.888826,  // ppt frame end
    text: `<div class="option">
            <ul>
              
                  <ul>  
                    • less than sign (<)
                  </ul>
              
            </ul>
          </div>`,
    transform:true
  },
  {
    id: "ost23",
    startTime: 35.693512,  //particular text start
    middleTime: 37.122292, // particular text end
    endTime: 45.888826,  // ppt frame end
    text: `<div class="option">
            <ul>
              
                  <ul>  
                    • greater than sign (>)
                  </ul>
            
            </ul>
          </div>`,
    transform:true
  },
  {
    id: "ost24",
    startTime: 37.434655,  //particular text start
    middleTime: 39.658498, // particular text end
    endTime: 45.888826,  // ppt frame end
    text: `<div class="option">
            <ul>
              
                  <ul>  
                    • inequality sign (≠)
                  </ul>
              
            </ul>
          </div>`,
    transform:true
  },
  //for ul //+1sec for updated audio
  {
    id: "ost3",
    startTime: 63.650021,//62.491323,
    middleTime: 67.938108,
    endTime: 76.797572, //+1sec 
    text: `<div class="option"><ul><li>Claim:<br>Fewer than 5% of batteries are defective</li></ul></div>`,
    transform:true
  },
  { 
    id: "ost4",
    startTime: 68.157801,//69.482824,
    middleTime:74.859645,
    endTime: 76.797572, //+1sec 
    text: `<div class="option"><ul><li>Symbolic form:<br><i><em>p</em></i> < 0.05</li></ul></div>`,
    transform:true
  },
  // {
  //   id: "ost5",
  //   startTime: 82.459137,
  //   middleTime: 82.459137,
  //   endTime:  101.991304,
  //   text: '<div class="option">• What symbolic form is true if <em>p</em> < 0.05 is false?</div>',
  //   transform:true
  // },
  {
    id: "ost6",
    heading: `What symbolic form is true if <br><em>p</em> < 0.05 is false?<br>&emsp;<br>
              Choose One:`,
    startTime: 84.200585,
    endTime: 94.704338,//+1sec after 1.29
    id: "question_1",
    type: "buttons",
    branch: "condition1",
    buttons: [
      {
        id: "ost6btn1",
        key: "first",//"p>0.05",
        startTime: 84.200585,
        endTime:94.704338,//91.907065,
        label: "<em>p</em> > 0.05",
      },
      {
        id: "ost6btn2",
        key:"second",// "p=0.05",
        startTime: 84.200585,
        endTime:94.704338,//91.907065,
        label: "<em>p</em> = 0.05",
      },
      {
        id: "ost6btn3",
        key: "third",//"p≥0.05",
        startTime: 84.200585,
        endTime: 94.704338,//91.907065,
        label: "<em>p</em> ≥ 0.05",
      },
    ],
  },
  {
    id: "ost6incorrect",
    startTime: 90.60376,
    endTime: 94.704338,
    text: "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost6",
    startTime: 90.60376,
    endTime: 94.704338,
    text: "<h2>TRY AGAIN.</h2>",
  },
  {
    id: "ost6correct",
    startTime: 94.927065,//+2 sec after 1.32
    endTime: 106.991304, 
    label:"  ",
    text: "<div class='correct message'><span class='icon'></span><p>CORRECT!</p></div>",
  },
  {
    id: "ost6correctfeedback",
    startTime: 96.013322,
    middleTime:105.755288,
    endTime: 106.991304, 
    text: `<div class="option"><ul><li>The symbolic form of the claim that must be true if the original claim is false is <em>p</em> ≥ 0.05.</li></ul></div>`,
    transform:true
  },
 {
    id: "ost7",
    startTime: 113.069136,//+2sec after 1.32
    middleTime: 120.928135,
    endTime: 141.892749,//+3sec after 2.06
    text: '<div class="option"><ul><li>Original claim:<br><i><em>p</em></i> < 0.05</li></ul></div>',
    transform:true
  },
  {
    id: "ost8",
    startTime: 121.55977,//+2sec after 1.32
    middleTime: 125.03706,
    endTime: 141.892749,//+3sec after 2.06
    text: '<div class="option"><ul><li>If original claim is false:<br><i><em>p</em></i> ≥ 0.05</li></ul></div>',
    transform:true
  },
 {
    id: "ost9",
    heading: "Which is the alternative hypothesis?",
    startTime:  125.313706,//+2sec after 1.32
    endTime: 141.807789,//+3sec after 2.06

    id: "question_2",
    type: "buttons",
    branch: "condition2",
    buttons: [
      {
        id: "ost9btn1",
        key:"first",// "p<0.05",
        startTime:  125.313706,
        endTime: 141.807789,
        label: "<em>p</em> < 0.05", 
      },
      {
        id: "ost9btn2",
        key:"second",// "p≥0.05",
        startTime: 125.313706,
        endTime: 141.807789,
        label: "<em>p</em> ≥ 0.05",
      },
    ],
  },
  {
    id: "ost9incorrect", 
    startTime: 130.307856, //+3sec after 2.06
    endTime: 141.787789,
    text: "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost9try",
    startTime: 130.307856,
    endTime: 141.787789,
    text: "<h2>TRY AGAIN.</h2>",
  },
  {
    id: "ost9hint",
    startTime: 133.415710,
    middleTime: 141.255263,
    endTime: 141.787789,
    text: '<div class="option"><ul><li>Of the two symbolic expressions, the one that <em>does not</em> include equality is the alternative hypothesis.</li></ul></div>',
    transform:true
  },
  {
    id: "ost9correct",
    startTime: 141.807789,
    endTime: 159.933562,//+2sec 
    label:"  ",
    text: "<div class='correct message'><span class='icon'></span><p>CORRECT!</p></div>",
  },
  {
    id: "ost10",
    startTime: 144.035712,
    middleTime: 149.920457,
    endTime: 192.646254, //+2sec
    text: '<div class="option"><ul><li>Alternative hypothesis (<em>H</em><sub>1</sub>):<br><i><em>p</em></i> < 0.05</li></ul></div>',
    transform:true
  },
  {
    id: "ost9correctfeedback",
    startTime: 150.799310,//69.482824,
    middleTime: 157.3599925,
    endTime: 159.933562, //+2sec 
    text: `<div class="option"><ul><li>Remember, this expression is the alternative hypothesis because it <em>does not</em> include equality.</li></ul></div>`,
    transform:true
  },
  { //+2seconds
    id: "ost11",
    heading: "Which is the null hypothesis (<em>H</em><sub>0</sub>)?",
    startTime: 164.694056,
    endTime: 178.40966,

    id: "question_3",
    type: "buttons",
    branch: "condition3",
    buttons: [
      {
        id: "ost11btn1",
        key: "first",//p≥0.05",
        startTime: 164.714056,
        endTime: 178.40966,
        label: "<em>p</em> ≥ 0.05",
      },
      {
        id: "ost11btn2",
        key:"second",// "p=0.05",
        startTime: 164.714056,
        endTime: 178.40966,
        label: "<em>p</em> = 0.05",
      },
      
    ],
  },
  {
    id: "ost11incorrect",
    startTime: 169.449703,
    endTime: 178.40966,
    text: "<div class='incorrect message'><span class='icon'></span><p>INCORRECT.</p></div>",
  },
  {
    id: "ost6",
    startTime: 169.449703,
    endTime: 178.40966,
    text: "<h2>TRY AGAIN.</h2>",
  },
  {
    id: "ost11hint",
    startTime: 172.359854,
    middleTime: 177.724478,
    endTime: 178.40966,
    text: '<div class="option"><ul><li>Remember, the symbolic expression that uses the equal sign is the null hypothesis.</li></ul></div>',
    transform:true
  },
  {
    id: "ost11correct",
    startTime: 178.40966,
    endTime: 192.646254,
    label:"  ",
    text: "<div class='correct message'><span class='icon'></span><p>CORRECT!</p></div>",
  },
  {
    id: "ost11null",
    startTime: 179.77918,
    middleTime: 184.283975,
    endTime: 192.646254,
    text: '<div class="option"><ul><li>Null hypothesis (<em>H</em><sub>0</sub>):<br><i><em>p</em></i> = 0.05</li></ul></div>',
    transform:true
  },
  {
    id: "ost11correctfeedback",
    startTime: 184.827084,//69.482824,
    middleTime: 189.774226,
    endTime: 192.646254, //+1sec 
    text: `<div class="option"><ul><li>The symbolic expression that uses the equal sign is the null hypothesis.</li></ul></div>`,
    transform:true
  },
  {
    id: "ost12",
    startTime: 193.600161,
    middleTime: 195.599795,
    endTime: 195.599795,
    text: '<div class="option">Let’s try another one.</div>',
    transform:true
  },
   {
    id: "ost12",
    startTime: 207.232536,
    middleTime:212.925794,
    endTime: 236.357973,
    text: '<div class="option"><ul><li>Express the null hypothesis (<em>H</em><sub>0</sub>) using ONLY the equal <span class="nowrap">sign (=)</span>.</li></ul></div>',
    transform:true
  },
 {
    id: "ost13",
    startTime: 213.974271,
    middleTime:219.656801,
    endTime: 236.357973,
    text:  `<div class="option">
              <ul>
                <li>
                  Express the alternative hypothesis (<em>H</em><sub>1</sub>) using one of the following:
                      <ul class="option">
                        <ul class="bullets">
                          <li>less than sign (<)</li>
                          <li>greater than sign (>)</li>
                          <li>inequality sign (≠)</li>
                        </ul>
                      </ul>
                    </li>
                </ul>
          </div>`,
    transform:true
  },
  // {
  //   id: "ost14",
  //   startTime: 225.63641,
  //   middleTime: 228.406135,
  //   endTime: 230.357973,
  //   text: '<div class="option"><ul><li>Procedure for Hypothesis Tests</li></ul></div>',
  //   transform:true
  // },
  {
    id: "ost15",
    startTime: 226.413267,//228.406135,
    endTime: 236.357973,
    text:'',
    text:"<div class='button-group link'><a target='_blank' href='https://media.pearsoncmg.com/cmg/pmmg_mml_shared/animations/statistics/triola_flowchart/stat14t_hyp_test_procedure/index.html'>Procedure for Hypothesis Tests</a></div>"
    //<div class='option'><ul><li>Procedure for Hypothesis Tests</li></ul></div>
  },
  // {
  //   id: "ost15",
  //   heading: "",
  //   startTime: 228.60239,
  //   endTime: 230.357973,

  //   id: "question_4",
  //   type: "buttons",
  //   // branch: "condition4",
  //   buttons: [
  //     {
  //       id: "ost15btn1",
  //       key: "procedure_for_hypothesis_test",//p≥0.05",
  //       startTime:228.60239,
  //       endTime: 230.357973,
  //       label: `<a href="https://magic-ce-projects.s3.amazonaws.com/Content_2827-PE-HTML-Interactive-Flowcharts/procedure_for_hypothesis_test/2021-03-10_10-11-39/index.html" target="_blank">Procedure for Hypothesis Tests</a>`,
        
  //       //https://media.pearsoncmg.com/cmg/pmmg_mml_shared/animations/statistics/triola_flowchart/stat14t_rank_corr_testing/index.html
  //     },
  //   ],
  // },
  /*{
    id: "ost15",
    startTime: 214.035951,
    middleTime:218.887972,
    endTime: 226.294725,
    text: 'Claim: Soda cans contain a mean of 12 ounces of soda.',
    transform:true
  },
  {
    id: "ost16",
    startTime: 219.396752,
    //middleTime:147.10511,
    endTime: 226.294725,
    text: "Fail to reject null hypothesis.",
    transform:true
  },
  {
    id: "ost17",
    startTime: 228.472052,
    middleTime:235.075859,
    endTime: 245.188322,
    text: 'Fail to reject the null hypothesis.',
    transform:true
  },
  {
    id: "ost18",
    startTime: 235.705287,
   // middleTime:158.294562,
    endTime: 245.188322,
    text: '<i>“There is not sufficient evidence to warrant rejection of the claim that the soda cans have a mean equal to 12 ounces.”</i>',
    transform:true
  },
  {
    id: "ost19",
    startTime: 246.182786,
    middleTime:258.674428,
    endTime: 273.681982,
    text: 'Reject the null hypothesis.',
    transform:true
  },
  {
    id: "ost20",
    startTime: 259.211644,
    //middleTime:172.547375,
    endTime: 273.681982,
    text: '<i>“There is sufficient evidence to warrant rejection of the claim that the soda cans contain a mean equal to 12 ounces of soda.”</i>',
    transform:true
  },
  
{
    id: "ost21",
    startTime: 172.557375,
    middleTime:176.603056,
    endTime: 179.603056,
    text: '<div class="option"><ul><li>We round 37.5 up to the next larger whole number, which is 38.</li></ul></div>',
    transform:true
  },
  {
    id: "ost22",
    text: `${spaceMountainWaitTimesTable}`,
    startTime: 187.978405,
    endTime: 198.474179,
  },
  {
    id: "ost23",
    startTime: 179.613056,
    middleTime:192.191974,
    endTime: 198.474179,
    text: '<div class="option"><ul><li>Because L is the position of the percentile we are trying to find, the value of the 75th percentile is the value at the 38th position in the list, which is 50.</li></ul></div>',
    transform:true
  },
  {
    id: "ost24",
    text: '<div class="option"><ul><li>The 75th percentile is 50 minutes.</li></ul></div>',
    startTime: 192.201974,
    middleTime:196.989753,
    endTime: 198.474179,
    transform:true
  },
  {
    id: "ost25",
    text: `${spaceMountainWaitTimesTable}`,
    startTime: 199.474179,
    endTime: 243.264005,
  },
  {
    id: "ost26",
    text: '<div class="option"><ul><li>This time, we will find the value of the 90th percentile.</li></ul></div>',
    startTime: 199.474179,
    middleTime:203.143809,
    endTime: 225.51899,
    transform:true
  },
  
  {
    id: "ost27",
    text: '<div class="option"><ul><li>The values in the table are already sorted from low to high.</li></ul></div>',
    startTime: 204.101539,
    middleTime:208.149396,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost28",
    text: '<div class="option"><ul><li><span class="sr-only">k=90</span><span aria-hidden="true"><em>k</em>=90</span></li></ul></div>',
    startTime: 208.159396,
    middleTime:213.179795,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost29",
    text: '<div class="option"><ul><li><span class="sr-only">n=50</span><span aria-hidden="true"><em>n</em>=50</span></li></ul></div>',
    startTime: 213.189795,
    middleTime:218.438255,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost30",
    text: "<div class='option'><ul><li><div class='wrapper' aria-hidden='true'><em>L</em>=<div class='maths-exp'><div class='parenthesis'>(</div><div class='division-block'><span class='numerator'>90</span><span>100</span></div><div class='parenthesis'>)</div></div><em>50</em><span>=45</span></div></div><p class='sr-only'>We find that L equals 90 divided by 100 times 50, which equals 45.</p></li></ul></div>",
    startTime: 218.448255,
    middleTime:221.51899,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost31",
    text: `${spaceMountainWaitTimesTable}`,
    startTime: 243.264005,
    endTime:284.49236,
  },
  {
    id: "ost32",
    text: '<div class="option"><ul><li>In this case, because L equals 45, which is a whole number, we find the value of the 90th percentile by locating the wait time at the 45th position in the list and also the wait time at the next value in the list. </li></ul></div>',
    startTime: 225.52899,
    middleTime:243.254005,
    endTime: 284.492365,
    transform:true
  },
 
  {
    id: "ost33",
    text: '<div class="option"><ul><li>In this table, the 45th value is 60 and the next value in the list is 75.</li></ul></div>',
    startTime: 243.264005,
    middleTime:249.847359,
    endTime: 284.492365,
    transform:true
  },
  {
    id: "ost34",
    text: '<div class="option"><ul><li>The value of the 90th percentile is midway between 60 and 75.</li></ul></div>',
    startTime: 249.857359,
    middleTime:255.551225,
    endTime: 284.492365,
    transform:true
  },
  {
    id: "ost35",
    text: "<div class='option'><ul><li><div class='wrapper' aria-hidden='true'> <div class='maths-exp'><div class='division-block'><span class='numerator'>60 + 75</span><span>2</span></div></div><span>&nbsp;=&nbsp;67.5</span></div></div><p class='sr-only'> so we can add 60 and 75, then divide by 2 to get our result of 67.5 minutes.</p></li></ul></div>",
    startTime: 255.551225,
    middleTime:265.405414,
    endTime: 284.492365,
    transform:true
  },
  {
    id: "ost36",
    text: '<div class="option"><ul><li>The 90th percentile is 67.5 minutes. The wait time of 67.5 minutes is midway between the 45th value in the list and the 46th value in the list.</li></ul></div>',
    startTime: 265.405414,
    middleTime:281.135895,
    endTime: 284.492365,
    transform:true
  },
  {
    id: "ost37",
    text: '<div class="option"><ul><li><p>In this flowchart, we reviewed the procedure for converting a percentile to its corresponding data value.</p></li></ul></div>',
    startTime: 285.492365,
    middleTime:293.212645,
    endTime: 316.451443,
    transform:true
  },
  {
    id: "ost38",
    text: '<div class="option"><ul><li><p>Remember, this flowchart describes one simple procedure and there are other more complicated procedures that might yield different results.</p></li></ul></div>',
    startTime: 293.222645,
    middleTime:303.439684,
    endTime: 316.451443,
    transform:true
  },
  {
    id: "ost39",
    text: '<div class="option"><ul><li>Also, different technologies use different procedures, so results from technologies might not exactly agree with results obtained by using this flowchart.</li></ul></div>',
    startTime: 303.449684,
    middleTime:311.451443,
    endTime: 316.451443,
    transform:true
  }, */
  
 
];