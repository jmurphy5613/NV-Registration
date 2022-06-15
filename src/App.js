import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Registration from './pages/resgistration/registration';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:school" element={ <Registration /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
