import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";
const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();

  const logOut = () => {
    dispatch(logout());
    alert.success("Đăng xuất thành công");
  }

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1 className="animation_X">THÔNG TIN</h1>
              <img className="animation_X" src={user.avatar.url} alt={user.name} />
              <Link className="animation-Y" to="/me/update">Cập nhật thông tin</Link>
            </div>
            <div>
              <div className="animation_Y">
                <h4>Họ và Tên</h4>
                <p>{user.name}</p>
              </div>
              <div className="animation_Y">
                <h4>Gmail</h4>
                <p>{user.email}</p>
              </div>
              <div className="animation_Y">
                <h4>Ngày đăng ký</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div className="animation-X">
                <Link to="/orders">Giỏ hàng</Link>
                <Link to="/password/update">Thay đổi mật khẩu</Link>
                <Link to="/login"  onClick={logOut}>
                  Đăng xuất
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
