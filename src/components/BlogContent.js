
import React, { useRef, useState } from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';


const BlogContent = ({
    setscrollToPricing,
    setscrollToProduct,
    setScrollTocontactus,
    ContactusRef,
    selectedblogContent,
    benefitsRef,
    timelineRef,
    abouref,
    isDarkMode,
    setCookiesopen
}) => {
    const [distance, setdistance] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    })
    const [showtooltip, setshowtooltip] = useState(null)
    function handletooltip(value) {
        if (showtooltip === value) {
            setshowtooltip(null)
        } else {
            setshowtooltip(value)
        }
    }
    const divRef = useRef(null);
    const handleMouseMove = (event) => {
        const element = divRef.current;
        const rect = element.getBoundingClientRect();
        const distanceFromLeft = event.clientX - rect.left;
        const distanceFromRight = rect.right - event.clientX;
        const distanceFromTop = event.clientY - rect.top;
        const distanceFromBottom = rect.bottom - event.clientY;
        let obj = {
            left: distanceFromLeft,
            top: distanceFromTop,
            bottom: distanceFromBottom,
            right: distanceFromRight
        }
        setdistance(obj)
    };


    console.log(selectedblogContent)
    return (
        <div style={{ top: window.innerWidth > window.innerHeight ? "40%" : '20%' }} className='blogContent'>
            <h1
                style={{
                    fontFamily: 'satoshi',
                    fontWeight: '700',
                    fontSize: '50px',
                    lineHeight: '67.5px',
                    color: '#8E4DFF',
                    paddingLeft: '50px',
                    paddingTop: "30vh"
                }}>
                Header lit, sed do eiusmod tempor
            </h1>
            <div className='about_company'>

                <div className='about_content'>
                    <h1 ref={abouref}> About Apple</h1>
                    <p className='blog_cont_text'>{selectedblogContent && selectedblogContent.section.content.about[0]}

                    </p>

                </div>
                <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?size=626&ext=jpg&ga=GA1.1.709309883.1679486928&semt=sph" alt="" />
            </div>
            <div className='content'>
                <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?size=626&ext=jpg&ga=GA1.1.709309883.1679486928&semt=sph" alt="" />
                <p className='blog_cont_text'>
                    {selectedblogContent && selectedblogContent.section.content.about[1]}

                </p>
            </div>






            <div style={{ marginBottom: '20%' }} ref={divRef} onClick={handleMouseMove}
                className='timeline'>
                <p ref={timelineRef} style={{ fontWeight: '800', fontSize: '30px', top: '-40%', marginLeft: '50px' }}>Timeline</p>
                <div style={{ marginTop: '5%' }} className='flex  flex-row w-[100%]'>{
                    [2000, 2002, 2010, 2022].map((item, index) => {
                        return (
                            <div
                                style={{ zIndex: 200 }}
                                onClick={() => { handletooltip(item) }}
                                className='year'>
                                <span style={{ position: 'absolute', bottom: index % 2 == 0 ? "0%" : '70%' }}>
                                    {item}
                                </span>

                                {showtooltip === item && index !== 3 &&
                                    <div style={{
                                        zIndex: 5,

                                        top: index % 2 == 0 ? '50%' : '-1%',
                                        width: "100%",
                                        left: index === 3 ? "-20%" : "31%",

                                    }} className='absolute ' >
                                        <svg width="100%" height="188" viewBox="0 0 487 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_f_248_1231)">
                                                <path d="M53.6803 171.033L470.68 94.0337L64.5 16.5L16.5 94.0337L53.6803 171.033Z" fill="url(#paint0_linear_248_1231)" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_248_1231" x="0.5" y="0.5" width="486.18" height="186.533" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_248_1231" />
                                                </filter>
                                                <linearGradient id="paint0_linear_248_1231" x1="332.42" y1="268.342" x2="-312.314" y2="-88.089" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#8E4DFF" stop-opacity="0.83" />
                                                    <stop offset="1" stop-color="#4A4A4A" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                }




                                {
                                    showtooltip === item && index === 3 &&
                                    <div
                                        style={{
                                            width: '100%',
                                            top: '12%',
                                            right: '33%'
                                        }}
                                        className='absolute'>
                                        <img src={require('../assets/assets/TimelineLastShadow.png')} alt="" />

                                    </div>
                                }



                                {showtooltip === item &&
                                    <div
                                        style={{
                                            top: index % 2 == 0 ? '150%' : '80%',
                                            left: index === 3 ? "-35%" : "30%",
                                            zIndex: 200,

                                        }}
                                        className='tooltip shadow-lg'>







                                        <div style={{ zIndex: 10 }} className='relative flex flex-row items-center text-black '>

                                            <div className='mr-4'>
                                                <span>{item}</span>
                                            </div>
                                            <div style={{ textAlign: 'initial' }} className=''>
                                                <span style={{ fontSize: '15px' }}>
                                                    Lorem ipsum dolor sit amet consectetur
                                                </span>
                                            </div>
                                            <div className='ml-4'>
                                                <div className='flex hover:scale-110 items-center justify-center' style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#D9D9D9' }}>
                                                    <CloseIcon />
                                                </div>
                                            </div>
                                        </div>
                                    </div>}</div>
                        )
                    })
                }
                </div>

            </div>
            <div style={{ marginTop: '15%', height: '60%' }} className='benefits'>

                <p ref={benefitsRef} style={{ fontWeight: '800', fontSize: '30px', top: '-40%' }}>Benefits</p>
                <div style={{ height: window.innerWidth * (15 / 100) }} className={`left_box rounded-lg ${isDarkMode ==="dark"? 'dark' : 'light'} `}>Benefits Information</div>
                <DragHandleIcon style={{ color: "#8E4DFFD4" }} />
                <div style={{ height: window.innerWidth * (15 / 100) }} className={`righ_box rounded-lg ${isDarkMode ==="dark" ? 'dark' : 'light'}`}>
                    <img src={require('../assets/assets/developer.png')} alt="" />
                </div>
            </div> </div>
    )
}

export default BlogContent