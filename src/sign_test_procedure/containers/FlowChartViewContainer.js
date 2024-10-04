import { connect } from 'react-redux';
import {
	nodeTimestamp,
	onScreenText,
	timestampsForAttempts,
	data,
	hideChartTime,
	altText
} from '../data/config';
import { thunk, setTocItem, setFlowChartVisible } from '../actions';
import ChartActivity from '../components/activity/ChartActivity';

const mapState = (state) => {
	return {
		overlay: state.overlayState,
		onScreenText: onScreenText,
		activeNode: state.activeNode,
		nodeTimestamp: nodeTimestamp,
		visitedNode: state.visitedNode,
		caption: state.toggleCaptionState,
		skipToContent: state.skipToContent,
		currentTime: state.audioCurrentTime,
		playState: state.audioPlayState,
		flowChartVisible: state.flowChartVisible,
		timestampsForAttempts: timestampsForAttempts,
		data: data,
		hideChartTime: hideChartTime,
		altText:altText
	};
};

const mapDispatch = (dispatch) => {
	return {
		onBranchClick: (object) => {
			dispatch(thunk.onButtonClick({ ...object }));
		},
	};
};

export default connect(mapState, mapDispatch)(ChartActivity);
