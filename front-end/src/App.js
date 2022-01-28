import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
      </BrowserRouter>
   
  );
}

export default App;
