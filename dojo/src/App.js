import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <div className="container">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Dashboard/>} >
            </Route>
            <Route path="/create"  element={<Create/>} >
            </Route>
            <Route path="/projects/:id"  element={<Project/>} >
            </Route>
            <Route path="/login"  element={<Login/>} >
            </Route>
            <Route path="/signup"  element={<Signup/>} >
            </Route>
          </Routes>
        </div>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
