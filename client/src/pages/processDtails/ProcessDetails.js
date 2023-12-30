import React, { useEffect, useState } from "react";
import "./processDetails.css";
import { Menu } from "./Menu/Menu";
import { useParams } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export const ProcessDetails = () => {
  const [processBand, setProcessBand] = useState([]);
  const [processTitle, setProcessTitle] = useState({});
  const { id } = useParams();
  const tubesValue = [];
  const sandValue = [];
  const senValue = [];
  const cementValue = [];
  const detailsValue = [];
  const workerValue = [];
  const materialsValue = [];
  const azlValue = [];
  const transportValue = [];
  const repairValue = [];
  const [tubesTotal, setTubesTotal] = useState(0);
  const [sandTotal, setSandTotal] = useState(0);
  const [senTotal, setSenTotal] = useState(0);
  const [cementTotal, setCementTotal] = useState(0);
  const [detailsTotal, setDetailsTotal] = useState(0);
  const [workerTotal, setWorkerTotal] = useState(0);
  const [materialsTotal, setMaterialsTotal] = useState(0);
  const [azlTotal, setAzlTotal] = useState(0);
  const [transportTotal, setTransportTotal] = useState(0);
  const [repairTotal, setRepairTotal] = useState(0);
  const overTotal =
    tubesTotal +
    sandTotal +
    senTotal +
    cementTotal +
    detailsTotal +
    workerTotal +
    materialsTotal +
    azlTotal +
    transportTotal +
    repairTotal;
  const mine = processBand.map((item) => {
    if (item.type === "tubes") {
      tubesValue.push(item.value);
    } else if (item.type === "sand") {
      sandValue.push(item.value);
    } else if (item.type === "worker") {
      workerValue.push(item.value);
    } else if (item.type === "sen") {
      senValue.push(item.value);
    } else if (item.type === "cement") {
      cementValue.push(item.value);
    } else if (item.type === "details") {
      detailsValue.push(item.value);
    } else if (item.type === "transport") {
      transportValue.push(item.value);
    } else if (item.type === "materials") {
      materialsValue.push(item.value);
    } else if (item.type === "repair") {
      repairValue.push(item.value);
    } else if (item.type === "azl") {
      azlValue.push(item.value);
    }
  });
  const sumTypeValue = () => {
    let sum = 0;
    for (let i = 0; i < tubesValue.length; i++) {
      sum += tubesValue[i];
    }
    setTubesTotal(sum);
  };
  useEffect(() => {
    sumTypeValue();
  }, [tubesValue]);
  const sumSandValue = () => {
    let sum = 0;
    for (let i = 0; i < sandValue.length; i++) {
      sum += sandValue[i];
    }
    setSandTotal(sum);
  };
  useEffect(() => {
    sumSandValue();
  }, [sandValue]);
  const sumsenValue = () => {
    let sum = 0;
    for (let i = 0; i < senValue.length; i++) {
      sum += senValue[i];
    }
    setSenTotal(sum);
  };
  useEffect(() => {
    sumsenValue();
  }, [senValue]);
  const sumcementValue = () => {
    let sum = 0;
    for (let i = 0; i < cementValue.length; i++) {
      sum += cementValue[i];
    }
    setCementTotal(sum);
  };
  useEffect(() => {
    sumcementValue();
  }, [cementValue]);
  const sumDetailsValue = () => {
    let sum = 0;
    for (let i = 0; i < detailsValue.length; i++) {
      sum += detailsValue[i];
    }
    setDetailsTotal(sum);
  };
  useEffect(() => {
    sumDetailsValue();
  }, [detailsValue]);
  const sumWorkerValue = () => {
    let sum = 0;
    for (let i = 0; i < workerValue.length; i++) {
      sum += workerValue[i];
    }
    setWorkerTotal(sum);
  };
  useEffect(() => {
    sumWorkerValue();
  }, [workerValue]);
  const sumMaterialsValue = () => {
    let sum = 0;
    for (let i = 0; i < materialsValue.length; i++) {
      sum += materialsValue[i];
    }
    setMaterialsTotal(sum);
  };
  useEffect(() => {
    sumMaterialsValue();
  }, [materialsValue]);
  const sumAzlValue = () => {
    let sum = 0;
    for (let i = 0; i < azlValue.length; i++) {
      sum += azlValue[i];
    }
    setAzlTotal(sum);
  };
  useEffect(() => {
    sumAzlValue();
  }, [azlValue]);
  const sumTransportValue = () => {
    let sum = 0;
    for (let i = 0; i < transportValue.length; i++) {
      sum += transportValue[i];
    }
    setTransportTotal(sum);
  };
  useEffect(() => {
    sumTransportValue();
  }, [transportValue]);
  const sumRepairValue = () => {
    let sum = 0;
    for (let i = 0; i < repairValue.length; i++) {
      sum += repairValue[i];
    }
    setRepairTotal(sum);
  };
  useEffect(() => {
    sumRepairValue();
  }, [repairValue]);
  const fetchProcessTitle = async () => {
    try {
      const res = await axios.get(`https://api.eleaman.com/api//process/${id}`);
      setProcessTitle(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchProcessValue = async () => {
    try {
      const res = await axios.get(
        `https://api.eleaman.com/api/processDetailes/${id}`
      );
      setProcessBand(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProcessValue();
    fetchProcessTitle();
  }, [processBand._id]);

  return (
    <div className="processDetails">
      <div className="container loober">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <div className="header" key={processTitle._id}>
            <h2 className="headerTitle">اسم العمليه/ {processTitle.title}</h2>
            <h6 className="headerIndex">البيان العام للمصروفات</h6>
          </div>
          <div className="headerTablet">
            <table>
              <tr className="tabletHeader">
                <th className="band">البند</th>
                <th className="band">السعر</th>
              </tr>
              <tr>
                <td>مواسير</td>
                <td>{tubesTotal}</td>
              </tr>
              <tr>
                <td>رمل</td>
                <td>{sandTotal}</td>
              </tr>
              <tr>
                <td>سن</td>
                <td>{senTotal}</td>
              </tr>
              <tr>
                <td>اسمنت</td>
                <td>{cementTotal}</td>
              </tr>
              <tr>
                <td>نثريات</td>
                <td>{detailsTotal}</td>
              </tr>
              <tr>
                <td>مصناعيه</td>
                <td>{workerTotal}</td>
              </tr>
              <tr>
                <td>خامات</td>
                <td>{materialsTotal}</td>
              </tr>
              <tr>
                <td>عزل</td>
                <td>{azlTotal}</td>
              </tr>
              <tr>
                <td>انتقالات مواقع</td>
                <td>{transportTotal}</td>
              </tr>
              <tr>
                <td>اعطال</td>
                <td>{repairTotal}</td>
              </tr>
              <tr className="tabletHeader">
                <th className="band">اجمالي العمليه</th>
                <th className="band">{overTotal}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
