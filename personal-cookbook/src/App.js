import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import SideNav from './Components/SideNav'
import FullRecipe from './Components/FullRecipe'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<SideNav />} className="App">
            <Route path="/fullrecipe" element={<FullRecipe />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
