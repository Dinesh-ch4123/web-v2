import React, { useState } from 'react'
import backgroundImageNew1 from '../assets/productfeaturebackground.png';
import CloseIcon from '@mui/icons-material/Close';
import '../common/styles/styles.css'


const ProductFeatures = ({ ProductAndFeatureRef, isDarkMode }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const data = {
        user5: {
            feature1: { title: 'Streamlined Data Collection', description: 'Effortlessly gather data from various sources, automate data inputs, and eliminate manual data entry. Sustally integrates seamlessly with your existing systems, avoiding redundancy, ensuring accurate and up-to-date information' },
            feature2: {
                title: "Customizable Framework",
                description: `Tailor your impact framework to align with your organization's business nature and your stakeholder’s information requirements.`
            },
            feature3: {
                title: "Collaborative Data Sharing",
                description: `Enable seamless collaboration and data sharing across teams and stakeholders. 
                Engage with your employees, customers, and investors by sharing relevant data and reports via secure portals`
            },
            feature4: {
                title: "Standardised Reporting",
                description: `Generate reports linked to the global sustainability framework and terminologies, designed for use by any functional team members without any specialised experts in your team`
            },
            feature5: {
                title: "Credible Data",
                description: `Sustally helps to maintain clear audit trail of data collection, ensuring accountability and enhancing the credibility of your MIS reports`
            },
        },
        user4: {
            feature1: {
                title: 'Data Credibility',
                description: 'Effortlessly gather data from various sources, automate data inputs, and eliminate manual data entry. Sustally integrates seamlessly with your existing systems, avoiding redundancy, ensuring accurate and up-to-date information'
            },
            feature2: {
                title: "Audit Readiness",
                description: `Tailor your impact framework to align with your organization's business nature and your stakeholder’s information requirements.`
            },
            feature3: {
                title: "Data Trend Analysis",
                description: `Enable seamless collaboration and data sharing across teams and stakeholders. 
                Engage with your employees, customers, and investors by sharing relevant data and reports via secure portals`
            },
            feature4: {
                title: "Global Standards",
                description: `Generate reports linked to the global sustainability framework and terminologies, designed for use by any functional team members without any specialised experts in your team`
            },
            feature5: {
                title: "",
                description: ``
            },
        },
        user3: {
            feature1: {
                title: 'Customizable Framework',
                description: 'Effortlessly gather data from various sources, automate data inputs, and eliminate manual data entry. Sustally integrates seamlessly with your existing systems, avoiding redundancy, ensuring accurate and up-to-date information'
            },
            feature2: {
                title: "Upstream Reporting",
                description: `Tailor your impact framework to align with your organization's business nature and your stakeholder’s information requirements.`
            },
            feature3: {
                title: "Simplified Vendor Selection",
                description: `Enable seamless collaboration and data sharing across teams and stakeholders. 
                Engage with your employees, customers, and investors by sharing relevant data and reports via secure portals`
            },
            feature4: {
                title: "Audit Readiness/Compliance",
                description: `Generate reports linked to the global sustainability framework and terminologies, designed for use by any functional team members without any specialised experts in your team`
            },
            feature5: {
                title: "Data Trend Analysis",
                description: ` Data Trend Analysis`
            },
        },
        user2: {
            feature1: {
                title: 'Portfolio Impact Tracking',
                description: 'Effortlessly gather data from various sources, automate data inputs, and eliminate manual data entry. Sustally integrates seamlessly with your existing systems, avoiding redundancy, ensuring accurate and up-to-date information'
            },
            feature2: {
                title: "Data Credibility, Enhanced Transparency",
                description: `Tailor your impact framework to align with your organization's business nature and your stakeholder’s information requirements.`
            },
            feature3: {
                title: "Data Consistency",
                description: `Enable seamless collaboration and data sharing across teams and stakeholders. 
                Engage with your employees, customers, and investors by sharing relevant data and reports via secure portals`
            },
            feature4: {
                title: "Global Reporting Standards",
                description: `Generate reports linked to the global sustainability framework and terminologies, designed for use by any functional team members without any specialised experts in your team`
            },
            feature5: {
                title: "Global Reporting Standards",
                description: ` Data Trend Analysis`
            },
        },
        user1: {
            feature1: {
                title: 'Data Visualization',
                description: 'Effortlessly gather data from various sources, automate data inputs, and eliminate manual data entry. Sustally integrates seamlessly with your existing systems, avoiding redundancy, ensuring accurate and up-to-date information'
            },
            feature2: {
                title: "Access Control",
                description: `Tailor your impact framework to align with your organization's business nature and your stakeholder’s information requirements.`
            },
            feature3: {
                title: "Performance Tracking",
                description: `Enable seamless collaboration and data sharing across teams and stakeholders. 
                Engage with your employees, customers, and investors by sharing relevant data and reports via secure portals`
            },
            feature4: {
                title: "Integrated Data Management",
                description: `Generate reports linked to the global sustainability framework and terminologies, designed for use by any functional team members without any specialised experts in your team`
            },
            feature5: {
                title: "Decision Making ",
                description: ` Data Trend Analysis`
            },
        },

    }

    const handleClick = (num) => {
        setScale(num);
    };
    const toggleCircle = () => {
        if (isOpen) {
            handleClick(1)
        } else {
            handleClick(0.7)
        }
        setIsOpen(!isOpen);
    };



    const window_innerWidth_6 = window.innerWidth / 6;


    const [selectedfeature, setSelectedFeature] = useState('feature1');
    const handlefeatureSelection = (value) => {

        if (isOpen && value === selectedfeature) {
            handleClick(1);
            setIsOpen(false);
        } else {
            handleClick(0.7)
            setIsOpen(true);
        }

        setSelectedFeature(value)
    }
    const [selecteduser, setselecteduser] = useState('user5');
    const handleuserSelection = (value) => {

        if (isOpen && value === selecteduser) {
            handleClick(1);
            setIsOpen(false);
        } else {
            handleClick(0.7)
            setIsOpen(true);
        }
        setselecteduser(value)
    }



    const commonstyle = {
        width: '50%',
        height: '50%',
        transformOrigin: "0 100%",
        position: "absolute",
        top: '0%',
        left: '50%',
        cursor: 'pointer',
    }


    const [isExpolreOpen, setisExploreopen] = useState(true)
    return (
        <div ref={ProductAndFeatureRef} style={{
            // backgroundImage: isDarkMode ? "linear-gradient(to right, #1E1E1E,#0B0B0B)" : "linear-gradient(to right, #FFFFFF,#8C8B8B)",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '35% -57px',
        }} className="PandFcontainer relative" id="productandfeature">
            <div className='w-[30%] z-5 h-[15%] absolute bottom-0 left-0'>
                {!isOpen && isExpolreOpen && <div
                    style={{ border: "3px solid rgb(142, 77, 255)", borderRadius: '20px', zIndex: 1 }}
                    className={`${isDarkMode === "dark"? "bg-black" : 'bg-white'} text-white left-[15%] absolute top-[-80%] z-1 py-5 px-3 flex`}>

                    <CloseIcon onClick={() => {
                        setisExploreopen(false)
                    }} className='absolute cursor-pointer top-3 right-3' style={{ color: isDarkMode ? 'white' : 'black' }} />
                    <img style={{ width: '15%', height: "15%", marginTop: 'auto', marginBottom: 'auto', marginRight: '5%' }} src={require('../assets/laptop.png')} alt="" />
                    <span style={{ fontSize: '20px', fontFamily: 'satoshi', fontWeight: '700', color: "#6B39C2" }}>Explore our product freatures using our product wheel.</span>
                </div>}
                {!isOpen && isExpolreOpen &&
                    <div className='w-[100%] absolute bottom-3 left-[13%]'>
                        <svg width="90%" height="144" viewBox="0 0 477 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_255_61341)">
                                <path d="M16.4993 15.9999L460.499 55.1251L16.499 128L16.499 64L16.4993 15.9999Z" fill="url(#paint0_linear_255_61341)" />
                            </g>
                            <defs>
                                <filter id="filter0_f_255_61341" x="0.498047" y="0" width="476.002" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_255_61341" />
                                </filter>
                                <linearGradient id="paint0_linear_255_61341" x1="323.234" y1="125.057" x2="-321.5" y2="-231.374" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8E4DFF" stop-opacity="0.33" />
                                    <stop offset="1" stop-color="#4A4A4A" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>


                    </div>}

                <img className='cursor-pointer' onClick={() => {
                    setisExploreopen(true)
                }} style={{ width: "70px", left: '10%', bottom: '0px', position: 'absolute' }} src={require(isDarkMode === "dark" ? '../assets/logowhite.png' : '../assets/logoblack.png')} alt="" />
            </div>
            <div style={{
                width: window_innerWidth_6 * 2,
                height: window_innerWidth_6 * 2,
                transition: "transform 0.5s",
                borderRadius: "50%",
                

            }} className='relative overflow-hidden z-10 bg-red-400 flex items-center   btn-gradient-2 justify-center content-center  rounded-full'>

                <div className="radius"></div>
                <div className="radius1"></div>
                <div className="radius2"></div>
                <div className="radius3"></div>
                <div className="radius4"></div>






                <div
                    className='innerest_circle absolute items-center justify-center content-center  flex rounded-full'
                    style={{
                        width: window_innerWidth_6 * 0.5,
                        height: window_innerWidth_6 * 0.5,
                        backgroundColor: "#8E4DFF",
                        // border: isDarkMode ? '1px solid white' : '1px solid black',
                        transform: "rotate(0deg)",
                        zIndex: '600'



                    }}
                >
                    {/* <div className={`${selecteduser}`}></div> */}
                    <img className='' style={{ zIndex: 20 }} src={require("../assets/Product_Feature_Center_Icon.png")} alt="" />
                </div>





                <div style={{
                    width: window_innerWidth_6 * 1.2,
                    height: window_innerWidth_6 * 1.2,
                    borderRadius: "50%",

                    zIndex: '200'
                }} className='relative overflow-hidden btn-gradient-1 flex items-center justify-center'>


                    <div
                        onClick={() => {
                            console.log('user 1')
                            // toggleCircle()
                            handleuserSelection('user1')
                        }}
                        style={{
                            ...commonstyle,
                            transform: "rotate(0deg)",
                            clipPath: selecteduser == 'user1' && 'polygon(-2% -293%, 2% 95%, 94% 66%)',
                            background: selecteduser == 'user1' ? '#8E4DFF' : '',
                            zIndex: 10,


                        }}>

                        <span
                            style={{
                                transform: 'rotate(41deg'
                            }}
                            onClick={() => {
                                // toggleCircle()

                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[28%] text-black text-s font-[700] font-[satoshi] z-[30]'>
                            CXOs
                        </span>

                    </div>
                    <div

                        onClick={() => {
                            console.log('user 1 1 1 1 ')
                            // toggleCircle()

                        }} style={{
                            ...commonstyle,

                            transform: "rotate(0deg)",
                            width: '17%',
                            zIndex: 50,
                            clipPath: 'polygon(0px 0px, 0px 100%, 284% -4%)',

                        }}></div>
                    <div
                        onClick={() => {
                            console.log('part2')
                            // toggleCircle()
                            handleuserSelection('user2')

                        }}
                        style={{
                            ...commonstyle,
                            transform: "rotate(72deg)",
                            clipPath: selecteduser == 'user2' && 'polygon(-2% -293%, 2% 95%, 94% 66%)',
                            background: selecteduser == 'user2' ? '#8E4DFF' : '',
                            zIndex: 20,

                        }}>
                        <span
                            style={{
                                transform: 'rotate(41deg'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[28%] text-black text-s font-[700] font-[satoshi] z-[30]'>
                            Investors
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            console.log('part3')
                            // toggleCircle()
                            handleuserSelection('user3')
                        }}
                        style={{
                            ...commonstyle,

                            transform: "rotate(144deg)",
                            clipPath: selecteduser == 'user3' && 'polygon(9% -228%, 2% 106%, 100% 68%)',
                            background: selecteduser == 'user3' ? '#8E4DFF' : '',
                            zIndex: 30,

                        }}>
                        <span
                            style={{
                                transform: 'rotate(221deg)',
                                textAlign: 'center'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[25%] left-[1%] text-black text-s font-[700] font-[satoshi] z-[30]'>
                            Supply Chain Partners
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            console.log('part4')
                            // toggleCircle();
                            handleuserSelection('user4')


                        }}
                        style={{
                            ...commonstyle,
                            transform: "rotate(216deg)",
                            // backgroundColor: "blue",
                            clipPath: selecteduser == 'user4' && 'polygon(-2% -293%, 2% 95%, 94% 66%)',
                            background: selecteduser == 'user4' ? '#8E4DFF' : '',
                            zIndex: 40,

                        }}>
                        <span
                            style={{
                                transform: 'rotate(41deg)',
                                textAlign: 'center'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[5%] text-black text-s font-[700] font-[satoshi] z-[30]'>
                            Auditors / Accountants
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            console.log('part5')
                            // toggleCircle();
                            handleuserSelection('user5');

                        }}
                        style={{
                            ...commonstyle,
                            transform: "rotate(288deg)",
                            // backgroundColor: "white",
                            clipPath: selecteduser == 'user5' && 'polygon(-2% -293%, 2% 95%, 94% 66%)',
                            background: selecteduser == 'user5' ? '#8E4DFF' : '',
                            zIndex: 45,

                        }}>
                        <span
                            style={{
                                transform: 'rotate(41deg)',
                                textAlign: 'center'
                            }}
                            onClick={() => {
                                // setClickPosition('upperdiv_top');
                                // toggleCircle()
                            }}
                            className='absolute top-[28%] left-[5%] text-black text-s font-[700] font-[satoshi] z-[30]'>
                            SMBs / Startups
                        </span>
                    </div>
                </div>















                <div style={{
                    width: '30px', height: '30px', position: "absolute", backgroundColor: 'black', zIndex: 100, top: '46%', left: '47%',
                    borderRadius: '50%'
                }}></div>
                <div
                    onClick={() => {
                        console.log('feature 1')

                        handlefeatureSelection('feature1')

                    }}
                    style={{
                        ...commonstyle,
                        clipPath: selectedfeature == 'feature1' && 'polygon(-8% -293%, 3% 99%, 94% 66%)',
                        background: selectedfeature == 'feature1' ? '#8E4DFF' : '',
                        transform: "rotate(0deg)",
                        zIndex: 10,

                    }}>
                    <span
                        style={{
                            transform: 'rotate(41deg)',
                            textAlign: 'center',

                            width: '100%'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[30%] left-[-5%] text-black text-xl font-[700] font-[satoshi] z-[30]'>

                        {data[selecteduser]['feature1'].title}
                    </span>
                </div>
                <div

                    onClick={() => {
                        console.log('feature 1')
                        // toggleCircle()
                        handlefeatureSelection('feature1')
                    }} style={{
                        ...commonstyle,
                        transform: "rotate(0deg)",
                        zIndex: 50,
                        clipPath: 'polygon(-7% -256%, 1% 107%, 99% 66%)',


                    }}> </div>
                <div
                    onClick={() => {
                        console.log('feature 2')
                        // toggleCircle()
                        handlefeatureSelection('feature2')
                    }}
                    style={{
                        ...commonstyle,
                        transform: "rotate(72deg)",
                        clipPath: selectedfeature == 'feature2' && 'polygon(-6% -293%, 1% 103%, 99% 66%)',
                        backgroundColor: selectedfeature == 'feature2' ? '#8E4DFF' : '',
                        zIndex: 20,

                    }}>
                    <span
                        style={{
                            transform: 'rotate(35deg)',
                            textAlign: 'center',

                            width: '100%'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[30%] left-[-5%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        {data[selecteduser]['feature2'].title}
                    </span>
                </div>
                <div
                    onClick={() => {
                        console.log('feature 3')
                        // toggleCircle()
                        handlefeatureSelection('feature3')
                    }}
                    style={{
                        ...commonstyle,
                        transform: "rotate(144deg)",
                        clipPath: selectedfeature == 'feature3' && 'polygon(-1% -266%, 2% 111%, 101% 66%)',
                        backgroundColor: selectedfeature == 'feature3' ? '#8E4DFF' : '',
                        zIndex: 30,

                    }}>      <span
                        style={{
                            transform: 'rotate(220deg)',
                            textAlign: 'center',
                            // background: "red",
                            width: '100%'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[30%] left-[-2%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        {data[selecteduser]['feature3'].title}
                    </span></div>
                <div
                    onClick={() => {
                        console.log('feature 4')
                        // toggleCircle()
                        handlefeatureSelection('feature4')
                    }}
                    style={{
                        ...commonstyle,
                        transform: "rotate(216deg)",
                        clipPath: selectedfeature == 'feature4' && 'polygon(2% -266%, 1% 104%, 104% 66%)',
                        backgroundColor: selectedfeature == 'feature4' ? '#8E4DFF' : '',
                        zIndex: 40,

                    }}>      <span
                        style={{
                            transform: 'rotate(41deg)',
                            textAlign: 'center'
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[30%] left-[5%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        {data[selecteduser]['feature4'].title}
                    </span></div>
                <div
                    onClick={() => {
                        console.log('feature 5')
                        // toggleCircle()
                        handlefeatureSelection("feature5")
                    }}
                    style={{
                        ...commonstyle,
                        transform: "rotate(288deg)",
                        clipPath: selectedfeature == 'feature5' && 'polygon(6% -266%, 2% 104%, 94% 66%)',
                        backgroundColor: selectedfeature == 'feature5' ? '#8E4DFF' : '',
                        zIndex: 45,

                    }}>      <span
                        style={{
                            transform: 'rotate(36deg)',
                            textAlign: 'center',

                            width: "100%"
                        }}
                        onClick={() => {
                            // setClickPosition('upperdiv_top');
                            // toggleCircle()
                        }}
                        className='absolute top-[30%] left-[-5%] text-black text-xl font-[700] font-[satoshi] z-[30]'>
                        {data[selecteduser]['feature5'].title}
                    </span></div>
            </div>

            <div className='product_feature_details ml-[5%]'>
                <div
                    style={{
                        paddingLeft: '10%',
                        paddingRight: '10%',
                        paddingTop: '10%',
                        overflow: 'hidden'
                        // boxShadow: isOpen && 'rgb(39 33 33) 2px 2px 10px 20px',
                    }}
                    className={`circle ${isOpen ? "open" : ""}`}

                >
                    {isOpen &&
                        <div className='product_details'>
                            <CloseIcon onClick={toggleCircle} className='absolute right-[4%] top-[4%] text-black hover:scale-105 cursor-pointer' />
                            <h1 >{data[selecteduser][selectedfeature].title}</h1>
                            <ul>
                                <li>

                                    {/* &#x2022; */}
                                    {data[selecteduser][selectedfeature].description}</li>

                            </ul>
                        </div>}
                </div>
            </div>
            {/* </div> */}
        </div >
    )
}

export default ProductFeatures 