import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Star from '../components/Star'

const Class = () => {

  const abc = '5';

  return (
    <div className="wrap">
      <Header />
      <div className="content">
        <div className="bg_wrap">
            <div className="container">
              <div className="bg_content">
              <div className="img_wrap">
                <img src={require("../assets/images/class_img.png")} alt="" />
              </div>
              <div className="text_wrap">
                <p className="type">Boomco • Intermediate</p>
                <p className="title">Have fun studying Korean with Boomco</p>
                <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum.
                </p>
                <div className="info">
                  <Star data={abc} />
                  <p className="date">(504)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="class_wrap">
                <div className="class_left">
                    <ul className="tab_list">
                        <li className="tab_item active">Introduce</li>
                        <li className="tab_item">Curriculum</li>
                        <li className="tab_item">Review</li>
                    </ul>
                    <div className="introduce_wrap">
                        <div className="introduce">
                            <p className="lecture">Lecture Introduction</p>
                            <ul className="lecture_list">
                                <li className="lecture_item">
                                    beginner learners.
                                </li>
                                <li className="lecture_item">
                                The best individualized Korean education.
                                </li>
                                <li className="lecture_item">
                                Even small spelling mistakes will be checked precisely.
                                </li>
                                <li className="lecture_item">
                                Persistent learning is possible with weekly worksheets.
                                </li>
                            </ul>
                            <div className="box_wrap">
                                <div className="box">
                                    <p className="title">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi blandit odio faucibus diam, dolor sed felis egestas porttitor. Non cum pellentesque ac amet, vel enim pellentesque morbi. Nunc nam adipiscing consectetur mi ac dignissim. Pretium urna maecenas in morbi velit felis.
                                    </p>
                                    <ul className="box_list">
                                        <li className="box_item">
                                            <p className="number">01</p>
                                            <div className="explain_box box01">
                                                <div className="img_wrap">
                                                <img src={require("../assets/images/introduce1.png")} alt="" />
                                                </div>
                                                <p className="text">Inexpensive cost</p>
                                            </div>
                                        </li>
                                        <li className="box_item">
                                            <p className="number">02</p>
                                            <div className="explain_box box02">
                                                <div className="img_wrap">
                                                <img src={require("../assets/images/introduce2.png")} alt="" />
                                                </div>
                                                <p className="text">Individualized learning</p>
                                            </div>
                                        </li>
                                        <li className="box_item">
                                            <p className="number">03</p>
                                            <div className="explain_box box03">
                                                <div className="img_wrap">
                                                <img src={require("../assets/images/introduce3.png")} alt="" />
                                                </div>
                                                <p className="text">Flexible learning time</p>
                                            </div>
                                        </li>
                                        <li className="box_item">
                                            <p className="number">04</p>
                                            <div className="explain_box box04">
                                                <div className="img_wrap">
                                                <img src={require("../assets/images/introduce3.png")} alt="" />
                                                </div>
                                                <p className="text">One-to-one care by
                                                a native professional
                                                Korean teacher</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="etc_wrap">
                                <div className="etc"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="class_right"></div>
            </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Class