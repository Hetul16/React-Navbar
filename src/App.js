
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
// import Contact from './component/Contact'
import {BrowserRouter,Route , Routes} from 'react-router-dom';

function App() {
  return (  
    <div className="App">

      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        {/* <Route exact path="/contact" element={<Contact/>}/> */}
        <Route exact path="/navbar" element={<Navbar/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
