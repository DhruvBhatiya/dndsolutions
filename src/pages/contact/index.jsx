import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';
import HeroSec from '../../components/shared/HeroSec';
import { useStyles } from './contact.style';
import ContactForm from './ContactForm';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: 'smooth',
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>
      <Box className={classes.productsSliderStyle + ' ' + 'pb-7'}>
      
        {/* <TitleSection title={"Feel free to contact us"} className={"productTitle"} /> */}
        <Container1200 className={'pt-12 pb-6 lg:px-0 px-2'}>
          <h1 className='text-4xl font-semibold mb-6'>Feel free to contact us</h1>
          <Grid container spacing={5}>
            <Grid item lg={5} xs={12}>

              {/* Left Column: Address Section */}
              <div className=" w-full mb-8 lg:mb-0">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">Registered office</h2>
                  <p className="mb-4">
                    Ahmedabad,
                    <br />
                    Gujarat 380001
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Branch office</h2>
                  <p className="mb-4">
                    Palace road, Rajkot,
                    <br />
                    Gujarat 360001
                  </p>

                  <p className="mb-4">
                    <strong>Phone:</strong>

                    +919909472997 |
                    +919429317436
                  </p>
                  <p className="mb-4">
                    <strong>Email:</strong> help@dndsolutions.in
                  </p>
                  <p className="mb-4">
                    <strong>Business Hours:</strong>
                    <br />
                    Monday - Saturday: 9:30 AM to 6:00 PM
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>
                  <a href='https://www.linkedin.com/company/dnd-solutionsindia' target='_blank'> <LinkedInIcon className='!w-10 !h-10 hover:text-blue-500' /></a>

                </div>
              </div>



            </Grid>
            <Grid item lg={7} xs={12}>
              {/* Right Column: Contact Form */}
              <div className="w-full">
                <ContactForm />
              </div>
            </Grid>
          </Grid>
        </Container1200>
      </Box>
    </>
  );
};

export default Contact;
