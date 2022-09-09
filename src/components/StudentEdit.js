import EditForm from "./EditForm"

function StudentEdit(props) {
  const editTable =(e)=>{
    console.log(props);
    return <EditForm props={props}/>
  }
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td id={props.id} onClick={editTable}>{props.name}</td>
      <td id={props.id} onClick={editTable}>{props.gender}</td>
      <td id={props.id} onClick={editTable}>{props.id_number}</td>
      <td id={props.id} onClick={editTable}>{props.admission_number}</td>
      <td id={props.id} onClick={editTable}>{props.classroom_id}</td>
      <td id={props.id} onClick={editTable}>{props.course_id}</td>
      <td id={props.id} onClick={editTable}>{props.age}</td>
      <td id={props.id} onClick={editTable}>{props.instructor_id}</td>
      <td id={props.id} onClick={editTable}>{props.status}</td>
    </tr>
  )
}

export default StudentEdit