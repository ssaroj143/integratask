import React, { useEffect } from 'react'


const LeftSectionText = (props) => {
    const { leftSectionText, currentTime, setFlowChartVisible, caption } = props;
    const text = leftSectionText.filter(
        (e) => e.startTime <= currentTime && e.endTime > currentTime
    );


    useEffect(() => {
        const text = leftSectionText.filter(
            (e) => e.startTime <= currentTime && e.endTime > currentTime
        );


        if (text && text.length > 0) {

            setFlowChartVisible(false);
        } else {
            setFlowChartVisible(true);
        }

    }, [currentTime])


    const showCaption = caption ? "toggleHeight" : "";
    return (
        <>
           {text && text.length>0 && <div className={`left-section-text-container ${showCaption}`}>
                {text && text.map((t, index) => {
                    return (
                        <div key={index} className={`text-container ${t.id}`} dangerouslySetInnerHTML={{ __html: t.name }}></div>

                    )
                })}
            </div>}
            </>
        
    )
}

LeftSectionText.defaultProps = {
    currentTime: 0,
    leftSectionText: []
}
export default LeftSectionText
