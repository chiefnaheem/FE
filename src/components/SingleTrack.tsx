import React from 'react'

export default function SingleTrack({ data }: any) {
  return (
    <div>
        <div className="card">
            <img src={data.artist?.picture_medium} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{data?.title}</h5>
                <p className="card-text">{data.artist?.name}</p>
                </div>
        </div>
    </div>
  )
}
