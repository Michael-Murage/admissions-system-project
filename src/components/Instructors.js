import useFetchData from "../hooks/fetchData"
import Instructor from "./Instructor"

function Instructors() {
  const [instructors, instructLoading, instructError] = useFetchData("https://admission-manage-backend.herokuapp.com/instructors")
  // console.log({instructors, instructLoading, instructError});
  // fetch("http://localhost:9292/instructors")
  // .then(resp.json())
  // .then(instructors => console.log(instructors))
  
  return (
    <div>
      {instructors?.map(elem =>{
        return <Instructor 
         name={elem.name} 
         employee_id={elem.employee_id}
        />
      })}
    </div>
  )
}

export default Instructors