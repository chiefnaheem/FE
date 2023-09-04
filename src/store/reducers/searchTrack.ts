import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetApiUrl = 'https://t2x9d5qiii.execute-api.us-east-1.amazonaws.com/dev';

export const searchTrack = createAsyncThunk(
    "remoteApp/searchTrack",
    async (trackName: string, thunkAPI) => {
        const { data } = await axios.get(
            `${corsProxyUrl}${targetApiUrl}/search?query=${trackName ? trackName : "a"}&type=track&limit=10000`
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
            `${corsProxyUrl}${targetApiUrl}/artist/${artistId}`
        );
        console.log('data22')
        // console.log(data.data);
        return data.data;
    }
);