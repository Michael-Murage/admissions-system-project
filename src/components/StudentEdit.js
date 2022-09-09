import EditForm from "./EditForm"

function StudentEdit(props, Comp) {
  const editTable =(e)=>{
    console.log(props);
    return <Comp props={props}/>
  }
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td id={props.id} onClick={()=>editTable(props, <EditForm />)}>{props.name}</td>
      <td id={props.id} onClick={()=>editTable(props, <EditForm />)}>{props.gender}</td>
      <td id={props.id} onClick={()=>editTable(props, <EditForm />)}>{props.id_number}</td>
      <td id={props.id} onClick={()=>editTable(props, <EditForm />)}>{props.admission_number}</td>
      <td id={props.id} onClick={()=>editTable(props, <EditForm />)}>{props.classroom_id}</td>
      <td id={props.id} onClick={editTable}>{props.course_id}</td>
      <td id={props.id} onClick={editTable}>{props.age}</td>
      <td id={props.id} onClick={editTable}>{props.instructor_id}</td>
      <td id={props.id} onClick={editTable}>{props.status}</td>
    </tr>
  )
}

export default StudentEdit
