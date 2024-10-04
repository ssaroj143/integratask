import React, { useEffect, useState, useRef, createRef } from 'react';
const DirectionArrow = (props) => {
    const { classes, text, ns } = props;
    return (
        <div className={`${ns}-arrow ${classes}`}>
            { text ? <p> {text}</p> : ""}
        </div>
    )


}
export default DirectionArrow;