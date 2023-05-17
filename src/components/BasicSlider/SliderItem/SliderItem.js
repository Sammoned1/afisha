import React from 'react';
import classes from './SliderItem.module.css'

const SliderItem = ({title, description, ...props}) => {
    return (
        <div className={classes.sliderItem} {...props}>
            <div className={classes.sliderItemPhotoContainer}>

            </div>
            <div className={classes.sliderItemTitleContainer}>
                {title}
            </div>
            <div className={classes.sliderItemDescContainer}>
                {description}
            </div>
        </div>
    );
};

export default SliderItem;