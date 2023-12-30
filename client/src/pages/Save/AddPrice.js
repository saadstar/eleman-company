import React, { useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./save.css";

export const AddPrice = ({ setAddOpen, type, setOutOpen }) => {
  const [img, setImg] = useState(undefined);
  const [imgPer, setImgPer] = useState(undefined);
  const [inputs, setInputs] = useState({});
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
        urlType === "img" && setImgPer(Math.round(progress));
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
  const uploadNewPrice = async ({ type }) => {
    try {
      const res = await axios.post("https://api.eleaman.com/api//save", {
        ...inputs,
      });
      setInputs({});
      res.status === 200 && navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addTubes">
      <div className="modalll">
        <span
          className="close"
          onClick={
            type === "out" ? () => setOutOpen(false) : () => setAddOpen(false)
          }
        >
          X
        </span>
        <h1>{type === "out" ? `صرف مبلغ مالي` : `أضافه مبلغ مالي`}</h1>
        {type === "out" ? (
          <form onSubmit={(e) => e.preventDefault}>
            <div className="formItem">
              <label htmlFor="name">اسم البيان :</label>
              <input
                name="name"
                placeholder="ادخل تفاصيل صرف المبلغ"
                type="text"
                required
                onChange={handleInputs}
              />
            </div>
            <div className="formItem">
              <label htmlFor="out"> المبلغ المصروف: </label>
              <input
                name="out"
                placeholder="ادخل المبلغ المصروف"
                type="number"
                required
                onChange={handleInputs}
              />
            </div>
            <div className="formItem">
              <label htmlFor="recived">اسم المستلم : </label>
              <input
                name="recived"
                placeholder="ادخل مستلم المبلغ"
                type="text"
                required
                onChange={handleInputs}
              />
            </div>
            <div className="formItem">
              <label htmlFor="img">صورة ايصال العهده الماليه : </label>
              {imgPer > 0 ? (
                "تم اضافه صوره الايصال"
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImg(e.target.files[0])}
                  required
                />
              )}
            </div>
            <button
              className="addButton"
              disabled={imgPer !== 100 && true}
              onClick={uploadNewPrice}
            >
              أضافه
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault}>
            <div className="formItem">
              <label htmlFor="in"> المبلغ الوارد: </label>
              <input
                name="in"
                placeholder="ادخل المبلغ الوارد"
                type="number"
                required
                onChange={handleInputs}
              />
            </div>
            <div className="formItem">
              <label htmlFor="img">صورة ايصال استلام المبلغ : </label>
              {imgPer > 0 ? (
                "تم اضافه صوره الايصال"
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImg(e.target.files[0])}
                  required
                />
              )}
            </div>
            <button
              className="addButton"
              disabled={imgPer !== 100 && true}
              onClick={uploadNewPrice}
            >
              أضافه
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
