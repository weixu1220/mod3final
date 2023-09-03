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
import Map from './pages/map/Map'
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
    console.log(tokenSession)
    console.log(tokenLocal)
    console.log(isAdminSession)
    console.log(isAdminLocal)
    // Check if a token exists in session storage or local storage
    if (tokenSession) {
      if (isAdminSession === "false") {
        getUser();
      } else if (isAdminSession === "true") {
        getAdmin();
      }
    } else if (tokenLocal) {
      tokenSession = tokenLocal
      isAdminSession = isAdminLocal
      console.log(tokenSession)
      console.log(tokenLocal)
      console.log(isAdminSession)
      console.log(isAdminLocal)
      if (isAdminLocal === "false") {
        getUser();
      } else if (isAdminLocal === "true") {
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
        <Route path='/account/user/create' element={<UserCreate setUser={setUser} />} />
        <Route path='/account/user/signin' element={<UserSignIn setUser={setUser} />} />
        <Route path='/account/admin/create' element={<AdminCreate setAdmin={setAdmin} />} />
        <Route path='/account/admin/signin' element={<AdminSignIn setAdmin={setAdmin} />} />
        <Route path='/store-locator' element={<Map/>} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App
