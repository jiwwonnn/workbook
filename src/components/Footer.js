import React from 'react'

const Footer = () => {
  return (
      <div className="footer">
          <div className="container">
              <p className="copyright">ⓒ 2021 boomco Co., Ltd. All righs reserved.</p>
              <ul className="icon_list">
                  <li className="icon_item">
                    <img src={require("../assets/images/mail.png")} alt="logo" />
                  </li>
                  <li className="icon_item">
                    <img src={require("../assets/images/insta.png")} alt="logo" />
                  </li>
                  <li className="icon_item">
                    <img src={require("../assets/images/twitter.png")} alt="logo" />
                  </li>
                  <li className="icon_item">
                    <img src={require("../assets/images/youtube.png")} alt="logo" />
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default Footer