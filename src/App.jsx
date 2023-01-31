import { Routes, Route } from 'react-router-dom';

import Home from './components/Routes/Home/home';
import NavBar from './components/Routes/Navbar/navbar';
import SignIn from './components/Routes/Sign-in/sign-in';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
