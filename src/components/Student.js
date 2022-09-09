
function Student(props) {
  // console.log(props);
  // debugger
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.gender}</td>
      <td>{props.id_number}</td>
      <td>{props.admission_number}</td>
      <td>{props.classroom_id}</td>
      <td>{props.course_id}</td>
      <td>{props.age}</td>
      <td>{props.instructor_id}</td>
      <td>{props.status}</td>
    </tr>
  )
}

export default Student