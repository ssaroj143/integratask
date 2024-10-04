import React, { useEffect, useState, useRef, createRef } from 'react';
const FadeInOut = (props) => {
    const { classes, children, ns, animationState,
        animation } = props;
    const [animState, setAnimState] = useState(animationState);
    const [anim, setAnim] = useState(animation);
    const [classN, setClassN] = useState(animation);
    useEffect(() => {
        setAnimState(animationState);
        setAnim(animation)
        const animStateData = animState ? "fade-in" : "fade-out";
        setClassN(animStateData)
    }, [animationState, animation]);

    const endFadeInOutAnimation = () => {
        if (animState) {
            setAnimState(!animState);
            setAnim(!anim)
        }
    }
    return (
        <div
            className={`${ns}-fade-in-out ${classes ? classes : ""} ${anim ? classN : "no-anim"}`}
            onAnimationEnd={() => endFadeInOutAnimation()}
        >
            {children}
        </div>
    )


}
FadeInOut.defaultProps = {
    animationState: false,
    animation: false
}
export default FadeInOut;