import React from 'react'

export const ShowImg = ({ setShowImgOpen, showData }) => {
  return (
    <div className="showImg">
      <div className="addTubes">
        <div className="modalll">
          <span className="close" onClick={() => setShowImgOpen(false)}>
            X
          </span>
          <h1>{`صورة الايصال : `}</h1>
          <img src={showData.img} alt="" className="hugeImg" />
        </div>
      </div>
    </div>
  );
};
