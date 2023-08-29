import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Homes'
import Menu from './pages/Menu'
import UserCreate from './pages/user/userCreate'
import UserSignIn from './pages/user/userSignin'
import AdminCreate from './pages/admin/adminCreate'
import AdminSignIn from './pages/admin/adminSignin'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/account/user/create' element={<UserCreate />} />
      <Route path='/account/user/signin' element={<UserSignIn />} />
      <Route path='/account/admin/create' element={<AdminCreate />} />
      <Route path='/account/admin/signin' element={<AdminSignIn />} />
    </Routes>
  )
}

export default App
