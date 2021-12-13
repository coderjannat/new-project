import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { BiCodeAlt } from 'react-icons/bi';
import { BsCloudFill } from 'react-icons/bs';




const styles = {
    paperContainer1: {
        backgroundImage: "url(https://i.ibb.co/tXhm8Rn/cata1.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 470,
        height: 192,
    },
    paperContainer2: {
        backgroundImage: "url(https://i.ibb.co/tXhm8Rn/cata1.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 470,
        height: 192,
    },
    paperContainer3: {
        backgroundImage: "url(https://i.ibb.co/tXhm8Rn/cata1.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 470,
        height: 192,
    },
    paperContainer4: {
        backgroundImage: "url(https://i.ibb.co/tXhm8Rn/cata1.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 470,
        height: 192,
    },
};

const Catagories = () => {
    return (
        <>

            <Container>
                <Typography variant="h3" sx={{ color: 'text.primary', mb: 3, pt: 4 }}>Our Collection</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} >
                        <Paper sx={{ boxShadow: 0 }} style={styles.paperContainer1}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center'
                            }}>
                                <Typography variant="h5" sx={{ color: 'text.primary', m: 5, pt:5}}>Backend</Typography>
                                <BiCodeAlt size={70} color="#ffff" className="m-5 mt-5 pt-8" />
                            </Box>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >
                        <Paper sx={{ boxShadow: 0 }} style={styles.paperContainer2}>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center'
                            }}>
                                <Typography variant="h5" sx={{ color: 'text.primary', m: 5, pt:5}}>Backend</Typography>
                                <BiCodeAlt size={70} color="#ffff" className="m-5 mt-5 pt-8" />
                            </Box>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >
                        <Paper sx={{ boxShadow: 0 }} style={styles.paperContainer3}>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center'
                            }}>
                                <Typography variant="h5" sx={{ color: 'text.primary', m: 5, pt:5}}>Backend</Typography>
                                <BiCodeAlt size={70} color="#ffff" className="m-5 mt-5 pt-8" />
                            </Box>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >
                        <Paper sx={{ boxShadow: 0 }} style={styles.paperContainer4}>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center'
                            }}>
                                <Typography variant="h5" sx={{ color: 'text.primary', m: 5, pt:5}}>Backend</Typography>
                                <BsCloudFill size={70} color="#ffff" className="m-5 mt-5 pt-8" />
                            </Box>

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </>

    );
};

export default Catagories;

