//import { spaceMountainWaitTimesTable } from "./dataTable";

export default [
  {
    id: "ost1 ost-css",
    startTime: 36.901634, // first
    middleTime:42.7915, // good model
    endTime: 60.371173, //these criteria. ppt frame end
    text: '<li><i>O</i> = Observed value</li>', 
    transform:true
  },
  {
    id: "ost2 ost-css",
    startTime: 42.7915,  //particular text start
    middleTime:45.362711, // particular text end
    endTime: 60.371173,  // ppt frame end
    text: '<li><i>E</i> = Expected value</li>',
    transform:true
  },
  {
    id: "ost3 ost-css",
    startTime: 46.983475,
    middleTime:60.371173,
    endTime: 82.70469,
    text: '<li><i>O</i> and <i>E</i> are close <div class="arrow"></div></li>',
    transform:true
  },
  {
    id: "ost4 ost-css",
    startTime: 60.760213,
    middleTime:73.126587,
    endTime: 82.70469,
    text: '<li><span class="sr-only">SMALL chi squared test statistic <br/> LARGE P-value</span><span aria-hidden="true">SMALL <i>χ</i><sup>2</sup> test statistic <br/> LARGE <i>P</i>-value<div class="arrow"></div><span></li>',
    transform:true
  },
  {
    id: "ost5 ost-css",
    startTime: 73.515843,
    middleTime:80.906908,
    endTime: 82.70469,
    text: '<li>Goodness-of-fit</li>',
    transform:true
  },
  {
    id: "ost6 ost-css",
    startTime: 82.72469,
    middleTime:96.523377,
    endTime: 119.729845,
    text: '<li><i>O</i> and <i>E</i> are far apart<div class="arrow"></div></li>',
    transform:true
  },
  {
    id: "ost7 ost-css",
    startTime: 97.384156,
    middleTime:104.191547,
    endTime: 119.729845,
    text: '<li><span class="sr-only">LARGE chi squared test statistic <br/> SMALL P-value</span><span aria-hidden="true">LARGE <i>χ</i><sup>2</sup> test statistic <br/> SMALL <i>P</i>-value<div class="arrow"></div></span></li>',
    transform:true
  },
  {
    id: "ost8 ost-css",
    startTime: 104.637731,
    middleTime:116.26998,
    endTime: 119.729845,
    text: '<li>Not goodness-of-fit</li>',
    transform:true
  },
  {
    id: "ost9 ost-css",
    startTime: 119.729845,
    middleTime:125.099196,
    endTime: 125.099196,
    text: `Let's try another one.`,
    transform:true
  },
  {
    id: "ost10 ost-css",
    startTime: 126.161594,
    //middleTime:125.099196,
    endTime: 160.743212,
    text: `<li>If the <i>P</i> is low, the null must go.</li>`,
    //transform:true
  }
];
