import ostText from './ostText';
import tocItems from './tocItems';
import captions from './closedCaptions';
import questionsData from './questions';
import boundariesData from './boundary';
import audio from '../assets/audios/procedure_for_two_way_anova.mp3';
import pdf from '../assets/documents/document.pdf';

export const audioSrc = audio;
export const pdfDocument = pdf;
export const captionJson = captions;
export const onScreenText = ostText;
export const tocJsonData = tocItems;
export const boundary = boundariesData;
export const transcript = textFile;

export const defaultTocItem = 'title';

export const data = [
	{
		id: 'start',
		textNode: [
			{
				id: 'chart-start',
				startTime: 47.571882,
				endTime: 92.410407,
				textNode: [],
				startingPoint: true,
				classes: ['startend'],
				name: "<p class='heading'>Start</p>",
			},
			{
				id: 'start-empty',
				textNode: [],
				classes: ['empty'],
			},
		],
	},
	{
		id: 'comp',
		textNode: [
			{
				id: 'compute',
				name: `<p class='heading' aria-hidden=true>Test for an <em>interaction</em> between the two factors. Use the <em>P</em>-value for the test statistic</p><div class='heading maths'><div class='wrapper'><em>F</em> <span>=</span> <div class='maths-exp'><div class='division-block'><span class='numerator'>MS (interaction)</span><span>MS (error)</span></div></div></div>If the <em>P</em>-value is small (such as less than 0.05), conclude that there is an interaction effect.</div>`,
				label:
					'Test for an interaction between the two factors. Use the P-value for the test statistic F equals to MS interaction upon MS error If the P-value is small such as less than 0.05, conclude that there is an interaction effect.',
				classes: ['process', 'blue'],
				startTime: 73.665306,
				endTime: 92.410407,
				glow: true,
				highlightStartTime: 16.0000,
				highlightEndTime: 23.0000,
				highlightStartTime2: 218.746405,
				highlightEndTime2: 225.281076,
				textNode: [],
				background: '#EFFBFF',
				border: '#00749B',
			},
			{
				id: 'start-empty',
				textNode: [],
				classes: ['empty'],
			},
		],
	},
	{
		id: 'condition1',
		textNode: [
			{
				id: 'wholenumber-decision',
				name:
					"<div class='decision' aria-hidden=true><p class='heading'>Is there an effect due to interaction between the two factors?</p></div>",
				label: 'Is there an effect due to interaction between the two factors?',
				classes: ['decision-box'],
				startTime: 92.501474,
				endTime: 127.229188,
				textNode: [],
			},
			{
				id: 'wholenumber-yes',
				textNode: [
					{
						type: 'child',
						endTime: 151.463764,
						startTime: 92.501474,
						highlightStartTime: 23.220182,
						highlightEndTime: 35.040714,
						highlightStartTime2: 105.262457,
						highlightEndTime2: 110.653257,
						glow: true,
						id: 'wholenumber-child-left-yes',
						name:
							"<p class='heading' aria-hidden=true><span>Yes</span> <span class='bottom'>(Reject <em>H<sub>0</sub></em> of no interaction effect.)</span></p>",
						label: 'Yes Reject H 0 of no interaction effect.',
						classes: ['condition-node', 'column'],
						textNode: [],
					},
					{
						endTime: 151.463764,
						startTime: 127.822668,
						highlightStartTime: 23.220182,
						highlightEndTime: 35.040714,
						glow: true,
						classes: ['end-child', 'process', 'pink'],
						id: 'whole-number-yes-child',
						name:
							"<p class='content' aria-hidden=true>Stop. Don't consider the effects of either factor without considering the effects of the other.</p>",
						label:
							"Stop. Don't consider the effects of either factor without considering the effects of the other.",
						background: '#FFF7FC',
						border: '#941e61',
						textNode: [],
					},
				],
			},
		],
	},
	{
		id: 'condition2',
		textNode: [
			{
				id: 'yes-child',
				textNode: [
					{
						textNode: [],
						type: 'child',
						startTime: 110.898434,
						endTime: 127.747874,
						highlightStartTime: 35.040714,
						highlightEndTime: 50.869823,
						highlightStartTime2: 110.653257,
						highlightEndTime2: 127.393109,
						glow: true,
						id: 'wholenumber-child-left',
						name:
							"<p class='heading' aria-hidden=true>No</br>(Fail to reject <em>H<sub>0</sub></em> of no interaction effect.)</p>",
						label: 'No Fail to reject H0 of no interaction effect.',
						classes: ['condition-node', 'row'],
						hiddenStart: 127.82585,
						hiddenEnd: 151.463764,
					},
					{
						textNode: [],
						endTime: 183.98376,
						startTime: 152.201929,
						highlightStartTime: 35.040714,
						highlightEndTime: 50.869823,
						highlightStartTime2: 227.836805,
						highlightEndTime2: 233.482202,
						glow: true,
						classes: ['process', 'green'],
						id: 'whole-number-no-child',
						name:
							"<p class='heading' aria-hidden=true>Test for effect from row factor using the <em>P</em>-value for the test statistic</p><div class='heading maths'><div class='wrapper'><em>F</em> <span>=</span> <div class='maths-exp'><div class='division-block'><span class='numerator'>MS (row factor)</span><span>MS (error)</span></div></div></div>If the <em>P</em>-value is small (such as less than 0.05), conclude that there is an effect from the row factor.</div>",
						label:
							'Test for effect from row factor using the P value for the test statistic F equals to MS row factor upon MS error If the P value is small such as less than zero point zero five, conclude that there is an effect from the row factor.',
						background: '#ECFDED',
						border: '#397f3c',
						arrow: true,
					},
					{
						textNode: [],
						endTime: 213.089524,
						startTime: 185.121066,
						glow: true,
						classes: ['process', 'green'],
						id: 'mid-arrow',
						name: 'as',
						label: 'as',
						background: '#ECFDED',
						border: '#397f3c',
						arrow: false,
					},
					{
						textNode: [],
						endTime: 213.089524,
						startTime: 185.121066,
						highlightStartTime: 35.040714,
						highlightEndTime: 46.869823,
						highlightStartTime2: 227.836805,
						highlightEndTime2: 233.482202,
						glow: true,
						classes: ['end-child', 'process', 'green'],
						id: 'left-child',
						name:
							"<p class='heading' aria-hidden=true>Test for effect from column factor using the <em>P</em>-value for the test statistic</p><div class='heading maths'><div class='wrapper'><em>F</em> <span>=</span> <div class='maths-exp'><div class='division-block'><span class='numerator'>MS (column factor)</span><span>MS (error)</span></div></div></div>If the <em>P</em>-value is small (such as less than 0.05), conclude that there is an effect from the column factor.</div>",
						label:
							'Test for effect from column factor using the P value for the test statistic F equals to MS column factor upon MS error If the P value is small such as less than zero point zero five, conclude that there is an effect from the column factor.',
						background: '#ECFDED',
						border: '#397f3c',
						arrow: true,
					},
				],
			},
			{
				id: 'start-empty',
				textNode: [],
				classes: ['empty'],
			},
		],
	},
];

export const nodeTimestamp = [
	{
		id: 'chart-start',
		startTime: 47.204605,
		endTime: 72.681497,
	},
	{
		id: 'compute',
		startTime: 73.681497,
		endTime: 92.410407,
	},
	{
		id: 'wholenumber-decision',
		startTime: 93.079467,
		endTime: 110.555195,
	},
	{
		id: 'whole-number-yes-child',
		endTime: 149.02158,
		startTime: 128.404637,
	},
	{
		id: 'whole-number-no-child',
		endTime: 184.219889,
		startTime: 152.477854,
	},
	{
		id: 'left-child',
		endTime: 210.24835,
		startTime: 185.216011,
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

export const activityTitle = 'Procedure for Two-Way ANOVA';

export const questions = questionsData;

export const altText = {
	logo: 'Pearson Logo',
	titleLogo: 'Triola Stats Logo',
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
