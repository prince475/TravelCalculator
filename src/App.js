import { useState } from 'react';
import './Styles/output.css'
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Policy from './Components/Policy';
import Benefits from './Components/Benefits';
import BenefitsCard from './Components/BenefitsCard';
import NavbarCalc from './Components/NavbarCalc';
import CalculatedBenefits from './Components/CalculatedBenefits';
import ImageSlide from './Components/ImageSlide';


function App() {
  const [selectedPlan, setSelectedPlan] = useState('Gold');

  return (
    <div className="App" >
     <NavbarCalc/>
     <ImageSlide/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4 pt'/>
    <Benefits selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
    <hr className='border-sky-400 w-3/4 m-auto mb-4'/>
    <Calculator selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <CalculatedBenefits/>
    <Policy/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <Home/> 
    </div>
  );
}

export default App;
