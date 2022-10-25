import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;