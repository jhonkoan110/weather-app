import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class WeatherCardContainer extends Component {
    render() {
        const dailyWeather = this.props.dailyWeather;

        let temp = Math.round(dailyWeather.main.temp);
        const pressure = dailyWeather.main.pressure;
        const ms = dailyWeather.dt * 1000;
        let weekdayString = new Date(ms).toLocaleString('ru', { weekday: 'long' });
        const weekdayName = weekdayString[0].toUpperCase() + weekdayString.slice(1);
        const imgURL = 'owf owf-' + dailyWeather.weather[0].id + ' owf-5x icon-style';
        if (temp === 0) {
            temp = Math.abs(temp);
        }
        return (
            <WeatherCard
                temp={temp}
                pressure={pressure}
                weekdayName={weekdayName}
                imgURL={imgURL}
            />
        );
    }
}

export default WeatherCardContainer;
