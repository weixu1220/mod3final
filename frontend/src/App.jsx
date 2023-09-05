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
import axios from './api'
import MapIndex from './pages/map/MapIndex'


function App() {

  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState()

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from local storage
    sessionStorage.removeItem('token'); // Clear token from session storage
    sessionStorage.removeItem('admin');
    localStorage.removeItem('admin');
    setUser({});
    setAdmin({})
    setLoggedIn()
  }

  async function getUser() {
    try {
      const response = await axios.get('/api/users', {
        headers: {
          Authorization: ` Bearer ${sessionStorage.getItem('token')}`
        }
      })
      if (response.data) {
        response.data.admin = false
        setUser(response.data)
        setLoggedIn(response.data.firstname)
      }
      setIsLoading(false)
    } catch (err) {
      console.log("User is not found!")
    }

  }

  async function getAdmin() {
    try {
      const response = await axios.get('/api/admins', {
        headers: {
          Authorization: ` Bearer ${sessionStorage.getItem('token')}`
        }
      })
      if (response.data) {
        response.data.admin = true
        setAdmin(response.data)
        setLoggedIn(response.data.firstname)
      }
      setIsLoading(false)
    } catch (err) {
      console.log("Admin not found!")
    }

  }

  useEffect(() => {
    let tokenSession = sessionStorage.getItem("token");
    let tokenLocal = localStorage.getItem("token");
    let isAdminSession = sessionStorage.getItem("admin");
    let isAdminLocal = localStorage.getItem("admin");

    // Check if a token exists in session storage or local storage
    if (tokenSession) {
      console.log("checkp1")
      if (isAdminSession === "false") {
        getUser();
      } else if (isAdminSession === "true") {
        getAdmin();
      }
    } else if (tokenLocal) {
      console.log("checkp2")
      tokenSession = tokenLocal
      isAdminSession = isAdminLocal

      if (isAdminLocal === "false") {
        console.log("checkp3")
        getUser();
      } else if (isAdminLocal === "true") {
        console.log("checkp4")
        getAdmin();
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <Header1 loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home loggedIn={loggedIn} />} />
        <Route path='/menu' element={<Menu loggedIn={loggedIn} />} />
        <Route path='/account/user/create' element={<UserCreate setLoggedIn={setLoggedIn} setUser={setUser} />} />
        <Route path='/account/user/signin' element={<UserSignIn setLoggedIn={setLoggedIn} setUser={setUser} />} />
        <Route path='/account/admin/create' element={<AdminCreate setLoggedIn={setLoggedIn} setAdmin={setAdmin} />} />
        <Route path='/account/admin/signin' element={<AdminSignIn setLoggedIn={setLoggedIn} setAdmin={setAdmin} />} />
        <Route path='/store-locator' element={<MapIndex/>} />
      </Routes>
      
    </div>

  )
}

export default App
