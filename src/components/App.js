import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import LandingPage from './LandingPage';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm'
import useFetchData from '../hooks/fetchData';
import StudentsEdit from './StudentsEdit'
import Students from './Students'
import Courses from './Courses'
import NavBar from './NavBar';
import Instructors from './Instructors';
import EditForm from './EditForm';

function App() {
  const [data, error, loading] = useFetchData("https://admission-manage-backend.herokuapp.com/rand")
  
  // console.log(rand);

  // console.log({data, error, loading});
  // console.log(data?.random);
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/signup' element={<SignupForm />}/>
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/instructors' element={<Instructors/>}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/students' element={<Students />}/>
          {/* <Route path={"/students=>" + `${data?.random || 1}edit=true`} element={<StudentsEdit/>}/> */}
          <Route path="/studentsedit" element={<StudentsEdit/>}/>
          <Route path="/edit/:id" element={<EditForm/>}/>
          <Route path='/' element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
