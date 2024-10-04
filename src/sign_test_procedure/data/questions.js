import { spaceMountainWaitTimesTable } from './dataTable';
export default [
	{
		frame: 'frame1',
		id: 'question1',
		activeTimestamp: 175.418495,
		onContinueTimestamp: 175.918495,
		text:
			'When testing the claim that the proportion of defects is less than 0.2, a sample result consists of 30 defects among 100 items. Does that result contradict the alternative hypothesis?',
		markerLabel: 'Question 1',
		markerTitle: 'Question 1',
		questionLabel:
			'When testing the claim that the proportion of defects is less than 0 point 2, a sample result consists of 30 defects among 100 items. Does that result contradict the alternative hypothesis?',
		correctAnswer: 'opta',
		options: [
			{
				id: 'opta',
				text: 'Yes, because 30/100 contradicts <em>p</em> < 0.2.',
				label:
					'Yes, because 30 divided by 100 contradicts p less then 0 point 2.',
			},
			{
				id: 'optb',
				text: 'No, because 30/100 does not contradict <em>p</em> < 0.2.',
				label:
					'No, because 30 divided by 100 does not contradict p less then 0 point 2.',
				description: 'Try again.',
			},
			{
				id: 'optc',
				text: 'No, because 30/100 is less than 0.2',
				label: 'No, because 30 divided by 100 is less than 0 point 2',
				description: 'Try again.',
			},
		],
	},
	{
		frame: 'frame2',
		id: 'question2',
		activeTimestamp: 248.259389,
		onContinueTimestamp: 248.597038,
		text:
			'The claim is that a manufacturing process has a defect rate that is less than 12%. A sample consists of 200 defective items among 1000 that are produce. What should you conclude?',
		markerLabel: 'Question 2',
		markerTitle: 'Question 2',
		questionLabel:
			'The claim is that a manufacturing process has a defect rate that is less than 12 percent. A sample consists of 200 defective items among 1000 that are produce. What should you conclude?',
		correctAnswer: 'optc',
		options: [
			{
				id: 'opta',
				text:
					'There is sufficient evidence to support the claim that the process has a defect rate that is less than 12%.',
				label:
					'There is sufficient evidence to support the claim that the process has a defect rate that is less than 12 percent',
				description: 'Try again.',
			},
			{
				id: 'optb',
				text:
					'There is sufficient evidence to support the claim that the defect rate is equal to 12%',
				label:
					'There is sufficient evidence to support the claim that the defect rate is equal to 12 percent',
				description: 'Try again. ',
			},
			{
				id: 'optc',
				text:
					'There is not sufficient evidence to support the claim that the process has a defect rate that is less than 12%.',
				label:
					'There is not sufficient evidence to support the claim that the process has a defect rate that is less than 12 percent',
				description: '',
			},
			{
				id: 'optd',
				text:
					'There is not sufficient evidence to support the claim that the defect rate is equal to 12%',
				label:
					'There is not sufficient evidence to support the claim that the defect rate is equal to 12 percent',
				description: 'Try again.',
			},
		],
	},
];
