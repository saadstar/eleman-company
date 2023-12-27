import React from 'react'
import "./store.css";
export const ShowImg = ({ setShowOpen, showData }) => {
  return (
    <div className='showImg'>
      <div className="addTubes">
        <div className="modalll">
          <span className="close" onClick={() => setShowOpen(false)}>
            X
          </span>
          <h1>{`صورة البون : `}</h1>
                  <img src={showData.img} alt="" className='hugeImg' />
        </div>
      </div>
    </div>
  );
};
