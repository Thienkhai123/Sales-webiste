import React, { Fragment } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price, 
    0
  );
  
  const shippingCharges = subtotal > 1000 ? 0 : `${subtotal * 0.1}`;

  const tax = subtotal * 0.07 ;
    
  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.state}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Thông kế chi tiết hóa đơn</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Họ và tên:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Số điện thoại:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Địa chỉ:</p>
                <span>{address}</span>
              </div>
              <div>
                <p>Mã bưu điện:</p>
                <span> {shippingInfo.pinCode}</span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="orderSummary">
            <Typography>Thông kế hóa đơn</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Tổng thu:</p>
                <span>{subtotal} $</span>
              </div>
              <div>
                <p>Chi phí vận chuyển:</p>
                <span>{shippingCharges} $</span>
              </div>
              <div>
                <p>GST:</p>
                <span>{tax} $</span>
              </div>
            </div>
            <div className="orderSummaryTotal">
              <p>
                <b>Tổng:</b>
              </p>
              <span>{totalPrice} $</span>
            </div>
            <button onClick={proceedToPayment}>Tiến hành thanh toán</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
