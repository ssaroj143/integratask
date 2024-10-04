import React, { useRef, useEffect, useState } from 'react';
import DirectionArrowContainer from '../../containers/DirectionArrowContainer';

import FadeInOut from '../../containers/FadeInFadeOutContainer';
import { hideTimeStamp } from '../../data/config';

export const ChartActivity = (props) => {
	const { playState, currentTime, data, caption, nodeTimestamp } = props;
	const containerRef = useRef(null);
	const focussedNodeRef = useRef(null);
	const [overClass, setOverClass] = useState(false);
	const [ostText, setOstText] = useState(null);
	const [ostClass, setOstClass] = useState(null);
	const [visibleChart, setChartvisible] = useState(true);

	//console.log(props.currentTime);

	useEffect(() => {
		if (playState) {
			if (containerRef && containerRef.current) {
				const start = containerRef.current.querySelector('.startend');
				const innerDivStart = start && start.querySelector('.text');

				if (innerDivStart) {
					setTimeout(() => {
						innerDivStart.tabIndex = -1;
						innerDivStart.focus();
					});
				}
			}
		}
	}, [playState]);

	useEffect(() => {
		const { nodeTimestamp } = props;

		const getSelectedNode =
			nodeTimestamp &&
			nodeTimestamp.filter(
				(e) =>
					e.startTime <= props.currentTime && e.endTime >= props.currentTime
			)[0];
		//console.log(props.currentTime, 'current time');
		if (getSelectedNode && getSelectedNode.id != focussedNodeRef.current) {
			const getNode = containerRef.current.querySelector(
				'#' + getSelectedNode.id
			);
			//console.log(getSelectedNode, 'getSelectedNode');
			const innerDiv = getNode && getNode.querySelector('.text');

			if (innerDiv) {
				if (innerDiv.classList.contains('decision-box')) {
					innerDiv.children[0].tabIndex = -1;
					innerDiv.children[0].focus();
				} else {
					setTimeout(() => {
						//console.log(innerDiv, 'innerDiv');
						innerDiv.tabIndex = -1;
						innerDiv.focus();
					});
				}
			}
			focussedNodeRef.current = getSelectedNode.id;
		}
	}, [currentTime]);

	useEffect(() => {
		if (props.onScreenText) {
			const ost1 = props.onScreenText.filter(
				(e) => e.startTime <= props.currentTime && e.endTime > props.currentTime
			);

			let show1 = false;
			let text = null;
			let chartShow = true;
			let classData = null;
			for (let i = 0; i < ost1.length; i++) {
				if (
					ost1[i].transform &&
					props.currentTime < ost1[i].middleTime &&
					ost1[i].startTime < props.currentTime
				) {
					show1 = true;
					text = ost1[i].text;
					classData = ost1[i].id;
					chartShow = ost1[i].hiddenChart ? false : true;
					// console.log("overClass----->", overClass, text, show1, props.currentTime, props.currentTime)
				}
			}
			setOstText(text);
			setOverClass(show1);
			setChartvisible(chartShow);
			setOstClass(classData);
		}
	}, [props.currentTime]);

	const renderFlowchart = (data) => {
		const { currentTime, selectAll } = props;

		let arr = [];
		for (let i = 0; i < data.length; i++) {
			const selectedAll = selectAll ? 'selected' : '';
			const selectedBox =
				data[i].startTime <= currentTime && data[i].endTime >= currentTime
					? 'selected-text'
					: '';

			const visitedBox = data[i].endTime < currentTime ? 'visited' : '';

			const nonVisited =
				!selectAll && data[i].startTime > currentTime ? 'no-visited' : '';

			const showNode =
				data[i].hiddenStart <= currentTime && data[i].hiddenEnd >= currentTime
					? 'visible'
					: '';

			const hideNode =
				data[i].hiddenStartLT <= currentTime &&
				data[i].hiddenEndLT >= currentTime
					? 'hideBox'
					: '';

			const _classes =
				data[i].classes && Array.isArray(data[i].classes)
					? data[i].classes.join(' ')
					: '';

			arr.push(
				<div
					id={data[i].id}
					key={data[i].id}
					className={`node ${selectedAll} ${selectedBox}  ${visitedBox}${nonVisited} ${_classes} ${showNode} ${hideNode}`}
				>
					{data[i].name && (
						<div className="node-container">
							{data[i].label ? (
								<>
									<div
										className={`sr-only  ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${showNode} ${hideNode}`}
										dangerouslySetInnerHTML={{ __html: data[i].label }}
										
										aria-hidden={selectedBox.length == 0 && !selectAll}
									></div>
									<div
										className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${showNode} ${hideNode}`}
										aria-hidden="true"
										
										dangerouslySetInnerHTML={{ __html: data[i].name }}
									></div>
								</>
							) : (
								<div
									className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${showNode} ${hideNode}`}
									
									aria-hidden={selectedBox.length == 0 && !selectAll}
									dangerouslySetInnerHTML={{ __html: data[i].name }}
								></div>
							)}
							<DirectionArrowContainer
								classes={`arrow down ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${showNode} ${hideNode}`}
							/>
						</div>
					)}
					{data[i].textNode.length > 0
						? renderFlowchart(data[i].textNode)
						: null}
				</div>
			);
		}

		return arr;
	};

	const showCaption = caption ? 'toggleHeight' : '';
	let showChart = true;
	if (
		props.currentTime >= hideTimeStamp.startTime &&
		props.currentTime <= hideTimeStamp.endTime
	) {
		showChart = false;
	}
	return (
		<div
			className={`chart-container ${showCaption}`}
			ref={containerRef}
			aria-hidden={props.overlay}
			//aria-label={props.altText && props.altText.activityTitle}
		>
		<div className="sr-only" tabIndex="-1" aria-hidden={props.overlay}>{props.altText && props.altText.activityTitle}</div>
			<div className="flow-chart">{showChart && renderFlowchart(data)}</div>
			<FadeInOut
				animation={!overClass}
				animationState={!overClass}
				text={ostText}
				classes={`main-screen-text ${ostClass}`}
			/>
		</div>
	);
};

ChartActivity.defaultProps = {
	selectAll: false,
};
export default ChartActivity;
