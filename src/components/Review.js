import React from 'react'
import Star from './Star'

const Review = () => {
  return (
    <div className="review_wrap">
      <div className="review">
        <div className="info_wrap">
          <div className="info">
            <p className="text">Review</p>
            <p className="number">(1,234)</p>
          </div>
          <p className="sub_text">This is a testimonial written bt students.</p>

          <div className="score_wrap">
            <div className="score_left">
              <p className="score_mark">4.5</p>
              {/* <Star /> */}
              <p className="number">(1,234)</p>
            </div>
            <div className="score_right">
              <div className="graph_wrap">
                <div className="graph">
                  <div className="score">5.0</div>
                  <div className="line_wrap">
                    <div className="line" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div className="graph">
                  <div className="score">4.0</div>
                  <div className="line_wrap">
                    <div className="line" style={{width:"65%"}}></div>
                  </div>
                </div>
                <div className="graph">
                  <div className="score">3.0</div>
                  <div className="line_wrap">
                    <div className="line" style={{width:"45%"}}></div>
                  </div>
                </div>
                <div className="graph">
                  <div className="score">2.0</div>
                  <div className="line_wrap">
                    <div className="line" style={{width:"25%"}}></div>
                  </div>
                </div>
                <div className="graph">
                  <div className="score">1.0</div>
                  <div className="line_wrap">
                    <div className="line" style={{width:"15%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review