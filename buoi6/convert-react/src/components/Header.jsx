import { Fragment } from "react"
import { Link } from "react-router-dom"
import logo from "../../public/asstes/images/logo.png"
import img_profile from "../../public/asstes/images/profile-header.jpg"

const Header = () => {
  return (
    <Fragment>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src={logo} alt="" />
                </Link>
                <div className="search-input">
                  <form id="search" action="#">
                    <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" />
                    <i className="fa fa-search"></i>
                  </form>
                </div>

                <ul className="nav">
                  <li><Link to="/" className="active">Home</Link></li>
                  <li><Link to="browse">Browse</Link></li>
                  <li><Link to="details">Details</Link></li>
                  <li><Link to="streams">Streams</Link></li>
                  <li><Link to="profile">Profile <img src={img_profile} alt="" /></Link></li>
                </ul>
                <Link className='menu-trigger'>
                  <span>Menu</span>
                </Link>

              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header