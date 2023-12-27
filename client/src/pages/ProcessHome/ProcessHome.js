import React, { useEffect, useState } from 'react'
import "./processHome.css";
import { ProcessModal } from './ProcessModal';
import axios from "axios";
import { Link } from "react-router-dom";

export const ProcessHome = () => {
  const [openModal, setOpenModal] = useState(false);
  const [processData, setProcessData] = useState([]);

  useEffect(() => {
    const fetchProcess = async () => {
      try {
        const res=await axios.get("http://localhost:3500/api/process");
        setProcessData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProcess();
  },[processData._id])
  return (
    <div className="processHome">
      {processData.map((item) => (
        <Link to={`/process/${item._id}`} key={item._id}>
          <div className="card">
            <img src="./images/apartment.jpg" alt="img" />
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}
      <div className="cardAdd" onClick={() => setOpenModal(!openModal)}>
        <div className="addProcess">+</div>
      </div>
      {openModal && <ProcessModal setOpenModal={setOpenModal} />}
    </div>
  );
}
