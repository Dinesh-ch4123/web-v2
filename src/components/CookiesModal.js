import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ManageConsent from './ManageConsent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
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
    outline:'none'
};

export default function CookiesModal({ Cookiesopen, setCookiesopen, handleCookiesOpen, handleCookiesClose }) {

    const [ManageCookiesopen, setManageCookiesopen] = useState(false);
    const handleManageCookiesopen = () => {
        setManageCookiesopen(true)
    }
    const handleManageCookiesClose = () => {
        setManageCookiesopen(false)
    }

    return (
        <div>

            <Modal
                disableBackdropClick={true}
                open={Cookiesopen}
                // onClose={handleCookiesClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ManageConsent

                        ManageCookiesopen={ManageCookiesopen}
                        setManageCookiesopen={setManageCookiesopen}
                        handleManageCookiesopen={handleManageCookiesopen}
                        handleManageCookiesClose={handleManageCookiesClose}


                    />
                    <div className='text-black px-10'>
                        <h1 className='mb-5'><b>Cookies</b></h1>
                        <span>
                            By clicking “ Allow All” you agree to the storing of cookies on your device to enhance the site navigation, analyze site usage, and assist in our marketing efforts.
                        </span>
                    </div>
                    <div className='flex items-center justify-center mt-10  w-full'>

                        <div onClick={handleManageCookiesopen} className='relative text-base w-[30%] hover:scale-105	 font-[700]  px-2 py-3 flex items-center justify-center  cursor-pointer'
                            style={{
                                backgroundColor: "#AC7DFF",
                                color: "white",
                                borderRadius: '30px',
                                boxShadow: 'rgb(19 18 18) 3px 2px 10px -1px',
                                fontSize: '15px'
                            }}>
                            <span>CUSTOMIZE SETTINGS</span>
                        </div>
                        <div onClick={handleCookiesClose} className='relative text-base mx-3 w-[30%] hover:scale-105	 font-[700] px-2 py-3 flex items-center justify-center  cursor-pointer'
                            style={{
                                backgroundColor: "#8E4DFF",
                                color: "white",
                                borderRadius: '30px',
                                boxShadow: 'rgb(19 18 18) 3px 2px 10px -1px', fontSize: '15px'
                            }}>
                            <span>DISABLE ALL</span>
                        </div>
                        <div onClick={handleCookiesClose} className='relative text-base w-[30%] hover:scale-105	 font-[700] px-2 py-3 flex items-center justify-center cursor-pointer'
                            style={{
                                backgroundColor: "#8E4DFF",
                                color: "white",
                                borderRadius: '30px',
                                boxShadow: 'rgb(19 18 18) 3px 2px 10px -1px', fontSize: '15px'
                            }}>
                            <span>ALLOW ALL</span>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}