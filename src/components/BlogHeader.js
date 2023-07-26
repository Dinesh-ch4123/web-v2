import React, { useEffect, useState } from 'react'
import { color, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { initcards } from '../components/Showcase'
import { useNavigate } from 'react-router-dom';


const BlogHeader = ({ setSelectedBlog, setSelectedBlogContent, selectedblog, setactiveSection, activeSection, benefitsRef, abouref, timelineRef, isDarkMode }) => {
    const [arr, setarr] = useState([])



    function settingArray() {
        let newarr = [...initcards];
        let val = null
        // for (var x in newarr) newarr[x].title == selectedblog ? newarr.push(newarr.splice(x, 1)[0]) : 0;
        let array = newarr.filter((item, index) => {

            if (item.title != selectedblog) {
                return item
            } else {
                val = item
                // console.log(item)
                setSelectedBlogContent(item)
            }
        })

        if (val !== null) {
            array.push(val)
        }
        return (array)
    }
    const [selectedcard, setSelectedCard] = useState(7)



    useEffect(() => {
        if (selectedblog !== "") {
            let xarry = settingArray()

            setarr(xarry);
        }
    }, [selectedblog])
    function setCard(card, index) {
        setSelectedCard(card.id)
        let array = arr;
        array[index] = array[array.length - 1];
        array[array.length - 1] = card
        setarr(array)
    }

    const [cardNumber, setCardNumber] = useState(7);






    function handleClick(id) {
        const buttonWrap = document.querySelector('.button-wrap');
        const clickedButtonElement = document.getElementById(id);

        if (clickedButtonElement?.classList[0] === "button") {
            clickedButtonElement?.classList.add('fade-out');
            setTimeout(() => {
                clickedButtonElement.classList.remove('fade-out');
                clickedButtonElement.remove();
                buttonWrap.appendChild(clickedButtonElement);
            }, 400);

        }
    }







    const navigate = useNavigate();





    return (
        <div style={{ backgroundColor:"transparent" }} className='Header_Container'>
            <div
                style={{
                    backgroundColor: 'transparent',
                    height: window.innerWidth * 15/ 100
                }}
                className='Cards_header'>
                <div style={{ bottom: "-13%", right: '1%', zIndex: 10 }} className={`px-4  items-center flex justify-center text-center aspect-square rounded-full absolute ${isDarkMode ==="dark" ? ' bg-black' : ' bg-white'}`}>
                    <span>5 min <br /> read</span>
                </div>
                <div class="button-wrap">{
                    arr.length !== 0 && arr.map((item, index) => {
                        return (
                            <div
                                id={item?.id}
                                onClick={() => {
                                    // handleClick(item?.id);
                                    setSelectedBlog(item?.title)
                                    navigate(`/blog?${item?.title}`);

                                }}
                                // style={{ backgroundImage: `${require('../assets/Rectangle 20.png')}` }}

                                className={`button`}>
                                {
                                    item?.img != undefined && <img style={{ zIndex: -10 }}
                                        onClick={() => {
                                            // handleClick(item?.id)
                                        }} className='absolute w-full' src={require(`../assets/${item?.img}`)} alt="" />
                                }

                                <span>{item?.id}</span>
                                {item?.title}
                            </div>

                        )
                    })
                }
                </div>
                <div
                    style={{
                        backgroundColor:"transparent"
                    }}
                    className='sub_title'
                >
                    <div className="">
                        <p className='cursor-pointer hover:underline' onClick={() => {
                            setactiveSection('about')
                            abouref.current?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'center'
                            });

                        }}
                            style={{
                                textDecoration: activeSection === "about" ? "underline" : 'none',
                                color: activeSection === "about" ? "rgb(142, 77, 255)" : '',
                            }}
                        >About the company</p>

                        <p className='cursor-pointer hover:underline' onClick={() => {
                            setactiveSection('timeline')
                            timelineRef.current?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'center'
                            });

                        }}
                            style={{
                                textDecoration: activeSection === "timeline" ? "underline" : 'none',
                                color: activeSection === "timeline" ? "rgb(142, 77, 255)" : '',
                            }}
                        >Timeline</p>
                        {/* <p>Sustainablilty initiatives</p> */}
                        {/* <p>Milestones</p> */}
                        <p onClick={() => {
                            setactiveSection('benefits')
                            benefitsRef.current?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'center'
                            });

                        }}
                            style={{
                                textDecoration: activeSection === "benefits" ? "underline" : 'none',
                                color: activeSection === "benefits" ? "rgb(142, 77, 255)" : '',
                            }}

                            className='cursor-pointer hover:underline'>Benefits</p>
                        {/* <p>Additional Reference</p> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default BlogHeader