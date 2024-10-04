import { connect } from "react-redux";
import DirectionArrow from "../../app/components/directionArrow";
import { captionJson } from "../data/config";

const mapState = (state) => {
    return {
        ns: "pehtmlflowcharts",

    };
};

export default connect(mapState)(DirectionArrow);