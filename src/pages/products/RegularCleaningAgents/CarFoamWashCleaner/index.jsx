
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const CarFoamWashCleaner = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                Car Foam Wash Cleaner
                </Typography>

            </Box>

            {/* Product Image */}
            {/* <CardMedia
                component="img"
                height="400"
                image={require(`${process.env.REACT_APP_IMAGES_PATH}/images/bg/product-bg.webp`)}  // Replace with actual image URL
                alt="Tatvik Organic Fertilizer"
                sx={{ mb: 4 }}
            /> */}

            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>

                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                        Product Overview
                    </Typography>
                    <Typography paragraph>
                    DnD Solutions Car Foam Wash Cleaner is a high-performance automotive cleaning solution designed to provide an exceptional wash for your vehicle. Our rich, foamy formula effectively lifts dirt, grime, and road contaminants, leaving your car looking pristine and protected.
                    </Typography>
                </Box>
            </Container>

            {/* Why Choose Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                        Key Features
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Thick Foam Action: The innovative foaming formula clings to surfaces, allowing for deep cleaning while minimizing scratches and swirl marks." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Powerful Dirt Removal: Effectively removes stubborn dirt, mud, and road salt, restoring your vehicle's shine and finish." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Safe for All Surfaces: Gentle on paint, glass, chrome, and plastic, making it suitable for all vehicle types without damaging delicate surfaces." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Eco-Friendly Ingredients: Formulated with biodegradable components, ensuring a cleaner wash that is safe for the environment." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Pleasant Fragrance: Enjoy a fresh scent while washing your car, enhancing your overall cleaning experience." />
                        </ListItem>
                        
                        
                    </List>
                </Container>
            </Card>

            {/* Application  */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Typography className={classes.secTitle} variant="h4" gutterBottom>
                    Application
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Residential Use: Ideal for regular car maintenance, ensuring your vehicle looks its best after every wash." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Commercial Use: Perfect for car washes, detailing services, and automotive businesses looking to provide a high-quality cleaning experience for their customers." />
                    </ListItem>
                 
                </List>
            </Container>

            {/* How to Use */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    How to Use
                    </Typography>
                    <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Rinse your vehicle with water to remove loose dirt and debris." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Dilute Car Foam Wash Cleaner according to the instructions (typically 1 part cleaner to 4 parts water) in a bucket or foam cannon." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Apply the foam generously to the vehicle, starting from the top and working downwards." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Use a soft sponge or wash mitt to gently clean the surface." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Rinse thoroughly with clean water and dry with a microfiber towel for a streak-free finish." />
                        </ListItem>
                      
                    </List>
                </Container>
            </Card>

              {/* How It Works Section */}
              <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Why Choose DnD Solutions Car Foam Wash Cleaner?
                    </Typography>
                    <Typography paragraph>
                    With DnD Solutions Car Foam Wash Cleaner, you can maintain your vehicle’s appearance with ease and confidence. Our commitment to quality, performance, and eco-friendly practices ensures that you’re choosing a product that delivers excellent results while being kind to the planet.
                    </Typography>
                </Box>
            </Container>

           {/* Customer Satisfaction Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Order Today
                    </Typography>
                    <Typography paragraph>
                    Revitalize your vehicle’s shine with DnD Solutions Car Foam Wash Cleaner! Contact us today to place your order or to learn more about our complete line of automotive cleaning products.
                    </Typography>
                </Box>
            </Container>

            {/* Call to Action */}
            {/* <Box textAlign="center" sx={{ py: 4 }}>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Box> */}

          

        </Container>
    );
};

export default CarFoamWashCleaner;
