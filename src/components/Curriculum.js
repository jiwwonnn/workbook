import React, { useState } from 'react'

const Curriculum = () => {

  // 드롭다운 메뉴 어떻게만드는거지 ... ????
  const [accordionOpen, setAccordionOpen] = useState(true);

  const onClickOpen = () => {
    setAccordionOpen(!accordionOpen);
  }

  return (
    <div className="curriculum_wrap">
      <div className="curri">
        <div className="info_wrap">
          <p className="text">Curriculum</p>
          <p className="name">Total 118 Class • 19 hours and 22 minutes of class</p>
          <p className="detail">
          Video, class notes, and attachments are provided for this class. Check the content through preview
          </p>
        </div>
        <div className="accordion_wrap">
          <div className="accordion">
            <div className="accordion_title" onClick={onClickOpen}>
              <p className="name">01 - have fun studying korean with boomco</p>
              <p className="info">Lesson 3 ∙ 2 hours 6 minutes</p>
            </div>
            
              {(accordionOpen &&
                  <div className="accordion_content">
                  <div className="content_list">
                  <p className="name">start korean:pronunciation,hangul, and consonant sounds combined</p>
                  <p className="time">05:36</p>
                </div>
                <div className="content_list">
                  <p className="name">start korean:pronunciation,hangul, and consonant sounds combined</p>
                  <p className="time">05:36</p>
                </div>
                <div className="content_list">
                  <p className="name">start korean:pronunciation,hangul, and consonant sounds combined</p>
                  <p className="time">05:36</p>
                </div>
                </div>
               )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum