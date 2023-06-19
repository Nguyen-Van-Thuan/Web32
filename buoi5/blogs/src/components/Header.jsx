import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
    <ul>
      <li>
        <Link to="/">Trang Chu</Link>
      </li>
      <li>
        <Link to="about">Gioi Thieu</Link>
      </li>
      <li>
        <Link to="contact">Lien He</Link>
      </li>
    </ul>
  </div>
  )
}

export default Header
