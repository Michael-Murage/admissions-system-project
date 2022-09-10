import { useNavigate, useParams } from "react-router-dom";

function StudentEdit(props) {
  const navigate = useNavigate()
  
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.name}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.gender}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.id_number}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.admission_number}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.classroom_id}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.course_id}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.age}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.instructor_id}</td>
      <td id={props.id} onClick={()=>navigate(`/edit/${props.id}`)}>{props.status}</td>
    </tr>
  )
}

export default StudentEdit
