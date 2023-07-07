import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  // Nguoi dung da dang nhap hay chua
  const isAuth = localStorage.getItem("isLogin");

  // Khi bam vao dang xuat
  const hanldLogOut = () => {
    // Xoa trang thai dang nhap trong localStorage
    localStorage.removeItem("isLogin");

    // Thong bao dang xuat thanh cong
    toast.success('Dang xuat thanh cong!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // dieu huong trang chu
    setTimeout(() => {
      navigate("/")
    }, 1500)

  }
  return (
    <>
      {/* Link */}
      <div className="wrap-header">
        <div className="logo">Logo</div>
        <ul>
          <li>
            <Link to="/">
              Trang chu
            </Link>
          </li>
          {/* a ? b : c */}
          {isAuth ? (
            <>
              <li>
                <Link to="dashboad">
                  Quan tri
                </Link>
              </li>
              <li>
                <Link to="#" onClick={hanldLogOut}>
                  Dang Xuat
                </Link>
              </li>
            </>

          ) : (
            <>
              <li>
                <Link to="login">
                  Dang nhap
                </Link>
              </li>
            </>

          )}
        </ul>
      </div>
      {/* Thong bao */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Header