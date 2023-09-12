
import './App.css';
import { Route , Routes , BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Floors from './pages/Floors';
import Content from './pages/Content';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes > 
    <Route path='/' element={<Main />} />
    <Route path='/floors' element={<Floors />} />
    <Route path='/home' element={<Content />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
