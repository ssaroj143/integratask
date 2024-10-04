import React, { useRef, useEffect, useState } from 'react';
import DirectionArrowContainer from '../../containers/DirectionArrowContainer';

import FadeInOut from '../../containers/FadeInFadeOutContainer';
import { hideTimeStamp } from '../../data/config';

export const ChartActivity = (props) => {
	const { playState, currentTime, data, caption, nodeTimestamp } = props;
	const containerRef = useRef(null);
	const focussedNodeRef = useRef(null);

	const [visibleChart, setChartvisible] = useState(true);
	const [leftOst, setOst] = useState([]);

	useEffect(() => {
		if (playState) {
			if (containerRef && containerRef.current) {
				const start = containerRef.current.querySelector('.chart-start');
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

		//mac
		// var ua = navigator.userAgent.toLowerCase();
		// if(ua.indexOf('mac') > 0) {
		// 	if (ua.indexOf('safari') != -1) {
		// 		if (ua.indexOf('chrome') > -1) {
		// 			// console.log("1") // Chrome
		// 		} else {
		// 			if(ua.indexOf('ipad') == -1){
		// 				containerRef.current.classList.add('mac-os');
		// 			}
					
		// 		}
		// 	}
	
		// }

		const getSelectedNode =
			nodeTimestamp &&
			nodeTimestamp.filter(
				(e) =>
					e.startTime <= props.currentTime && e.endTime >= props.currentTime
			)[0];

		if (getSelectedNode && getSelectedNode.id != focussedNodeRef.current) {
			const getNode = containerRef.current.querySelector(
				'#' + getSelectedNode.id
			);

			const innerDiv = getNode.querySelector('.text');
			
			if (innerDiv) {
				if (innerDiv.classList.contains('decision-box')) {
					innerDiv.children[0].tabIndex = -1;
					innerDiv.children[0].focus();
				} else {
					setTimeout(() => {
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

			const leftSectionOst = ost1.filter(
				(e) =>
					e.transform &&
					props.currentTime < e.middleTime &&
					e.startTime < props.currentTime
			);
			if (leftSectionOst && leftSectionOst.length > 0) {
				setOst(leftSectionOst);
				const visibleChart =
					leftSectionOst && leftSectionOst.filter((e) => e.hiddenChart);
				if (visibleChart && visibleChart.length > 0) {
					setChartvisible(false);
				} else {
					setChartvisible(true);
				}
			} else {
				setOst([]);
			}
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

			const hideNode =
				data[i].hiddenStart <= currentTime && data[i].hiddenEnd >= currentTime
					? 'visible'
					: '';
			const _classes =
				data[i].classes && Array.isArray(data[i].classes)
					? data[i].classes.join(' ')
					: '';

			const showCondtion =
				data[i].visitedStartTime <= currentTime &&
					data[i].visitedEndTime >= currentTime
					? 'branch'
					: '';

			const specialClass =
				data[i].visitedS <= currentTime && data[i].visitedE >= currentTime
					? 'special-text'
					: '';

			const highlightNode =
				data[i].glow &&
					((data[i].highlightStartTime <= currentTime &&
						data[i].highlightEndTime >= currentTime) ||
						(data[i].highlightStartTime2 <= currentTime &&
							data[i].highlightEndTime2 >= currentTime))
					? 'glow'
					: '';

			const updateFlex = data[i].vTime <= currentTime ? 'update-flex' : '';
			arr.push(
				<div
					id={data[i].id}
					key={data[i].id}
					className={`node ${selectedAll} ${selectedBox} ${nonVisited} ${visitedBox} ${_classes} ${hideNode} ${showCondtion} ${specialClass} ${updateFlex}`}
				>
					{data[i].name && (
						<div className={`node-container`}>
							<DirectionArrowContainer
								classes={`arrow up ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
							/>
							{data[i].label ? (
								<>
									<div
										className={`sr-only-max-width  ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}  ${hideNode} ${showCondtion}`}
										dangerouslySetInnerHTML={{ __html: data[i].label }}
										style={{
											background: `${data[i].background && data[i].background}`,
											border: `2px solid ${data[i].border && data[i].border}`,
										}}
										aria-hidden={nonVisited.length !== 0 && !selectAll}
									></div>
									<div
										className={`text ${selectedBox} ${highlightNode} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${hideNode} ${showCondtion}`}
										aria-hidden="true"
										style={{
											background: `${data[i].background && data[i].background}`,
											border: `2px solid ${data[i].border && data[i].border}`,
										}}
										dangerouslySetInnerHTML={{ __html: data[i].name }}
									></div>
								</>
							) : (
								<div
									className={`text ${selectedBox} ${highlightNode} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${hideNode} ${showCondtion}`}
									style={{
										background: `${data[i].background && data[i].background}`,
										border: `2px solid ${data[i].border && data[i].border}`,
									}}
									dangerouslySetInnerHTML={{ __html: data[i].name }}
								></div>
							)}
							<DirectionArrowContainer
								classes={`arrow down ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
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
			{visibleChart && showChart && (
				<div className="flow-chart">{renderFlowchart(data)}</div>
			)}
			<div className={`${visibleChart ? 'main-text' : ''}`}>
				{leftOst &&
					leftOst.map((l, index) => {
						return (
							<div key={index}>
								<FadeInOut
									animation={true}
									animationState={true}
									text={l.text}
									classes={`main-screen-text ${l.id}`}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

ChartActivity.defaultProps = {
	selectAll: false,
};
export default ChartActivity;
