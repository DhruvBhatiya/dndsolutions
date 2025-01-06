
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const FloorCleaner = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                    Floor Cleaner
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
                        DnD Solutions Floor Cleaner is a powerful, versatile cleaning solution designed to keep all types of flooring sparkling clean and hygienic. Whether for industrial, commercial, or residential use, our floor cleaner effectively tackles dirt, grime, and stains while being safe for users and the environment.
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
                            <ListItemText className={classes.listText} primary="Effective Cleaning Power: Formulated to penetrate and lift tough dirt and stains from various flooring types, including tile, vinyl, laminate, and concrete." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Streak-Free Finish: Leaves surfaces clean and shiny without streaks or residue, ensuring a professional appearance." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Eco-Friendly Formula: Made with biodegradable ingredients, our Floor Cleaner is safe for the environment and helps you maintain a sustainable cleaning routine." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Non-Toxic and Safe: Free from harsh chemicals, it’s safe for use around children and pets, providing peace of mind during cleaning." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Easy Application: Ready to use or can be diluted as needed, making it versatile for different cleaning scenarios." />
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
                        <ListItemText className={classes.listText} primary="Residential Use: Perfect for maintaining the cleanliness of floors in homes, including kitchens, bathrooms, and living areas." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Commercial and Industrial: Ideal for use in offices, warehouses, and facilities, where maintaining a clean and safe environment is essential." />
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
                            <ListItemText className={classes.listText} primary="For Routine Cleaning: Spray directly onto the floor surface or apply with a mop." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="For Deep Cleaning: Dilute the Floor Cleaner as directed, apply generously, and scrub with a mop or brush." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Rinse with clean water if necessary and allow to dry." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

              {/* How It Works Section */}
              <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Why Choose DnD Solutions Floor Cleaner?
                    </Typography>
                    <Typography paragraph>
                    With DnD Solutions Floor Cleaner, you get a reliable, effective solution for maintaining clean and safe floors. Our commitment to quality and sustainability means you can trust our products to deliver exceptional results while caring for the environment.
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
                    Revitalize your floors with DnD Solutions Floor Cleaner! Contact us today to place your order or to find out more about our complete range of cleaning solutions.
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

export default FloorCleaner;
