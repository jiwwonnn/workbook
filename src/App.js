import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/styles/exports.css"
import Home from './pages/Home';
import Class from './pages/Class';
import Community from './pages/Community';
import Workbook from './pages/Workbook';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/community" element={<Community />} />
        <Route path="/workbook" element={<Workbook />} />
      </Routes>
    </Router>
  );
}

export default App;
