
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const OxidationCleaner = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                Oxidation Cleaner Solutions by DnD Solutions
                </Typography>
                <Typography variant="h6" color="textSecondary">
                Revitalize Your Surfaces with Our Effective Oxidation Cleaners
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
                    <Typography paragraph>
                    At DnD Solutions, we know that oxidation can tarnish and damage a variety of surfaces. Our specialized oxidation cleaner solutions are formulated to effectively remove oxidation buildup, restoring the original shine and luster to your metals and surfaces.
                    </Typography>
                </Box>
            </Container>

            {/* Why Choose Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                    Key Features:
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Powerful Oxidation Removal: Our advanced formula penetrates and dissolves oxidation, making it easy to restore surfaces to their former glory without harsh scrubbing." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Versatile Applications: Perfect for a variety of materials, including aluminum, brass, stainless steel, and more—ideal for automotive, marine, and household use." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	User-Friendly: Designed for easy application, simply spray on, let it sit, and wipe away the oxidation for quick and effortless cleaning." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Protective Finish: Many of our products leave a protective barrier that helps prevent future oxidation, prolonging the life of your surfaces." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

       {/* Best Results Section */}
       <Container maxWidth="md" sx={{ py: 1 }}>
                <Typography className={classes.secTitle} variant="h5" gutterBottom>
                Why Choose DnD Solutions’ Oxidation Cleaners?
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="•	Eco-Friendly Formulations: We prioritize your health and the environment by using biodegradable ingredients that are tough on oxidation but safe for everyday use." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="•	Quality Assurance: Each product is rigorously tested to ensure optimal performance and safety, giving you confidence in your cleaning routine." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="•	Expert Support: Our knowledgeable team is available to provide guidance and recommendations tailored to your specific oxidation removal needs." />
                    </ListItem>

                </List>
            </Container>

            {/* Application Instructions Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Applications:
                    </Typography>
                    <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Automotive Detailing: Restore the shine of your car’s wheels, trim, and other metallic surfaces, enhancing its overall appearance." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Marine Maintenance: Keep boats and marine equipment looking their best by removing oxidation from metal parts and surfaces." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Home Care: Ideal for cleaning oxidized fixtures, appliances, and outdoor furniture, bringing back their original beauty." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Why DnD Solutions?
                    </Typography>
                    <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Commitment to Excellence: We are dedicated to providing high-quality products that meet your cleaning and maintenance needs." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="•	Satisfaction Guaranteed: We stand by our oxidation cleaner solutions, offering a satisfaction guarantee to ensure your complete happiness with your purchase." />
                        </ListItem>
                       
                    </List>
                </Container>

     



            {/* Customer Satisfaction Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography paragraph>
                    Don’t let oxidation dull your surfaces—choose DnD Solutions’ effective oxidation cleaner solutions. Restore, protect, and shine with confidence!
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

export default OxidationCleaner;
