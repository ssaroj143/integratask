export default {
  goal: [
    {
      cutoffStartTime: 277.494054,
      cutoffEndTime: 278.394054,
      oncutoff: {
        question: true,
        id: "question1",
      },
    },
  ],
  "typeoftest": [
    {
      cutoffStartTime: 73.403906,
      cutoffEndTime: 73.753906,
      type: "button",
      oncutoff: {
        pause: true,
      },
    },
  ],
  "left-tailed": [
    {
      cutoffStartTime: 250.831481,
      cutoffEndTime: 251.450131,
      oncutoff: {
        question: true,
        id: "question2",
      },
    },
    {
      cutoffStartTime: 200.487338,
      cutoffEndTime: 201.430665,
      oncutoff: {
        pause: true,
      },
    },
    {
      cutoffStartTime: 222.73375,
      cutoffEndTime: 223.22375,
      oncutoff: {
        pause: true,
      },
    },


    {
      cutoffStartTime: 187.077711,
      cutoffEndTime: 270.754642,
      oncutoff: {
        active: true,
        id: "typeoftest",
      },
    },
  ],
  "two-tailed": [
    {
      cutoffStartTime: 430.40622,
      cutoffEndTime: 431.40622,
      oncutoff: {
        question: true,
        id: "question3",
      },
    },
    {
      cutoffStartTime: 276.895352,
      cutoffEndTime: 278.067018,
      oncutoff: {
        pause: true,
      },
    },
    {
      cutoffStartTime: 302.417076,
      cutoffEndTime: 302.954799,
      oncutoff: {
        pause: true,
      },
    },

    {
      cutoffStartTime: 537.141413,
      cutoffEndTime: 547.952818,
      oncutoff: {
        active: true,
        id: "right-node-child",
      },
    },
    {
      cutoffStartTime: 302.19372,
      cutoffEndTime: 393.202984,
      oncutoff: {
        active: true,
        id: "typeoftest",
      },
    },
  ],
  "right-tailed": [
    {
      cutoffStartTime: 123.846514,
      cutoffEndTime: 124.766152,
      oncutoff: {
        pause: true,
      },
    },
    {
      cutoffStartTime: 147.124696,
      cutoffEndTime: 148.546171,
      oncutoff: {
        pause: true,
      },
    },
    // {
    //   cutoffStartTime: 155.700151,
    //   cutoffEndTime: 156.300151,
    //   oncutoff: {
    //     pause: true,
    //   },
    // },
  ],
};
