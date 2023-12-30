import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Out = ({ setOutOpen, editData }) => {
  const [driver, setDriver] = useState("");
  console.log(editData);
  const btnHandler = async () => {
    try {
      const res = await axios.put(
        `https://api.eleaman.com/api/store/${editData.id}`,
        {
          ...editData,
          exist: 3,
          driver,
        }
      );
      res.status === 200 && toast.success("تم صرف العنصر بنجاح");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addTubes">
      <div className="modalll">
        <span className="close" onClick={() => setOutOpen(false)}>
          X
        </span>
        <h1>{`صرف نهائي`}</h1>
        <form onSubmit={(e) => e.preventDefault}>
          <div className="formItem">
            <label htmlFor="driver">السائق المستلم : </label>
            <input
              name="driver"
              placeholder="ادخل اسم السائق المستلم "
              type="text"
              onChange={(e) => setDriver(e.target.value)}
              required
            />
          </div>
          <button className="addButton" onClick={btnHandler}>
            صرف نهائي{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
