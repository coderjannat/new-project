import React from 'react';
import { Paper, InputBase } from '@mui/material';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const styles = {
    paperContainer1: {
        backgroundImage: "url(https://i.ibb.co/j3TbDJv/Rectangle-18.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 1152,
        height: 362,
    },
};

const Subscribe = () => {
    return (
        <>
        
            <Container maxWidth="sm">
                <Box style={styles.paperContainer1}>

                    {/*-----------------------HERO-TITLE ------------------*/}
                    <div >
                        <div>
                            <h2 style={{ color: "#ffff", paddingTop: 10 }} >Startup <br /> Get the new technology for <br />later and read it at any time </h2>

                        </div>
                        <div className='pt-8 relative'>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-white border-opacity-50 hover:border-transparent rounded-full">
                                    Learn More
                                </button>
                            </Paper>

                        </div>
                    </div>


                </Box>
            </Container>
        </>
    );
};

export default Subscribe;