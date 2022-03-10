import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/styles/exports.css"
import Home from './pages/Home';
import Class from './pages/Class';
import Community from './pages/Community';
import Workbook from './pages/Workbook';
import Mypage from './pages/Mypage';
import ScrollTop from './components/ScrollTop';
import CommuDetail from './components/CommuDetail';


function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/detail" element={<CommuDetail />} />
        <Route path="/workbook" element={<Workbook />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
