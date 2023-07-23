
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
import lightTwitter from './assets/twitter.png'
import darkTwitter from './assets/twitter-dk.png'
import lightLink from './assets/linkedin.png'
import darkLink from './assets/linkedin-dk.png'
import lightGit from './assets/github.png'
import darkGit from './assets/github-bk.png'



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
            <label className='switch-lable'>{isDarkMode === "dark" ? "Dark Mode:" : "Light Mode:"}</label>
            <ReactSwitch
              className="switch"
              offColor="#0000"
              onColor="#ffff"
              onHandleColor="#0000"
              checkedIcon={false}
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
          <Header />
          <Showcase />
          <Wheel />
          <Priceplaning />
          <div className='contact'>
          <Contact />
          <Divider />
          {/*-------------------------------------------------Footer Starts here ------------------------------------- */}
        <div className='footer'>
          <div className="ft-left">
          <div className='ft-title'>
            {isDarkMode === "dark" ? (
              <img className="ft-logo" src={darkLogo} />
            ) : (
              <img className="ft-logo" src={lightLogo} />
            )}
            <h1 className='font-Rymaneco text-3xl'>Sustally</h1>
            </div>
            <div className='social'>
            <a href='#'>
            {isDarkMode === "light" ? (
              <img className="social-logo" src={lightTwitter} />
            ) : (
              <img className="social-logo" src={darkTwitter} />
            )}
            </a>
            <a href='#'>
            {isDarkMode === "light" ? (
              <img className="social-logo" src={lightLink} />
            ) : (
              <img className="social-logo" src={darkLink} />
            )}
            </a>
            <a href='#'>
            {isDarkMode === "light" ? (
              <img className="social-logo" src={lightGit} />
            ) : (
              <img className="social-logo" src={darkGit} />
            )}
            </a>
            
            </div>
            <p className='pl-10 pt-7 pt-1 text-xs italic opacity-60'>Copyright © 2023 Sustally.</p>
          </div>
          <Footer
          isDarkMode={isDarkMode}
        />
        
        </div>
        </div>
        </div>
        
        {/*-------------------------------------------------Footer Ends here ------------------------------------- */}

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
