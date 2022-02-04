import { Router, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Router>
            <Route exact path="/">
            </Route>
            <Route path="/create">
            </Route>
            <Route path="/projects/:id">
            </Route>
            <Route path="/login">
            </Route>
            <Route path="/signup">
            </Route>
          </Router>
        </div>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
