import { node } from 'prop-types';
import React, { Component, createRef } from 'react';
import FadeInOut from '../../containers/FadeInFadeOutContainer';

export class ChartActivity extends Component {
	constructor(props) {
		super(props);
		this.containerRef = createRef();
		this.focussedNodeRef = createRef(null);
		this.state = {
			overClass: false,
			ostText: null,
			ostClass: null,
			visibleChart: true,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.playState != this.props.playState) {
			if (this.props.playState) {
				if (this.containerRef && this.containerRef.current) {
					const start = this.containerRef.current.querySelector('.startend');
					const innerDivStart = start && start.querySelector('.text');

					if (innerDivStart) {
						setTimeout(() => {
							innerDivStart.tabIndex = -1;
							innerDivStart.focus();
						});
					}
				}
			}
		}

		const nodeStamp = this.props.nodeTimestamp;

		const getSelectedNode =
			nodeStamp &&
			nodeStamp.filter(
				(e) =>
					e.startTime <= this.props.currentTime &&
					e.endTime >= this.props.currentTime
			)[0];
		if (getSelectedNode && getSelectedNode.id != this.focussedNodeRef.current) {
			const getNode = this.containerRef.current.querySelector(
				'.' + getSelectedNode.id
			);
			let getActiveNode;

			if (getSelectedNode && getSelectedNode.id == 'decision-box1') {
				getActiveNode = getNode.children[0].children[1].children[0];
				if (getActiveNode) {
					getActiveNode.tabIndex = -1;
					getActiveNode.focus();
				}
			} else {
				getActiveNode = getNode.children[0].children[1];
				if (getActiveNode) {
					getActiveNode.tabIndex = -1;
					getActiveNode.focus();
				}
			}
			this.focussedNodeRef.current = getSelectedNode.id;
		}

		const { onScreenText, currentTime } = this.props;
		if (prevProps.currentTime != this.props.currentTime) {
			if (onScreenText) {
				const ost1 = onScreenText.filter(
					(e) => e.startTime <= currentTime && e.endTime > currentTime
				);
				let show1 = false;
				let text = null;
				let chartShow = true;
				let classData = null;
				for (let i = 0; i < ost1.length; i++) {
					if (
						ost1[i].transform &&
						currentTime < ost1[i].middleTime &&
						ost1[i].startTime < currentTime
					) {
						show1 = true;
						text = ost1[i].text;
						classData = ost1[i].id;
						chartShow = ost1[i].chartHidden ? false : true;
					}
				}

				this.setState({
					ostText: text,
					overClass: show1,
					ostClass: classData,
					visibleChart: chartShow,
				});
			}
		}
	}

	renderFlowchart = (data) => {
		const { activeNode, currentTime, selectAll } = this.props;

		let arr = [];
		for (let i = 0; i < data.length; i++) {
			const selectedAll = selectAll ? 'selected' : '';
			const selectedBox =
				data[i].startTime <= currentTime && data[i].endTime >= currentTime
					? 'selected-text'
					: '';

			const visitedBox =
				data[i].endTime < currentTime && !selectedAll ? 'visited' : '';
		
			// console.log(selectAll,"selectAll")
			const nonVisited =
				!selectAll && data[i].startTime > currentTime ? 'no-visited' : '';

			const showBranch =
				data[i].type == 'child' &&
				data[i].visitedStart <= currentTime &&
				data[i].visitedEnd >= currentTime
					? 'branch'
					: '';

			const _classes =
				data[i].classes && Array.isArray(data[i].classes)
					? data[i].classes.join(' ')
					: '';

			const hidden = selectAll || showBranch == 'branch';
			arr.push(
				<div
					key={data[i].id}
					id={data[i].id}
					className={`node ${_classes} ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll}`}
				>
					{data[i].name && (
						<div className={`node-container`}>
							{data[i].label && (
								<div
									className={`sr-only`}
									dangerouslySetInnerHTML={{ __html: data[i].label }}
									aria-hidden={selectedBox.length == 0 && !selectAll}
								></div>
							)}
							<div
								className={`text ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${_classes} ${showBranch}`}
								dangerouslySetInnerHTML={{ __html: data[i].name }}
								style={{
									background: `${data[i].background && data[i].background}`,
									border: `2px solid ${data[i].border && data[i].border}`,
								}}
								aria-hidden={selectedBox.length == 0 && !selectAll}
							></div>
							<div
								className={`arrow ${_classes} ${selectedBox} ${visitedBox} ${nonVisited} ${selectedAll} ${showBranch}`}
								aria-hidden="true"
							></div>
						</div>
					)}
					{data[i].textNode.length > 0
						? this.renderFlowchart(data[i].textNode)
						: null}
				</div>
			);
			//console.log(arr,"arr")
		}

		return arr;
	};

	render() {
		const { data, caption } = this.props;
		const showCaption = caption ? 'toggleHeight' : '';
		return (
			<>
				<div
					className={`chart-container ${showCaption}`}
					ref={this.containerRef}
					aria-hidden={this.props.overlay}
					//aria-label={this.props.altText.activityTitle}
				>
        <div className="sr-only" tabIndex="-1" aria-hidden={this.props.overlay}>{this.props.altText.activityTitle}</div>
					{this.renderFlowchart(data)}
					<FadeInOut
						animation={!this.state.overClass}
						animationState={!this.state.overClass}
						text={this.state.ostText}
						classes={`main-screen-text ${this.state.ostClass}`}
					/>
				</div>
				{this.props.children}
			</>
		);
	}
}

ChartActivity.defaultProps = {
	selectAll: false,
};
export default ChartActivity;
