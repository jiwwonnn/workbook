import React, { useCallback , useState } from 'react'
import LectureList from './LectureList'


const Lecture = ({ lectureList }) => {
    const [active, setActive] = useState(-1);
    const handleMenu = useCallback((index) => setActive(index), []);
    return (
        <div className="accordion_wrap">
            {lectureList?.map((lecture, index) => (
                 <LectureList 
                    lecture={lecture}
                    active={index === active}
                    index={index}
                    handleMenu={handleMenu}
                /> 
            ))}
        </div>
    )
}

export default Lecture