import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';


function App() {
  // check if any user already login.
  const { authIsReady, user } = useAuthContext();
  return (
    <div  >
      {authIsReady && ( // set this to enable the app to render when auth receive value of user or user is null
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="/signup"  element={!user ? <Signup /> : <Navigate to="/" />}/>
              <Route path="/login"  element={!user ? <Login /> : <Navigate to="/" />}/>
            </Routes>
          </main>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
