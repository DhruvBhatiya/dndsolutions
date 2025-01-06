
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const DishwasherGel = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                Dish wash Gel
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
                    DnD Solutions Dish wash Gel is a premium dishwashing solution designed to tackle tough grease and food residue with ease. Formulated for both domestic and commercial use, our dish wash gel delivers sparkling clean dishes while being gentle on your hands and the environment.
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
                            <ListItemText className={classes.listText} primary="Powerful Grease Cutting: Our advanced formula effortlessly breaks down tough grease and dried-on food, ensuring your dishes are spotless." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Gentle on Hands: Enriched with moisturizing agents, Dishwash Gel is tough on grease but soft on skin, making it perfect for frequent use." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Eco-Friendly Ingredients: Made with biodegradable components, this gel supports your commitment to sustainability without sacrificing cleaning power." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Concentrated Formula: A little goes a long way! Our concentrated gel ensures maximum cleaning efficiency with minimal product use." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Pleasant Fragrance: Enjoy a fresh, clean scent that leaves your dishes smelling as good as they look." />
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
                        <ListItemText className={classes.listText} primary="Home Use: Ideal for everyday dishwashing, including plates, utensils, pots, and pans, making meal cleanup a breeze." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Commercial Use: Perfect for restaurants, cafes, and catering services, ensuring high standards of cleanliness in a busy kitchen environment." />
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
                            <ListItemText className={classes.listText} primary="Apply a small amount of Dishwash Gel directly to a sponge or dishcloth." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Add water to create a lather and scrub dishes as needed." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Rinse thoroughly with clean water and allow to dry." />
                        </ListItem>
                      
                    </List>
                </Container>
            </Card>

              {/* How It Works Section */}
              <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Why Choose DnD Solutions Dishwash Gel?
                    </Typography>
                    <Typography paragraph>
                    With DnD Solutions Dishwash Gel, you can trust that your dishes will be clean, hygienic, and ready for use. Our dedication to quality and eco-friendly practices ensures you’re making a responsible choice for your home or business.
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
                    Transform your dishwashing routine with DnD Solutions Dishwash Gel! Contact us today to place your order or to learn more about our complete line of cleaning products.
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

export default DishwasherGel;
