import React, { useState } from "react";
import "../tubes/tubes.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AddSand = ({ id, setAddOpen, type,ar }) => {
    const [note, setNote] = useState("");
    const [precentage, setPercentage] = useState(1);
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState(1);
    const navigate = useNavigate("");


    const handleAdd = async () => {
      try {      
      await axios.post(`https://api.eleaman.com/api/processDetailes`, {
        processId: id,
        type,
        note,
        precentage,
        quantity,
        price,
        value: price * quantity,
      });
      navigate(`/process/${id}`);
      setNote("");
      setPrice(0);
      toast.success("تمت اضافه عنصر بنجاح. ");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addTubes">
      <div className="modalll">
        <span className="close" onClick={() => setAddOpen(false)}>
          X
        </span>
        <h1>{`أضافه عنصر جديد`}</h1>
        <form onSubmit={(e) => e.preventDefault}>
          <div className="formItem">
            <label htmlFor="notes">اسم البيان: </label>
            {note === "" && (
              <span
                style={{ color: "red", fontSize: "10px", fontWeight: "300" }}
              >
                برجاء ادخل البيان
              </span>
            )}
            <input
              name="notes"
              placeholder={"مثل: مطبق من 0 الي 1 "}
              type="text"
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="precentage">
              {type === "sand" ? "طول المواسير :" : "عدد الغرف :"}
            </label>
            <input
              name="precentage"
              placeholder={`ادخل ${
                type === "sand" ? " طول المواسير بالمتر" : "عدد الغرف"
              }`}
              type="number"
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="quantity">{`كميه ${ar} ${
              type === "cement" ? "بالطن" : "بالمتر المكعب"
            } :`}</label>
            <input
              name="quantity"
              placeholder={`ادخل كميه ${ar} ${
                type === "cement" ? "بالطن" : "بالمتر المكعب"
              }`}
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="price">{`سعر ${ar}:`}</label>
            <input
              name="price"
              placeholder={`أدخل سعر ${
                type === "cement" ? `طن ${ar} الواحد ` : `متر ${ar} الواحد `
              }`}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            className="addButton"
            disabled={note === "" ? true : false}
            onClick={handleAdd}
          >
            أضافه
          </button>
        </form>
      </div>
    </div>
  );
};
