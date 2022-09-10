import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const {id} = useParams()
  const [data, setData] = useState({
    name: '',
    age: '',
    id_number: '',
    gender: '',
    status: '',
    admission_number: '',
    classroom_id: '',
    course_id: '',
    instructor_id: ''
  })
  const navigate = useNavigate()
  useEffect(()=>{
    fetch(`http://localhost:9292/edit/${id}`)
    .then(res => res.json())
    .then(items=> setData(items))
    .catch(err => console.log(err)
  )}, [])
  

  const handleChange =(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    fetch(`http://localhost:9292/students/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data?.name,
        age: data?.age,
        id_number: data?.id_number,
        gender: data?.gender,
        status: data?.status,
        admission_number: data?.admission_number,
        classroom_id: data?.classroom_id,
        course_id: data?.course_id,
        instructor_id: data?.instructor_id
      })
    })
    .then(resp=> resp.json())
    .then(items=> console.log(items))
    .catch(err => console.log(err))
    setData({
      name: '',
      age: '',
      id_number: '',
      gender: '',
      status: '',
      admission_number: '',
      classroom_id: '',
      course_id: '',
      instructor_id: ''
    })
    navigate('/studentsedit')
  }

  const deleteData = (e)=>{
    fetch(`http://localhost:9292/students/${id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(items=> console.log(items))
    .catch(err=>console.log(err))
    navigate('/studentsedit')
  }

  return (
    <form className="vh-100 gradient-custom" onSubmit={handleSubmit}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Editor</h2>
                  <p className="text-white-50 mb-5">Edit a student's details here</p>
                {/* Form start */}
                  <div className="form-outline form-white mb-4">
                    <input type="text" name="name" placeholder={data?.name} value={data.name} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="name">Your name</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="number" name="age" placeholder={data?.age} value={data.age} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="age">Age</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="number" name="id_number" placeholder={data?.id_number} value={data.id_number} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="id_number">ID number</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="text" name="gender" placeholder={data?.gender} value={data.gender} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="gender">Gender e.g Male, Female</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="text" name="status" placeholder={data?.status} value={data.status} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="status">Status i.e inactive, active or pending</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="number" name="admission_number" placeholder={data.admission_number} value={data.admission_number} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="admission_number">Enter student's admission number</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="number" name="classroom_id" placeholder={data.classroom_id} value={data.classroom_id} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="classroom_id">Which classroom number</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="number" name="instructor_id" placeholder={data.instructor_id} value={data.instructor_id} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="instructor_id">Instructor by id</label>
                  </div>
                  {/* Forms end */}
                  
                  <button className="btn btn-outline-light btn-lg px-5" type="submit" >Submit</button>
                  <br/><br/><br/><br/>
                  <button className="btn btn-outline-danger btn-lg px-5" onClick={deleteData}>Delete Student</button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default EditForm