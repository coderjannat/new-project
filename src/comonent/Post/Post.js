import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Grid, Typography, Card, Box, CardContent, CardActions } from '@mui/material';
import { BsSuitHeartFill } from 'react-icons/bs';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';

const styles = {
  paperContainer1: {
    backgroundImage: "url(https://i.ibb.co/VpMtzw5/Untitled.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: 470,
    height: 192,
  },
};


const Post = () => {
  const [explores, setExplores] = useState([])

  useEffect(() => {

    fetch('/posts.json')
      .then((res) => res.json())

      .then((data) => setExplores(data));
  }, []);

  return (
    <>

      <Container>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 3, pt: 4 }}>Our Collection</Typography>

        <Grid container spacing={2}>

          {
            explores.map((explore, id) => <Grid item xs={12} sm={6} md={6} key={id}>
              <Card sx={{ minWidth: 458, minHeight: 562, alignItems: 'center' }} style={styles.paperContainer1}>
                <CardContent className='pt-5 mt-5'>
                  <h2 style={{ fontSize: 40, color: "#ffff", paddingLeft: 3, paddingRignt: 10, paddingTop: 140, fontWeight: 600 }}>A Guide To <br />Rocky Mountain Vacations</h2>

                  <p style={{ color: "#ffff", paddingTop: 10 }}>
                    These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
                  </p>
                </CardContent>
                <hr style={{ marginTop: 30, border: "1px solid #ffff", }} />
                <CardActions className='pt-5'>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <BsSuitHeartFill size={25} color="#ffff" />
                    <p style={{ color: "#ffff", paddingLeft: 3, paddingRignt: 10 }}>325</p>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <BsChatRightDotsFill size={25} color="#ffff" />
                    <p style={{ color: "#ffff", paddingLeft: 3 }}>115</p>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <FaShareAlt size={25} color="#ffff" />
                    <p style={{ color: "#ffff", paddingLeft: 3 }}>47</p>
                  </Box>
                </CardActions>
              </Card>
            </Grid>)
          }

        </Grid>
      </Container>
    </>

  );
};

export default Post;