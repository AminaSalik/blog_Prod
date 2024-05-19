
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Home from './component/Home'
import {Routes, Route} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div>
   
    <Routes>
   
<Route exact path="/" element={<Home/>} />
<Route exact path="/login" element={<Login/>} />
<Route exact path="/register" element={<Register/>} />

</Routes>

</div>
  );
}

export default App;
