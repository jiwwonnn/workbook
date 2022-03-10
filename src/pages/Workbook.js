import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Workbook = () => {
  return (
    <div className="wrap">
            <Header />
            <div className="content">
              <div className="workbook_img_wrap">
                <img src={require("../assets/images/workbook.png")} alt="" />
              </div>
            </div>
            <Footer />
        </div>
  )
}

export default Workbook