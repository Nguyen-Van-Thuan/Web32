import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="wrap-header">
      <div className="logo">Logo</div>

      <ul>
        <li>
          <Link to="/">
            Trang chu
          </Link>
        </li>
        <li>
          <Link to="#">
            Dang nhap
          </Link>
        </li>
        <li>
          <Link to="#">
            Dang Xuat
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header