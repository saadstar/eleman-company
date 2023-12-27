import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const DeleteSave = ({ setDeleteOpen, deleteUserId }) => {
  
  const handleSubmit = async () => {
    try {
      await axios.delete(
        `http://localhost:3500/api/save/${deleteUserId}`
      );
      toast.success("تم حذف العنصر بنجاح");
      setDeleteOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="modal-relitave">
      <div className="modalll">
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
    </div>
  );
};