import Home from "./components/Routes/Home/home"

import { Routes, Route, } from 'react-router-dom'

import NavBar from "./components/Routes/Navbar/navbar"

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>

  )
}

export default App
