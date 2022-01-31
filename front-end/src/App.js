import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <div  >
      <BrowserRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/signup" element={<Signup /> } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      </BrowserRouter>
      </div>
  );
}

export default App;
