import React, { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

export const MoveTwo = ({ setEditOpen, editData }) => {
    const [nameOne, setNameOne] = useState("لا يوجد");
    const [nameTwo, setNameTwo] = useState("لا يوجد");
  const [quantityOut, setQuantityOut] = useState(editData.quantity);
  
    const editHandler = async () => {
        try {
            const res = await axios.put(
              `http://localhost:3500/api/store/${editData.id}`,
              {
                ...editData,
                  nameOne,
                nameTwo,
                quantityOut,
                exist: 2,
              }
            );
           res.status === 200 && toast.success("تمت أضافه العنصر الي المخزن الفرعي . ");
        } catch (err) {
            console.log(err);
        }
  }
    const postHandler = async () => {
        try {
            const res = await axios.post(`http://localhost:3500/api/store`, {
              ...editData,
              exist: 1,
              quantity: editData.quantity - quantityOut,
            });
          console.log(res.data);
        } catch (err) {
            console.log(err);
        }
  }
  
  const butnHandler = () => {
    editHandler();
    postHandler();
  };
  return (
    <div className="addTubes">
      <div className="modalll">
        <span className="close" onClick={() => setEditOpen(false)}>
          X
        </span>
        <h1>{`صرف العنصر`}</h1>
        <form onSubmit={(e) => e.preventDefault}>
          <div className="formItem">
            <label htmlFor="nameOne">المهندس المستلم : </label>
            <input
              name="nameOne"
              placeholder="ادخل اسم المهندس"
              type="text"
              onChange={(e) => setNameOne(e.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="nameTwo">المقاول المستلم : </label>
            <input
              name="nameTwo"
              placeholder="ادخل اسم المقاول المستلم "
              type="text"
              onChange={(e) => setNameTwo(e.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="quantityOut">صرف كميه محدده :</label>
            <input
              name="quantityOut"
              placeholder="اذا كنت تريد صرف الكميه كلها اضغط 1"
              type="number"
              onChange={(e) => setQuantityOut(e.target.value)}
            />
          </div>
          <button
            className="addButton"
            onClick={quantityOut === editData.quantity ? editHandler : butnHandler}
          >
          تحويل للفرعي
          </button>
        </form>
      </div>
    </div>
  );
}
