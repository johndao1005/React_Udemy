import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Transaction from './pages/Transaction/Transaction'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/transaction/:id" element={<Transaction />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
