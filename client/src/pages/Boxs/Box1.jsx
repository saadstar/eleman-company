import React , { useState, useEffect } from 'react';
import { topDealUsers } from "../../component/data";
import "./boxOne.css";
import axios from "axios";

export const Box1 = () => {
    const [rowData, setRowData] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.eleaman.com/api/save");
        setRowData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();    
    },[rowData._id])
    
  
  return (
      <div className='top-box'>
          <h1>الأكثر استهلاكاً</h1>
          <div className='list'>
          {
              rowData.slice(5).map((deal) => (
                  <div key={deal._id} className='listItem'>
                      <div className='user'>
                          <img src={deal.img} alt="dsaf" className='boxImg'/>
                          <div className='userTexts'>
                              <span className='username'>{deal.name}</span>
                          </div>
                      </div>                      
                      <span>${deal.out }</span>
                  </div>
              ))
          }</div>
    </div>
  )
}
