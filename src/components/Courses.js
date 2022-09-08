import React from 'react'
import useFetchData from '../hooks/fetchData'
import Course from './Course'

function Courses() {
  const[data, loading, error] = useFetchData("http://localhost:9292/courses")
  
  return (
    <div>
      {data?.map(elem => {
        return <Course courseName={elem.course_name} key={elem.id} period={elem.course_period}/>
      })}
    </div>
  )
}

export default Courses