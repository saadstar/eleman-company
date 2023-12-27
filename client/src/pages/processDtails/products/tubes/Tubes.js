import React, { useEffect, useState } from 'react'
import "./tubes.css";
import { Menu } from '../../Menu/Menu';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AddTubes } from './AddTubes';
import { DeleteTubes } from './DeleteTubes';

export const Tubes = ({ type }) => {
  const [rowData, setRowData] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
   const [deleteOpen, setDeleteOpen] = useState(false);
   const [deleteUserId, setDeleteUserId] = useState("");
  const [fullTotalPrice, setFullTotalPrice] = useState(0);
  const [fullTotalQuantity , setFullTotalQuantity] = useState(0);
  const { id } = useParams();
  const totalArr = [];
  const totalQuantityArr = [];
  const FilteredData = rowData.filter((item) => item.type === type);
  
  const totalValue = () => {
    FilteredData.forEach((item) => {
      if (item.value === undefined) {
        totalArr.push(0);
      } else {
        totalArr.push(item.value);
      }
    });
  };
  const totalValueFun = () => {
    let sum = 0;
    for (let i = 0; i < totalArr.length; i++) {
      sum += totalArr[i];
    }
    setFullTotalPrice(sum);
  };
  useEffect(() => {
    totalValue();
    totalValueFun();
  }, [totalArr]);
 const totalQuantityValue = () => {
   FilteredData.forEach((item) => {
     if (item.quantity === undefined) {
       totalQuantityArr.push(0);
     } else {
       totalQuantityArr.push(item.quantity);
     }
   });
 };
 const totalQuantityValueFun = () => {
   let sum = 0;
   for (let i = 0; i < totalQuantityArr.length; i++) {
     sum += totalQuantityArr[i];
   }
   setFullTotalQuantity(sum);
 };
 useEffect(() => {
   totalQuantityValue();
   totalQuantityValueFun();
 }, [totalQuantityArr]);
  const columns = [
    {
      field: "note",
      headerName: "اسم البيان",
      width: 250,
      editable: false,
    },
    {
      field: "quantity",
      headerName: "الكميه",
      width: 100,
      editable: false,
    },
    {
      field: "price",
      headerName: "سعر المتر",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "value",
      headerName: "اجمالي",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "التاريخ",
      width: 150,
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
  ];

  const rows = FilteredData.map((item) => {
    return {
      id: item._id,
      note: item.note,
      quantity: item.quantity,
      price: item.price,
      value: item.value,
      createdAt: item.createdAt.split("T")[0],
    };
  });
 useEffect(() => {
   const fetchRow = async () => {
     try {
       const res = await axios.get(
         `http://localhost:3500/api/processDetailes/${id}`
       );
       setRowData(res.data);
     } catch (err) {
       console.log(err);
     }
   };
   fetchRow();
 }, [rowData._id]);
  return (
    <div className="tubes">
      <div className="container loober">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <div className="tubesHeader">
            <h1>{type === "tubes" ? "مواسير" : "مصناعيه"}</h1>
            <button className="" onClick={() => setAddOpen(!addOpen)}>
              أضافه {type === "tubes" ? "مواسير" : "مصناعيه"}
            </button>
          </div>
          {rowData.length === 0 ? (
            <div class="">لا يوجد عناصر</div>
          ) : (
            <div className="dataTable">
              <DataGrid
                className="dataGrid"
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
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
              <div className="sum">
                <h2>{`اجمالي الكميات بالمتر: ${fullTotalQuantity}`}</h2>
                <h2>{`اجمالي السعر: ${fullTotalPrice}`}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
      {addOpen && <AddTubes setAddOpen={setAddOpen} id={id} type={type} />}
      {deleteOpen && (
        <DeleteTubes
          setDeleteOpen={setDeleteOpen}
          deleteUserId={deleteUserId}
        />
      )}
    </div>
  );
}