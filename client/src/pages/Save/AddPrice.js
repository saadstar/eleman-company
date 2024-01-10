import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./save.css";

export const AddPrice = ({ setAddOpen, type, setOutOpen }) => {
  const [file, setFile] = useState(undefined);
  const [name, setName] = useState("");
  const [out, setOut] = useState(0);
  const [recived, setRecived] = useState("");
  const [inn, setIn] = useState(0);
  const navigate = useNavigate("");

  const uploadNewPrice = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("out", out);
      formData.append("inn", inn);
      formData.append("recived", recived);
      const res = await axios.post(
        "https://api.eleaman.com/api/save",
        formData
      );
      toast.success("تم بنجاح.");
      res.status === 200 && navigate("/save");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addTubes">
      <div className="modalll">
        <span
          className="close"
          onClick={
            type === "out" ? () => setOutOpen(false) : () => setAddOpen(false)
          }
        >
          X
        </span>
        <h1>{type === "out" ? `صرف مبلغ مالي` : `أضافه مبلغ مالي`}</h1>
        {type === "out" ? (
          <form onSubmit={(e) => e.preventDefault}>
            <div className="formItem">
              <label htmlFor="name">اسم البيان :</label>
              <input
                name="name"
                placeholder="ادخل تفاصيل صرف المبلغ"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label htmlFor="out"> المبلغ المصروف: </label>
              <input
                name="out"
                placeholder="ادخل المبلغ المصروف"
                type="number"
                required
                onChange={(e) => setOut(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label htmlFor="recived">اسم المستلم : </label>
              <input
                name="recived"
                placeholder="ادخل مستلم المبلغ"
                type="text"
                required
                onChange={(e) => setRecived(e.target.value)}
              />
            </div>
             <div className="formItem">
              <label htmlFor="img">صورة ايصال العهده الماليه : </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div> 
            <button className="addButton" onClick={uploadNewPrice}>
              أضافه
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault}>
            <div className="formItem">
              <label htmlFor="in"> المبلغ الوارد: </label>
              <input
                placeholder="ادخل المبلغ الوارد"
                type="number"
                required
                onChange={(e) => setIn(e.target.value)}
              />
            </div>
             <div className="formItem">
              <label htmlFor="img">صورة ايصال استلام المبلغ : </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div> 
            <button className="addButton" onClick={uploadNewPrice}>
              أضافه
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
