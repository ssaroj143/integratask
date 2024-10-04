import { spaceMountainWaitTimesTable } from "./dataTable";

export default [
  {
    id: "ost1",
    startTime: 7.953944,
    middleTime:21.076501,
    endTime: 80.1022,
    text: '<div class="option"><ul><li>In this activity, we will learn how to use the flowchart to determine the value of different percentiles, such as the 25th percentile or the 40th percentile.</li></ul></div>',
    transform:true
  },
  {
    id: "ost2",
    startTime: 21.106501,
    middleTime:30.622337,
    endTime: 80.1022,
    text: '<div class="option"><ul><li>You should know that this flowchart describes one simple procedure but there are other more complicated procedures that might yield different results.</li></ul></div>',
    transform:true
  },
  {
    id: "ost3",
    startTime: 31.622337,
    middleTime:42.77422,
    endTime: 80.1022,
    text: '<div class="option"><ul><li>Also, different technologies use different procedures, so results from technologies might not exactly agree with results obtained by using the flowchart.</li></ul></div>',
    transform:true
  },
 
  {
    id: "ost5",
    startTime: 42.97422,
    middleTime:54.635112,
    endTime: 187.968405,
    text: spaceMountainWaitTimesTable,
    transform:true,
    hiddenChart: true
  },
  {
    id: "ost4",
    startTime: 42.97422,
    middleTime:54.635112,
    endTime: 80.5422,
    text: '<div class="option"><ul><li>The accompanying table lists wait times (in minutes) for the Space Mountain ride in Disney World. These wait times were recorded at 10 o’clock in the morning.</li></ul></div>',
    transform:true,
    hiddenChart: true
  },
  {
    id: "ost6",
    startTime: 54.645112,
    middleTime:58.900106,
    endTime: 80.5422,
    text: '<div class="option"><ul><li>We will illustrate the flowchart using two different examples.</li></ul></div>',
    transform:true
  },
  {
    id: "ost7",
    startTime: 58.910106,
    middleTime:71.619412,
    endTime: 80.5422,
    text: '<div class="option"><ul><li><span aria-hidden="true">The first example results in <br/> <em>L</em> = 37.5, which is not a whole number, and the second example results in <br/><em> L</em> = 45, which is a whole number.</span><span class="sr-only">The first example results in <br/> L = 37.5, which is not a whole number, and the second example results in <br/> L = 45, which is a whole number.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost8",
    startTime: 71.629412,
    middleTime:77.407475,
    endTime: 80.5422,
    text: '<div class="option"><ul><li><span aria-hidden="true">Note the two different approaches used, depending on whether <em>L</em> is a whole number.</span><span class="sr-only">Note the two different approaches used, depending on whether L is a whole number.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost9",
    startTime: 81.2122,
    middleTime:87.699035,
    endTime: 104.812762,
    text: '<div class="option"><ul><li>First, we will use the flowchart and the table to find the value of the 75th percentile.</li></ul></div>',
    transform:true
  },
  {
    id: "ost10",
    startTime: 91.720042,
    middleTime:97.935394,
    endTime: 104.812762,
    text: '<div class="option"><ul><li>We first need to sort the data by arranging the values in order from lowest to highest.</li></ul></div>',
    transform:true
  },
  {
    id: "ost11",
    startTime: 97.945394,
    middleTime:104.584859,
    endTime: 165.998421,
    text: '<div class="option"><ul><li>Note that the values in the table are already arranged in order by rows.</li></ul></div>',
    transform:true
  },
  {
    id: "ost12",
    startTime: 104.8653,
    middleTime:119.975238,
    endTime: 165.998421,
    text: '<div class="option"><ul><li><span aria-hidden="true">Next, we compute <em>L</em>, the <em>LOCATOR</em>  that gives the position in the list of a value corresponding to a percentile.  The locator, <em>L</em>, equals <em>k</em> divided by 100 multiplied by <em>n</em>.</span><span class="sr-only">Next, we compute L, the LOCATOR that gives the position in the list of a value corresponding to a percentile. The locator, L, equals K divided by 100 multiplied by n.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost13",
    startTime: 119.985238,
    middleTime:126.936092,
    endTime: 165.998421,
    text: '<div class="option"><ul><li><span class="sr-only">K is the percentile in question and N is the number of values in the list.</span><span aria-hidden="true"><em>k</em> is the percentile in question and <em>n</em> is the number of values in the list.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost14",
    startTime: 127.056092,
    middleTime:132.369276,
    endTime: 165.998421,
    text: '<div class="option"><ul><li><span class="sr-only">K equals 75 because we want the 75th percentile.</span><span aria-hidden="true"><em>k</em> equals 75 because we want the 75th percentile.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost15",
    startTime: 132.379276,
    middleTime:136.515716,
    endTime: 165.998421,
    text: '<div class="option"><ul><li><span class="sr-only">N equals 50 because there are 50 values in our table.</span><span aria-hidden="true"><em>n</em> equals 50 because there are 50 values in our table.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost16",
    startTime: 136.535716,
    middleTime:147.10511,
    endTime: 165.998421,
    text: "<div class='option'><ul><li><div class='wrapper' aria-hidden='true'><em>L</em>=<div class='maths-exp'><div class='parenthesis'>(</div><div class='division-block'><span class='numerator'>75</span><span>100</span></div><div class='parenthesis'>)</div></div>50<span>&nbsp;=&nbsp;</span></div></div><p class='sr-only'>So L equals 75 divided by 100 multiplied by 50, which equals 37.5.</p></li></ul></div>",
    transform:true
  },
  {
    id: "ost42",
    startTime: 145.10511,
    middleTime:147.10511,
    endTime: 165.998421,
    text: "37.5",
    transform:true
  },
  {
    id: "ost17",
    startTime: 147.12511,
    middleTime:151.086791,
    endTime: 165.998421,
    text: '<div class="option"><ul><li><span aria-hidden="true">Remember <em>L</em> is the POSITION of the percentile that we are trying to find.</span><span class="sr-only">Remember L is the POSITION of the percentile that we are trying to find.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost18",
    startTime: 152.096791,
    middleTime:158.294562,
    endTime: 165.998421,
    text: '<div class="option"><ul><li><span class="sr-only">The next step depends on whether L, which we just calculated, is a whole number or not.</span><span aria-hidden="true">The next step depends on whether <em>L</em>, which we just calculated, is a whole number or not.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost19",
    startTime: 158.304562,
    middleTime:163.779157,
    endTime: 165.998421,
    text: '<div class="option"><ul><li><span class="sr-only">In this example, L = 37.5, which is NOT a whole number.</span><span aria-hidden="true">In this example, <em>L</em> = 37.5, which is NOT a whole number.</span></li></ul></div>',
    transform:true
  },
  {
    id: "ost20",
    startTime: 166.871588,
    middleTime:172.547375,
    endTime: 198.474179,
    text: '<div class="option"><ul><li><span class="sr-only">Since L is not a whole number, we round L up to the next larger whole number. </span><span aria-hidden="true">Since <em>L</em> is not a whole number, we round <em>L</em> up to the next larger whole number. </span></li></ul></div>',
    transform:true
  },
  
  {
    id: "ost21",
    startTime: 172.557375,
    middleTime:179.603056,
    endTime: 198.474179,
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
    text: '<div class="option"><ul><li><span class="sr-only">Because L is the position of the percentile we are trying to find, the value of the 75th percentile is the value at the 38th position in the list, which is 50.</span><span aria-hidden="true">Because <em>L</em> is the position of the percentile we are trying to find, the value of the 75th percentile is the value at the 38th position in the list, which is 50.</span></li></ul></div>',
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
    text: '<div class="option"><ul><li><span class="sr-only">k=90</span><span aria-hidden="true"><em>k</em>&nbsp;=&nbsp;90</span></li></ul></div>',
    startTime: 208.159396,
    middleTime:213.179795,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost29",
    text: '<div class="option"><ul><li><span class="sr-only">n=50</span><span aria-hidden="true"><em>n</em>&nbsp;=&nbsp;50</span></li></ul></div>',
    startTime: 213.189795,
    middleTime:218.438255,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost30",
    text: "<div class='option'><ul><li><div class='wrapper' aria-hidden='true'><em>L</em>=<div class='maths-exp'><div class='parenthesis'>(</div><div class='division-block'><span class='numerator'>90</span><span>100</span></div><div class='parenthesis'>)</div></div>50<span>&nbsp;=&nbsp;</span></div></div><p class='sr-only'>We find that L equals 90 divided by 100 times 50, which equals 45.</p></li></ul></div>",
    startTime: 218.448255,
    middleTime:225.51899,
    endTime: 284.49236,
    transform:true
  },
  {
    id: "ost40",
    text: "45",
    startTime: 223.691493,
    middleTime:225.51899,
    endTime: 284.49236,
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
    text: '<div class="option"><ul><li><span class="sr-only">In this case, because L equals 45, which is a whole number, we find the value of the 90th percentile by locating the wait time at the 45th position in the list and also the wait time at the next value in the list.</span><span aria-hidden="true">In this case, because <em>L</em> equals 45, which is a whole number, we find the value of the 90th percentile by locating the wait time at the 45th position in the list and also the wait time at the next value in the list.</span> </li></ul></div>',
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
    text: "<div class='option'><ul><li><div class='wrapper' aria-hidden='true'> <div class='maths-exp'><div class='division-block'><span class='numerator'>60 + 75</span><span>2</span></div></div><span>&nbsp;=&nbsp;</span></div></div><p class='sr-only'> so we can add 60 and 75, then divide by 2 to get our result of 67.5 minutes.</p></li></ul></div>",
    startTime: 255.551225,
    middleTime:265.405414,
    endTime: 284.492365,
    transform:true
  },
  {
    id: "ost41",
    text: "67.5",
    startTime: 261.101225,
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
    endTime: 317.401443,
    transform:true
  },
  {
    id: "ost38",
    text: '<div class="option"><ul><li><p>Remember, this flowchart describes one simple procedure and there are other more complicated procedures that might yield different results.</p></li></ul></div>',
    startTime: 293.222645,
    middleTime:303.439684,
    endTime: 317.401443,
    transform:true
  },
  {
    id: "ost39",
    text: '<div class="option"><ul><li>Also, different technologies use different procedures, so results from technologies might not exactly agree with results obtained by using this flowchart.</li></ul></div>',
    startTime: 303.449684,
    middleTime:314.851443,
    endTime: 317.401443,
    transform:true
  },
  
 
];
