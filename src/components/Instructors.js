import useFetchData from "../hooks/fetchData"
import Instructor from "./Instructor"

function Instructors() {
  const [data, loading, error] = useFetchData("http://localhost:9292/instructors")
  console.log({data, loading, error});
  // fetch("http://localhost:9292/instructors")
  // .then(resp.json())
  // .then(data => console.log(data))
  
  return (
    <div>
      {data?.map(elem =>{
        console.log(elem);
        return <Instructor />
      })}
    </div>
  )
}

export default Instructors