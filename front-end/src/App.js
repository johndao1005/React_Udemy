import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {
  const {mode} =useTheme()

  return (
    <div className={`App ${mode}`} >
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/search" element={<Search /> } exact/>
          <Route path="/recipes/:id" element={<Recipe exact/>} />
          <Route path="/create" element={<Create />} exact/>
        </Routes>
      </main>
      </BrowserRouter>
      </div>
  );
}

export default App;
