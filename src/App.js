import logo from './logo.svg';
// import './App.css';
import './Styles/output.css'
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Policy from './Components/Policy';
import Benefits from './Components/Benefits';
import BenefitsCard from './Components/BenefitsCard';
import NavbarCalc from './Components/NavbarCalc';
import CalculatedBenefits from './Components/CalculatedBenefits';
import Random from './Components/Random';


function App() {
  return (
    <div className="App" >
      {/* <NextofKin/> */}
    <NavbarCalc/>
    <BenefitsCard/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4'/>
    <Benefits/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4'/>
    <Calculator/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <CalculatedBenefits/>
    <Policy/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <Home/> *

    <Random/>

    </div>
  );
}

export default App;
