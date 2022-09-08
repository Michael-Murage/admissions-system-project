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
import { useEffect } from 'react';

function App() {
  const [url, setUrl, fetchData] = useFetchData()
  let rand;
  try{
    // setUrl("http://localhost:9292/rand")
    rand = fetchData("http://localhost:9292/rand") 
  }
  catch(err){
    console.log(err);
  }
  const rand1 = 1
  console.log(rand?.random);
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupForm />}/>
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/instructors' element={<Instructors/>}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/students' element={<Students />}/>
          <Route path={"/students/" + `${rand?.random || rand1}edit=true`} element={<StudentsEdit/>}/>
          <Route path='/' element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
  debugger
}

export default App;
