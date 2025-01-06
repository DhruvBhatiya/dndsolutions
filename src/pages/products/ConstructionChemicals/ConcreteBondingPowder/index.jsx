
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const ConcreteBondingPowder = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                    Concreate Nanotech Bonding Solid Powder by DnD Solutions
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Revolutionize Your Projects with Our Advanced Nanotech Bonding Solution
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
                        At DnD Solutions, we are proud to introduce our Concreate Nanotech Bonding Solid Powder—a cutting-edge formulation designed for superior adhesion and durability in a variety of applications. Whether you're in construction, manufacturing, or DIY projects, our innovative product ensures unmatched performance.
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
                            <ListItemText className={classes.listText} primary="Advanced Nanotechnology: Our bonding powder utilizes nanotechnology to create microscopic bonds that enhance strength and longevity, ensuring a robust connection between materials." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Versatile Application: Perfect for concrete, masonry, ceramics, and more, this bonding agent is suitable for a wide range of surfaces and projects." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Easy to Use: Simply mix with water or applicable solvents, apply, and watch as your materials bond with exceptional strength." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Fast Curing Time: Designed to minimize downtime, our formula cures quickly, allowing you to move forward with your projects without delay." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            {/* How It Works Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        Why Choose Concreate Nanotech Bonding Solid Powder?
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Superior Strength: Achieve bonds that withstand heavy loads and environmental stressors, ensuring long-lasting results." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Environmentally Friendly: Formulated with eco-conscious materials, our product prioritizes sustainability without compromising performance." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Quality Assurance: Each batch undergoes rigorous testing to meet high standards of safety and efficacy, giving you peace of mind with every application." />
                        </ListItem>

                    </List>
                </Box>
            </Container>

            {/* Application Instructions Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        Applications:
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Construction: Ideal for reinforcing structures, joining components, and ensuring stability in various building projects." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Repairs: Perfect for patching cracks and restoring integrity to surfaces, enhancing the lifespan of existing materials." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Creative Projects: Whether you’re a professional or a DIY enthusiast, our bonding powder is excellent for artistic and craft applications." />
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
                        <ListItemText className={classes.listText} primary="Expert Support: Our knowledgeable team is here to assist you in selecting the right products and techniques for your specific needs." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Customer Commitment: We stand by our products with a satisfaction guarantee, ensuring you receive quality and value in every purchase." />
                    </ListItem>

                </List>
            </Container>

            {/* Customer Satisfaction Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography paragraph>
                        Transform your bonding processes with DnD Solutions’ Concreate Nanotech Bonding Solid Powder. Bond with confidence, build with strength!
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

export default ConcreteBondingPowder;
