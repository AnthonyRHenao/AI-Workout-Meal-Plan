import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/pages/Home'
import SignUp from '../src/components/pages/SignUp';
import MealPlan from './components/pages/MealPlan';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/signup' exact Component={SignUp} />
        <Route path= '/plans' exact Component={MealPlan} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
