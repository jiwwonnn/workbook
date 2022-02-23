import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className="header">
          <div className="container">
            <div className="header_left">
                <h1>
                    <img src={require("../assets/images/header_logo.png")} alt="logo" />
                </h1>
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link to="/class">Class</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/community">Community</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/workbook">Workbook</Link>
                    </li>
                </ul>
            </div>
            <div className="header_right">
                <ul className="util">
                    <li className="user">
                        <div className="photo"></div>
                        <div className="name">USER_01</div>
                    </li>
                    <li className="cart">
                        <img src={require("../assets/images/basket.png")} alt="logo" />
                    </li>
                    <li className="language">ENG</li>
                </ul>
            </div>
        </div>
      </header>
  )
}

export default Header