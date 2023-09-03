import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";
import { searchTrack } from "./reducers/searchTrack";

const initialState: InitialState = {
    albums: [],
    artist: {
        id: "",
        name: "",
        image: "",
    },
    topTracks: [],
    relatedArtists: [],
};


const AppSlice = createSlice({
    name: "remoteApp",
    initialState,
    reducers: {},
    
    extraReducers: (builder) => {
        builder.addCase(searchTrack.fulfilled, (state, action) => {
            // state.albums = action.payload.albums;
            // state.artist = action.payload.artist;
            // state.topTracks = action.payload.topTracks;
            // state.relatedArtists = action.payload.relatedArtists;
        });
    }
});
  

export const store = configureStore({
    reducer: {
      remoteApp: AppSlice.reducer,
    },
  });
  

  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;