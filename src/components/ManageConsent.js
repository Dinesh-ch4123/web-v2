import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';











const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#393939',
            '& + .MuiSwitch-track': {
                backgroundColor: '#B7B7B7',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#393939',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: '#393939'
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: '#393939',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    outline: 'none',

    paddingTop: '30px',
    paddingBottom: '30px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'hidden',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '0px solid white'
};

export default function ManageConsent({
    ManageCookiesopen,
    setManageCookiesopen,
    handleManageCookiesopen,
    handleManageCookiesClose
}) {



    return (
        <div>

            <Modal

                disableBackdropClick={true}
                open={ManageCookiesopen}
                // onClose={handleCookiesClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div className='text-black w-full px-5'>
                        <CloseIcon onClick={() => setManageCookiesopen(false)} className='absolute cursor-pointer right-5 top-5' />
                        <h1 className='mb-5'><b>Manage Consent Preferences</b></h1>
                        <div className='flex flex-col'>
                            <div className='flex flex-row w-full justify-between'>
                                <div className='flex flex-row items-center justify-center'>
                                    <AddIcon className='mr-3' />
                                    <span className=''>Sticky Necessary Cookies</span>
                                </div>
                                <span style={{ color: "#8E4DFF", position: 'relative', right: '0' }}>Always Active</span>
                            </div>
                            <div className='flex flex-row w-full my-5 justify-between'>
                                <div className='flex flex-row items-center justify-center'>
                                    <AddIcon className='mr-3' />
                                    <span className=''>Performance Cookies</span>
                                </div>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{}} defaultChecked />}

                                />
                            </div>
                            <div className='flex flex-row w-full mb-5 justify-between'>
                                <div className='flex flex-row items-center justify-center'>
                                    <AddIcon className='mr-3' />
                                    <span className=''>Functional Cookies</span>
                                </div>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{}} defaultChecked />}

                                />
                            </div>
                            <div className='flex flex-row w-full mb-5 justify-between'>
                                <div className='flex flex-row items-center justify-center'>
                                    <AddIcon className='mr-3' />
                                    <span className=''>Targeting Cookies</span>
                                </div>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{}} defaultChecked />}

                                />
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-10  w-full'>

                        <div onClick={handleManageCookiesClose} className='relative text-base mx-2 hover:scale-105	 font-[700] px-12 py-3 flex items-center justify-center  cursor-pointer'
                            style={{
                                backgroundColor: "#8E4DFF",
                                color: "white",
                                borderRadius: '30px',
                                boxShadow: 'rgb(19 18 18) 3px 2px 10px -1px',
                                fontSize: '15px'
                            }}>
                            <span>CONFIRM MY CHOICE</span>
                        </div>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}