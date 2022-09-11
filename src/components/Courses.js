import React from 'react'
import useFetchData from '../hooks/fetchData'
import Course from './Course'

function Courses() {
  const [courses, courseLoading, courseError] = useFetchData("https://admission-manage-backend.herokuapp.com/courses")
  
  return (
    <div>
      {courses?.map(elem => {
        return <Course courseName={elem.course_name} key={elem.id} period={elem.course_period}/>
      })}
    </div>
  )
}

export default Courses