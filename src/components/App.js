import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import LandingPage from './LandingPage';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm'
import Instructors from './Instructors';
import useFetchData from '../hooks/fetchData';
import StudentsEdit from './StudentsEdit'
import Students from './Students'
import Courses from './Courses'
import NavBar from './NavBar';
import { useState } from 'react';

function App() {
  const [data, error, loading] = useFetchData("http://localhost:9292/rand")
  const [cred, setCred] = useState({
    username: '',
    pass: ''
  })
  // console.log(rand);

  console.log({data, error, loading});
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/signup' element={<SignupForm />}/>
          <Route path='/login' element={<LoginForm cred={cred} setCred={setCred}/>}/>
          <Route path='/instructors' element={<Instructors/>}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/students' element={<Students />}/>
          <Route path={"/students/" + `${data?.random || 1}edit=true`} element={<StudentsEdit/>}/>
          <Route path='/' element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
