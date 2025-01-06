
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const GlassAndSurfaceCleaner = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                Glass and Surface Cleaner
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
                    DnD Solutions Glass and Surface Cleaner is a powerful and effective cleaning solution designed to leave glass and hard surfaces sparkling clean and streak-free. Perfect for both residential and commercial use, our cleaner ensures a crystal-clear shine that enhances any environment.
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
                            <ListItemText className={classes.listText} primary="•	Streak-Free Formula: Specially formulated to provide a streak-free finish on glass, mirrors, windows, and other smooth surfaces." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Multi-Surface Application: Versatile enough to clean a variety of surfaces, including stainless steel, laminate, and countertops, making it a go-to solution for all your cleaning needs." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Quick-Drying: Dries rapidly to prevent streaking and minimize downtime, allowing you to enjoy a clean space sooner." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Eco-Friendly Ingredients: Made with biodegradable components, this cleaner supports sustainability without sacrificing performance." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Pleasant Fragrance: Leaves a fresh, clean scent that enhances the atmosphere of any room." />
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
                        <ListItemText className={classes.listText} primary="•	Home Use: Ideal for maintaining the cleanliness of windows, mirrors, and surfaces throughout your home, from kitchens to bathrooms." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="•	Commercial Use: Perfect for offices, restaurants, and retail spaces, ensuring a professional and polished appearance for all surfaces." />
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
                            <ListItemText className={classes.listText} primary="1.	Spray Glass and Surface Cleaner directly onto the surface or onto a clean microfiber cloth." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="2.	Wipe in a circular motion or with straight strokes to remove dirt, smudges, and fingerprints." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="3.	For heavily soiled areas, allow the cleaner to sit for a few moments before wiping." />
                        </ListItem>
                      
                    </List>
                </Container>
            </Card>

              {/* How It Works Section */}
              <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Why Choose DnD Solutions Glass and Surface Cleaner?
                    </Typography>
                    <Typography paragraph>
                    With DnD Solutions Glass and Surface Cleaner, you can achieve a spotless shine without the hassle. Our commitment to quality and eco-friendly practices ensures you are using a product that delivers outstanding results while being kind to the planet.
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
                    Transform your cleaning routine with DnD Solutions Glass and Surface Cleaner! Contact us today to place your order or to discover more about our complete line of cleaning products.
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

export default GlassAndSurfaceCleaner;
