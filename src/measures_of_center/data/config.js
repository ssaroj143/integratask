import ostText from './ostText';
import tocItems from './tocItems';
import captions from './closedCaptions';
import questionsData from './questions';
import boundariesData from './boundary';
import audio from '../assets/audios/measures_of_center.mp3';
import pdf from '../assets/documents/document.pdf';
import textFile from "../assets/documents/textfile.docx";
export const audioSrc = audio;
export const pdfDocument = pdf;
export const captionJson = captions;
export const onScreenText = ostText;
export const tocJsonData = tocItems;
export const boundary = boundariesData;
export const transcript = textFile;

export const defaultTocItem = 'title';
export const hideTimeStamp = {
	startTime: 183.33677,
	endTime: 186.771217,
};

export const data = [
	{
		id: 'start',
		startTime: 37.606259,
		endTime: 312.870648,
		hiddenStartLT: 183.803741,
		hiddenEndLT: 186.107209,
		textNode: [
			{
				id: 'chart-start',
				startTime: 37.606259,
				endTime: 312.870648,
				hiddenStart: 183.449252,
				hiddenEnd: 186.769683,
				hiddenStartLT: 183.803741,
				hiddenEndLT: 186.107209,
				textNode: [],
				startingPoint: true,
				classes: ['startend'],
				name: "<p class='heading'>Measures of Center</p>",
			},
			{
				id: 'connect-line',
				startTime: 42.577957,
				endTime: 312.870648,
				textNode: [],
				startingPoint: true,
				classes: ['connect-line'],
				name: "<p class='heading'>Measures of Center</p>",
			},
		],
	},
	{
		id: 'exam1',
		startTime: 42.577957,
		endTime: 312.870648,
		hiddenStart: 183.099958,
		hiddenEnd: 187.062376,
		hiddenStartLT: 183.803741,
		hiddenEndLT: 186.107209,
		textNode: [
			{
				id: 'first-child-arrow1',
				name: '',
				classes: ['pink'],
				type: 'arrow',
				textNode: [
					{
						id: 'mean-connector',
						name: '<p>Mean</p>',
						classes: ['pink', 'connector-line'],
						type: 'arrow',
						startTime: 42.577957,
						endTime: 312.870648,
						textNode: [],
					},
					{
						id: 'first-child-arrow',
						name: '<p >Mean</p>',
						label: 'mean',
						classes: ['pink', 'arrow-text'],
						type: 'arrow',
						startTime: 42.703039,
						endTime: 108.046239,
						textNode: [
							{
								id: 'first-child-content',
								name: `<p>Find the sum of all values, then divide by the number of values.</p>`,
								label:
									'Find the sum of all values then divide by the number of values.',
								classes: ['process', 'pink', 'end-child'],
								textNode: [],
								startTime: 47.123537,
								endTime: 108.046239,
								background: '#FFF7FC',
								border: '#941e61',
							},
						],
					},
				],
			},
			{
				id: 'second-child-arrow1',
				name: '',
				classes: ['pink'],
				type: 'arrow',
				textNode: [
					{
						id: 'median-connector2',
						name: '<p>Median</p>',
						classes: ['pink', 'connector-line'],
						type: 'arrow',
						startTime: 42.577957,
						endTime: 312.870648,
						hiddenStart: 43.855389,
						hiddenEnd: 46.987223,
						textNode: [],
					},
					{
						id: 'second-child-arrow',
						name: '<p >Median</p>',
						label: 'median',
						classes: ['pink', 'arrow-text'],
						type: 'arrow',
						startTime: 108.154388,
						endTime: 183.543824,
						hiddenStart: 43.855389,
						hiddenEnd: 46.987223,
						textNode: [
							{
								id: 'second-child-content',
								name: `<p>Sort the data.</p>`,
								label: 'Sort the data.',
								classes: ['process', 'pink', 'arrow-shape'],
								startTime: 121.401984,
								endTime: 183.543824,
								background: '#FFF7FC',
								border: '#941e61',
								textNode: [
									{
										id: 'connect-line2',
										name: `<p>Sort the data.</p>`,
										classes: ['process', 'pink', 'connector-line2'],
										startTime: 134.047336,
										endTime: 183.543824,
										textNode: [],
									},
									{
										id: 'connect-line4',
										name: `<p>Sort the data.</p>`,
										classes: ['process', 'pink'],
										startTime: 134.047336,
										endTime: 183.543824,
										textNode: [],
									},
									{
										id: 'exam2',
										startTime: 134.047336,
										endTime: 183.543824,
										textNode: [
											{
												id: 'left-arrow',
												name: '<p class="w78">Odd number of values</p>',
												classes: ['pink', 'arrow-text'],
												type: 'arrow',
												startTime: 134.047336,
												endTime: 183.543824,
												textNode: [
													{
														id: 'left-child-content',
														name: `<p>Median is the value in the exact middle.</p>`,
														label: 'Median is the value in the exact middle.',
														classes: ['process', 'pink', 'end-child'],
														textNode: [],
														startTime: 134.047336,
														endTime: 183.543824,
														background: '#FFF7FC',
														border: '#941e61',
													},
												],
											},
											{
												id: 'right-arrow',
												name: '<p class="w78">Even number of values</p>',
												classes: ['pink', 'arrow-text'],
												type: 'arrow',
												startTime: 141.418237,
												endTime: 183.543824,
												textNode: [
													{
														id: 'right-child-content',
														name: `<p>Add the two middle numbers, then divide by 2.</p>`,
														label:
															'Add the two middle numbers then divide by 2.',
														classes: ['process', 'pink', 'end-child'],
														textNode: [],
														startTime: 141.418237,
														endTime: 183.543824,
														background: '#FFF7FC',
														border: '#941e61',
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
			{
				id: 'third-child-arrow1',
				name: '',
				classes: ['pink'],
				type: 'arrow',
				textNode: [
					{
						id: 'mode-connector2',
						name: '<p>Mode</p>',
						classes: ['pink', 'connector-line'],
						type: 'arrow',
						startTime: 42.577957,
						endTime: 312.870648,
						hiddenStart: 44.431332,
						hiddenEnd: 46.987223,
						textNode: [],
					},
					{
						id: 'third-child-arrow',
						name: '<p >Mode</p>',
						label: 'mode',
						classes: ['pink', 'arrow-text'],
						type: 'arrow',
						startTime: 186.200068,
						endTime: 230.822828,
						hiddenStart: 44.431332,
						hiddenEnd: 46.987223,
						textNode: [
							{
								id: 'third-child-content',
								name: `<p>Value(s) that occurs most frequently</p>`,
								label: 'Values that occurs most frequently',
								classes: ['process', 'pink', 'end-child'],
								textNode: [],
								startTime: 187.200068,
								endTime: 230.822828,
								background: '#FFF7FC',
								border: '#941e61',
							},
						],
					},
				],
			},
			{
				id: 'fourth-child-arrow1',
				name: '',
				classes: ['pink'],
				type: 'arrow',
				textNode: [
					{
						id: 'midrange-connector2',
						name: '<p >Mean</p>',
						classes: ['pink', 'connector-line'],
						type: 'arrow',
						startTime: 42.577957,
						endTime: 312.870648,
						hiddenStart: 45.220542,
						hiddenEnd: 46.987223,
						textNode: [],
					},
					{
						id: 'fourth-child-arrow',
						name: '<p>Midrange</p>',
						classes: ['pink', 'arrow-text'],
						type: 'arrow',
						startTime: 230.822828,
						endTime: 312.870648,
						hiddenStart: 45.220542,
						hiddenEnd: 46.987223,
						textNode: [
							{
								id: 'fourth-child-content',
								name: `<div class='heading maths'><div class='wrapper'> <div class='maths-exp'><div class='division-block'><span class='numerator'>maximum <br/>+<br/> minimum</span><span>2</span></div></div></div></div>`,
								label: 'maximum plus minimum divided by two',
								classes: ['process', 'pink', 'end-child'],
								textNode: [],
								startTime: 228.946223,
								endTime: 312.870648,
								background: '#FFF7FC',
								border: '#941e61',
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
		id: 'first-child-content',
		startTime: 47.530453,
		endTime: 106.637654,
	},
	{
		id: 'second-child-content',
		startTime: 121.42032,
		endTime: 135.420317,
	},
	{
		id: 'left-child-content',
		startTime: 136.509733,
		endTime: 143.419592,
	},
	{
		id: 'right-child-content',
		startTime: 144.467437,
		endTime: 185.135985,
	},
	{
		id: 'third-child-content',
		startTime: 187.304171,
		endTime: 228.900952,
	},
	{
		id: 'fourth-child-content',
		startTime: 231.186478,
		endTime: 289.272635,
	},
	{
		id: 'chart-start',
		startTime: 290.000217,
		endTime: 312.361173,
	},
];
export const answerResponse = {
	correct: 'This option is correct.',
	incorrect: 'This option is incorrect.',
};

export const questionTopHeading = 'Question';
export const continueButtonText = 'Continue';
export const submitButtonText = 'Submit Answer';

export const timestampsForAttempts = {};

export const correctAnswerSequence = {};

export const selectedAllNodes = ['goal', 'summary'];

export const activityTitle = 'Measures of Center';

export const questions = questionsData;

export const altText = {
	logo: 'Pearson Logo',
	titleLogo: 'Triola Stats Logo',
	activityTitle: 'Measures of Center',
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
