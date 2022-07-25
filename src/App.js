import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SurahDetail from './components/SurahDetail/SurahDetail';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/surah/:id' element={<SurahDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
