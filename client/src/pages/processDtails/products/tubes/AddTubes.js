import React, { useState } from "react";
import "../../../modal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AddTubes = ({ id, setAddOpen, type }) => {
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);
  const [other, setOther] = useState("");
  const navigate = useNavigate("");

  const handleAdd = async () => {
    try {
      await axios.post(`https://api.eleaman.com/api/processDetailes`, {
        processId: id,
        type,
        note,
        quantity,
        price,
        other,
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
    <div className="modalll">
      <span className="close" onClick={() => setAddOpen(false)}>
        X
      </span>
      <h1>{`أضافه عنصر جديد`}</h1>
      <form onSubmit={(e) => e.preventDefault}>
        <div className="formItem">
          <label htmlFor="notes">اسم البيان: </label>
          {note === "" && (
            <span style={{ color: "red", fontSize: "10px", fontWeight: "300" }}>
              برجاء ادخل البيان
            </span>
          )}
          <input
            name="notes"
            placeholder={"مثل: مواسير 9 بوصه"}
            type="text"
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="quantity">الكميه:</label>
          <input
            name="quantity"
            placeholder="ادخل الكميه بالمتر"
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        {type === "worker" && (
          <div className="formItem">
            <label htmlFor="other">اسم الصنايعي :</label>
            <input
              name="other"
              placeholder="ادخل  اسم الصنايعي"
              type="twxt"
              onChange={(e) => setOther(e.target.value)}
            />
          </div>
        )}
        <div className="formItem">
          <label htmlFor="price">السعر:</label>
          <input
            name="price"
            placeholder="ادخل السعر بالجنيه"
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
  );
};
