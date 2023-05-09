import logo from './logo.svg';
// import './App.css';
import './Styles/output.css'
import ClientPage from './Components/ClientPage';
import Home from './Components/Home';
import Calculator from './Components/Calculator';


function App() {
  return (
    <div className="App" >
    <Home/>
    {/* <ClientPage/> */}
    <Calculator/>
    </div>
  );
}

export default App;
