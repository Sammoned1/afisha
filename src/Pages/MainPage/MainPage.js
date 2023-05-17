import React from 'react';
import classes from './MainPage.module.css'
import NavBar from "../../components/NavBar/NavBar";
import ActivePanel from "../../components/NavBar/ActivePanel/ActivePanel";
import BasicSlider from "../../components/BasicSlider/BasicSlider";
import SliderItem from "../../components/BasicSlider/SliderItem/SliderItem";

const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <div className={classes.mainContainer}>
                <NavBar/>
                <ActivePanel/>
                <BasicSlider title={'Сегодня в Новоберёзовске'}>
                    <SliderItem title={'Название 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 200, width: 340}}/>
                    <SliderItem title={'Название 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 200, width: 340}}/>
                    <SliderItem title={'Название 3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 200, width: 340}}/>
                    <SliderItem title={'Название 4'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 200, width: 340}}/>
                    <SliderItem title={'Название 5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 200, width: 340}}/>
                </BasicSlider>
                <BasicSlider title={'Кино'}>
                    <SliderItem title={'Название 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 4'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 6'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 7'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 8'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 9'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 10'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                </BasicSlider>
                <BasicSlider title={'Театр'}>
                    <SliderItem title={'Название 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 4'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                </BasicSlider>
                <BasicSlider title={'Выставки'}>
                    <SliderItem title={'Название 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 4'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                    <SliderItem title={'Название 5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.'} style={{height: 300, width: 340}}/>
                </BasicSlider>
            </div>
        </div>
    );
};

export default MainPage;