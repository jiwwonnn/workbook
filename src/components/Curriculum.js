import React, { useState } from 'react'
import Lecture from './Lecture'

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
        <Lecture lectureList={curriList}/>
      </div>
    </div>
  )
}

export default Curriculum