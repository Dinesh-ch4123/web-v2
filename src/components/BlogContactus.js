import React, { useEffect } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LInk, useNavigate } from 'react-router-dom';
import  Divider  from "../components/Divider";



const BlogContactus = ({ setscrollToProduct, setscrollToPricing, ProductAndFeatureRef, setScrollTocontactus, ContactusRef, Path, isDarkMode, setCookiesopen }) => {
    const navigate = useNavigate()
    // console.log("PathPathPathPath",Path)
    useEffect(() => {
        console.log("PathPathPathPath", Path)

    }, [Path])

    return (
        <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: "black" }} className='blog_contactus relative'>

       {/*     {
                Path !== 'faq' && <div
                    onClick={() => {
                        navigate('/');
                        setScrollTocontactus(true)


                    }}
                    style={{
                        width: '500px',
                        height: '300px',
                        position: 'absolute',
                        background: 'white',
                        left: "33%",
                        cursor: "pointer",

                        borderRadius: '50%',
                        border: '4px solid #8E4DFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        top: '-134px'
                    }}>
                    <div style={{ width: '110%', height: '62%', position: 'absolute', bottom: '-7%', background: isDarkMode ? 'black' : 'white' }}></div>
                    <span style={{
                        position: 'absolute',
                        top: '49px',
                        fontSize: '36px',
                        lineHeight: '56px',
                        fontFamily: 'satoshi',
                        fontWeight: '700',
                        color: '#8E4DFF'
                    }}>Contact us</span>
                </div>
            } */}
            <Divider />
            <div style={{ zIndex: 20, }} className='down_footer relative pt-10 pr-10'>
            

                <div className='brandName'>
                    <div onClick={() => {
                        navigate('/')
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                    }} className='flex items-center cursor-pointer'>

                        <img width={'100px'} src={require(isDarkMode ? '../assets/assets/logowhite.png' : "../assets/assets/logoblack.png")} alt="" />
                        Sustally
                    </div>
                    <div className="relative ml-10">
                        {/* <FacebookIcon className={`cursor-pointer hover:${!isDarkMode ? 'text-black' : 'text-white'} hover:scale-125`} />
                        <InstagramIcon className={`cursor-pointer hover:${!isDarkMode ? 'text-black' : 'text-white'} mx-5 hover:scale-125`} /> */}
                        <TwitterIcon className={`cursor-pointer hover:${!isDarkMode ? 'text-black' : 'text-white'} hover:scale-125 mr-5`} />
                        <LinkedInIcon className={`cursor-pointer hover:${!isDarkMode ? 'text-black' : 'text-white'} hover:scale-125`} />
                    </div>
                </div>
                <div className='contact_container'>
                    <div style={{ color: isDarkMode ? 'white' : 'black' }} className='top_links  '>
                        <a style={{ color: "rgba(142, 77, 255, 0.83)" }} href="">Company</a>
                        <a style={{ fontWeight: '400' }} href="">Privacy Policy</a>
                        <a style={{ fontWeight: '400' }} href="">Company</a>
                        <a onClick={(e) => {
                            e.preventDefault()

                            setCookiesopen(true)
                        }} className='flex items-center' style={{ borderRight: 'none', fontWeight: "400" }} href="">Cookies
                            <svg width="21" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.09961 15C3.099 13.1847 3.52398 11.3929 4.34254 9.75957C5.1611 8.12623 6.3519 6.6939 7.8253 5.57042C9.2987 4.44694 11.0163 3.66159 12.8487 3.27352C14.6812 2.88544 16.5807 2.90474 18.4043 3.32998C18.5396 3.36106 18.6638 3.42679 18.7638 3.52028C18.8638 3.61377 18.9359 3.73158 18.9727 3.86135C19.0095 3.99112 19.0095 4.12807 18.9728 4.25785C18.936 4.38763 18.8639 4.50546 18.7639 4.59898C18.3636 4.97591 18.076 5.45045 17.9313 5.97248C17.7866 6.49452 17.7902 7.04468 17.9418 7.56487C18.0934 8.08507 18.3874 8.55599 18.7926 8.92793C19.1979 9.29986 19.6994 9.559 20.2442 9.67798C20.4372 9.71987 20.6097 9.82409 20.7334 9.97348C20.857 10.1229 20.9245 10.3086 20.9246 10.5C20.9244 11.11 21.1164 11.7056 21.475 12.2073C21.8336 12.709 22.3416 13.093 22.9315 13.3081C23.5214 13.5232 24.165 13.5592 24.7765 13.4112C25.388 13.2632 25.9384 12.9384 26.3543 12.48C26.4503 12.3739 26.5753 12.2961 26.715 12.2557C26.8546 12.2153 27.0032 12.2138 27.1437 12.2513C27.2842 12.2889 27.4109 12.3641 27.5092 12.4682C27.6076 12.5723 27.6736 12.7012 27.6997 12.84C28.0076 14.4792 27.9594 16.1626 27.5582 17.7828C27.1569 19.4031 26.4115 20.9247 25.3692 22.2508C24.3269 23.5769 23.0107 24.6785 21.5044 25.4853C19.9981 26.2921 18.3347 26.7866 16.6201 26.9371C14.9055 27.0877 13.1772 26.8911 11.5455 26.3598C9.91369 25.8285 8.41412 24.9741 7.14225 23.8512C5.87038 22.7283 4.85408 21.3613 4.15807 19.8375C3.46205 18.3136 3.10158 16.6661 3.09961 15ZM10.8496 12C10.8496 11.6022 10.6863 11.2206 10.3956 10.9393C10.1049 10.658 9.7107 10.5 9.29961 10.5C8.88853 10.5 8.49428 10.658 8.2036 10.9393C7.91291 11.2206 7.74961 11.6022 7.74961 12C7.74961 12.3978 7.91291 12.7793 8.2036 13.0606C8.49428 13.3419 8.88853 13.5 9.29961 13.5C9.7107 13.5 10.1049 13.3419 10.3956 13.0606C10.6863 12.7793 10.8496 12.3978 10.8496 12ZM15.4996 16.5C15.9107 16.5 16.3049 16.3419 16.5956 16.0606C16.8863 15.7793 17.0496 15.3978 17.0496 15C17.0496 14.6022 16.8863 14.2206 16.5956 13.9393C16.3049 13.658 15.9107 13.5 15.4996 13.5C15.0885 13.5 14.6943 13.658 14.4036 13.9393C14.1129 14.2206 13.9496 14.6022 13.9496 15C13.9496 15.3978 14.1129 15.7793 14.4036 16.0606C14.6943 16.3419 15.0885 16.5 15.4996 16.5ZM20.1496 21C20.1496 20.6022 19.9863 20.2206 19.6956 19.9393C19.4049 19.658 19.0107 19.5 18.5996 19.5C18.1885 19.5 17.7943 19.658 17.5036 19.9393C17.2129 20.2206 17.0496 20.6022 17.0496 21C17.0496 21.3978 17.2129 21.7793 17.5036 22.0606C17.7943 22.3419 18.1885 22.5 18.5996 22.5C19.0107 22.5 19.4049 22.3419 19.6956 22.0606C19.9863 21.7793 20.1496 21.3978 20.1496 21ZM10.8496 21C11.2607 21 11.6549 20.8419 11.9456 20.5606C12.2363 20.2793 12.3996 19.8978 12.3996 19.5C12.3996 19.1022 12.2363 18.7206 11.9456 18.4393C11.6549 18.158 11.2607 18 10.8496 18C10.4385 18 10.0443 18.158 9.7536 18.4393C9.46292 18.7206 9.29961 19.1022 9.29961 19.5C9.29961 19.8978 9.46292 20.2793 9.7536 20.5606C10.0443 20.8419 10.4385 21 10.8496 21Z" fill="white" />
                            </svg>

                        </a>
                    </div>
                    <div style={{ color: isDarkMode ? 'white' : 'black' }} className='top_links'>
                        <a style={{ color: "rgba(142, 77, 255, 0.83)" }} href="">Product</a>
                        <a onClick={(e) => {
                            e.preventDefault()
                            navigate('/');
                            setscrollToProduct(true)


                        }} style={{ fontWeight: '400' }} href="">Product wheel</a>
                        <a onClick={(e) => {
                            e.preventDefault()
                            navigate('/');
                            setscrollToPricing(true)


                        }} style={{ fontWeight: '400' }} href="">Pricing</a>

                    </div>
                    <div style={{ color: isDarkMode ? 'white' : 'black' }} className='top_links '>
                        <a style={{ color: "rgba(142, 77, 255, 0.83)" }} href="">Industry Analysis</a>
                        <a style={{ fontWeight: '400' }} href="">Text</a>
                        <a style={{ fontWeight: '400' }} href="">Text</a>
                        <a style={{ fontWeight: '400' }} href="">Text</a>

                    </div>
                    {/* <div style={{ color: isDarkMode ? 'white' : 'black' }} className='top_links '>
                        <a style={{ color: "rgba(142, 77, 255, 0.83)" }} href="">Tools</a>
                        <a style={{ fontWeight: '400' }} href="">Text</a>
                        <a style={{ fontWeight: '400' }} href="">Text</a>
                        <a style={{ fontWeight: '400' }} href="">Text</a>

                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default BlogContactus