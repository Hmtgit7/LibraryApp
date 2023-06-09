import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>BookPoint</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <span onClick={()=>navigate("book")} className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</span>
            </li>
            <li className='nav-item'>
              <span onClick={()=>navigate("/about")} className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</span>
            </li>
            <li className='nav-item'>
              <span onClick={()=>navigate("/contact")} className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar