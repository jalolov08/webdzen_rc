import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Floors from './pages/Floors';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes > 
    <Route path='/' element={<Main />} />
    <Route path='/floors' element={<Floors />} />

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
