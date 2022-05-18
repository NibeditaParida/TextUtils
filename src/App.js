

import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }
  
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Textutils- dark mode';
      // setInterval(()=>{
      //   document.title='Textutils is Amazing mode';
      // },2000)
      // setInterval(()=>{
      //   document.title=' Install Textutils ';
      // },1500)
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'Textutils- Light mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title= 'TextUtils' />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/'
              element={<Textform showAlert={showAlert} heading='Enter the text to analyse below' mode={mode} />} />
          </Routes>

        </div>
      </Router>




    </>

  );
}

export default App;
