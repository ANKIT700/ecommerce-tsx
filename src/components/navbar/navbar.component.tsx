import * as React from "react";
import "../navbar/navbar.styles.css";
import image from "../../img/store.png";
import { searchProducts } from "../../reducer/actionCreators";
import { connect } from "react-redux";

interface NavbarProps{
  searchProduct: (search: string) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  let name = localStorage.getItem("userName");
  const firstLetter = name?.slice(0).toLocaleUpperCase();

  const [searchValue,setSearchValue]=React.useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          <img src={image} alt="" height={50} /> Akart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="ms-5 w-75 ">
              <input
                className="form-control search"
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                aria-label="Search"/>
                <i className="fa fa-search searchIcon text-secondary" aria-hidden="true" onClick={()=>props.searchProduct(searchValue)}></i>
            </li>
          </ul>
          <form className="d-flex profileFlex">
          < span className="nav-item dropdown">
            <span
              className="profileIcon"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              
            >
              <i className="fa fa-user me-2" data-bs-toggle="dropdown" aria-hidden="true"></i>
              {firstLetter}
            </span>
            <ul className="dropdown-menu" aria-labelledby="profileDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  My Orders
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
            </span>
          </form>
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = (dispatch: any) => {

  return {
    searchProduct: (searchValue: string) => dispatch(searchProducts(searchValue))
};
};

export default connect(null, mapDispatchToProps)(Navbar);
