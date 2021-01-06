import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weatherFetchData } from '../../redux/weather/actions';
import WeatherBlock from './WeatherBlock';

class WeatherBlockContainer extends Component {
    componentDidMount() {
        this.props.fetchData(
            'https://api.openweathermap.org/data/2.5/forecast?q=Voronezh&lang=ru&units=metric&APPID=af437a175f58fe73e25d93ab23fbafeb',
        );
    }

    render() {
        const { dailyWeather, hasErrored, isLoading } = this.props;

        if (hasErrored) {
            return <p>Во время загрузки произошла ошибка.</p>;
        }

        if (isLoading) {
            return <p>Загрузка..</p>;
        }

        return <WeatherBlock dailyWeather={dailyWeather} />;
    }
}
const mapStateToProps = (state) => {
    return {
        dailyWeather: state.weather.dailyWeather,
        hasErrored: state.weather.hasErrored,
        isLoading: state.weather.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(weatherFetchData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBlockContainer);
