import React from 'react'

const Star = ({ data }) => {

const getStarRank = (count) => {
    let starList = [];
    for(let i=0; i<count; i++) {
        starList.push(i);
    }
    return starList
}

  return (
    <div className="star_wrap">
        <div className="star">
            {getStarRank(data.count).map(rank => <div className="star_item" key={"star_" + rank}></div>)}
        </div>
        <div className="star_count">
            {data.count}
        </div>
    </div>
  )
}

export default Star