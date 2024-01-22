import React, { useEffect, useState } from 'react'
import { AddAnalyicsDetails } from './AddAnalyicsDetails';
import axios from "axios";
import { useParams } from "react-router-dom";

export const DataNum = ({dataNum,name}) => {
  const [dataOne, setDataOne] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const { id } = useParams('');

  const fetchDataWithDataNum = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3500/api/analyicsDetails/${dataNum}/${id}`
      );
      setDataOne(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchDataWithDataNum();
  })
    return (
      <div className='dataNum'>
        {dataOne.length === 0 ? (
          <div className="plan" onClick={() => setAddOpen(!addOpen)}>
            <div className="addPlan">+</div>
          </div>
        ) : (
          <div class="plan">
            <div class="head">
              <h3>الاسعار {name} : </h3>
                <span>تاريخ : { dataOne[0].createdAt.split("T")[0]}</span>
            </div>
            <ul key={dataOne[0]._id}>
              <li>
                <h5>المواسير :</h5>
                <span>{dataOne[0].tubeNum} جنيه</span>
              </li>
              <li>
                <h5>التركيب والتوريد:</h5>
                <span>{dataOne[0].exportNum} جنيه</span>
              </li>
              <li>
                <h5>المطابق :</h5>
                <span>{dataOne[0].floorNum} جنيه</span>
              </li>
              <li>
                <h5>الغرف :</h5>
                <span>{dataOne[0].roomNum} جنيه</span>
              </li>
              <li>
                <h5>المنزليه :</h5>
                <span>{dataOne[0].houseNum} جنيه</span>
              </li>
              <li>
                <h5>الاخشاب :</h5>
                <span>{dataOne[0].woodNum} جنيه</span>
              </li>
              <li>
                <h5>التكفيف :</h5>
                <span>{dataOne[0].blindNum} جنيه</span>
              </li>
              <li>
                <h5>المحابس :</h5>
                <span>{dataOne[0].lockNum} جنيه</span>
              </li>
              <li>
                <h5>وصلات المياه :</h5>
                <span>{dataOne[0].waterNum} جنيه</span>
              </li>
            </ul>
          </div>
        )}
        {addOpen && <AddAnalyicsDetails dataNum={dataNum} id={id} setAddOpen={setAddOpen} />}
      </div>
    );
}
