import React, { useEffect, useState } from "react";
import Albums from "../components/Albums";
import TopTracks from "../components/TopTracks";
import Artist from "../components/Artist";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getArtist, searchTrack } from "../store/reducers/searchTrack";
import SingleTrack from "../components/SingleTrack";
import { useNavigate } from "react-router-dom";


  

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("a");
  const [tracks, setTracks] = useState([]);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.remoteApp.data);
  const data2 = useAppSelector((state) => state.remoteApp.data);

  const getTrack = async () => {
    const data = await dispatch(searchTrack(search));
    console.log(data.payload.data, "zzzzzz");
    setTracks(data.payload.data);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleClick = (id: any) => {
    // e.preventDefault();
    navigate(`/details?id=${id}`);
  };

  useEffect(() => {
    getTrack();
    dispatch(getArtist(13));

  }, [dispatch, search]);

  return (
    <div className="container">
      <br />
      <div className="row">
        <input
          className="form-control"
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "50px",
            border: "1px solid #ccc",
            padding: "10px",
            fontSize: "20px",
            outline: "none",
          }}
          type="text"
          placeholder="search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="row">
        {tracks.map((item: any, index) => (
          <div
            key={index}
            className="col-3"
            onClick={() => handleClick(item.artist.id)}
          >
            <SingleTrack data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
