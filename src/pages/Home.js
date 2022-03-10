import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Card01 from '../components/Card01';
import Star from '../components/Star';


const home = () => {

    const slideData = [
        {
            id:1,
            image : require("../assets/images/slide_user_img.png"),
            name : 'name1',
            month : '1 monthly',
            count :'3',
            content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc nulla cursus nulla dui dis nunc nam. Sagittis sagittis nibh aliquam nunc. Integer ut iaculis mauris, condimentum. Semper velit turpis lacus rhoncus pellentesque vitae, nulla magna.',
        },
        {
            id:2,
            image :require("../assets/images/slide_user_img.png"),
            name : 'name2',
            month : '2 monthly',
            count :'4',
            content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc nulla cursus nulla dui dis nunc nam. Sagittis sagittis nibh aliquam nunc. Integer ut iaculis mauris, condimentum. Semper velit turpis lacus rhoncus pellentesque vitae, nulla magna.',
        },
        {
            id:3,
            image :require("../assets/images/slide_user_img.png"),
            name : 'name3',
            month : '3 monthly',
            count :'3',
            content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc nulla cursus nulla dui dis nunc nam. Sagittis sagittis nibh aliquam nunc. Integer ut iaculis mauris, condimentum. Semper velit turpis lacus rhoncus pellentesque vitae, nulla magna.',
        },
        {
            id:4,
            image :require("../assets/images/slide_user_img.png"),
            name : 'name4',
            month : '4 monthly',
            count :'2',
            content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc nulla cursus nulla dui dis nunc nam. Sagittis sagittis nibh aliquam nunc. Integer ut iaculis mauris, condimentum. Semper velit turpis lacus rhoncus pellentesque vitae, nulla magna.',
        },
        {
            id:5,
            image :require("../assets/images/slide_user_img.png"),
            name : 'name5',
            month : '4 monthly',
            count :'2',
            content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc nulla cursus nulla dui dis nunc nam. Sagittis sagittis nibh aliquam nunc. Integer ut iaculis mauris, condimentum. Semper velit turpis lacus rhoncus pellentesque vitae, nulla magna.',
        },
        {
            id:6,
            image :require("../assets/images/slide_user_img.png"),
            name : 'name6',
            month : '4 monthly',
            count :'2',
            content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc nulla cursus nulla dui dis nunc nam. Sagittis sagittis nibh aliquam nunc. Integer ut iaculis mauris, condimentum. Semper velit turpis lacus rhoncus pellentesque vitae, nulla magna.',
        },
    ]

    const cardItem = [
        {
            id:1,
            image : require("../assets/images/review_banner.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life1',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
        {
            id:2,
            image : require("../assets/images/review_banner.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life2',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
        {
            id:3,
            image : require("../assets/images/review_banner.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life3',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
        {
            id:4,
            image : require("../assets/images/review_banner.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life4',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
        {
            id:5,
            image : require("../assets/images/review_banner.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life5',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
        {
            id:6,
            image : require("../assets/images/review_banner.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life6',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
    ]

    const cardItemSlide = [
        {
            id:1,
            image : require("../assets/images/start_img.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life1',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
        {
            id:2,
            image : require("../assets/images/start_img.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life2',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'2',
        },
        {
            id:3,
            image : require("../assets/images/start_img.png"),
            company : 'BOOMCO',
            title : 'Basic Korean for everyday life3',
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mi mi adipiscing neque nunc netus quam dictum. ",
            count :'4',
        },
    ]


  return (
      <div className="wrap">
          <Header />
          <div className="content">
              <div className="main_banner">
                  <div className="container">
                      <div className="banner_text">
                          <p className='title'>First Step</p>
                          <p className="main_title">Have fun studying korean<br /> With boomco</p>
                          <p className="explain">Learn the most trendy Korean.fastest,<br /> Study Korean with my favorite KPOP or K-Drama!</p>
                      </div>
                  </div>
              </div>
              <div className="container">

                  {/* section01 start */}
                  <section className='section section01'>
                      <div className="title_wrap">
                        <p className="title">
                            <span>98.7%</span> customer satisfaction <br />
                            Boomco verified reviews
                        </p>
                            <p className="sub_title">
                                Knowledge shares who have built up their careers and worked hard for years<br />
                                to tens of years share their knowledge and know-how.
                            </p>
                      </div>
                      <div className="slider_wrap">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={18}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {slideData.map((data, idx) => (
                                <SwiperSlide key={'slideData_' + idx }>
                                <div className="slide-top">
                                    <div className="user_img">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div className="user_info">
                                        <p className="user_name">
                                            {data.name}
                                        </p>
                                        <p className="user_month">
                                            {data.month}
                                        </p>
                                    </div>
                                </div>
                                <div className="slide-bot">
                                    <Star data={data} />
                                    <div className="text">
                                        {data.content}
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                      </div>
                  </section>
                  {/* section01 end */}
                  {/* section02 start */}
                  <section className="section section02">
                      <div className="util_wrap">
                          <div className="input_wrap">
                            <input type="text" placeholder='Enter the search term, #tag.'/>
                            <button className='button search'></button>
                          </div>
                          <div className="select_wrap">
                              <select className='select select01'>
                                  <option value="Popularity">Popularity</option>
                                  <option value="test2">test2</option>
                                  <option value="test3">test3</option>
                                  <option value="test4">test4</option>
                                  <option value="test5">test5</option>
                                  <option value="test6">test6</option>
                              </select>
                              <select className='select'>
                                  <option value="Total">Total</option>
                                  <option value="test2">test2</option>
                                  <option value="test3">test3</option>
                                  <option value="test4">test4</option>
                                  <option value="test5">test5</option>
                                  <option value="test6">test6</option>
                              </select>
                          </div>
                      </div>
                      <div className="card_group_wrap">
                          <div className="card_group">
                              <div className="card_group_top">
                                <p className="title">Best Class</p>
                                <button className='button'>the more &gt;</button>
                              </div>
                              <div className="card01_wrap">
                                  <ul className="card_list">
                                      {cardItem.map((card, idx) => (
                                          <Card01 data={card} key={"idx_" + idx} view={true}/>
                                        ))}
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* section02 end */}
                  {/* section03 start */}
                  <section className="section section03">
                      <div className="card_group_wrap">
                        <div className="card_group">
                            <div className="card_group_top">
                            <p className="title">Start Here!</p>
                            <button className='button'>the more &gt;</button>
                            </div>
                            <div className="card01_wrap">
                                <ul className="card_list">
                                    {cardItemSlide.map((cardItem, idx) => (
                                        <Card01 data={cardItem} key={"idx_" + idx} view={true}/>
                                    ))}
                                </ul>
                            </div>
                        </div>
                      </div>
                  </section>
                  {/* section03 end */}
                  {/* section04 start */}
                  <section className="section section04">
                      <div className="banner_wrap">
                          <div className="banner">
                            <img src={require("../assets/images/main_banner.png")} alt="logo" />
                          </div>
                      </div>
                  </section>
                  {/* section04 end */}
                  {/* section05 start */}
                  <section className="section section05">
                      <div className="card_group_wrap">
                        <div className="card_group">
                            <div className="card_group_top">
                            <p className="title">Advance Reservation</p>
                            <button className='button'>the more &gt;</button>
                            </div>
                            <div className="card01_wrap">
                                <ul className="card_list">
                                    {cardItemSlide.map((cardItem, idx) => (
                                        <Card01 data={cardItem} view={false} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                      </div>
                  </section>
                  {/* section05 end */}
              </div>
          </div>
          <Footer />
      </div>
  )
}

export default home