import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";



export const searchTrack = createAsyncThunk(
    "remoteApp/searchTrack",
    async (trackName: string, thunkAPI) => {
        const { data } = await axios.get(
            `search?query=${trackName ? trackName : "a"}&type=track&limit=10000`
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
            `artist/${artistId}`
        );
        console.log('data22')
        // console.log(data.data);
        return data.data;
    }
);