import { WEATHER_FETCH_DATA_SUCCESS, WEATHER_HAS_ERRORED, WEATHER_IS_LOADING } from './actionTypes';

export const weatherHasErrored = (bool) => {
    return {
        type: WEATHER_HAS_ERRORED,
        hasErrored: bool,
    };
};

export const weatherIsLoading = (bool) => {
    return {
        type: WEATHER_IS_LOADING,
        isLoading: bool,
    };
};

export const weatherFetchDataSuccess = (dailyWeather) => {
    return {
        type: WEATHER_FETCH_DATA_SUCCESS,
        dailyWeather,
    };
};

export const weatherFetchData = (url) => (dispatch) => {
    dispatch(weatherIsLoading(true));

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(weatherIsLoading(false));
            return response;
        })
        .then((response) => response.json())
        .then((data) => {
            const dailyWeather = data.list.filter((reading) => reading.dt_txt.includes('18:00:00'));
            dispatch(weatherFetchDataSuccess(dailyWeather));
        })
        .catch(() => dispatch(weatherHasErrored(true)));
};
