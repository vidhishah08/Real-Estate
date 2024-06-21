
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className=' text-customBlack'>
      <Navbar></Navbar>
      <Component1></Component1>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4>
      <Footer></Footer>
    </div>
  );
}

export default App;
