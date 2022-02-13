
import './App.css';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Transaction from './pages/Transaction/Transaction'

function App() {
  return (<>
  <BrowserRouter>
  <Navbar/>
  <main>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/singup" element={<Signup />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/transaction/:id" element={<Transaction />} />
  </main>
  </BrowserRouter>
  </>
  );
}

export default App;
