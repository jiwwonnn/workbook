import React , { useState } from 'react'
import Curriculum from '../components/Curriculum'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Introduce from '../components/Introduce'
import Review from '../components/Review'
import Star from '../components/Star'

const Class = () => {

    const tabTitle = ["Introduce", 'Curriculum', 'Review']
    const tab = {
        0 : <Introduce /> ,
        1 : <Curriculum />,
        2 : <Review />
    }

    const [activeTab , setActiveTab] = useState(0);
    const onClickTab = (idx) => {
        setActiveTab(idx)
    }

    const starNumber = [
        {
            count: '2',
        }
    ]

    const curriList = [
        {
            id:'1',
            name:'01 - Have fun studying Korean with boomco',
            info: 'Lesson 3 ∙ 2 hours 6 minutes',
            listname : 'Start Korean: Pronunciation, Hangul, and consonant sounds combined',
            time : '05:36',
        }
    ]


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
                            <Star data={starNumber[0]} />
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
                                {tabTitle.map((title, idx)=> {
                                    return (
                                    <li 
                                        className={activeTab === idx ? "tab_item active" : "tab_item"} 
                                        key={idx} 
                                        onClick={() => onClickTab(idx)}
                                    >
                                        {title}
                                    </li>
                                    );
                                })}
                            </ul>
                            <div>
                                {tab[activeTab]}
                            </div>
                        </div>
                        <div className="class_right">
                            <div className="info">
                                <p className="curriculum">Curriculum</p>
                                <p className="name">Total 118 Class • 19 hours and 
                                22 minutes of class</p>
                            </div>
                            <div className="money">
                                <div className="money_left">
                                    <p className="per">10%</p>
                                    <p className="won">140,000 won</p>
                                </div>
                                <div className="money_right">
                                    <p className="discount">154,000won</p>
                                </div>
                            </div>
                            <button className="button">
                                    Add to basket
                            </button>
                            <ul className="util_list">
                                <li className="util_item add">
                                    add my list
                                </li>
                                <li className="util_item heart">
                                    2,831
                                </li>
                                <li className="util_item share">
                                    share
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Class