
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const NanotechWaterproofingLiquidChemical = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                    Nanotech Waterproofing Liquid Chemical by DnD Solutions
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Protect Your Surfaces with Cutting-Edge Waterproofing Technology
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
                        At DnD Solutions, we understand the importance of safeguarding your investments from water damage. Our Nanotech Waterproofing Liquid Chemical is engineered to provide superior protection for a variety of surfaces, ensuring long-lasting durability and peace of mind.
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
                            <ListItemText className={classes.listText} primary="Advanced Nanotechnology: Our waterproofing solution utilizes nanotechnology to penetrate deep into surfaces, creating an invisible barrier that repels water while allowing breathability." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Versatile Application: Ideal for use on concrete, masonry, wood, and more, this versatile formula adapts to various surfaces, making it perfect for both indoor and outdoor applications." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Easy to Apply: Designed for user-friendly application, our liquid chemical can be sprayed or rolled on, providing complete coverage with minimal effort." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Long-Lasting Protection: Once applied, our waterproofing agent creates a durable shield that withstands harsh weather conditions, UV exposure, and aging." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            {/*Why Choose */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        Why Choose DnD Solutions’ Nanotech Waterproofing?
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Eco-Friendly Formula: Our product is formulated with environmentally safe ingredients, ensuring effective protection without compromising your health or the planet." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Quality Assurance: Each batch is rigorously tested to meet high standards of performance and safety, giving you confidence in every application." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Customer Support: Our expert team is ready to assist you with product selection and application techniques tailored to your specific needs." />
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
                            <ListItemText className={classes.listText} primary="Construction and Renovation: Protect new structures or restore existing ones from moisture damage, enhancing their longevity and structural integrity." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Home Improvement: Ideal for waterproofing decks, patios, and basements, keeping your living spaces dry and comfortable." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Industrial Use: Suitable for warehouses, factories, and other industrial applications where water resistance is critical." />
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
                        <ListItemText className={classes.listText} primary="Commitment to Excellence: We are dedicated to providing top-quality products that meet your needs and exceed your expectations." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Satisfaction Guaranteed: We stand behind our products, offering a satisfaction guarantee to ensure you are happy with your purchase." />
                    </ListItem>
                </List>
            </Container>



            {/* Customer Satisfaction Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography paragraph>
                        Shield your surfaces with DnD Solutions’ Nanotech Waterproofing Liquid Chemical. Protect what matters—stay dry, stay safe!
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

export default NanotechWaterproofingLiquidChemical;
