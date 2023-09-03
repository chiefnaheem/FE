import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
const BASE_URL = "https://t2x9d5qiii.execute-api.us-east-1.amazonaws.com/dev/";


export const searchTrack = createAsyncThunk(
    "remoteApp/searchTrack",
    async (trackName: string, thunkAPI) => {
        const { data } = await axios.get(
            `${BASE_URL}search?query=${trackName ? trackName : "a"}&type=track`
        );
        // console.log('data')
        // console.log(data.data);
        return data.data;
    }
);

export const getArtist = createAsyncThunk(
    "remoteApp/getArtist",
    async (artistId: number, thunkAPI) => {
        const { data } = await axios.get(
            `${BASE_URL}artist/${artistId}`
        );
        console.log('data22')
        // console.log(data.data);
        return data.data;
    }
);