import React from 'react';
import styles from './WeatherBlock.module.css';
import WeatherCardContainer from './WeatherCard/WeatherCardContainer';

const WeatherBlock = ({ dailyWeather }) => {
    return (
        <div className={styles.weatherBlock}>
            {dailyWeather.map((item, index) => {
                return <WeatherCardContainer key={index} dailyWeather={item} />;
            })}
        </div>
    );
};

export default WeatherBlock;
