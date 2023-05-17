import React, {useEffect, useState} from 'react';
import classes from './BasicSlider.module.css'
import SlideBtn from "../UI/Btns/SlideBtn/SlideBtn";
import {observer} from "mobx-react-lite"

const TRANSITION_DURATION = 400

const BasicSlider = observer(({title, children, infinite}) => {
    const [childWidth, setChildWidth] = useState(0)
    const [childHeight, setChildHeight] = useState(0)
    const [gap, setGap] = useState(40)
    const [offset, setOffset] = useState(-760)
    const [sliderWidth, setSliderWidth] = useState()
    const [tempArray, setTempArray] = useState([...children])
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION)
    const [disabledBtn, setDisablesBtn] = useState(false)

    useEffect(() => {
        setTempArray([
            children[children.length - 2],
            children[children.length - 1],
            ...children,
            children[0],
            children[1]
            // children[1]
        ])
    }, [children])

    useEffect(() => {
        if (tempArray) {
            setChildWidth(tempArray[0].props.style.width)
            setChildHeight(tempArray[0].props.style.height)
        }
    }, [tempArray])

    useEffect(() => {
        if (tempArray) {
            let temp = (+childWidth) * tempArray.length + gap * (tempArray.length - 1)
            while (temp > 1180) {
                temp -= (childWidth + gap)
            }
            setSliderWidth(temp)
        }
    }, [childWidth])

    const leftBtnClickHandler = () => {
        setDisablesBtn(true)
        // if (offset < 0) {
        setOffset(offset + (childWidth + gap))
        // }
    }

    const rightBtnClickHandler = () => {
        setDisablesBtn(true)
        // if (offset > -(childWidth * (tempArray.length - 3)))
        setOffset(offset - (childWidth + gap))
    }

    useEffect(() => {
        if (offset === -((tempArray.length - 3) * childWidth + (tempArray.length - 3) * gap)) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(-(childWidth + gap))
            }, transitionDuration)
        }
        if (offset === 0) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(-((tempArray.length - 4) * childWidth + (tempArray.length - 4) * gap))
            }, transitionDuration)
        }
    }, [offset, tempArray, childWidth, gap])

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION)
            }, TRANSITION_DURATION)
        }
    }, [transitionDuration])

    useEffect(() => {
        if (disabledBtn) {
            setTimeout(() => {
                setDisablesBtn(false)
            }, 800)
        }
    }, [disabledBtn])

    return (
        <div className={classes.basicSlider}>
            <div className={classes.titleContainer} style={{width: sliderWidth}}>
                <h2>
                    {title}
                </h2>
                <div className={classes.btnContainer}>
                    <SlideBtn content={'<'} handler={leftBtnClickHandler} disabled={disabledBtn}/>
                    <SlideBtn content={'>'} handler={rightBtnClickHandler} disabled={disabledBtn}/>
                </div>
            </div>
            <div className={classes.container} style={{maxWidth: sliderWidth, height: (childHeight)}}>
                <div className={classes.wrapper} style={{
                    gap: gap,
                    transform: `translateX(${offset}px)`,
                    transition: `transform ${transitionDuration}ms ease`
                }}>
                    {tempArray}
                </div>
            </div>
        </div>
    );
});

export default BasicSlider;