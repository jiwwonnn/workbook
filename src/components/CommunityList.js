import React from 'react'
import { useNavigate } from "react-router-dom";
import Hashtag from './Hashtag'

const CommunityList = ({ list }) => {

    const navigate = useNavigate();
    const onClickItem = () => {
        navigate('/community/detail')
    }
    const hashtagList = ["#Boomco" , "#Fun", "#Basic"]

  return (
    <li className="commu_item" onClick={onClickItem}>
        <div className="commu_top">
            <div className="text_wrap">
                <p className="title">{list.title}</p>
                <p className="date">{list.date}</p>
            </div>
            <div className="info_wrap">
                <div className="img_wrap">
                    <img src={list.image} alt="logo" />
                </div>
                <p className="user_id">
                    {list.userid}
                </p>
            </div>
        </div>
        <div className="commu_bot">
            <div className="tag_wrap">
                {hashtagList.map((taglist, idx)=> (
                    <Hashtag list={list} taglist={taglist} key={idx} />
                ))}
            </div>
            <div className="btns_wrap">
                <div className="btns heart">{list.heart}</div>
                <div className="btns comment">{list.comment}</div>
                <div className="btns view">{list.view}</div>
            </div>
        </div>
    </li>
  )
}

export default CommunityList