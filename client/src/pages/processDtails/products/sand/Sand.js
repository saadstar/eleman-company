import React, { useEffect, useState } from "react";
import { Menu } from "../../Menu/Menu";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddSand } from "./AddSand";
import { DeleteSand } from "./DeleteSand";
import "../../../usersFeatures/user.css";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import Header from "../../../../components/Header";

export const Sand = ({ type, ar }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
  const [rowData, setRowData] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const { id } = useParams();
  const totalArr = [];
  const totalQuantityArr = [];
  const [fullTotalPrice, setFullTotalPrice] = useState(0);
  const [fullTotalQuantity, setFullTotalQuantity] = useState(0);
  const [searchNote, setSearchNote] = useState("");
  const filterSearch = rowData.filter(item => searchNote ? item.note === searchNote :item);


  const totalValue = () => {
    filterSearch.forEach((item) => {
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
    filterSearch.forEach((item) => {
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
  const fetchRow = async () => {
    try {
      const res = await axios.get(
        `https://api.eleaman.com/api/processDetailes/${id}/${type}`
      );
      setRowData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRow();
  });
  const columns = [
    {
      field: "note",
      headerName: "اسم البيان",
      width: 150,
      editable: false,
    },
    {
      field: "amount",
      headerName: type === "sand" ? "طول المواسير" : "عدد الغرف",
      width: 100,
      editable: false,
    },
    {
      field: "quantity",
      headerName: type === "cement" ? "الاسمنت بالطن" : `كميه ${ar}`,
      width: 100,
      editable: false,
    },
    {
      field: "price",
      headerName: type === "cement" ? `سعر طن ${ar}` : ` سعر متر ${ar}`,
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "precentge",
      headerName: `نسبه ${ar}`,
      type: "number",
      width: 100,
      editable: false,
    },
    {
      field: "value",
      headerName: `أجمالي سعر ${ar}`,
      width: 150,
    },
    {
      field: "createdAt",
      headerName: ` التاريخ`,
      width: 180,
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
          <div className="actionWrapper">
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
  const rows = filterSearch.reverse().map((item) => {
    return {
      id: item._id,
      note: item.note,
      quantity: item.quantity,
      price: item.price,
      amount: item.precentage,
      value: item.value,
      precentge: item.quantity / item.precentage,
      createdAt: item.createdAt.split("T")[0],
    };
  });

  return (
    <div className="app">
      <Menu style={{ marginTop: "120px" }} />
      <main className="content">
        <div className="users" style={{ marginTop: "190px" }}>
          <div className="main-marg">
            <Box className="headerBox">
              <Header
                title={addOpen === true ? `إضافه ${ar}` : ar}
                subtitle={`استكشف كل ${ar} هنا`}
              />
              <button onClick={() => setAddOpen(!addOpen)}>
                {addOpen === true ? "رجوع" : `إضافه ${ar}`}
              </button>
            </Box>
            {addOpen === false ? (
              <>
                <input
                  class="searchInput"
                  type="text"
                  placeholder="ادخل اسم البيان"
                  onChange={(e) => setSearchNote(e.target.value)}
                  style={{
                    padding: "2px",
                    border: "5px solid rgb(240 205 9)",
                    borderRadius: "10px",
                  }}
                />
                <Box
                  m="10px 0 0 0"
                  height="70vh"
                  border="1px solid #6E6C77"
                  borderRadius={2}
                  sx={{
                    "& .MuiDataGrid-root.MuiDataGrid-root--densityStandard.css-1kt8ah5-MuiDataGrid-root":
                      {
                        border: "none",
                      },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                    },
                    "& .name-column--cell": {
                      color: colors.greenAccent[500],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.primary[500],
                      borderBottom: "1px solid #6E6C77",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.primary[500],
                    },
                    "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                    },
                  }}
                >
                  <DataGrid rows={rows} columns={columns} />
                </Box>
              </>
            ) : (
              <>
                <AddSand setAddOpen={setAddOpen} id={id} type={type} ar={ar} />
              </>
            )}
          </div>
          {!addOpen && (
            <Box className="headerBox">
              <Header title={fullTotalPrice} subtitle={`الاجمالي`} />
              <Header title={fullTotalQuantity} subtitle={`إجمالي الكميات`} />
            </Box>
          )}
        </div>
      </main>
      {deleteOpen && (
        <DeleteSand setDeleteOpen={setDeleteOpen} deleteUserId={deleteUserId} />
      )}
    </div>
  );
};
