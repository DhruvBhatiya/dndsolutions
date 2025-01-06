
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const RustCleaner = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                Restore and Protect with Our Powerful Rust Cleaner Solutions
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
                    At DnD Solutions, we understand how frustrating rust can be. Our advanced rust cleaner solutions are designed to effectively eliminate rust and corrosion, restoring surfaces to their original condition and prolonging their lifespan.
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
                            <ListItemText className={classes.listText} primary="Powerful Formulation: Our rust cleaners penetrate deeply to dissolve rust, making it easy to remove even the toughest corrosion from metal surfaces." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Versatile Applications: Suitable for a wide range of surfaces, including tools, machinery, vehicles, and outdoor equipment—our solutions tackle rust wherever it appears." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Easy to Use: Simply apply, wait for the solution to work its magic, and wipe or rinse away the rust. Our user-friendly design ensures efficient cleaning." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Protective Barrier: Many of our products leave behind a protective coating that helps prevent future rust formation, keeping your surfaces safe from moisture." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Why Choose DnD Solutions’ Rust Cleaners?
                    </Typography>
                    <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Eco-Friendly Options: We prioritize sustainability, offering formulations that are effective yet safe for the environment and your health." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Quality Assurance: Each product undergoes rigorous testing to ensure high performance and reliability, giving you confidence in your cleaning process." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Expert Support: Our knowledgeable team is here to assist you with product selection and application tips tailored to your specific needs." />
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
                            <ListItemText className={classes.listText} primary="Automotive Care: Restore the appearance of your vehicle’s body and undercarriage by removing rust and protecting against future corrosion." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Home Maintenance: Keep tools, fences, and outdoor furniture in top condition, enhancing both appearance and functionality" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Industrial Use: Ideal for heavy-duty applications in manufacturing and construction, our rust cleaners ensure that equipment and machinery operate smoothly." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            {/* Best Results Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Typography className={classes.secTitle} variant="h5" gutterBottom>
                Why DnD Solutions?
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Commitment to Excellence: We are dedicated to providing you with the best products that meet your cleaning and maintenance needs." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Satisfaction Guaranteed: We stand behind our rust cleaner solutions, offering a satisfaction guarantee to ensure your complete happiness with your purchase." />
                    </ListItem>

                </List>
            </Container>



            {/* Customer Satisfaction Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
  
                    <Typography paragraph>
                    Don’t let rust take over—choose DnD Solutions’ effective rust cleaner solutions. Restore, protect, and maintain with confidence!
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

export default RustCleaner;
