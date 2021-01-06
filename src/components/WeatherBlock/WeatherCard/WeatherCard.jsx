import React from 'react';
import styles from './WeatherCard.module.css';

const WeatherCard = ({ temp, weekdayName, pressure, imgURL }) => {
    return (
        <div className={styles.weatherCard}>
            <h3>{weekdayName}</h3>
            <i className={imgURL}></i>
            <h1>{temp}°C</h1>
            <p>Давление: {pressure} мм рт. ст.</p>
        </div>
    );
};

export default WeatherCard;
