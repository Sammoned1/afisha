import React from 'react';
import classes from './ActivePanel.module.css'

const categories = [
    {id:1, name:'ВСЁ'},
    {id:2, name:'ГОРОД'},
    {id:3, name:'КИНО'},
    {id:4, name:'ТЕАТР'},
    {id:5, name:'ВЫСТАВКИ'},
    {id:6, name:'СПОРТ'},
    {id:7, name:'ДЕТИ'},
]

const ActivePanel = () => {
    return (
        <div className={classes.activePanel}>
            {categories.map(item=>
                <div className={classes.panelItem} key={item.id}>
                    {item.name}
                </div>
            )}
        </div>
    );
};

export default ActivePanel;