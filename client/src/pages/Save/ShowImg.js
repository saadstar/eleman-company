import React from "react";

export const ShowImg = ({ setShowImgOpen, showData }) => {
  return (
    <div className="showSaveImg p-4">
      <div className="modall">
        <div className="saveClose">
          <span className="close" onClick={() => setShowImgOpen(false)}>
            X
          </span>
          <h1>{`صورة الايصال : `}</h1>
        </div>
        <img
          src={`https://api.eleaman.com/${showData.filename}`}
          alt=""
          className="hugeSaveImg"
        />
      </div>
    </div>
  );
};
