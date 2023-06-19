import { useState } from 'react';
import './Styles/output.css'
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Policy from './Components/Policy';
import Benefits from './Components/Benefits';
import NavbarCalc from './Components/NavbarCalc';
import Random from './Components/Random';
import ImageSlide from './Components/ImageSlide';
import Group from './Components/Group';
import CalcBenefits from './Components/CalculatedBenefits';
import Payment from './Components/Payment';
import LoginModal from './Components/LoginModal';


function App() {
  const [selectedPlan, setSelectedPlan] = useState('Gold');

  return (
    <div className="App" >
    <NavbarCalc/>
    <Routes>
      <Route path='/' element={<ImageSlide/>}></Route>
      <Route path='/benefits' element={<Benefits selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}></Route>
      <Route path='/calcbenefits' element={<CalcBenefits/>}></Route>
      <Route path='/travelCalculator' element={<Calculator selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}></Route>
      <Route path='/policies' element={<Policy/>}></Route>
      <Route path='/form' element={<Home/>}></Route>
      <Route path='/group' element={<Group/>}></Route>
      <Route path='/payments' element={<Payment/>}></Route>
      <Route path='/login' element={<LoginModal/>}></Route>
    </Routes>
    </div>
  );
}

export default App;


{/* <NavbarCalc/>
<ImageSlide/>
<hr className='border-sky-400 w-3/4 m-auto mb-4 pt'/>
<Benefits selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
<hr className='border-sky-400 w-3/4 m-auto mb-4'/>
<Calculator selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
<hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
<CalculatedBenefits/>
<Policy/>
<hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
<Home/>  */}