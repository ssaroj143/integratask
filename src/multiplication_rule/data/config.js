import ostText from './ostText';
import tocItems from './tocItems';
import captions from './closedCaptions';
import questionsData from './questions';
import boundariesData from './boundary';
import audio from '../assets/audios/multiplication_rule.mp3';
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

export const data = [
	{
		textNode: [],
		endTime: 169.465034,
		startTime: 29.187483,
		id: 'chart-start',
		startingPoint: true,
		classes: ['no-child', 'startend'],
		name: "<p class='content'>Start</p>",
	},
	{
		id: 'desecison',
		classes: [],
		textNode: [
			{
				endTime: 169.465034,
				startTime: 29.187483,
				classes: [
					'child-node',
					'second-child',
					'process',
					'retrospective-child2',
				],
				id: 'retrospective-child2',
				border: '#397F3C',
				background: '#ECFDED',
				name:
					"<p class='content' aria-hidden=true><em>P</em>(<em>A</em> and <em>B</em>) <br/>Multiplication Rule</p>",
				label: 'P A and B Multiplication Rule',
				textNode: [],
			},
		],
	},
	{
		id: 'connecting-arrow',
		classes: [],
		textNode: [
			{
				endTime: 169.465034,
				startTime: 33.545578,
				id: 'middle-arrow',
				classes: ['arrow'],
				name: '',
				textNode: [],
			},
		],
	},
	{
		id: 'observationmade',
		textNode: [
			{
				type: 'child',
				name:
					"<div class='decision' aria-hidden=true><p>Are<br/><em>A</em> and <em>B</em> independent?</p></div>",
				label: 'Are A and B Independent',
				classes: ['decision-box', 'end-child', 'decision-box1'],
				startTime: 33.545578,
				endTime: 169.465034,
				textNode: [],
				id: 'decision-box',
			},
			{
				type: 'child',
				visitedEnd: 100.563537,
				visitedStart: 62.72102,
				endTime: 62.72102,
				startTime: 33.545578,
				classes: ['child-node', 'third-child'],
				id: 'retrospective-child3',
				name: "<p class='heading' aria-hidden='true'>Yes</p>",
				label: 'Yes',
				textNode: [
					{
						type: 'child',
						visitedEnd: 73.717551,
						visitedStart: 65.358367,
						endTime: 100.5,
						startTime: 62.72102,
						classes: ['end-child', 'process', 'prospective-child'],
						id: 'prospective-child',
						border: '#397F3C',
						background: '#ECFDED',
						name:
							"<p class='content' aria-hidden=true><em>P</em>(<em>A</em> and <em>B</em>) = <em>P</em>(<em>A</em>) • <em>P</em>(<em>B</em>)</p>",
						label: 'P A and B equal to P A multiplied by P B',
						textNode: [],
					},
				],
			},
			{
				type: 'child',
				visitedEnd: 169.465034,
				visitedStart: 100.774603,
				endTime: 62.254558,
				startTime: 33.545578,
				classes: ['child-node', 'first-child'],
				id: 'retrospective-child1',
				name: "<p class='heading' aria-hidden='true'>No</p>",
				label: 'No',
				textNode: [
					{
						type: 'child',
						visitedEnd: 125.410975,
						visitedStart: 100.774603,
						endTime: 169.465034,
						startTime: 100.774603,
						classes: ['end-child', 'process', 'retrospective-child'],
						id: 'retrospective-child',
						border: '#397F3C',
						background: '#ECFDED',
						name:
							"<p class='content' aria-hidden=true><em>P</em>(<em>A</em> and <em>B</em>) = <em>P</em>(<em>A</em>) • <em>P</em>(<em>B</em> | <em>A</em>)</p>",
						label: 'P A and B equal to P A multiplied by P B divided A',
						textNode: [],
					},
				],
			},
		],
	},
];

export const nodeTimestamp = [
	{
		id: 'retrospective-child2',
		startTime: 29.326803,
		endTime: 33.487029,
	},
	{
		id: 'decision-box1',
		startTime: 44.495238,
		endTime: 53.740998,
	},
	{
		id: 'prospective-child',
		startTime: 62.844785,
		endTime: 73.665306,
	},
	{
		id: 'retrospective-child',
		endTime: 125.37034,
		startTime: 110.08,
	},
];
export const answerResponse = {
	correct: 'This option is correct.',
	incorrect: 'This option is incorrect.',
};

export const questionTopHeading = ''; // Question
export const continueButtonText = 'Continue';
export const submitButtonText = 'Submit Answer';

export const timestampsForAttempts = {};

export const correctAnswerSequence = {};

export const selectedAllNodes = ['flowchart-goals', 'summary'];

export const activityTitle = 'Applying the Multiplication Rule';

export const accessibleChartData = [
	{
		id: 'node1',
		endTime: 45.28,
		startTime: 0.14,
	},
	{
		id: 'node2',
		startTime: 46.61,
		endTime: 156.16645,
	},
	{
		id: 'node3',
		endTime: 185.41,
		startTime: 157.89,
	},
];
export const questions = questionsData;

export const altText = {
	logo: 'Pearson Logo',
	titleLogo: 'Triola Stats Logo',
	activityTitle: 'A flow diagram titled, applying the multiplication rule.',
	restart: 'Chart is reset.',
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
