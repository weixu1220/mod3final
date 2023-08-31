import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

import Home from './pages/Homes'
import Menu from './pages/Menu'
import UserCreate from './pages/user/userCreate'
import UserSignIn from './pages/user/userSignin'
import AdminCreate from './pages/admin/adminCreate'
import AdminSignIn from './pages/admin/adminSignin'
import Header1 from './components/Header1'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [user, setUser] = useState({})
  const [admin,setAdmin] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [loggedIn,setLoggedIn] = useState()

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    setUser({});
    setAdmin({});
    setLoggedIn(undefined);
  };

  async function getUser() {
    console.log(localStorage.getItem('token'))
    try {
      const response = await axios.get('/api/users', {
        headers: {
          Authorization: ` Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.data){
        console.log(response.data)
        response.data.admin = false
        setUser(response.data)
        setLoggedIn(response.data.firstname)
      }
      setIsLoading(false)
    } catch (err) {
      console.log(err.message)
    }
    
  }

  async function getAdmin() {
    try {
      const response = await axios.get('/api/admins', {
        headers: {
          Authorization: ` Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.data){
        response.data.admin = true
        setAdmin(response.data)
        setLoggedIn (response.data.firstname)
      }
      setIsLoading(false)
    } catch (err) {
      console.log("Admin not found!")
    }
    
  }

  useEffect(()=>{
    let token = localStorage.getItem("token")
    let isAdmin = localStorage.getItem("admin")
    console.log(token)
    console.log(isAdmin)
    if (token){
      if (isAdmin === "true"){
        getAdmin()
      }else{
        getUser()
    }}else{
      setIsLoading(false)
    }
  },[])

  console.log(user)
  console.log(loggedIn)
  return (
    <div>
      <Header1 loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
      <Route path='/' element={<Home current={loggedIn} />} />
      <Route path='/menu' element={<Menu current={loggedIn} />} />
      <Route path='/account/user/create' element={<UserCreate setUser={setUser} />} />
      <Route path='/account/user/signin' element={<UserSignIn setUser={setUser} />} />
      <Route path='/account/admin/create' element={<AdminCreate setAdmin={setAdmin} />} />
      <Route path='/account/admin/signin' element={<AdminSignIn setAdmin={setAdmin} />} />
    </Routes>
    <Footer />
    </div>
    
  )
}

export default App
