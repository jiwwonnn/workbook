import React , { useState } from 'react'
import CommunityList from '../components/CommunityList'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Community = () => {

  const communityList = [
    {
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date : "2021.03.13",
      image :require("../assets/images/slide_user_img.png"),
      userid : "pkmil92",
      heart: "15",
      comment : "26",
      view : "523",
      hashtag : ["#boomco", "#fun", "#Basic"]
    },
    {
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date : "2021.03.13",
      image :require("../assets/images/slide_user_img.png"),
      userid : "pkmil92",
      heart: "15",
      comment : "26",
      view : "523",
      hashtag : ["#boomco", "#fun"]
    },
    {
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date : "2021.03.13",
      image :require("../assets/images/slide_user_img.png"),
      userid : "pkmil92",
      heart: "15",
      comment : "26",
      view : "523"
    },
    {
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date : "2021.03.13",
      image :require("../assets/images/slide_user_img.png"),
      userid : "pkmil92",
      heart: "15",
      comment : "26",
      view : "523"
    },
    {
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date : "2021.03.13",
      image :require("../assets/images/slide_user_img.png"),
      userid : "pkmil92",
      heart: "15",
      comment : "26",
      view : "523"
    },
  ]

    return (
        <div className="wrap">
            <Header />
            <div className="content">
              <div className="container">
                <div className="commu_banner">
                  <img src={require("../assets/images/communite_img.png")} alt="logo" />
                </div>
                <div className="commu_util">
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
                      <button className='button writing'>
                        writing
                      </button>
                  </div>
                </div>
                <ul className="commu_list">
                  {communityList.map((list, idx)=> (
                    <CommunityList key={idx} list={list}/>
                  ))}
                </ul>
                </div>
              </div>
            </div>
            <Footer />
        </div>
    )
}

export default Community