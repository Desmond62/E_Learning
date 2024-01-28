import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Course from './Components/Course'
import Course_details from './Components/Course_details'
import ErrorPage from './Components/ErrorPage'
import AfterEnroll from './Components/AfterEnroll'
import StudentDashboard from './Student/StudentDashboard'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contacts />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/course-details' element={<Course_details />}></Route>
        <Route path='/student-dashboard' element={<StudentDashboard/>}></Route>
        <Route path='/page-error' element={<ErrorPage />}></Route>
        <Route path='/after-enroll' element={<AfterEnroll/>}></Route>
      </Routes>
    </div>
  )
}

export default App




    // <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>

