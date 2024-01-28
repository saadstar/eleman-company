import React, {   useState } from 'react'
import axios from "axios";
import {  toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const ProcessModal = ({ setOpenModal, fetchProcess }) => {
  const navigate = useNavigate("");
  const [title, setTitle] = useState("");
    const addProcess = async (e) => {
      try {
        if (title !== "") {          
          const res = await axios.post("https://api.eleaman.com/api/process", {
            title,
          });          
          if (res?.status === 200) {
            setOpenModal(false);
            navigate("/");          
            toast.success(`تمت اضافه ${res.data.title} بنجاح  `);
            
          } else {
            toast.error(`!برجاء التحقق من الانترنت`);          
          }
        } else {
          toast.error("برجاء اضافه اسم العمليه");                    
        }
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <div className="layout">
      <div className="processModal">
        <div>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">أضافه عمليه</h5>
              </div>
              <div class="modal-body">
                <label htmlFor="process">أدخل اسم العمليه:</label>
                <input name="process" onChange={(e)=>setTitle(e.target.value)} placeholder="استخدم اللغه العربيه" />
              </div>
              <div class="modal-footer">
                <button type="button" className="submit" onClick={addProcess}>
                  اضف العمليه
                </button>
                <button
                  type="button"
                  className="modalClose"
                  onClick={() => setOpenModal(false)}
                >
                  اغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
