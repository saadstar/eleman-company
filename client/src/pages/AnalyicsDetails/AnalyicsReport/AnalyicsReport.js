import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { BarChartBox } from './BarChart';
import { Inflication } from './Inflication';
import { HrChart } from './HrChart';
import axios from "axios";
import { FinalReport } from "./FinalReport";

export const AnalyicsReport = ({dataNum}) => {
    const { id } = useParams();
 const [data2 , setData2] = useState([]);
 const [data1 , setData1] = useState([]);
 const [loading, setLoading] = useState(false);
 const fetchdata1 = async () => {
   try {
     setLoading(true);
     const res = await axios.get(
       `http://localhost:3500/api/analyicsDetails/1/${id}`
     );
     setData1(res.data);
     setLoading(false);
   } catch (err) {
     console.log(err);
   }
 };
 const fetchdata2 = async () => {
   try {
     setLoading(true);
     const res = await axios.get(
       `http://localhost:3500/api/analyicsDetails/${dataNum}/${id}`
     );
     setData2(res.data);
     setLoading(false);
   } catch (err) {
     console.log(err);
   }
 };
 useEffect(() => {
   fetchdata1();
   fetchdata2();
 }, []);
  return (
    <>
      {data2.length === 0 ? (
        <div className="anlyicsReport">
          <h1 className="color-red">برجاء أضافه الاسعار الحاليه للبنود.</h1>
        </div>
      ) : (
        <div className="anlyicsReport">
          <BarChartBox data={data1} price='one'/>
          <BarChartBox data={data2} />
          <div className="report-title p-3">
            <h2>التقرير {dataNum === 2 ? "الاول" : "النهائي "}</h2>
          </div>
          <Inflication data1={data1} data2={data2} loading={loading} />
          <div className="hrChart">
            <HrChart />
            </div>
            <FinalReport data1={ data1} data2={data2} loading={loading} />
        </div>
      )}
    </>
  );
}
