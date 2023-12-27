import React, { useEffect, useState } from 'react'
import "./car.css";
import axios from "axios";
import { AddCar } from './AddCar';


export const Car = () => {
  const [carData, setCarData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get("http://localhost:3500/api/car");
        setCarData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCar();
  },[carData._id])

  return (
    <div className="car">
      <div className="carHeader">
        <h1>السياره</h1>
        <button onClick={() => setOpenModal(true)}>اضف تحرك سياره</button>
      </div>
      <table class="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col d-flex" className="col d-flex">
              سائق السياره
            </th>
            <th scope="col d-flex">سعر البنزين</th>
            <th scope="col d-flex">الكيلومتر</th>
            <th scope="col d-flex">التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((item) => (
            <tr>
              <td className="zz">{item.name}</td>
              <td className="zz">{item.price}</td>
              <td className="zz">{item.km}</td>
              <td className="zz">{item.createdAt.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && <AddCar setOpenModal={setOpenModal} />}
    </div>
  );
}
