import React from 'react'

const Introduce = () => {
  return (
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
                <div className="etc">
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugit cumque quos sit corporis asperiores explicabo blanditiis aperiam aut enim eum doloremque, voluptatum, sint officia et sapiente eveniet voluptate accusantium?</p>
                    <div className="etc_box"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduce