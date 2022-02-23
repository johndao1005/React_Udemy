import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Transaction from './pages/Transaction/Transaction'
import {useAuthContext} from './hooks/userHooks'
function App() {
  const { user } = useAuthContext()
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={user?<Dashboard />:<Navigate to="/login"/>} />
          <Route exact path="/transaction/:id" element={user?<Transaction />:<Navigate to="/login"/>} />
          <Route exact path="/signup" element={user?<Navigate to="/"/>:<Signup />} />
          <Route exact path="/login" element={user?<Navigate to="/"/>:<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
