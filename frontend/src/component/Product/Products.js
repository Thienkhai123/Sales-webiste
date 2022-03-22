import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import logo from '../../images/logo-orchard.png'
import '../../App.css'

const categories = [
  "N°5",
  "Coco Mademoiselle",
  "Gabrielle CHANEL",
  "Chance",
  "Chance Eau Tendre",
  "Chance Eau Fraîche",
  "Chance Eau Vive",
  // "Coco",
  // "Coco Noir",
  // "Allure Sensuelle",
  // "Allure",
  // "N°19",
  // "Cristalle",
  // "Gucci"
];

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;
  let paginationCount = filteredProductsCount;
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
      if(error)
      {
          alert.error(error);
          dispatch(clearErrors());
      }
      dispatch(getProduct(keyword,currentPage, category))
  }, [dispatch,keyword,currentPage, category,alert,error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS ORCHARD" />
          <div>
            <h2 className="productsHeading">
            <img className="optionIMG" src={logo}/>
          </h2>
          </div>
          <div className="products animation-X">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          
          <div className="filterBox animation_X">
            <Typography className="OptionCategory">Nhãn hiệu</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          {resultPerPage < paginationCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Tiếp theo"
                prevPageText="Trước đó"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
