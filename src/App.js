import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './section/homepage';
import Quotes from './section/paragraph';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/paragraph" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
