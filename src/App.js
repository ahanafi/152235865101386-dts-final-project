import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SurahDetail from './components/SurahDetail/SurahDetail';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/surah/:id' element={<SurahDetail />} />
    </Routes>
  );
}

export default App;
