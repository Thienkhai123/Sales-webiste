
import React, { Fragment } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo-orchard.png";
import '../../../App.css'
// import logo2 from '../../../images/logo-orchard.png'
import {Link} from 'react-router-dom'
const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Trang chủ",
  link2Text: "Sản phẩm",
  link3Text: "Liên hệ",
  link4Text: "Giới thiệu",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return  <ReactNavbar {...options} />
  // return(
  //   <Fragment>
  //     <div className="navBar">
  //       <img src={logo2} width="515" heght="100"/>
  //     </div>
  //     <div className="header">
  //         <ul className="nav">
  //             <Link to='/' className="settingLink">
  //               Trang chủ
  //             </Link>
  //             <Link to='/products' className="settingLink">
  //               Sản phẩm
  //             </Link>
  //             <Link to='/orders' className="settingLink">
  //               Giỏ hàng
  //             </Link>
  //             <Link to='/about' className="settingLink">
  //               Giới thiệu
  //             </Link>
  //             <Link to='/contact' className="settingLink">
  //               Liên hệ
  //             </Link>
  //         </ul>
  //     </div>
  //   </Fragment> 
      
  // ) 
};

export default Header;
