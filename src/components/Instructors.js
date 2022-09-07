import useFetchData from "../hooks/fetchData"
import StudentsEdit from "./StudentsEdit"

function Instructors() {
  const [url, setUrl, fetchData] = useFetchData()
  function handleSubmit(){
    return <StudentsEdit />
  }
  return (
    <div>
      {handleSubmit()}
    </div>
  )
}

export default Instructors