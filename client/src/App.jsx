import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import InterviewPage from './pages/interviewPage'
import { useEffect } from 'react'

import axios from 'axios'
import { setUserData } from './redux/userSlice'
import {useDispatch} from 'react-redux'
import Pricing from './pages/Pricing'
import InterviewHistory from './pages/interviewHistory'

import InterviewReport from './pages/interviewReport'

export const serverUrl = "https://interviewiq-backend-mb1b.onrender.com"
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getUser = async()=>{
      try {
        const result = await axios.get(serverUrl + "/api/user/current-user",{withCredentials:true})
        dispatch(setUserData(result.data))
        // console.log(result.data)
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null))
      }
    }
    getUser()
  },[dispatch])
  return (
   <Routes>
  
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
      <Route path='/history' element={<InterviewHistory/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/report/:id' element={<InterviewReport/>}/>
   </Routes>
  )
}

export default App
