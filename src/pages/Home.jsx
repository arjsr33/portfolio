import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container 
      maxWidth={false} 
      sx={{
        display: 'flex',
        justifyContent: 'center',  // Horizontal centering
        // alignItems: 'center',      // Vertical centering
        minHeight: '100vh',
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        sx={{
          textAlign: 'left',
          maxWidth: '700px',
          width: '100%',
          padding: '40px',
          boxSizing: 'border-box',
          marginTop: '200px',
        }}
      >
        <Typography variant="h5" component="h5" gutterBottom>
          Hey, I'm Arjun
        </Typography>
        <br></br>
        <Typography variant="body1" >
          I'm an aspiring Full Stack Developer with knowledge in the MERN stack and Python. I am passionate about building dynamic and scalable web applications, and I'm eager to apply my skills to real-world projects.
        </Typography>
        <br></br>
        <Typography variant="body1" >
          I'm constantly looking for new opportunities to learn and grow in the field of web development.
        </Typography>
        <br></br>
        <Typography variant="body1">
          You can get in touch with me at 
          <a href="mailto:hello@arjunsreedharan.com"> hello@arjunsreedharan.com</a>.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;