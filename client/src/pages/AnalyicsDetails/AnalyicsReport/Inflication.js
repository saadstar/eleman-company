import React from 'react';

export const Inflication = ({loading,data1,data2}) => {
    
    return (
      <div className="inflicationBox">
        {loading === true ? (
          <div className="loader"></div>
        ) : (
            <div className="inflication">
              <div className='inflicationMean'>
                <p>التضخم هو فرق الاسعار ما بين السعر الثانوي والسعر الاولي.</p>
                <p>السعر هو سعر البند لكل وحده او متر مكعب.</p>
              </div>
            <div className="inflicationFlex">
              <h3>التضخم الكلي:</h3>
              <p>{data2[0]?.value - data1[0]?.value} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم المواسير :</h3>
              <p>{data2[0]?.tubeNum - data1[0]?.tubeNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم التوريد والتركيب :</h3>
              <p>{data2[0]?.exportNum - data1[0]?.exportNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم المطابق :</h3>
              <p>{data2[0]?.floorNum - data1[0]?.floorNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم الغرف :</h3>
              <p>{data2[0]?.roomNum - data1[0]?.roomNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم المنزليه :</h3>
              <p>{data2[0]?.houseNum - data1[0]?.houseNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم الاخشاب :</h3>
              <p>{data2[0]?.woodNum - data1[0]?.woodNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم التكفيف :</h3>
              <p>{data2[0]?.blindNum - data1[0]?.blindNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم المحابس :</h3>
              <p>{data2[0]?.lockNum - data1[0]?.lockNum} جنيها</p>
            </div>
            <div className="inflicationFlex">
              <h3>تضخم وصلات المياه :</h3>
              <p>{data2[0]?.waterNum - data1[0]?.waterNum} جنيها</p>
            </div>
          </div>
        )}
      </div>
    );
}
