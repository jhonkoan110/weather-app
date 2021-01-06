import { WEATHER_FETCH_DATA_SUCCESS, WEATHER_HAS_ERRORED, WEATHER_IS_LOADING } from './actionTypes';

const initialState = {
    dailyWeather: [],
    hasErrored: false,
    isLoading: false,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_HAS_ERRORED:
            return { ...state, hasErrored: action.hasErrored };

        case WEATHER_IS_LOADING:
            return { ...state, isLoading: action.isLoading };

        case WEATHER_FETCH_DATA_SUCCESS:
            return { ...state, dailyWeather: action.dailyWeather };

        default:
            return state;
    }
};

export default weatherReducer;
