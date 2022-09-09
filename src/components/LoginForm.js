import Students from "./Students";
import StudentsEdit from "./StudentsEdit";

function LoginForm({ cred, setCred }) {
  const handleChange =(e)=>{
    let id = e.target.id
    let val = e.target.value
    setCred({
      ...cred,
      [id]: val
    })
  }

  const handleSubmit =(e, <Comp1/>, <Comp2/>)=>{
    e.preventDefault()
    fetch("http://localhost:9292/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: cred.username,
        password: cred.pass
      })
    })
    .then(resp => resp.json())
    .then((data)=>{
      alert("Welcome", data.username)
      if (data.password === 240322 && data.username === "Michael" || data.password === 230721 && data.username === "admin" ) {
        console.log("correct");
	  return <Comp1/>
//        return (<StudentsEdit />)
        }
      else{
        console.log("incorrect");
	return <Comp2/>
       // return (<Students />)
      }
    })
    setCred({
      username: '',
      pass: ''
    })
  }

  return (
    <form className="vh-100 gradient-custom" onSubmit={()=>handleSubmit(e, <StudentsEdit/>, <Students/>)}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input type="text" id="username" value={cred.username} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="username">Email or Username</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="password" id="pass" value={cred.pass} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="pass">Password</label>
                  </div>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>   
                </div>
                <p>For aspiring students, click <a href="/signup">here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
