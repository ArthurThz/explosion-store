import Home from "./components/Routes/Home/home"

import { Routes, Route, Outlet } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  )
}

export default App
