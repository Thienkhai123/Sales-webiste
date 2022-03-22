import React, { Fragment } from "react";
import "./sidebar.css";
import logo from "../../images/logo-orchard.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <Fragment>

      <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon />
          Tổng quan
        </p>
      </Link>
      <Link to="/admin/products">
        <p>
          <PostAddIcon />
          Sản phẩm
        </p>
      </Link>
      <Link to="/admin/product">
        <p>
          <AddIcon />
          Thêm sản phẩm
        </p>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Đơn hàng
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon />Người dùng
        </p>
      </Link>
      {/* <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
            Đánh giá
        </p>
      </Link> */}
    </div>
    </Fragment>
   
  );
};

export default Sidebar;
