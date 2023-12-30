import React, { useEffect, useState } from "react";
import "./store.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShowImg } from "./ShowImg";

export const OutStore = () => {
  const [rowData, setRowData] = useState([]);
  const [showData, setShowData] = useState(undefined);
  const [showOpen, setShowOpen] = useState(false);
  const filteredData = rowData.filter((item) => item.exist === 3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.eleaman.com/api/store");
        setRowData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [rowData.id]);

  const columns = [
    {
      field: "name",
      headerName: "اسم العنصر",
      width: 190,
      editable: false,
    },
    {
      field: "quantityOut",
      headerName: "الكميه",
      width: 110,
      editable: false,
    },
    {
      field: "quantity",
      headerName: "أصل الكميه",
      width: 110,
      editable: false,
    },
    {
      field: "updatedAt",
      headerName: "التاريخ",
      width: 160,
    },
    {
      field: "nameOne",
      headerName: "المهندس المستلم",
      width: 160,
      editable: false,
    },
    {
      field: "nameTwo",
      headerName: "المقاول المستلم",
      width: 160,
      editable: false,
    },
    {
      field: "img",
      headerName: "صورة البون",
      width: 150,
      renderCell: (params) => {
        const showHandler = () => {
          setShowData(params.row);
          setShowOpen(!showOpen);
        };
        return (
          <img
            src={params.row.img || "./images/noimg.png"}
            alt=""
            onClick={showHandler}
            style={{ cursor: "pointer" }}
          />
        );
      },
    },
    {
      field: "driver",
      headerName: "السائق",
      width: 150,
      editable: false,
    },
  ];
  const rows = filteredData.map((item) => {
    return {
      id: item._id,
      name: item.name,
      quantity: item.quantity,
      quantityOut: item.quantityOut,
      updatedAt: item.updatedAt.split("T")[0],
      img: item.img,
      nameOne: item.nameOne,
      nameTwo: item.nameTwo,
      driver: item.driver,
    };
  });
  return (
    <div className="store">
      <nav className="full-width mb-3">
        <div className="d-flex">
          <Link to="/store" style={{ textDecoration: "none" }}>
            <h1>المخزن الرئيسي</h1>
          </Link>
          <Link to="/store" style={{ textDecoration: "none" }}>
            <h1>المخزن الفرعي</h1>
          </Link>
          <Link to="/outStore" style={{ textDecoration: "none" }}>
            <h1>المنصرف</h1>
          </Link>
        </div>
      </nav>
      <div className="">
        <div className="storeHeader">
          <h1>المنصرف </h1>
        </div>
        {filteredData.length === 0 ? (
          <div class="loader"></div>
        ) : (
          <div className="dataTable">
            <DataGrid
              className="dataGrid"
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 100,
                  },
                },
              }}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
            />
          </div>
        )}
      </div>
      {showOpen && <ShowImg setShowOpen={setShowOpen} showData={showData} />}
    </div>
  );
};
