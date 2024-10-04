export default [
	{
		frame: 'frame6',
		id: 'question1',
		activeTimestamp: 61.34712,
		onContinueTimestamp: 62.554558,
		text:
			'Which of the following is an example of independent events? Choose one.',
		markerLabel: 'Question 1',
		markerTitle: 'Question 1',
		questionLabel:
			'Which of the following is an example of independent events? Choose one.',
		correctAnswer: 'optd',
		options: [
			{
				id: 'opta',
				text:
					'Drawing (without replacement) the top two cards from a shuffled deck.',
				label:
					'Drawing without replacement the top two cards from a shuffled deck.',
				description: 'Try again.​',
			},
			{
				id: 'optb',
				text:
					'Randomly selecting two <em>different</em> voters for an exit poll',
				label: 'Randomly selecting two different voters for an exit poll',
				description: 'Try again.​',
			},
			{
				id: 'optc',
				text:
					'Randomly selecting two students from your current class, with the first student not replaced before the second selection is made',
				label:
					'Randomly selecting two students from your current class, with the first student not replaced before the second selection is made',
				description: 'Try again.',
			},
			{
				id: 'optd',
				text:
					'Randomly selecting two students from your current class, with the first student replaced before the second selection is made',
				label:
					'Randomly selecting two students from your current class, with the first student replaced before the second selection is made',
				description: '',
			},
		],
	},
	{
		frame: 'frame8',
		id: 'question2',
		activeTimestamp: 100.563537,
		onContinueTimestamp: 100.873288,
		text:
			'What is the probability of getting 0 and then another 0 when two digits (between 0 and 9 inclusive) are randomly selected with replacement?',
		markerLabel: 'Question 2',
		markerTitle: 'Question 2',
		questionLabel:
			'What is the probability of getting zero and then another zero when two digits between zero and nine inclusive are randomly selected with replacement?',
		correctAnswer: 'opta',
		options: [
			{
				id: 'opta',
				text: '1/100 or 0.01',
				label: 'one hundredth or zero point zero one',
				description:
					"<span class='sr-only'>The probability of getting zero for each independent event is zero point one so the probability of zero on both events is zero point one multiplied by zero point one equal to zero point zero one.​</span><span aria-hidden='true'>The probability of getting 0 for each independent event is 0.1; so the probability of 0 on both events is 0.1 • 0.1 = 0.01.​</span>",
			},
			{
				id: 'optb',
				text: '1/10 or 0.1',
				label: 'one tenth or zero point one',
				description:
					"<span class='sr-only'>Try again. Hint the probability of getting zero for the first event is zero point one</span><span aria-hidden='true'>Try again. (Hint: the probability of getting 0 for the first event is 0.1)</span>​",
			},
			{
				id: 'optc',
				text: '0',
				label: 'zero',
				description:
					"<span class='sr-only'>Try again. Hint the probability of getting zero for the first event is zero point one</span><span aria-hidden='true'>Try again. (Hint: the probability of getting 0 for the first event is 0.1)</span>",
			},
			{
				id: 'optd',
				text: '1',
				label: 'one',
				description:
					"<span class='sr-only'>Hint the probability of getting zero for the first event is zero point one</span><span aria-hidden='true'>(Hint: the probability of getting 0 for the first event is 0.1)</span>",
			},
			{
				id: 'opte',
				text: '1/90',
				label: 'one ninetieth',
				description:
					"<span class='sr-only'>Hint the probability of getting zero for the first event is zero point one</span><span aria-hidden='true'>(Hint: the probability of getting 0 for the first event is 0.1).</span> ",
			},
		],
	},
	{
		frame: 'frame10',
		id: 'question3',
		activeTimestamp: 169.465034,
		onContinueTimestamp: 169.830748,
		text:
			'What is the probability of getting 3 and then 7 when two digits (between 0 and 9 inclusive) are randomly selected without replacement?',
		markerLabel: 'Question 3',
		markerTitle: 'Question 3',
		questionLabel:
			'What is the probability of getting three and then seven when two digits between zero and nine inclusive are randomly selected without replacement?',
		correctAnswer: 'opte',
		options: [
			{
				id: 'opta',
				text: '1/100 or 0.01',
				label: 'one hundredth or zero point zero one',
				description:
					"<span class='sr-only'>Hint without replacement, the probability of getting seven for the second event event is one ninth.</span><span aria-hidden='true'>Try again. (Hint: without replacement, the probability of getting 7 for the second event event is 1/9.)</span>",
			},
			{
				id: 'optb',
				text: '1/10 or 0.1',
				label: 'one tenth or zero point one',
				description:
					"<span class='sr-only'>Hint without replacement, the probability of getting seven for the second event event is one ninth.</span><span aria-hidden='true'>(Hint: without replacement, the probability of getting 7 for the second event event is 1/9.)</span>",
			},
			{
				id: 'optc',
				text: '0',
				label: 'zero',
				description:
					"<span class='sr-only'>Hint without replacement, the probability of getting seven for the second event event is one ninth.</span><span aria-hidden='true'>(Hint: without replacement, the probability of getting 7 for the second event event is 1/9.)</span>",
			},
			{
				id: 'optd',
				text: '1',
				label: 'one',
				description:
					"<span class='sr-only'>Hint without replacement, the probability of getting seven for the second event event is one ninth.</span><span aria-hidden='true'>(Hint: without replacement, the probability of getting 7 for the second event event is 1/9.)</span>",
			},
			{
				id: 'opte',
				text: '1/90',
				label: 'one ninetieth',
				description:
					"<span class='sr-only'>The probability of getting three in the first event is one tenth and without replacement, the probability of getting seven in the second event is one ninth.</span><span aria-hidden='true'>The probability of getting 3 in the first event is 1/10 and without replacement, the probability of getting 7 in the second event is 1/9.</span>",
			},
		],
	},
];
