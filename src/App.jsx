import Home from "./components/Routes/Home/home"

import { Routes, Route, } from 'react-router-dom'

import NavBar from "./components/Routes/Navbar/navbar"
import SignIn from "./components/Routes/Sign-in/sign-in"

function App() {
  const Shop = () => {
    return <h1>Im shop</h1>
  }
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>

  )
}

export default App
