import React from 'react'
import Star from './Star'

const Card01 = ({ data , view }) => {
  return (
      <li className='card_item'>
         <div className="img_wrap">
            <img src={data.image} alt="" />
        </div>
        <div className="text_wrap">
            <p className="company">{data.company}</p>
            <p className="title">{data.title}</p>
            <p className="text">{data.text}</p>
        </div>
        {view &&
          <div className="info">
            <Star data={data} />
            <div className="date_wrap">
              <p className="date">(504)</p>
            </div>
          </div>
        }

      </li>
  )
}

export default Card01