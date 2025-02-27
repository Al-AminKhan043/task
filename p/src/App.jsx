import './App.css';  // Keep this for additional custom styling if necessary.
import Payment from './components/Payment';
import Guide from './components/Guide';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
