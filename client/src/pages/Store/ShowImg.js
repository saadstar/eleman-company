import React from "react";
import "./store.css";
export const ShowImg = ({ setShowOpen, showData }) => {
  return (
    <div className="showImg">
      <div className="showModal">
        <span className="close" onClick={() => setShowOpen(false)}>
          X
        </span>
        <h1>{`صورة البون : `}</h1>
        <img
          src={`https://api.eleaman.com/${showData.filename}`}
          alt=""
          className="hugeImg"
        />
      </div>
    </div>
  );
};
