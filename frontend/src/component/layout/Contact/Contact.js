import React from "react";
import "./Contact.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import logo from '../../../images/logo-orchard.png'
const Contact = () => {
  const {product} = useSelector((state) => state.products)
  return (
    <div className="contactContainer">
      <div>
        <h2 className="productsHeading">
          {/* <img src={product.images[0].url} alt={product.name} /> */}
        <img className="optionIMG" src={logo}/>
        </h2>
      </div>
      <a className="mailBtn" href="mailto:dev.nguyenui@gmail.com">
        <Button>Contact: dev.nguyenui@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
