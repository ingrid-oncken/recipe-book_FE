import './App.css'
import Home from './Components/Home'
import MainNavbar from './Components/MainNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" exatct element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
