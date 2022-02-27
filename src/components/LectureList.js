import React from 'react'

const LectureList = ({ lecture, active, index, handleMenu }) => {
  return (
    <div className="accordion">
    <div className="accordion_title" onClick={()=>handleMenu(index)}>
        <p className="name">{lecture.name}</p>
        <p className="info">{lecture.info}</p>
    </div>
    {active && (lecture.list.map(item=>
        <div className="accordion_content">
            <div className="content_list">
                <p className="name">{item.listname}</p>
                <p className="time">{item.listtime}</p>
            </div>
        </div>
    ))}
  </div>
  )
}

export default LectureList