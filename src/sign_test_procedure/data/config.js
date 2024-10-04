import ostText from './ostText';
import tocItems from './tocItems';
import captions from './closedCaptions';
import questionsData from './questions';
import boundariesData from './boundary';
import audio from '../assets/audios/sign_test_procedure.mp3';
import pdf from '../assets/documents/document.pdf';
import textFile from '../assets/documents/texfile.docx';

export const audioSrc = audio;
export const pdfDocument = pdf;
export const captionJson = captions;
export const onScreenText = ostText;
export const tocJsonData = tocItems;
export const boundary = boundariesData;
export const transcript = textFile;

export const defaultTocItem = 'title';

export const timestampsForAttempts = {
	condition1: [
		{
			id: 'example1',
			startTime: 111.202762, // enable button in chart
			endTime: 139.898149, // enable button in chart
			yes: 123.280357, //  jump to correct answer timeStamp
			no: 112.192977, //  jump to InCorrect answer timeStamp
			correct: 'yes',
		},
	],
};

export const data = [
	{
		id: 'start',
		textNode: [
			{
				id: 'chart-start',
				startTime: 47.926395,
				endTime: 278.429707,
				// vTime: 225.52899,
				textNode: [],
				startingPoint: true,
				classes: ['startend'],
				name: "<p class='heading'>Start</p>",
				label: 'start',
			},
			{
				id: 'start-empty',
				textNode: [],
				classes: ['empty'],
			},
		],
	},
	{
		id: 'exam1',
		textNode: [
			{
				id: 'example1',
				name:
					"<p class='heading'>Assign positive and negative signs and discard any zeros.</p>",
				classes: ['process', 'blue'],
				label: 'Assign positive and negative signs and discard any zeros.',
				startTime: 47.936395,
				endTime: 278.429707,
				// vTime: 225.52899,
				textNode: [],
				background: '#EFFBFF',
				border: '#00749B',
			},
			{
				id: 'example1-empty',
				textNode: [],
				classes: ['empty'],
			},
		],
	},
	{
		id: 'exam2',
		textNode: [
			{
				id: 'example2',
				name:
					"<p class='heading'>Let <i>n</i> equal the total number of signs.</p>",
				label: 'Let n equal the total number of signs. ',
				classes: ['process', 'blue'],
				startTime: 47.946395,
				endTime: 278.429707,
				// vTime: 225.52899,
				textNode: [],
				background: '#EFFBFF',
				border: '#00749B',
			},
			{
				id: 'example3-empty',
				textNode: [],
				classes: ['empty'],
			},
		],
	},
	{
		id: 'exam3',
		textNode: [
			{
				id: 'example3',
				name:
					"<p class='heading'>Let the test statistic <em>x</em> equal the number of the less frequent sign.</p>",
				label:
					'Let the test statistic x equal the number of the less frequent sign. ',
				classes: ['process', 'blue'],
				startTime: 47.956395,
				endTime: 278.429707,
				// vTime: 225.52899,
				textNode: [],
				background: '#EFFBFF',
				border: '#00749B',
			},
			{
				id: 'example3-empty',
				textNode: [],
				classes: ['empty'],
			},
		],
	},
	{
		id: '',
		classes: ['wrapper', 'column'],
		textNode: [
			{
				id: 'line-wrapper',
				textNode: [
					{
						startTime: 139.603567,
						endTime: 175.418495,
						textNode: [],
						name: '<p></p>',
						classes: ['left-line', 'end-child'],
					},
					{
						startTime: 139.603567,
						endTime: 175.418495,
						textNode: [],
						name: '<p></p>',
						classes: ['top-to-bottom-line', 'end-child'],
					},
					{
						startTime: 111.202762,
						endTime: 123.227724,
						textNode: [],
						name: '<p></p>',
						classes: ['top-to-bottom-line-btn', 'end-child', 'with-arrow'],
					},
				],
			},
			{
				id: 'row1',
				textNode: [
					{
						id: 'sample-data-contradict',
						// type: "maths",
						name: `<div class='decision'><p class='heading'>Do the sample data contradict <em>H</em><sub>1</sub>?</p></div>`,
						label: 'Do the sample data contradict H sub 1?',
						classes: ['decision-box', 'end-child'],
						// vTime: 225.52899,
						startTime: 73.991425,
						endTime: 278.429707,
						// visitedS: 199.474179,
						// visitedE: 225.52899,
						textNode: [],
						// background: "#EFFBFF",
						// border: "#00749B",
					},
					{
						id: 'decision-one-yes-arrow',
						startTime: 111.202762,
						endTime: 123.227724,
						visitedStart: 139.603567,
						visitedEnd: 172.329565,
						// startTime: 139.603567,
						// endTime: 172.329565,
						textNode: [],
						name: 'Yes',
						classes: ['end-child'],
						type: 'button',
						keyValue: 'yes',
					},
					{
						id: 'compute-empty',
						textNode: [],
						classes: ['empty'],
					},
				],
			},
			{
				id: 'can-assumed-no',

				textNode: [
					{
						id: 'can-assumed-no-arrow2',
						//startTime: 176.107077,
						// startTimeRow: 139.219517,
						// endTimeRow: 186.002541,
						startTime: 111.202762,
						endTime: 123.227724,
						visitedStart: 176.107077,
						visitedEnd: 278.226003,
						textNode: [],
						name: 'No',
						classes: ['down-arrow', 'pink'],
						type: 'button',
						keyValue: 'no',
					},
				],
			},
			{
				id: 'condition2',
				textNode: [
					{
						id: 'is-greater-then25',
						// type: "maths",
						name: `<div class='decision'><p class='heading'>Is <em>n</em> &#8804; 25?</p></div>`,
						label: 'is n less than or equal to 25',
						classes: ['decision-box', 'end-child', 'is-greater-then25'],
						// vTime: 225.52899,
						startTime: 176.107077,
						endTime: 278.429707,
						// visitedS: 199.474179,
						// visitedE: 225.52899,
						textNode: [],
						// background: "#EFFBFF",
						// border: "#00749B",
					},
					{
						id: 'is-greater-then25-arrow-no',
						startTime: 201.919731,
						endTime: 278.226003,
						textNode: [],
						name: "<p class='heading'>No</p>",
						classes: ['arrow-right', 'condition-two-yes-arrow'],
					},
					{
						id: 'convert-test-statistic',
						name: `<p class='heading'>Convert the test statistic <em>x</em> to the test statistic</p>
                  <div class="square-root-wrapper">
                    <div class="square-root-wrapper-first-child">
                        <p><em>z</em> = </p>
                    </div>
                    <div class="square-root-wrapper-last-child">
                        <p class="numerator">(<em>x</em> + 0.5) - (<em>n/2</em>)</p>
                        
                        <p class="root">n/2</p>
                    </div>
                </div>
              `,
						label:
							'Convert the test statistic x to the test statistic z = start fraction left parenthesis x + 0.5 right parenthesis minus left parenthesis n over 2 right parenthesis over radical n over 2 end fraction.',
						classes: ['process', 'pink', 'end-child'],
						startTime: 201.919731,
						endTime: 278.429707,
						// vTime: 225.52899,
						textNode: [
							{
								startTime: 201.919731,
								endTime: 278.226003,
								textNode: [],
								name: '<div></div>',
								classes: ['convert-test-statistic-child'],
							},
						],
						background: '#FFF7FC',
						border: '#941E61',
					},
				],
			},
			{
				id: 'condition22',
				textNode: [
					{
						id: 'can-assumed-no-arrow3',
						startTime: 186.002541,
						endTime: 201.735044,
						visitedStart: 219.386886,
						textNode: [],
						name: "<p class='heading' style='margin-left:-10px'>Yes</p>",
						classes: ['down-arrow', 'green'],
					},
					{
						id: 'start-empty',
						textNode: [],
						classes: ['can-assumed-no-arrow-hidden'],
					},
				],
			},
			{
				id: 'row3',
				startTimeRow: 139.219517,
				endTimeRow: 186.002541,
				textNode: [
					{
						id: 'value-from-table-a7',
						name:
							"<p class='heading'>Find the critical value from Table A-7.</p>",
						classes: ['end-child', 'process', 'green', 'reject-null'],
						label: 'Find the critical value from Table A-7.',
						startTime: 186.002541,
						endTime: 201.735044,
						// vTime: 225.52899,
						visitedStart: 219.386886,
						visitedEnd: 301.742078,
						textNode: [],
						background: '#ECFDED',
						border: '#397F3C',
					},
				],
			},
			{
				id: 'row4',
				startTimeRow: 139.219517,
				endTimeRow: 186.002541,
				textNode: [
					{
						id: 'critical-value',
						startTime: 219.386886,
						endTime: 278.919731,
						textNode: [],
						name: "<p class='heading'></p>",
						classes: ['down-arrow', 'critical-value-arrow'],
					},
					{
						id: 'usual-way-table',
						name:
							"<p class='heading'>Find the critical <em>z</em> <span class='nowrap'>value(s)</span> from Table A-2 in the usual way.</p>",
						classes: [
							'end-child',
							'process',
							'pink',
							'reject-null',
							'usual-way-table',
						],
						label: 'Find the critical z values from Table A-2 in the usual way',
						startTime: 201.919731,
						endTime: 278.919731,
						// vTime: 225.52899,
						textNode: [
							{
								startTime: 201.919731,
								endTime: 278.919731,
								textNode: [],
								name: '<div></div>',
								classes: ['critical-value-child'],
							},
						],
						background: '#FFF7FC',
						border: '#941E61',
					},
				],
			},
			{
				id: 'bottom-row-wrapper',
				startTimeRow: 139.219517,
				endTimeRow: 186.002541,
				textNode: [
					{
						id: 'row5',
						textNode: [
							{
								id: 'condition4',
								// type: "maths",
								name: `<div class='decision'>
                          <p class='heading'>
                            <span>Is the</span>
                            <span>test  statistic</span>
                            <span>less than or equal</span>
                            <span>to the  critical</span>
                            <span>value(s)?</span>
                          </p>
                      </div>`,
								label:
									'Is the test  statistic less than or equal to the  critical value(s)?',
								classes: ['decision-box', 'end-child'],
								// vTime: 225.52899,
								startTime: 219.386886,
								endTime: 278.429707,
								// visitedS: 199.474179,
								// visitedE: 225.52899,
								textNode: [],
								// background: "#EFFBFF",
								// border: "#00749B",
							},
							{
								id: 'compute-empty',
								textNode: [],
								classes: ['empty'],
							},
						],
					},
					{
						id: 'decision-arrow-3',
						textNode: [
							{
								id: 'can-assumed-no-arrow1',
								startTime: 227.446703,
								endTime: 236.841388,
								textNode: [],
								name: "<p class='heading'>No</p>",
								classes: ['down-arrow', 'pink'],
							},
						],
					},
					// last node
					{
						id: 'row6',
						textNode: [
							{
								id: 'fail-to-reject-arrow',
								startTime: 139.603567,
								endTime: 175.418495,
								textNode: [],
								name: "<p class='heading'></p>",
								classes: ['arrow-right', 'fail-to-reject-arrow'],
							},
							{
								id: 'fail-to-reject',
								name:
									"<p class='heading'>Fail to reject the null hypothesis.</p>",
								label: 'Fail to reject the null hypothesis.',
								classes: [
									'end-child',
									'process',
									'green',
									'reject-null',
									'fail-to-reject',
								],
								startTime: 139.603567,
								endTime: 175.418495,
								visitedStart: 227.446703,
								visitedEnd: 236.841388,
								background: '#ECFDED',
								border: '#397F3C',
								textNode: [],
							},
							// {
							//   id: "fail-to-reject-second",
							//   name:
							//     "<p class='heading'>Fail to reject the null hypothesis.</p>",
							//   label: 'Fail to reject the null hypothesis.',
							//   classes: ["end-child", "process", "green", 'reject-null', 'fail-to-reject', 'second'],
							//   startTime: 226.446703,
							//   endTime: 235.841388,
							//   background: "#ECFDED",
							//   border: "#397F3C",
							//   textNode: [],
							// },
							{
								id: 'reject-the-hypothesis-child-text',
								startTime: 236.841388,
								endTime: 278.429707,
								textNode: [],
								name: "<p class='heading'>Yes</p>",
								classes: ['reject-the-hypothesis-child-text', 'end-child'],
							},
							{
								id: 'reject-the-null',
								name: "<p class='heading'>Reject the null hypothesis.</p>",
								label: 'Reject the null hypothesis',
								classes: [
									'end-child',
									'process',
									'green',
									'reject-null',
									'reject-the-null-with-arrow',
								],
								startTime: 236.841388,
								endTime: 278.429707,
								background: '#ECFDED',
								border: '#397F3C',
								textNode: [
									{
										id: 'reject-the-hypothesis-child',
										startTime: 236.841388,
										endTime: 278.429707,
										name: "<p class='heading'></p>",
										classes: ['reject-the-hypothesis-child'],
										textNode: [
											{
												id: 'reject-the-hypothesis-child-arrow-tip',
												startTime: 236.841388,
												endTime: 278.429707,
												name: '<div></div>',
												classes: ['arrow-tip'],
												textNode: [],
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

export const nodeTimestamp = [
	{
		id: 'example1',
		startTime: 48.772994,
		endTime: 54.995284,
	},
	{
		id: 'example2',
		startTime: 54.995284,
		endTime: 59.550283,
	},
	{
		id: 'example3',
		startTime: 59.550283,
		endTime: 64.295073,
	},
	{
		id: 'sample-data-contradict',
		startTime: 74.706079,
		endTime: 111.458058,
	},
	{
		id: 'fail-to-reject',
		startTime: 139.603567,
		endTime: 175.418495,
	},
	{
		id: 'is-greater-then25',
		startTime: 176.307077,
		endTime: 189.529636,
	},
	{
		id: 'value-from-table-a7',
		startTime: 189.92786,
		endTime: 201.735044,
	},
	{
		id: 'convert-test-statistic',
		startTime: 202.731161,
		endTime: 214.047415,
	},
	{
		id: 'usual-way-table',
		startTime: 214.047415,
		endTime: 219.15281,
	},
	{
		id: 'condition4',
		startTime: 219.386886,
		endTime: 227.446703,
	},
	{
		id: 'fail-to-reject',
		startTime: 227.446703,
		endTime: 236.600986,
	},
	{
		id: 'reject-the-null',
		startTime: 236.841388,
		endTime: 245.736289,
	},
];
export const answerResponse = {
	correct: 'This option is correct.',
	incorrect: 'This option is incorrect.',
};

export const questionTopHeading = 'Question';
export const continueButtonText = 'Continue';
export const submitButtonText = 'Submit Answer';

export const correctAnswerSequence = {
	condition1: ['yes', 'no'],
};

export const selectedAllNodes = ['goal', 'summary'];

export const activityTitle = 'Sign Test Procedure';

export const questions = questionsData;

export const altText = {
	logo: 'Pearson Logo',
	titleLogo: 'Triola Stats Logo',
	activityTitle: 'A flow chart titled, sign test procedure.',
	restart: 'Chart has been reset.',
	caption: {
		active: 'Closed captions active',
		inactive: 'Closed captions inactive',
	},
	frameButton: {
		prev: 'Jumped to previous frame',
		next: 'Jumped to next frame',
		rewind: 'audio rewinded 10 seconds',
		forward: 'audio forwarded 10 seconds',
	},
	volume: {
		mute: 'volume muted',
		unmute: 'volume unmuted',
	},
};
