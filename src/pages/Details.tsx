import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getArtist } from "../store/reducers/searchTrack";

export default function Details () {
  const { id }: any = useParams();
  console.log(id, "id");
  console.log(typeof id, "id")
  const [data, setArtist] = useState({} as any);

  const dispatch = useAppDispatch();
  const data2 = useAppSelector((state) => state.remoteApp.data);

  const getArtistData = async (id: any) => {
    
    const number = Number(id);
    const data = await dispatch(getArtist(number));
    console.log(data, "zzzzzz")
    setArtist(data);
  };

  useEffect(() => {
    getArtistData(id);
    dispatch(getArtist(13));

  }, [dispatch, id]);

  return (
    <div className="container">
      <br />
      <div
        className="row"
        style={{
          minHeight: "50vh",
        }}
      >
        <div
          className="col-8"
          style={{
            backgroundColor: "#f1f1f1",
            padding: "20px",
          }}
        >
          <div className="row container">
            <div className="col-8">
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {data.artist.name}
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {data.artist.type}{" "}
              </p>
              <p>{data.artist.nb_fan}</p>
            </div>
            <div className="col-4">
              <img src={data.artist.picture_medium} alt="" />
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="container">
            <h4
              style={{
                padding: "20px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Top Tracks
            </h4>
            {data.topTracks.data.map((item: any, index: number) => (
              <ol>
                <li key={index} className="py-2">
                  {" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {`${index + 1})`}{" "}
                  </span>{" "}
                  {`${item.title} ${item.title_short}`}
                </li>
                <hr />
              </ol>
            ))}
          </div>
        </div>
      </div>
      {/* comments */}

      <br />
      <br />
      <div
        className="row"
        style={{
          backgroundColor: "#f1f1f1",
          padding: "100px",
        }}
      >
        <h4>Albums</h4>
        <br />
        {data.albums.data.map((item: any, index: number) => (
          <div className="col-3" key={index}>
            <div className="card">
              <img src={item.cover_medium} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <p className="card-text">{item.type}</p>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
