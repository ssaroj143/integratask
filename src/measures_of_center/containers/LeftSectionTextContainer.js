import { connect } from "react-redux";
import LeftSectionText from "../../app/components/leftSectionText";
import {leftSectionData} from "../data/config";
import {setFlowChartVisible} from "../actions/index";

const mapState=(state)=>({
   leftSectionText:leftSectionData,
   currentTime:state.audioCurrentTime,
   flowChartVisible:state.flowChartVisible,
   caption: state.toggleCaptionState,
});

const matchDispatch=(dispatch)=>{
    return {
        setFlowChartVisible:(value)=>{
            dispatch(setFlowChartVisible(value));
        }
    }
}

export default connect(mapState,matchDispatch)(LeftSectionText);

