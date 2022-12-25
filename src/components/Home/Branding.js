import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const Branding = () => {
    const BrandingWrapper = styled(Box)(({theme})=>({
        width: "100%",
        height: "70vh",
        backgroundColor: '#f1f1f1',
        padding: "0 3rem",
        margin:"2rem 0",
        clipPath:" polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%)",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        gap:'3rem'
        
    }));
    return (
        <BrandingWrapper>
          <Stack spacing={2} sx={{flexGrow:'1'}}>
          <Typography sx={{lineHeight:'1'}} variant='h2'>
                Let's Grow Your <br /> Brand to the <br /> Next Level
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio, nulla tempore voluptates nobis molestiae veniam perferendis perspiciatis et illo!
            </Typography>
            <Button sx={{}} variant='contained' color='success' style={{width:'50%'}}>Hire us</Button>
          </Stack>
          <Box>
            <img style={{width:"100%", height:'100%'}} src="https://i.ibb.co/ZXhMYP4/vacant-job-promo-with-join-us-message-52683-61757.webp" alt="" />
          </Box>
        </BrandingWrapper>
    );
};

export default Branding;