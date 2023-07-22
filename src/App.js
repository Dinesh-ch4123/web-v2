
import './common/styles/styles.css';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch'
import darkLogo from './assets/logowhite.png'
import lightLogo from './assets/logoblack.png'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Showcase from './components/Showcase';
import Divider from './components/Divider';
import Wheel from './components/Wheel';
import Priceplaning from './components/Priceplaning';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const ThemeContext = createContext(null);

function App() {
  const [isDarkMode, setIsDarkMode] = useState("dark")

  const toggleTheme = () => {
    setIsDarkMode((curr) => (curr === "light" ? "dark" : "light"));

  }


  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="App" id={isDarkMode}>
        {/* --------------------------------Navbar starts here ------------------------------------------------------------- */}


        <div className="navbar">
          <div className="nav-left">
            {isDarkMode === "light" ? (
              <img className="nav-logo" src={lightLogo} />
            ) : (
              <img className="nav-logo" src={darkLogo} />
            )}
          </div>
          <div className="nav-right">
          <label className='switch-lable'>{isDarkMode==="dark"? "Dark Mode:": "Light Mode:"}</label>
            <ReactSwitch
              className="switch"
              offColor="#0000"
              onColor="#ffff"
              onHandleColor="#0000"
              checkedIcon= {false}
              uncheckedIcon={false}
              onChange={toggleTheme}
              checked={isDarkMode === "dark"}
            />
            <div className="nav-m">
              <Navbar />
            </div>
          </div>
        </div>
        {/* --------------------------------Navbar Ends here ------------------------------------------------------------- */}
        <div className="wrapper">
          <Header/> 
          <Showcase />
          <Wheel />
          <Priceplaning/>
          <Contact/>
        </div>
          <Footer />
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
