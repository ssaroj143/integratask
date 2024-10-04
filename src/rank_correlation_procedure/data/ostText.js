import {formula1,formula2,formula3} from "./formula";
export default [
  {
    id: "ost1",
    startTime: 68.518933, // first
    middleTime:78.226077, // good model
    endTime: 120.326069,  //these criteria. ppt frame end
    text: '<li><span aria-hidden="true"><em>d</em> = difference between ranks for the two values within an individual pair</span><span class="sr-only-max-width">d = difference between ranks for the two values within an individual pair</span></li>', 
    transform:true
  },
  {
    id: "ost2",
    startTime: 78.264031, // first
    middleTime:84.839566,
    endTime: 120.326069,
    text: '<li><span aria-hidden="true"><em>n</em> = number of pairs of sample data</span><span class="sr-only-max-width">n = number of pairs of sample data</span></li>',
    transform:true
  },
  {
    id: "ost3",
    startTime: 85.219311,  
    middleTime:91.615523, 
    endTime: 120.326069,  
    
    text: '<li class="heading"><span aria-hidden="true">&Sigma;<em>(d</em><sup>2</sup>)</span><span class="sr-only-max-width">sum of d squared</span></li>',
    transform:true
  },
  {
    id: "ost4",
    startTime: 92.003768,
    middleTime:117.272025,
    endTime: 120.326069,
    
    text: '<li><span aria-hidden="true">'+formula2+'</span><span class="sr-only-max-width">r sub s =1 minus start fraction 6 times the sum of d squared over n left parenthesis n squared minus 1 right parenthesis end </span></li>',
    transform:true
  },
  
  {
    id: "ost5",
    startTime: 120.626069,
    middleTime: 132.947957,
    endTime: 144.827167+0.150,
    text: "<li><span aria-hidden='true'>"+formula1+"</span><span class='sr-only-max-width'> r sub s = start fraction n the sum of x y minus the sum of x times the sum of y over the square root of start expression n times the sum of x squared minus the sum of x the whole squared end expression times the square root of start expression n times the sum of y squared minus the sum of y the whole squared end expression end fraction.</span></li>",
    transform:true
  },
  {
    id: "ost6",
    startTime: 133.151919,
    middleTime:143.461385,
    endTime: 144.827167+0.150,
    text: "<li><span aria-hidden='true'><em>n</em> = number of pairs of sample data</span><span class='sr-only-max-width'>n = number of pairs of sample data</span></li>",
    transform:true
  },
  {
    id: "ost7",
    startTime: 159.060187,
    middleTime:179.670298,
    endTime: 196.320907,
    text: "<li><span aria-hidden='true'>"+formula3+"</span><span class='sr-only-max-width'>r sub s = + or minus start fraction z over the square root of start expression n minus 1 end expression end fraction</span></li>",
    transform:true
  },
  {
    id: "ost8",
    startTime: 180.419042,
    middleTime:194.180907,
    endTime: 196.320907,
    text: '<li style="margin-bottom:24px"><span aria-hidden="true"><em>Example</em>: For 0.05 significance level use:<br><em>z</em> = 1.96 and <em>z</em> = &minus;1.96</span><span class="sr-only-max-width">Example: For 0.05 significance level use:z = 1.96 and z = -1.96</span></li><li> <em>n</em> = number of pairs of sample data</li>',
    transform:true
  },
   /* {
    id: "ost9",
    startTime: 167.366748,
    //middleTime:256.379451,
    endTime: 178.733458,
    text: 'Median is good choice if some extreme values are present.',
    transform:true
  },
   {
    id: "ost10",
    startTime: 212.179164,
    middleTime:214.537717,
    endTime: 227.746223,
    text: 'Important Properties of the Mode',
    transform:true
  },
  {
    id: "ost11",
    startTime: 215.383945,
    middleTime:218.981108,
    endTime: 227.746223,
    text: '- Can be found with qualitative data',
    transform:true
  },
   {
    id: "ost12",
    startTime: 219.924149,
    //middleTime:195.105505,
    endTime: 227.746223,
    text: '- Data set can have no mode, one mode or multiple modes',
    transform:true
  },
 {
    id: "ost13",
    startTime: 239.875222,
    middleTime:246.424911,
    endTime: 282.755039,
    text: 'Data will come soon.',
    transform:true
  },
  {
    id: "ost14",
    startTime: 246.898394,
   // middleTime:246.424911,
    endTime: 282.755039,
    text: 'Important Properties of the Midrange<br>- Not resistant<br>- Rarely used<br>- Easy compute<br>- Sometimes confused with median',
    transform:true
  },
  {
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
    text: '<div class="option"><ul><li><span class="sr-only-max-width">k=90</span><span aria-hidden="true"><em>k</em>=90</span></li></ul></div>',
    startTime: 208.159396,
    middleTime:213.179795,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost29",
    text: '<div class="option"><ul><li><span class="sr-only-max-width">n=50</span><span aria-hidden="true"><em>n</em>=50</span></li></ul></div>',
    startTime: 213.189795,
    middleTime:218.438255,
    endTime: 225.51899,
    transform:true
  },
  {
    id: "ost30",
    text: "<div class='option'><ul><li><div class='wrapper' aria-hidden='true'><em>L</em>=<div class='maths-exp'><div class='parenthesis'>(</div><div class='division-block'><span class='numerator'>90</span><span>100</span></div><div class='parenthesis'>)</div></div><em>50</em><span>=45</span></div></div><p class='sr-only-max-width'>We find that L equals 90 divided by 100 times 50, which equals 45.</p></li></ul></div>",
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
    text: "<div class='option'><ul><li><div class='wrapper' aria-hidden='true'> <div class='maths-exp'><div class='division-block'><span class='numerator'>60 + 75</span><span>2</span></div></div><span>&nbsp;=&nbsp;67.5</span></div></div><p class='sr-only-max-width'> so we can add 60 and 75, then divide by 2 to get our result of 67.5 minutes.</p></li></ul></div>",
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