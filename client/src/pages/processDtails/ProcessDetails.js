import React, { useEffect, useState } from "react";
import "./processDetails.css";
import { Menu } from "./Menu/Menu";
import { useParams } from "react-router-dom";
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
  const woodValue = [];
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
  const [woodTotal, setWoodTotal] = useState(0);
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
    repairTotal +
    woodTotal;
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
    }   else if (item.type === "wood") {
      woodValue.push(item.value);
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
  });
  const sumSandValue = () => {
    let sum = 0;
    for (let i = 0; i < sandValue.length; i++) {
      sum += sandValue[i];
    }
    setSandTotal(sum);
  };
  useEffect(() => {
    sumSandValue();
  });
  const sumsenValue = () => {
    let sum = 0;
    for (let i = 0; i < senValue.length; i++) {
      sum += senValue[i];
    }
    setSenTotal(sum);
  };
  useEffect(() => {
    sumsenValue();
  });
  const sumcementValue = () => {
    let sum = 0;
    for (let i = 0; i < cementValue.length; i++) {
      sum += cementValue[i];
    }
    setCementTotal(sum);
  };
  useEffect(() => {
    sumcementValue();
  });
  const sumDetailsValue = () => {
    let sum = 0;
    for (let i = 0; i < detailsValue.length; i++) {
      sum += detailsValue[i];
    }
    setDetailsTotal(sum);
  };
  useEffect(() => {
    sumDetailsValue();
  });
  const sumWorkerValue = () => {
    let sum = 0;
    for (let i = 0; i < workerValue.length; i++) {
      sum += workerValue[i];
    }
    setWorkerTotal(sum);
  };
  useEffect(() => {
    sumWorkerValue();
  });
  const sumMaterialsValue = () => {
    let sum = 0;
    for (let i = 0; i < materialsValue.length; i++) {
      sum += materialsValue[i];
    }
    setMaterialsTotal(sum);
  };
  useEffect(() => {
    sumMaterialsValue();
  });
  const sumAzlValue = () => {
    let sum = 0;
    for (let i = 0; i < azlValue.length; i++) {
      sum += azlValue[i];
    }
    setAzlTotal(sum);
  };
  useEffect(() => {
    sumAzlValue();
  });
  const sumTransportValue = () => {
    let sum = 0;
    for (let i = 0; i < transportValue.length; i++) {
      sum += transportValue[i];
    }
    setTransportTotal(sum);
  };
  useEffect(() => {
    sumTransportValue();
  });
  const sumRepairValue = () => {
    let sum = 0;
    for (let i = 0; i < repairValue.length; i++) {
      sum += repairValue[i];
    }
    setRepairTotal(sum);
  };
  useEffect(() => {
    sumRepairValue();
  });
  const sumWoodValue = () => {
    let sum = 0;
    for (let i = 0; i < woodValue.length; i++) {
      sum += woodValue[i];
    }
    setWoodTotal(sum);
  };
  useEffect(() => {
    sumWoodValue();
  });
  const fetchProcessTitle = async () => {
    try {
      const res = await axios.get(`https://api.eleaman.com/api/process/${id}`);
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
  });

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
                <td>{Math.round(tubesTotal)}</td>
              </tr>
              <tr>
                <td>رمل</td>
                <td>{Math.round(sandTotal)}</td>
              </tr>
              <tr>
                <td>سن</td>
                <td>{Math.round(senTotal)}</td>
              </tr>
              <tr>
                <td>اسمنت</td>
                <td>{Math.round(cementTotal)}</td>
              </tr>
              <tr>
                <td>نثريات</td>
                <td>{Math.round(detailsTotal)}</td>
              </tr>
              <tr>
                <td>مصناعيه</td>
                <td>{Math.round(workerTotal)}</td>
              </tr>
              <tr>
                <td>خامات</td>
                <td>{Math.round(materialsTotal)}</td>
              </tr>
              <tr>
                <td>عزل</td>
                <td>{Math.round(azlTotal)}</td>
              </tr>
              <tr>
                <td>انتقالات مواقع</td>
                <td>{Math.round(transportTotal)}</td>
              </tr>
              <tr>
                <td>اعطال</td>
                <td>{Math.round(repairTotal)}</td>
              </tr>
              <tr>
                <td>خشب</td>
                <td>{Math.round(woodTotal)}</td>
              </tr>
              <tr className="tabletHeader">
                <th className="band">اجمالي العمليه</th>
                <th className="band">{Math.round(overTotal)}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
