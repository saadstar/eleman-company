import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";

export const AddAnalyicsDetails = ({ setAddOpen ,dataNum,id}) => {
  const [tubeNum, setTubeNum] = useState(0);
  const [exportNum, setexportNum] = useState(0);
  const [floorNum, setfloorNum] = useState(0);
  const [roomNum, setroomNum] = useState(0);
  const [houseNum, sethouseNum] = useState(0);
  const [woodNum, setwoodNum] = useState(0);
  const [blindNum, setblindNum] = useState(0);
  const [lockNum, setlockNum] = useState(0);
  const [waterNum, setwaterNum] = useState(0);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const valuearr = [
    tubeNum,
    exportNum,
    floorNum,
    roomNum,
    houseNum,
    woodNum,
    blindNum,
    lockNum,
    waterNum,
  ];
  const valueNum = [];
  const switchTonNum = valuearr.forEach((ele) => {
    return valueNum.push(+ele)
  })
const totalValueHandler = () => {
  let sum = 0;
  for (let i = 0; i < valueNum.length; i++) {
    sum += valueNum[i];
  }
  setValue(sum);
};
  const handleAdd = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post(
        `http://localhost:3500/api/analyicsDetails/`,
        {
          analyicsId: id,
          dataNum,
          tubeNum,
          exportNum,
          floorNum,
          roomNum,
          houseNum,
          woodNum,
          blindNum,
          lockNum,
          waterNum,
          value
        }
      );
      res.status === 200 && toast.success("تم بنجاح");
      setLoading(false);
      setAddOpen(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    totalValueHandler()
  })
  return (
    <div className="myModal myAddModal">
      <span className="close" onClick={() => setAddOpen(false)}>
        X
      </span>
      <h1>{`أضافه اسعار جديده`}</h1>
      <form>
        <div className="formItem">
          <label htmlFor="tubeNum">سعر المواسير :</label>
          <input
            name="tubeNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setTubeNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="exportNum">سعر التوريد والتركيب :</label>
          <input
            name="exportNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setexportNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="floorNum">سعر المطابق :</label>
          <input
            name="floorNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setfloorNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="roomNum">سعر الغرف :</label>
          <input
            name="roomNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setroomNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="houseNum">سعر المنزليه :</label>
          <input
            name="houseNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => sethouseNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="woodNum">سعر الاخشاب :</label>
          <input
            name="woodNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setwoodNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="blindNum">سعر التكفيف :</label>
          <input
            name="blindNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setblindNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="lockNum">سعر المحابس :</label>
          <input
            name="lockNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setlockNum(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="waterNum">سعر وصلات المياه :</label>
          <input
            name="waterNum"
            placeholder={"ادخل السعر للمتر الواحد"}
            type="number"
            required
            onChange={(e) => setwaterNum(e.target.value)}
          />
        </div>
       {loading === true ?<span className='loader'></span>:( <button
          className="addButton"
          onClick={handleAdd}
        >
          أضافه
        </button>)}
      </form>
    </div>
  );
};
