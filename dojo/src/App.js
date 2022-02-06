import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import OnlineUsers from './components/OnlineUsers';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';


function App() {
  const { authIsReady, user } = useAuthContext()
  const returnToLogin = (<Navigate to="/login" />)
  const returnToDashboard = (<Navigate to="/" />)
  return (
    <div className="App">
       {authIsReady && (
      <BrowserRouter>
      {user && <Sidebar />}
        <div className="container">
          <NavBar />
          <Routes>
            <Route exact path="/" element={user?<Dashboard/>:returnToLogin} >
            </Route>
            <Route path="/create"  element={user?<Create />:returnToLogin}>
            </Route>
            <Route path="/projects/:id"  element={user?<Project/>:returnToLogin}>
            </Route>
            <Route path="/login"  element={!user?<Login/>:returnToDashboard} >
            </Route>
            <Route path="/signup"  element={!user?<Signup/>:returnToDashboard} >
            </Route>
          </Routes>
        </div>
        {user && <OnlineUsers />}
      </BrowserRouter>)}
    </div>
  );
}

export default App;
