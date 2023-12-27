import React, { useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export const AddStore = ({ setAddOpen }) => {
  const [img, setImg] = useState(undefined);
  const [imgPer, setImgPer] = useState(undefined);  
  const [inputs,setInputs]=useState({})
  const navigate = useNavigate("");

const handleInputs = (e) => {
  setInputs((prev) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
  };
  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "img"
          && setImgPer(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
           toast.error("ايقاف");
            break;
          case "running":
            toast.success("....حاري تحميل الصورة ");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };
  useEffect(() => {
    img && uploadFile(img, "img");
  }, [img]);
  
  const uploadNewStoreItem = async () => {
    try {
    const res=  await axios.post("http://localhost:3500/api/store", {
        ...inputs,
        exist: 1,
      });
      setInputs({});
      res.status === 200 && navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
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
            {inputs.name === "" && (
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
              onChange={handleInputs}
              required
              focus={true}
            />
          </div>
          <div className="formItem">
            <label htmlFor="quantity">الكميه:</label>
            <input
              name="quantity"
              placeholder="ادخل الكميه"
              type="number"
              required
              onChange={handleInputs}
            />
          </div>
          <div className="formItem" style={{cursor:"pointer"}}>
            <label htmlFor="img" >صورة البون : </label>
            {imgPer > 0 ? (
              "تم اضافه صوره البون"
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
                required
              />
            )}
          </div>
          <button className="addButton" onClick={uploadNewStoreItem} disabled={imgPer !== 100 && true}>
            أضافه
          </button>
        </form>
      </div>
    </div>
  );
}
