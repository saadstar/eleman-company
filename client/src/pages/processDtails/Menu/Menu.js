import React from 'react'
import { Link, useParams } from "react-router-dom";
import ScienceIcon from "@mui/icons-material/Science";
import RoofingIcon from "@mui/icons-material/Roofing";
export const Menu = () => {
  const { id } = useParams();
  return (
    <div className="menu">
      <Link
        to={`/processDetails/tubes/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">مواسير</div>
          <ScienceIcon id="none" />
        </div>
      </Link>
      <Link
        className="wTen"
        to={`/processDetails/sand/${id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="item listItem">
          <div className="itemTitle">رمل</div>
          <i class="fa-solid fa-umbrella-beach" id="none"></i>
        </div>
      </Link>
      <Link
        to={`/processDetails/sen/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">سن</div>
          <i class="fa-solid fa-trowel-bricks" id="none"></i>
        </div>
      </Link>
      <Link
        to={`/processDetails/cement/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">اسمنت</div>
          <RoofingIcon id="none" />
        </div>
      </Link>
      <Link
        to={`/processDetails/details/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">نثريات</div>
          <i class="fa-solid fa-layer-group" id="none"></i>
        </div>
      </Link>
      <Link
        to={`/processDetails/worker/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">مصناعيه</div>
          <i class="fa-solid fa-user-nurse" id="none"></i>
        </div>
      </Link>
      <Link
        to={`/processDetails/materials/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">خامات</div>
          <i class="fa-solid fa-screwdriver-wrench" id="none"></i>
        </div>
      </Link>
      <Link
        to={`/processDetails/azl/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">عزل</div>
          <i class="fa-solid fa-caret-up"id="none"></i>
        </div>
      </Link>
      <Link
        to={`/processDetails/transport/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">انتقالات مواقع</div>
          <i class="fa-solid fa-van-shuttle" id="none"></i>
        </div>
      </Link>
      <Link
        to={`/processDetails/repair/${id}`}
        style={{ textDecoration: "none" }}
        className="wTen"
      >
        <div className="item listItem">
          <div className="itemTitle">اعطال</div>
          <i class="fa-solid fa-hammer" id="none"></i>
        </div>
      </Link>
    </div>
  );
}
