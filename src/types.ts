export interface InitialState {
    albums: Album[];
    artist: Artist;
    topTracks: Track[];
    relatedArtists: Artist[];
    data?: any;
}

export interface Album {
    id: string;
    name: string;
    year: string;
    image: string;
}

export interface Artist {
    id: string;
    name: string;
    image: string;
}

export interface Track {
    id: string;
    name: string;
    image: string;
    previewUrl: string;
}


