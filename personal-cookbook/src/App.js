import './App.css'
import Login from './Components/Login'
import Footer from './Components/Footer'
import SideNav from './Components/SideNav'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<SideNav />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App
