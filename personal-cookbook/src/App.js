import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import SideNav from './Components/SideNav'
import FullRecipe from './Components/FullRecipe'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SideNav />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fullrecipe" element={<FullRecipe />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
