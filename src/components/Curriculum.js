import React, { useState } from 'react'

const Curriculum = () => {

  const curriList = [
    {
        name:'01 - Have fun studying Korean with boomco',
        info: 'Lesson 3 ∙ 2 hours 6 minutes',
        list :[ 
          {
            listname : 'Start Korean: Pronunciation, Hangul, and consonant sounds combined',
            listtime : '05:36',
          },
          {
            listname : 'Basic Korean Grammar Structure (1)',
            listtime : '05:36',
          },
          {
            listname : 'Basic Korean Grammar Structure (2)',
            listtime : '05:36',
          },
        ]
    },
    {
      name:'02 - Basic Korean for everyday life',
      info: 'Lesson 7 ∙ 2 hours 6 minutes',
      list :[ 
        {
          listname : 'Start Korean: Pronunciation, Hangul, and consonant sounds combined',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (1)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (2)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (3)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (4)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (5)',
          listtime : '05:36',
        },
      ]
    },
    {
      name:'03 - Have fun studying Korean with boomco',
      info: 'Lesson 3 ∙ 2 hours 6 minutess',
      list :[ 
        {
          listname : 'Start Korean: Pronunciation, Hangul, and consonant sounds combined',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (1)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (2)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (3)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (4)',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (5)',
          listtime : '05:36',
        },
      ]
    },
    {
      name:'04 - Have fun studying Korean with boomco',
      info: 'Lesson 3 ∙ 2 hours 6 minutess',
      list :[ 
        {
          listname : 'Start Korean: Pronunciation, Hangul, and consonant sounds combined',
          listtime : '05:36',
        },
        {
          listname : 'Basic Korean Grammar Structure (1)',
          listtime : '05:36',
        },
      ]
    },
  ]

  // 드롭다운 메뉴 어떻게만드는거지 ... ????


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
            <div className="accordion_title">
                <p className="name">3</p>
                <p className="info">4</p>
            </div>
            <div className="accordion_content">
                <div className="content_list">
                    <p className="name">34</p>
                    <p className="time">34</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum