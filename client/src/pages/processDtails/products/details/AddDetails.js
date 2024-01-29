import React, { useState } from "react";
import "../tubes/tubes.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../../modal.css";

export const AddDetails = ({ id, setAddOpen,sort }) => {
  const [note, setNote] = useState("");
    const [price, setPrice] = useState(1);
    const navigate = useNavigate("");

  const handleAdd = async () => {
    try {
      await axios.post(`https://api.eleaman.com/api/processDetailes`, {
        processId: id,
        type: sort,
        note,
        price,
        value: price,
      });
      navigate(`/process/${id}`);
      setNote("");
      setPrice(0);
      toast.success("تمت اضافه عنصر بنجاح. ");
      setAddOpen(false);
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
              <span
                style={{ color: "red", fontSize: "10px", fontWeight: "300" }}
              >
                برجاء ادخل البيان
              </span>
            )}
            <input
              name="notes"
              placeholder={"مثل:شحم حبل الخ.. "}
              type="text"
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="price">المدفوع: </label>
            <input
              name="price"
              placeholder="ادخل المدفوع بالجنيه"
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
