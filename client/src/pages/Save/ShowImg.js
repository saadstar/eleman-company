import React from "react";
import "../modal.css";

export const ShowImg = ({ setShowImgOpen, showData }) => {
  return (
    <div className="myModal p-4">
          <span className="close" onClick={() => setShowImgOpen(false)}>
            X
          </span>
          <h1>{`صورة الايصال : `}</h1>
        <img
          src={`https://api.eleaman.com/${showData.filename}`}
          alt=""
          className="hugeSaveImg"
        />
      </div>
  );
};
