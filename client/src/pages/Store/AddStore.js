import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddStore = ({ setAddOpen }) => {
  const [file, setFile] = useState(undefined);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate("");

  const uploadNewStoreItem = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("exist", 1);
      formData.append("quantity", quantity);
      const res = await axios.post(
        "https://api.eleaman.com/api/store",
        formData
      );
      setAddOpen(false);
      toast.success("تم اضافه العنصر بنجاح.");
      res.status === 200 && navigate("/store");
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
            <label htmlFor="name">اسم العنصر: </label>
            {name === "" && (
              <span
                style={{ color: "red", fontSize: "10px", fontWeight: "300" }}
              >
                برجاء ادخل العنصر
              </span>
            )}
            <input
              name="name"
              placeholder="بيانات العنصر بالتفصيل"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="quantity">الكميه:</label>
            <input
              name="quantity"
              placeholder="ادخل الكميه"
              type="number"
              required
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="formItem" style={{ cursor: "pointer" }}>
            <label htmlFor="img">صورة البون : </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <button className="addButton" onClick={uploadNewStoreItem}>
            أضافه
          </button>
        </form>
      </div>
    </div>
  );
};
