import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
