import React, { useEffect, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';









const marks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '>10',
    },
];
const durations = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 12,
        label: '12',
    },

];



const PricingPlan = ({ PricingPlanRef, isDarkMode }) => {
    const [alignment, setAlignment] = React.useState('stakeholders');

    const handleChange = (
        event,
        newAlignment,
    ) => {
        if (newAlignment === null) { return }
        console.log("-------->", newAlignment)
        setAlignment(newAlignment);
    };



    const [userValue, setuserValue] = useState(20)

    function handleuserChange(value) {
        // console.log(value.target.value, userValue)
        // if (userValue < 10) {
        //     setuserValue(value.target.value)
        // } else {
        //     if (value.target.value === 20) {

        //         setuserValue(value.target.value)
        //     } else {

        //         setuserValue(value.target.value - 1)
        //     }
        // }


        if (value.target.value === 1 || value.target.value === 5 || value.target.value === 10 || value.target.value === 20) {
            // if (value.target.value === 10) {
            //     setuserValue(value.target.value - 1)
            // } else {
            setuserValue(value.target.value)
            // }
        }
    }


    let [months, setmonths] = useState(['3M'])
    const [duratinoValue, setduratinoValue] = useState(12)
    function handledurationChange(value) {
        // console.log(value.target.value, duratinoValue)
        if (value.target.value === 1 || value.target.value === 3 || value.target.value === 6 || value.target.value === 12) {
            setduratinoValue(value.target.value)
        }

    }

    useEffect(() => {

        if (duratinoValue === 3) {
            setmonths(['0M', '3M'])
        } else if (duratinoValue === 6) {
            setmonths(['0M', '3M', '6M'])
        } else if (duratinoValue === 12) {
            setmonths(['0M', '3M', '6M', '12M'])

        }
    }, [duratinoValue])
    let customerObject =
    {
        usd: {
            '1-5': [15, 12, 10],
            '6-10': [12, 10, 8],
            '>10': [10, 8, 7]
        },
        eu: {
            '1-5': [12, 10, 8],
            '6-10': [10, 8, 6],
            '>10': [8, 6, 5]
        },
        inr: {
            '1-5': [1200, 960, 800],
            '6-10': [960, 800, 640],
            '>10': [800, 640, 560]
        }
    }

    let stakeholderobject = {
        usd: {
            '1-5': [12, 10, 8],
            '6-10': [10, 8, 6],
            '>10': [8, 7, 5]
        },
        eu: {
            '1-5': [10, 8, 6],
            '6-10': [8, 6, 5],
            '>10': [6, 5, 5]
        },
        inr: {
            '1-5': [960, 800, 750],
            '6-10': [800, 750, 600],
            '>10': [750, 600, 500]
        }
    }

    const [resultingobject, setresultingObject] = useState(alignment === 'stakeholders' ? stakeholderobject : customerObject)
    useEffect(() => {
        if (alignment === 'stakeholders') {
            setresultingObject(stakeholderobject)
        } else {
            setresultingObject(customerObject)

        }
    }, [alignment])


    const [currency, setcurrency] = useState('inr')
    const [graphState, setGraphState] = useState(resultingobject[currency]['>10'])

    useEffect(() => {
        if (userValue <= 5) {
            setGraphState(resultingobject[currency]['1-5'])
        } else if (userValue > 5 && userValue < 10) {
            setGraphState(resultingobject[currency]['6-10'])
        } else {
            setGraphState(resultingobject[currency]['>10'])
        }
    }, [userValue])







    return (
        <div
            ref={PricingPlanRef}
            style={{
                zIndex: 0,
                position: 'relative',
                // backgroundImage: isDarkMode ? "linear-gradient(to right, #1E1E1E,#0B0B0B)" : "linear-gradient(to right, #FFFFFF,#8C8B8B)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
               // backgroundImage: `url(${backgroundImageNew1})`,
                backgroundPosition: '5% 331px',
            }}
            className='w-full h-screen  pricing  flex flex-col' id="pricingplan"> 
            <h1

                className='font-semibold	font-Merriweather	text-center  md:text-4xl md:mt-0 mt-10 text-2xl'>
                Pricing Plans
            </h1>
            <div style={{ justifyContent: "space-between" }} className='md:w-[80%] md:h-[75%] w-[100%] h-[100%] md:mt-10 mt-7  flex items-center pricing-div content-between'>
                <div style={{ justifyContent: 'space-around' }} className='toggle-button md:w-[35%] md:h-[70%] w-[70%] flex flex-col item-center content-between md:pt-2 pt-0'>
                    <ToggleButtonGroup
                        style={{
                            border: "1px solid #4e4646",
                            boxShadow: "rgb(0 0 0) 0px 16px 17px",
                            position: 'relative',
                        }}
                        // color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton className={`${alignment === 'stakeholders' && 'active-butttonn'}`} value="stakeholders">Stakeholders</ToggleButton>
                        <ToggleButton className={`${alignment === 'customers' && 'active-butttonn'}`} value="customers">Customers</ToggleButton>
                        <img style={{ width: '25px', height: '25px' }} className='absolute -right-3 -top-3' src={require('../assets/question_icon.png')} alt="" />

                    </ToggleButtonGroup>

                    <div className='w-full slider1 md:mt-10 mt-5'>
                        <span style={{ fontWeight: '600' }}>No. of users</span>
                        <Box className="md:mt-3 mt-1" sx={{}}>
                            <Slider
                                value={userValue}
                                onChange={handleuserChange}
                                style={{}}
                                aria-label="Restricted values"
                                defaultValue={1}
                                // step={userValue < 5 ? 4 : userValue < 10 && userValue >= 5 ? 5 : 10}
                                // valueLabelDisplay={userValue > 10 ? false : false}
                                max={20}
                                min={1}
                                marks={marks}
                            />
                        </Box>
                    </div>

                    <div className='w-full slider1 mt-1'>
                        <span style={{ fontWeight: '600' }}>Duration</span>
                        <Box className="md:mt-3 mt-1" sx={{}}>
                            <Slider
                                value={duratinoValue}
                                onChange={handledurationChange}
                                style={{}}
                                aria-label="Restricted values"
                                defaultValue={3}
                                // step={duratinoValue}
                                valueLabelDisplay="auto"
                                max={12}
                                min={1}
                                marks={durations}
                            />
                        </Box>
                    </div>
                </div>
                <div style={{
                    boxShadow: "rgb(0 0 0) 6px 20px 20px", border: "1px solid #4e4646", borderRadius: '5px',
                    background: 'black'
                }} className='md:w-[60%] w-[85%] relative shadow-2xl items-center content-around flex-col flex h-[100%]'>
                    <div className='w-20 z-50 md:top-10 top-2 md:right-10 right-10 h-20 bg-white rounded-full absolute flex items-center content-center'>
                        <span style={{ color: "#151515", margin: 'auto', fontWeight: '700', fontSize: '10px' }}><b style={{ color: '#8E4DFF', fontWeight: '700', fontSize: '15px' }}><sup>₹</sup>{resultingobject[currency][userValue <= 5 ? '1-5' : userValue > 5 && userValue <= 10 ? '6-10' : '>10'][duratinoValue <= 3 ? '0' : duratinoValue > 3 && duratinoValue <= 6 ? '1' : '2']}</b>/user</span>
                    </div>
                    {/* <Chart

                        className="w-[80%]"
                        options={state.options}
                        series={state.series}
                    // type="line"
                    // width={'100%'}
                    /> */}

                    <div style={{ width: '80%', height: '65%', marginTop: '7%' }} className='relative'>
                        <span style={{
                            zIndex: -1,
                            bottom: "-20px",
                            left: "-15px",
                        }} className='text-white absolute'>1</span>
                        <span style={{
                            zIndex: -1,
                            bottom: "20px",
                            left: "-25px",
                            transform: "rotate(-90deg)", color: '#8E4DFF', fontSize: '12px'
                        }} className='text-white absolute'>users</span>
                        <span style={{
                            zIndex: -1,
                            bottom: "-20px",
                            left: "15px", color: '#8E4DFF', fontSize: '12px'
                        }} className='text-white absolute'>months</span>
                        <div style={{
                            width: '90%',
                            height: userValue <= 5 ? '72%' : userValue > 5 && userValue <= 10 ? '82%' : '92%',
                            background: 'red',
                            position: 'absolute',
                            bottom: 0,
                            clipPath: duratinoValue <= 3 ? "" : 'polygon(0% 0%, 100% 47%, 112% 23%, 110% 3%, 102% 108%, -1% 100%)',
                            backgroundImage: "linear-gradient(176deg, rgb(43 12 96), #49274d)",
                            // opacity: 0.4
                        }}></div>
                        <div
                            style={{
                                width: "2px",
                                height: "100%",
                                backgroundColor: '#8E4DFF'
                            }}
                            className='absolute flex '>
                            {['  <= 5 ', '   < 10 ', '>10 '].map((item, index) => {
                                console.log(userValue)
                                if (userValue <= 5 && index == 0) {
                                    return (
                                        <pre className='absolute text-white'
                                            style={{
                                                display: 'flex',
                                                bottom: '70%',
                                                left: '-38px',
                                                fontSize: '10px',
                                                alignItems: 'center'
                                            }}>{item}
                                            <div style={{ width: '5px', height: '2.5px', background: 'white' }}></div>
                                        </pre>
                                    )
                                } else if (userValue > 5 && userValue <= 10 && index < 2) {
                                    return (
                                        <pre className='absolute text-white'
                                            style={{
                                                display: 'flex',
                                                bottom: index == 0 ? '40%' : '80%',
                                                left: index == 0 ? '-38px' : '-44px',
                                                fontSize: '10px',
                                                alignItems: 'center'
                                            }}>{item}
                                            <div style={{ width: '5px', height: '2.5px', background: 'white' }}></div>
                                        </pre>
                                    )
                                } else if (userValue > 10 && index < 3) {
                                    return (
                                        <pre className='absolute text-white'
                                            style={{
                                                display: 'flex',
                                                bottom: index == 0 ? '30%' : index == 1 ? '60%' : '90%',
                                                left: index == 0 ? '-38px' : index == 1 ? '-44px' : '-21px',
                                                fontSize: '10px',
                                                alignItems: 'center'
                                            }}>{item}
                                            <div style={{ width: '5px', height: '2.5px', background: 'white' }}></div>
                                        </pre>
                                    )
                                } else {
                                    return null
                                }
                            })}


                        </div>
                        <div
                            style={{
                                width: "100%",
                                height: "2px",
                                backgroundColor: '#8E4DFF',
                                bottom: '0'
                            }}
                            className='absolute'>
                            {['3M ', '6M ', '12M '].map((item, index) => {
                                console.log(userValue)
                                if ((duratinoValue === 3 || duratinoValue === 1) && index == 0) {
                                    return (
                                        <pre className='absolute text-white'
                                            style={{
                                                display: 'flex',
                                                left: '88%',
                                                bottom: '-20px',
                                                fontSize: '10px',
                                                alignItems: 'center', justifyContent: 'center',

                                            }}>{item}
                                            <div style={{ width: '2.5px', height: '5px', background: 'white', position: 'absolute', top: '-10px' }}></div>
                                        </pre>
                                    )
                                } else if (duratinoValue == 6 && index < 2) {
                                    return (
                                        <pre className='absolute text-white'
                                            style={{
                                                display: 'flex',
                                                left: index == 0 ? '40%' : '90%',
                                                bottom: '-20px',
                                                fontSize: '10px',
                                                alignItems: 'center'
                                            }}>{item}
                                            <div style={{ width: '2.5px', height: '5px', background: 'white', position: 'absolute', top: '-10px' }}></div>
                                        </pre>
                                    )
                                } else if (duratinoValue == 12 && index < 3) {
                                    return (
                                        <pre className='absolute text-white'
                                            style={{
                                                display: 'flex',
                                                left: index == 0 ? '30%' : index == 1 ? '60%' : '90%',
                                                bottom: '-20px',
                                                fontSize: '10px',
                                                alignItems: 'center'
                                            }}>{item}
                                            <div style={{ width: '2.5px', height: '5px', background: 'white', position: 'absolute', top: '-10px' }}></div>
                                        </pre>
                                    )
                                } else {
                                    return null
                                }
                            })}
                        </div>
                    </div>
                    <div className='md:w-[75%] w-[90%] mt-5'>
                        <span style={{ color: 'white', fontSize: '20px', fontWeight: '600' }}>Savings <b style={{ color: '#8E4DFF', fontWeight: '800' }}>
                            <sup>
                                ₹
                                {/* $ */}
                            </sup>
                            {resultingobject[currency]['1-5'][0] - resultingobject[currency][userValue <= 5 ? '1-5' : userValue > 5 && userValue < 10 ? '6-10' : '>10'][duratinoValue <= 3 ? '0' : duratinoValue > 3 && duratinoValue <= 6 ? '1' : '2']}</b></span>
                        <p style={{ fontSize: '16px', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PricingPlan