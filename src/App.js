import './App.css';
import Sidenav from "./components/sidenav"
import Navbar from "./components/navbar"
import Main from "./components/Main"
import Booking from "./components/Booking"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div className='app-header'>
    <Sidenav/>
    <Navbar/>
    <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Main/>} />
        <Route path="booking" element={<Booking/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
