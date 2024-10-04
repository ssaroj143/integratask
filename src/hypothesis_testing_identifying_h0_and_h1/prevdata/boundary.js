export default {
  "give_symbolic_form": [
    {
      cutoffStartTime: 89.529344, //+1sec after 1.29
      cutoffEndTime: 90.30376,
      oncutoff: {
        pause: true,
      },
    },
    {
      cutoffStartTime: 94.147148, //+2sec after 1.32
      cutoffEndTime: 94.447148,
      oncutoff: {
        pause: true,
      },
    },
    // {
    //   cutoffStartTime: 101.393596,
    //   cutoffEndTime: 101.853596,
    //   oncutoff: {
    //     pause: true,
    //   },
    // },
  ],
  "identify_alternative_hypothesis": [
    {
      cutoffStartTime: 128.653929, //+3 sec after 2.06
      cutoffEndTime: 129.8055991,
      oncutoff: {
        pause: true,
      },
    },
    {
      cutoffStartTime: 141.202009,
      cutoffEndTime: 141.618377,
      // type: "button",
      oncutoff: {
        pause: true,
        // id:"question_2"
      },
    },
  ],//+2second
  "identify_null_hypothesis": [
    {
      cutoffStartTime: 168.816328,
      cutoffEndTime: 169.542343,
      // type: "button",
      oncutoff: {
        pause: true,
        // id:"question_3"
      },
    },
    {
      cutoffStartTime: 177.7218022,
      cutoffEndTime: 178.143976,
      // type: "button",
      oncutoff: {
        pause: true,
        // id:"question_3"
      },
    },
    {
      cutoffStartTime: 192.600717,
      cutoffEndTime:  192.904885,
      oncutoff: {
        question: true,
        id: "question1",
      },
    },
    {
      cutoffStartTime: 195.242342,
      cutoffEndTime: 195.719579,
      oncutoff: {
        question: true,
        id: "question2",
      },
    },
  ],
  // "find_test_statistic_value": [{
  //   cutoffStartTime: 330.661554,
  //   cutoffEndTime: 330.934495,
  //   oncutoff: {
  //     pause: true,
  //   },
  // }],
  // "identify_null_hypothesis": [
  //   {
  //     cutoffStartTime: 185.714885,
  //     cutoffEndTime:  185.904885,
  //     oncutoff: {
  //       question: true,
  //       id: "question1",
  //     },
  //   },
  //   {
  //     cutoffStartTime: 188.348296,
  //     cutoffEndTime: 188.719579,
  //     oncutoff: {
  //       question: true,
  //       id: "question2",
  //     },
  //   },
  // ],
  // "pValue_method": [
  //   {
  //     cutoffStartTime: 424.738196,
  //     cutoffEndTime: 425.566704,
  //     oncutoff: {
  //       question: true,
  //       id: "question2",
  //     },
  //   },
  //   {
  //     cutoffStartTime: 427.402277,
  //     cutoffEndTime: 427.93105,
  //     oncutoff: {
  //       question: true,
  //       id: "question3",
  //     },
  //   },
  // ],
  // "critical_value_method": [
  //   {
  //     cutoffStartTime: 510.066751,
  //     cutoffEndTime: 510.732403,
  //     oncutoff: {
  //       question: true,
  //       id: "question4",
  //     },
  //   },
  //   {
  //     cutoffStartTime: 513.329676,
  //     cutoffEndTime: 513.455539,
  //     oncutoff: {
  //       question: true,
  //       id: "question5",
  //     },
  //   },
  // ],
};
