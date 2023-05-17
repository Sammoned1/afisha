import React from 'react';
import classes from './SlideBtn.module.css'

const SlideBtn = ({content, handler, disabled}) => {
    return (
        <button className={classes.slideBtn} onClick={()=>{handler()}} disabled={disabled}>
            {content}
        </button>
    );
};

export default SlideBtn;