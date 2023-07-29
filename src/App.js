
import './common/styles/styles.css';
import React, { createContext, useState, useEffect, useRef } from 'react';
import ReactSwitch from 'react-switch'
import darkLogo from './assets/logowhite.png'
import lightLogo from './assets/logoblack.png'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Showcase from './components/Showcase';
import Divider from './components/Divider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import lightTwitter from './assets/twitter.png'
import darkTwitter from './assets/twitter-dk.png'
import lightLink from './assets/linkedin.png'
import darkLink from './assets/linkedin-dk.png'
import lightGit from './assets/github.png'
import darkGit from './assets/github-bk.png'
import PricingPlan from './components/PricingPlan';
import Underline from './components/Underline';
import ProductFeatures from './components/ProductFeatures';
import CookiesModal from "./components/CookiesModal";
import Blog from './pages/Blog';
import TweenMax from 'gsap';
import {
  BrowserRouter,
  useNavigate,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { motion, useMotionValue, useSpring, useMotionValueEvent, useScroll } from 'framer-motion';

export const ThemeContext = createContext(null);

function App() {
  const [isDarkMode, setIsDarkMode] = useState("dark")
  const [isFirstPage, setIsFirstPage] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  }

  {/* --------------------------------Smooth Scroll on click starts here ------------------------------------------------------------- */ }
  const location = useLocation();

  const [Path, setPath] = useState(
    location.pathname.toLowerCase().substring(1)
  );
  const [IsOnOtherPage, setIsOnOtherPage] = useState(
    Path == "blog" || Path == "faq" ? false : true
  );

  useEffect(() => {
    console.log(location.pathname);
    setPath(location.pathname.toLowerCase().substring(1));
  }, [location.pathname]);

  useEffect(() => {
    if (Path == "blog" || Path == "faq") {
      setIsOnOtherPage(false);
    } else {
      setIsOnOtherPage(true);
    }
  }, [Path]);


  const navigate = useNavigate()
  const ProductAndFeatureRef = useRef(null);
  const PricingPlanRef = useRef(null);
  const ContactusRef = useRef(null);

  const [scrollToContactUs, setScrollTocontactus] = useState(false);
  const [scrollToProduct, setscrollToProduct] = useState(false);
  const [scrollToPricing, setscrollToPricing] = useState(false);

  useEffect(() => {
    if (scrollToContactUs) {
      setScrollTocontactus(false);
      ContactusRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (scrollToProduct) {
      setscrollToProduct(false);
      ProductAndFeatureRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (scrollToPricing) {
      setscrollToPricing(false);
      PricingPlanRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToContactUs, scrollToProduct, scrollToPricing]);

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  const titleRef = useRef(null);
  const { scrollY } = useScroll({
  target: titleRef,
  scale: ['end end', 'start start']
  });
  useMotionValueEvent(scrollY, "change", (latest)=>{
  // console.log("Page Sroll Value" , latest);
  if(latest > 500){
    setIsFirstPage(false);
  }
  else{
    setIsFirstPage(true);
  }
  })

  {/* --------------------------------Smooth Scroll on Click ends here ------------------------------------------------------------- */ }

  //-------------------------------------Cookies start here------------------------------------------------------------------------
  const [Cookiesopen, setCookiesopen] = React.useState(
    localStorage.getItem("visited") ? false : true
  );
  const handleCookiesOpen = () => setCookiesopen(true);
  const handleCookiesClose = () => {
    localStorage.setItem("visited", "true");
    setCookiesopen(false);
  };

  //-------------------------------------Cookies end here---------------------------------------------------------------------------

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="App" id={isDarkMode}>
        {/* --------------------------------Navbar starts here ------------------------------------------------------------- */}

        <div className='flex mx-auto justify-center pt-2 '>
        <div className="navbar rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]" >
          {isFirstPage && IsOnOtherPage? (
              <div className="nav-left">
                {isDarkMode === "light" ? (
                  <img className="nav-logo" src={lightLogo} alt="sustally"/>
                ) : (
                  <img className="nav-logo" src={darkLogo} alt="sustally"/>
                )}
              </div>
            ):(
              <motion.div className="nav-middle flex justify-start items-center md:mx-auto md:pl-40 ">
                {isDarkMode === "light" ? (
                <img initial={{x:'-80'}} animate={{x:'0'}} transition={{duration:2, ease : "easeIn"}} className="nav-logo" src={lightLogo} alt="sustally"/>
                ) : (
                <img initial={{x:'-80'}} animate={{x:'0'}} transition={{duration:2, ease : "easeIn"}} className="nav-logo" src={darkLogo} alt="sustally"/>
                )}
                <h2 initial={{x:'100'}} animate={{x:'0'}} transition={{duration:0.75, ease : "easeOut"}} className='text-4xl font-Rymaneco'><a href='/'>sustally</a></h2>
              </motion.div>
            )}
            <div className="nav-right ">
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

            <div className="nav-m ">
              <Navbar
                setscrollToProduct={setscrollToProduct}
                setscrollToPricing={setscrollToPricing}
                navigateHome={navigateHome}
                ProductAndFeatureRef={ProductAndFeatureRef}
                PricingPlanRef={PricingPlanRef}
                ContactusRef={ContactusRef}
                isDarkMode={isDarkMode}
                setScrollTocontactus={setScrollTocontactus}
              />
            </div>
          </div>
        </div>
        </div>
        <CookiesModal
        Cookiesopen={Cookiesopen}
        setCookiesopen={setCookiesopen}
        handleCookiesOpen={handleCookiesOpen}
        handleCookiesClose={handleCookiesClose}
        />
        {/* --------------------------------Navbar Ends here ------------------------------------------------------------- */}

        <Routes>
          <Route
            path="/"
            element={
              <div >
                <Header />
                <Underline />
                <Showcase isDarkMode={isDarkMode} />
                <Underline />
                <ProductFeatures
                  isDarkMode={isDarkMode}
                />
                <Underline />
                <PricingPlan 
                  isDarkMode={isDarkMode}
                />
                <Divider />
                <div className='contactt'>
                  <Contact />
                  <Divider />
                </div>

              </div>
            }
          />

           <Route
            path="/blog"
            element={
              <Blog
                setScrollTocontactus={setScrollTocontactus}
                setscrollToProduct={setscrollToProduct}
                setscrollToPricing={setscrollToPricing}
                ContactusRef={ContactusRef}
                Path={Path}
                setCookiesopen={setCookiesopen}
                isDarkMode={isDarkMode}
              />
            }
          />
           {/* <Route
              path="/faq"
              element={
                <Faq
                  faqpopupformRef={faqpopupformRef}
                  sendEmailForFaqPopup={sendEmailForFaqPopup}
                  setScrollTocontactus={setScrollTocontactus}
                  setscrollToProduct={setscrollToProduct}
                  setscrollToPricing={setscrollToPricing}
                  ContactusRef={ContactusRef}
                  Path={Path}
                  setCookiesopen={setCookiesopen}
                  isDarkMode={isDarkMode}
                />
              }
            /> */}
        </Routes>

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

      {/*-------------------------------------------------Footer Ends here ------------------------------------- */}

    </ThemeContext.Provider>
  );
}

export default App;
