import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    key: '3c9333a1a3a40ca893996cbeb44b7022',
    data: null
}


export const getLatLon = createAsyncThunk('weatherSlice/getLatLon', async(city,{dispatch}) => {
    let { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${initialState.key}`)
    
    dispatch(getWeather(data[0]))
})


export const getWeather = createAsyncThunk('weatherSlice/getWeather', async(param) => {
    let { lat, lon } = param
    
    let { data } = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${initialState.key}&units=metric&lang=ru`)
    
    return data
}) 


const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getWeather.fulfilled, (state,action) => {
            state.data = action.payload
        })
    }
})

export default weatherSlice.reducer