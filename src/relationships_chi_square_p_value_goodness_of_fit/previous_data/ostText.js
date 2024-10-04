//import { spaceMountainWaitTimesTable } from "./dataTable";

export default [
  {
    id: "ost1 ost-css",
    startTime: 36.901634, // first
    middleTime:42.7915, // good model
    endTime: 45.662711,  //these criteria. ppt frame end
    text: '<li><i>O</i> = Observed value</li>', 
    transform:true
  },
  {
    id: "ost2 ost-css",
    startTime: 42.7915,  //particular text start
    middleTime:45.551807, // particular text end
    endTime: 45.662711,  // ppt frame end
    text: '<li><i>E</i> = Expected value</li>',
    transform:true
  },
  {
    id: "ost3 ost-css",
    startTime: 45.983475,
    middleTime:59.371173,
    endTime: 79.886014,
    text: '<li><i>O</i> and <i>E</i> are close <div class="arrow"></div></li>',
    transform:true
  },
  {
    id: "ost4 ost-css",
    startTime: 59.760213,
    middleTime:72.126587,
    endTime: 79.886014,
    text: '<li>SMALL <i>χ</i><sup>2</sup> test statistic <br/> LARGE <i>P</i>-value<div class="arrow"></div></li>',
    transform:true
  },
  {
    id: "ost5 ost-css",
    startTime: 72.515843,
    middleTime:78.212951,
    endTime: 79.886014,
    text: '<li>Goodness-of-fit</li>',
    transform:true
  },
  {
    id: "ost6 ost-css",
    startTime: 80.224248,
    middleTime:94.523377,
    endTime: 117.729845,
    text: '<li><i>O</i> and <i>E</i> are far apart<div class="arrow"></div></li>',
    transform:true
  },
  {
    id: "ost7 ost-css",
    startTime: 95.384156,
    middleTime:102.191547,
    endTime: 117.729845,
    text: '<li>LARGE  <i>χ</i><sup>2</sup> test statistic <br/> SMALL <i>P</i>-value<div class="arrow"></div></li>',
    transform:true
  },
  {
    id: "ost8 ost-css",
    startTime: 102.637731,
    middleTime:113.26998,
    endTime: 117.729845,
    text: '<li>Not goodness-of-fit</li>',
    transform:true
  },
  {
    id: "ost9 ost-css",
    startTime: 117.729845,
    middleTime:123.099196,
    endTime: 123.099196,
    text: `Let's try another one.`,
    transform:true
  }
 
];
