import logo from './logo.svg';
import { useState } from 'react';
// import './App.css';
import './Styles/output.css'
import ClientPage from './Components/ClientPage';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Policy from './Components/Policy';
import Benefits from './Components/Benefits';
import BenefitsCard from './Components/BenefitsCard';
import Navbar from './Components/NavbarCalc';
import NavbarCalc from './Components/NavbarCalc';
import Form from './Components/Form';
import CalculatedBenefits from './Components/CalculatedBenefits';


function App() {
  const [selectedPlan, setSelectedPlan] = useState('Gold');

  return (
    <div className="App" >
    <NavbarCalc/>
    <BenefitsCard/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4'/>
    <Benefits selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
    <hr className='border-sky-400 w-3/4 m-auto mb-4'/>
    <Calculator selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <CalculatedBenefits/>
    <Policy/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <Home/>
    {/* <Form/> */}
    </div>
  );
}

export default App;
