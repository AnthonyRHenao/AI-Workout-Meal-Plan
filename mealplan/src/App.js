import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/pages/Home'
import SignUp from '../src/components/pages/SignUp';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/signup' exact Component={SignUp} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
