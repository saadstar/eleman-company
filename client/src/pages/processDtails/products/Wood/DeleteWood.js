import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../modal.css";

export const DeleteWood = ({ setDeleteOpen, deleteUserId }) => {
  const navigate = useNavigate("");
    
  const handleSubmit = async () => {
    try {
      await axios.delete(
        `https://api.eleaman.com/api/processDetailes/${deleteUserId}`
      );
        toast.success("تم حذف العنصر بنجاح");
      setDeleteOpen(false);
      navigate("/process");
    } catch (err) {
      console.log(err);
    }
  };
  return (
      <div className="myModal">
        <span className="close" onClick={() => setDeleteOpen(false)}>
          X
        </span>
        <h1>{`حذف العنصر`}</h1>
        <div className="">
          <p className="item">هل متأكد من مسح العنصر التالي ؟</p>
          <div className="deleteButtons">
            <button className="deleteButton" onClick={handleSubmit}>
              حذف
            </button>
            <button
              className="cancelButton"
              onClick={() => setDeleteOpen(false)}
            >
              الغاء
            </button>
          </div>
        </div>
      </div>
  );
};
