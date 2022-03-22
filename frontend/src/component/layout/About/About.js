import React, { Fragment } from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../../../App.css"
import logo from '../../../images/logo-orchard.png'
import Loader from "../Loader/Loader";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <Fragment>
     <div>
        <h2 className="productsHeading">
        <img className="optionIMG" src={logo}/>
        </h2>
     </div>
     <img className="optionIMG1 animation-Y"src="https://img-cdn.chanelwebservices.com/1593781302517-aboutchanelfounderherogabriellechaneldjpg_max_lg_lg.jpg"/>
     <div className="grid wide animation-Y">
       <div className="row">
         <div className="l-6 l-0-3 content-box-1">
            <p>"CẦU CHÚC CHO HUYỀN THOẠI VỀ TÔI PHỒN VINH VÀ THỊNH VƯỢNG. CHÚC CHO HUYỀN THOẠI NÀY MỘT ĐỜI HẠNH PHÚC DÀI LÂU."*</p>
            <span>
            * Paul Morand, The Allure of Chanel © 1976, Hermann, www.editions-hermann.fr
            </span>
            <cite>
            <br/>© Man Ray Trust / ADAGP Paris 2016
            </cite>
            <p>Gabrielle Chanel đã sống cuộc đời của mình theo cách mà cô muốn. Những thử thách mà một đứa trẻ mồ côi phải qua trong suốt thời thơ ấu cũng như những thành tựu mà một nữ doanh nhân tài giỏi đạt được đã sinh ra một nhân vật phi thường: táo bạo, tự do và đi trước thời đại. Tình bạn sắt son và những cuộc tình nồng cháy, cũng như khát khao tìm hiểu văn hóa, khám phá và du lịch đã giúp hình thành nên tính cách của cô. Một tủ quần áo được giải phóng khỏi những ràng buộc và sự thừa thãi, được biến tấu với những điểm nhấn nam tính, đã tạo ra một sức hút mang tính tầm nhìn, trường tồn với thời gian nhưng vẫn vô cùng hiện đại. Ngọc trai và kim cương kết hợp ngẫu nhiên với nước hoa mang tính biểu tượng đã tạo nên một phong cách đặc trưng ... Phong cách của người phụ nữ tiên tiến, một người tiên phong có lối sống đa chiều, tạo nên các giá trị cho Thương hiệu mà cô ấy thành lập và vẫn là nguồn cảm hứng cho tất cả phụ nữ.</p>
         </div>
       </div>
       <h1 className="optionH1">coco by artists</h1>
       <div className="row">
       <div className="slide" data-i="0">
           <figure>
             <img className="optionIMG-1" src="https://img-cdn.chanelwebservices.com/1597386578294-11keesvandongen1940sdjpg_max_md_xs.jpg"/>
           </figure>
         </div>
         <div className="slide" data-i="1">
           <figure>
             <img className="optionIMG-2" src="https://img-cdn.chanelwebservices.com/1597386617685-2horst1937djpg_max_md_xs.jpg"/>
           </figure>
         </div>
         <div className="slide" data-i="2">
            <figure>
              <img className="optionIMG-3" src="https://img-cdn.chanelwebservices.com/1597386649675-3marielaurencinhdrmn06511615djpg_max_md_xs.jpg"/>
            </figure>
         </div>
       </div>
     </div>
    </Fragment>




    //   <div className="aboutSection">
    //   <div></div>
    //   <div className="aboutSectionGradient"></div>
    //   <div className="aboutSectionContainer">
    //     <Typography component="h1">ORCHARD</Typography>

    //     <div>
    //       <div>
    //         <Avatar
    //           style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
    //           src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
    //           alt="Founder"
    //         />
    //         <Typography>Abhishek Singh</Typography>
    //         <Button onClick={visitInstagram} color="primary">
    //           Visit Instagram
    //         </Button>
    //         <span>
    //           This is a sample wesbite made by @meabhisingh. Only with the
    //           purpose to teach MERN Stack on the channel 6 Pack Programmer
    //         </span>
    //       </div>
    //       <div className="aboutSectionContainer2">
    //         <Typography component="h2">Our Brands</Typography>
    //         <a
    //           href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
    //           target="blank"
    //         >
    //           <YouTubeIcon className="youtubeSvgIcon" />
    //         </a>

    //         <a href="https://instagram.com/meabhisingh" target="blank">
    //           <InstagramIcon className="instagramSvgIcon" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
