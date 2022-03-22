import React from "react";
import "./Footer.css";
import logo from '../../../images/logo-orchard.png'
const Footer = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="footerrepon">
          <div className="leftFooter">
            <a href="#">
              <img
                src={logo}
                alt=""
              />
            </a>
            <p>
              Cộng đồng chia sẻ nội dung, kiến thức hữu ích về công nghệ và giải
              trí.
            </p>
            <h4>Liên hệ</h4>
            <ul className="info-contact">
              <li title="Phone Number">
                <span className="fa fa-phone info-icon"></span>
                <span className="info">+84335266969</span>
              </li>
              <li title="Email">
                <span className="fas fa-envelope info-icon"></span>
                <span className="info">dev.nguyenui@gmail.com</span>
              </li>
              <li title="Skype">
                <span className="fab fa-skype info-icon"></span>
                <span className="info">Dev.30</span>
              </li>
            </ul>
          </div>
          <div className="midFooter">
            <h4>FANPAGE</h4>
            <p>
              ORCHARD nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ
              trợ mua và nhận
            </p>
            <h4>PHƯƠNG THỨC THANH TOÁN</h4>
            <p>
              <img
                className="icon-pay"
                src="https://cdn-icons-png.flaticon.com/128/174/174861.png"
                width="54"
                alt=""
              />
              <img
                className="icon-pay"
                src="https://cdn-icons.flaticon.com/png/128/2169/premium/2169862.png?token=exp=1641008310~hmac=ba3e04588ac6311cb80e21165deee339"
                width="54"
                alt=""
              />
              <img
                className="icon-pay"
                src="https://cdn-icons-png.flaticon.com/128/1086/1086741.png"
                width="54"
                alt=""
              />
              {/* <img
                className="icon-pay"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg"
                width="54"
                alt=""
              />
              <img
                className="icon-pay"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg"
                width="54"
                alt=""
              />
              <img
                className="icon-pay"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg"
                width="54"
                alt=""
              /> */}
            </p>
          </div>
          {/* <div className="rightFooter">
            <h4 className="footer-widget-title text--white">MẠNG XÃ HỘI</h4>
            <p>Theo dõi các mạng xã hội để có được những thông tin mới nhất</p>
            <div className="social social--color--filled">
              <ul className="social-contact">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="mini-footer">
          <div className="copyright-text">
            <p>
            <a href="/">ORCHARD.VN</a> © 2021 - 2021. All rights reserved by
              
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
