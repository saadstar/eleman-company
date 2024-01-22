import React, { useState } from 'react'
import "../modal.css";
import axios from 'axios';
import { toast } from "react-toastify";

export const AddAnalyics = ({ setOpenAddAnalyics }) => {
    const [title, setTitle] = useState("");

    const addNewAnalyics = async (e) => {
        try {
            e.preventDefault();
           const res= await axios.post("http://localhost:3500/api/analyics", {title});
                  res.status === 200 && toast.success("تم اضافه العمليه بنجاح");
                  res.status === 500 && toast.error("حدث خطأ ما");

        } catch (err) {
            console.log(err);
        }
        setOpenAddAnalyics(false);
    }
  return (
    <div className="myModal">
      <span className="close"  onClick={() => setOpenAddAnalyics(false)}>
        X
      </span>
      <h1 className='ms-2'>{"أضافه عمليه جديده"}</h1>
      <form onSubmit={(e) => e.preventDefault}>
        <div className="formItem">
          <label htmlFor="title">العمليه</label>
          <input
            name="title"
            placeholder="ادخل اسم العمليه"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button className="addButton" onClick={addNewAnalyics}>
          أضافه
        </button>
      </form>
    </div>
  );
};
