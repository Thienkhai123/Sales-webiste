import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import "../../App.css"
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import contentIMG from '../../images/Perfume/n-5-l-eau-eau-de-toilette-twist-and-spray-3x0-7fl-oz--packshot-default-105500-8833876164638.jpg'
import DetailShopIMG from '../../images/8841695002654-decoupe_940x506.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ORCHARD" />
          <div className="banner">
            <h1>ORCHARD</h1>
          </div>
           <div className="grid wide animation-X">
            <div className="row containers container">
              <div className="l-6 m-12 c-12">
                  <img className="optionImg" src={contentIMG}/>
              </div>
              <div className=" l-5 m-12 c=12 optionContent">
                   <h2>N°5 L’EAU</h2>
                   <span>EAU DE TOILETTE DẠNG TWIST AND SPRAY<br/></span>
                   <span>N°5 L’EAU chính là phiên bản N°5 của thời hiện tại. Một đoá hoa rực rỡ trừu tượng mang tinh thần hiện đại và tươi mới. N°5 L’EAU tôn vinh sự tối giản qua chính diện mạo của nó. Thiết kế chai nước hoa đơn giản làm nổi bật thêm những giọt nước hoa trong suốt và thuần khiết, dẫn lối cho những tưởng tượng bay bổng của người phụ nữ.</span>
                   <Link to="/products"  className="optionLink">Xem thêm</Link>
                   <p>DUNG TÍCH</p>
                  <p>3x20 ML</p>
              </div>
            </div>
          </div>
          <h3 className="optionH3 animation_X">CHI TIẾT</h3>
          <div className="grid wide animation_X">
            <div className="row">
              <div className="l-6 l-0-3 m-0-1 m-10 c-0-1 c-10 optionText">
                <h3>SẢN PHẨM</h3>
                <p>N°5 L’EAU chính là phiên bản N°5 của thời hiện tại. Một đoá hoa rực rỡ trừu tượng mang tinh thần hiện đại và tươi mới. N°5 L’EAU tôn vinh sự tối giản qua chính diện mạo của nó. Thiết kế chai nước hoa đơn giản làm nổi bật thêm những giọt nước hoa trong suốt và thuần khiết, dẫn lối cho những tưởng tượng bay bổng của người phụ nữ.</p>
                <h3>THÀNH PHẦN</h3>
                <p>Ít trừu tượng hơn các phiên bản trước, thành phần của N°5 L’EAU là mùi hương cam chanh trong lành như mật ngọt. Hương chanh, quýt và cam bay bổng trong không gian cùng với aldehyde. Tầng hương giữa như làn gió ghé qua mang theo tiếng hoa xào xạc. Hoa hồng, hoa nhài và một chút ylang-ylang cho sự hoà quyện hiện đại hơn bao giờ hết. Tầng hương cuối là sự năng động tươi mới của cỏ vetiver và gỗ tuyết tùng kết hợp với sự mềm mại của xạ hương trắng. N°5 chưa bao giờ tự nhiên và tươi mát đến thế.</p>
                <h3>CẢM HỨNG</h3>
                <p>Nhà chế tác nước hoa Olivier Polge của CHANEL đã biến hóa mùi hương N°5 như một cách chứng minh cho cấu trúc hoàn mỹ và đầy cảm hứng của nó. Như một người thợ kim hoàn, Olivier Polge phân tích và thấu hiểu tính chất của từng thành phần. Ông cùng Phòng Chế tạo và Phát triển nước hoa của CHANEL đã tạo ra một N°5 L’EAU hiện đại và tươi mới nhưng vẫn lưu giữ những giá trị của một biểu tượng.</p>
                <h3>NGHỆ THUẬT NƯỚC HOA</h3>
                <p>Không ý niệm nào được định sẵn cho N°5 L’EAU. Sử dụng theo bản năng, đơn giản hay xa hoa, ban ngày hay ban đêm, cho chính bạn và cho tất cả mọi người.
                Không có cách sử dụng nào là sai cả. Hãy sử dụng N°5 L’EAU tùy thích với chai xịt bỏ túi. Thiết kế tiện lợi để mang đi mọi lúc mọi nơi và lưu giữ hương thơm suốt cả ngày.</p>
                <p>Lõi nước hoa có thể được thay mới.</p>
              </div>
            </div>
          </div>
          <h3 className="optionH3 animation-X">VỀ CỬA HÀNG CỦA CHÚNG TÔI</h3>
          <div className="grid wide animation-X">
            <div className="row">
              <div className="l-6 m-12 c-12">
                  <img className="optionImg" src={DetailShopIMG}/>
              </div>
              <div className="l-5 m-12 c-12 optionTextH4">
                <h3>CỬA HÀNG NƯỚC HOA LÀ LÀM ĐẸP</h3>
                <p>Một không gian tuyệt vời để bạn có thể khám phá toàn bộ dòng sản phẩm trang điểm, chăm sóc da và nước hoa với sự tư vấn từ các chuyên viên về nước hoa và trang điểm CHANEL. Một không gian đặc biệt giúp bạn đắm chìm vào thế giới của CHANEL.</p>
              </div>
            </div>
          </div>
          <div className="grid wide animation-Y">
            <div className="row optionGrid">
              <div className="l-5 m-12 c-12 optionTextH1">
                <h1>CHANEL FACTORY 5</h1>
                <button >
                  <Link className="optionLinkLast" to='/products'>
                    MUA SẮM
                  </Link>
                </button>
              </div>
              <div className="l-7 m-12 c-12">
                <video playsInline preload muted loop className="optionVideo" autoPlay>
                  <source src="https://www.chanel.com/apac/img///q_auto:good,fl_lossy,dpr_1.2,f_mp4//prd-emea/sys-master/content/h43/h4b/9406993301534-1080x1080_5N5.gif"/>
                </video>
              </div>
            </div>
          </div>
          
          {/* <h2 className="homeHeading">Featured Products</h2> */}
          {/* <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
