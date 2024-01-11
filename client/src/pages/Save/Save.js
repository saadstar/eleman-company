import React, { useContext, useEffect, useState } from "react";
import "./save.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { AddPrice } from "./AddPrice";
import { ShowImg } from "./ShowImg";
import { DeleteSave } from "./DeleteSave";
import { AuthContext } from "../../auth/authContext/authContext";

export const Save = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [outOpen, setOutOpen] = useState(false);
  const [showImgOpen, setShowImgOpen] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [fullValue, setFullValue] = useState();
  const [fullOutValue, setFullOutValue] = useState();
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState(undefined);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState("");
  const { user } = useContext(AuthContext);
  let totalArr = [];
  let totalOutArr = [];
  const filteredRecivedData = rowData.filter((item) => {
    return search === "" ? item : item.recived === search;
  });

  const totalValue = () => {
    filteredRecivedData.forEach((item) => {
      totalArr.push(item.inn);
    });
  };
  const totalValueFun = () => {
    let sum = 0;
    for (let i = 0; i < totalArr.length; i++) {
      sum += totalArr[i];
    }
    setFullValue(sum);
  };
  useEffect(() => {
    totalValue();
    totalValueFun();
  });
  const totalOutValue = () => {
    filteredRecivedData.forEach((item) => {
      totalOutArr.push(item.out);
    });
  };
  const totalOutValueFun = () => {
    let sum = 0;
    for (let i = 0; i < totalOutArr.length; i++) {
      sum += totalOutArr[i];
    }
    setFullOutValue(sum);
  };
  useEffect(() => {
    totalOutValue();
    totalOutValueFun();
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.eleaman.com/api/save");
        setRowData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [filteredRecivedData._id]);
  const columns = [
    {
      field: "name",
      headerName: "اسم البيان",
      width: 190,
      editable: false,
    },
    {
      field: "out",
      headerName: "المصروف",
      width: 110,
      editable: false,
    },
    {
      field: "inn",
      headerName: "الوارد",
      width: 110,
      editable: false,
    },
    {
      field: "recived",
      headerName: "المستلم",
      width: 110,
      editable: false,
    },
    {
      field: "createdAt",
      headerName: "التاريخ",
      width: 160,
    },
    {
      field: "filename",
      headerName: "ايصال العهده الماليه",
      width: 120,
      renderCell: (params) => {
        const showHandler = () => {
          setShowData(params.row);
          setShowImgOpen(true);
        };
        return (
          <button style={{ cursor: "pointer" }}  className="btn btn-outline-primary"         
            onClick={showHandler}
          >عرض الصوره</button>
        );
      },
    },
    {
      field: "Action",
      headerName: "حذف",
      width: 100,
      renderCell: (params) => {
        const deleteHandler = () => {
          setDeleteUserId(params.row.id);
          setDeleteOpen(true);
        };
        return (
          <div className="action">
            <i
              class="fa-solid fa-trash"
              style={{ color: "red", fontSize: "20px" }}
              onClick={deleteHandler}
            ></i>
          </div>
        );
      },
    },
    {
      field: "entry",
      headerName: "المدخل",
      width: 60,
    },
  ];
  const rows = filteredRecivedData.map((item) => {
    return {
      id: item._id,
      name: item.name,
      inn: item.inn,
      out: item.out,
      recived: item.recived,
      createdAt: item.createdAt.split("T")[0],
      filename: item.filename,
      entry: user.username,
    };
  });
  return (
    <div className="save">
      <div className="">
        <div className="">
          <div className="hederDetails">
            <div className="saveHeader">
              <h1 className="saveH1">الخزنه</h1>
              <button className="" onClick={() => setOutOpen(true)}>
                صرف مبلغ
              </button>
              <button className="" onClick={() => setAddOpen(true)}>
                أضافه مبلغ
              </button>
            </div>
            <div className="saveHeader">
              <h1>رصيدي : </h1>
              <h1>{fullValue - fullOutValue}</h1>
            </div>
          </div>
          <div
            class="d-flex mb-4 align-center justify-content-center gap-2"
            role="search"
          >
            <input
              class="form-control w-50 me-2 p-2"
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="ابحث باسم المستلم"
              aria-label="Search"
            />
            <button type="button" class="btn btn-light">
              بحث
            </button>
          </div>
          {filteredRecivedData.length === 0 ? (
            <div class="d-flex fw-bold fz-5 text-center justify-center ">لا يوجد عناصر</div>
          ) : (
            <>
              <div className="dataTable">
                <DataGrid
                  className="dataGrid"
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 99,
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
            </>
          )}
        </div>
      </div>
      {filteredRecivedData.length !== 0 && <div>
        <h1> أجمالي المصروف : {fullOutValue}</h1>
        <h1> أجمالي الوارد : {fullValue}</h1>
      </div>}
      {addOpen && <AddPrice setAddOpen={setAddOpen} />}
      {outOpen && <AddPrice setOutOpen={setOutOpen} type="out" />}
      {showImgOpen && (
        <ShowImg setShowImgOpen={setShowImgOpen} showData={showData} />
      )}
      {deleteOpen && (
        <DeleteSave setDeleteOpen={setDeleteOpen} deleteUserId={deleteUserId} />
      )}
    </div>
  );
};
