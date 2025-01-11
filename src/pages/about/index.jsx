import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';
import HeroSec from '../../components/shared/HeroSec';
import { useStyles } from './about.style';
import { Container, Paper, Divider } from '@mui/material';
import TitleSection from '../../components/shared/TitleSection';



const About = () => {
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: "smooth",
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>

      <Box className={classes.productsSliderStyle + ' '}>
        <HeroSec title={"About Us"} />
        <Container maxWidth="lg" className='py-12'>
          {/* Header Section */}
          <Box my={4} textAlign="center">

            <TitleSection title={"Welcome to DnD Solutions"} />

            <Typography variant="h6" color="textSecondary" paragraph>
              A dynamic and innovative company specializing in the manufacturing of Organic Fertilizers, Construction Chemicals, and Cleaning Agents.
            </Typography>
          </Box>

          {/* Our Story Section */}
          <Box mb={4}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>

            <Typography paragraph>
              The vision of DnD Solutions was born out of the determination of our founders, Dipen Nagar and Dharam Chavda, who shared a common goal: to develop high-quality, sustainable chemical solutions that would cater to the unique needs of diverse industries. After years of rigorous research and testing, we officially incorporated in 2024, marking the start of a new chapter for our company.
            </Typography>
            <Typography paragraph>
              Our core focus is on the development and manufacture of organic fertilizers, construction chemicals, and cleaning agents. What sets us apart is our commitment to innovation and customization—we specialize in creating tailor-made chemical solutions that are specifically designed to meet the precise requirements of our clients.
            </Typography>
          </Box>

          {/* Mission Section */}
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>

            <Typography paragraph>
              Our mission at DnD Solutions is to create and deliver sustainable, high-quality chemical products that make a positive impact on the environment and enhance the operational success of our clients. We aim to provide solutions that are not only effective but also eco-conscious, ensuring long-term sustainability for agriculture, construction, and industrial cleaning sectors.
            </Typography>
          </Paper>

          {/* Expertise Section */}
          <Box mb={4}>
            <Typography variant="h4" gutterBottom>
              Our Expertise
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Organic Fertilizers
                  </Typography>
                  <Typography paragraph>
                    Our organic fertilizers are designed to improve soil health and enhance agricultural productivity through natural and environmentally friendly ingredients. Whether for small-scale gardening or large-scale farming, our fertilizers boost plant growth while enriching the soil, offering a safer and more sustainable alternative to chemical fertilizers.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Construction Chemicals
                  </Typography>
                  <Typography paragraph>
                    We provide a wide range of high-performance construction chemicals that cater to the needs of modern-day construction. From concrete admixtures and waterproofing solutions to specialized coatings, our products are engineered to improve the durability, stability, and sustainability of construction projects. Our focus is on products that enhance strength while minimizing environmental impact.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Cleaning Agents
                  </Typography>
                  <Typography paragraph>
                    Our cleaning agents are specially formulated to meet the demands of industrial, commercial, and residential cleaning, offering non-toxic, biodegradable products that deliver excellent results without harmful chemicals. We also specialize in developing custom cleaning solutions tailored to the specific needs of our clients.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Custom Chemical Solutions Section */}
          <Box mb={4}>
            <Typography variant="h4" gutterBottom>
              Custom Chemical Solutions
            </Typography>
            <Typography paragraph>
              One of the standout features of DnD Solutions is our ability to develop custom chemicals tailored to the unique needs of each client. Whether it’s a specialized cleaning agent for a particular application or a bespoke construction chemical, we work closely with our clients to understand their requirements and deliver highly effective, tailored solutions. This flexibility sets us apart in the industry and ensures our customers get exactly what they need to optimize their operations.
            </Typography>
          </Box>

          {/* Why Choose Us Section */}
          <Box mb={4}>
            <Typography variant="h4" gutterBottom>
              Why Choose Us?
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Expertise in Customization</Typography>
                <Typography paragraph>
                  We excel in designing chemical solutions that are specifically developed for our clients’ unique needs, ensuring maximum performance and efficiency.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Sustainability at Core</Typography>
                <Typography paragraph>
                  Our products are designed with the environment in mind. We prioritize eco-friendly materials, processes, and solutions that contribute to a healthier planet.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Innovation & Research-Driven</Typography>
                <Typography paragraph>
                  With over seven years of research and development, we continually strive to innovate and improve our products, keeping up with industry trends and customer needs.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Quality Assurance</Typography>
                <Typography paragraph>
                  We are committed to maintaining the highest standards of quality in every product we create. From raw material sourcing to final production, we ensure that our products meet rigorous quality checks.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Customer-Centric Approach</Typography>
                <Typography paragraph>
                  At DnD Solutions, customer satisfaction is at the heart of everything we do. We listen to our clients’ needs, provide expert advice, and deliver products that exceed expectations.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Footer Section */}
          <Divider sx={{ marginY: 4 }} />
          <Box textAlign="center" py={2}>
            <Typography variant="body2" color="textSecondary">
              DnD Solutions – Innovation, Sustainability, and Customization for a Better Tomorrow
            </Typography>
          </Box>
        </Container>
      </Box>



    </>
  )
}

export default About
