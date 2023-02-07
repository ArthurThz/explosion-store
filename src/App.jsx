import { Routes, Route } from 'react-router-dom';

import Home from './components/Routes/Home/home';
import NavBar from './components/Routes/Navbar/navbar';
import Authentication from './components/Routes/Authentication/Authentication';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
