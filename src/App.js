import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/styles/exports.css"
import Home from './pages/Home';
import Class from './pages/Class';
import Community from './pages/Community';
import Workbook from './pages/Workbook';
import Mypage from './pages/Mypage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/community" element={<Community />} />
        <Route path="/workbook" element={<Workbook />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
