import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import FullRecipe from './Components/FullRecipe'
import Home from './Components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" exact element={<Layout />} className="App">
            <Route path="/" element={<Home />} />
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
