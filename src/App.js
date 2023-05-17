import logo from './logo.svg';
// import './App.css';
import './Styles/output.css'
import ClientPage from './Components/ClientPage';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Policy from './Components/Policy';
import Benefits from './Components/Benefits';


function App() {
  return (
    <div className="App" >
    <Benefits/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4'/>
    <Calculator/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <Policy/>
    <hr className='border-sky-400 w-3/4 m-auto mb-4 mt-2'/>
    <Home/>
    </div>
  );
}

export default App;
