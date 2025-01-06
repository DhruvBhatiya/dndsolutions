
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const TextileWashMaticLiquid = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                Textile Wash Matic Liquid
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
                    DnD Solutions Textile Wash Matic Liquid is a premium laundry solution designed specifically for all types of fabrics. Whether for industrial, commercial, or residential use, our advanced formula delivers exceptional cleaning power, ensuring your textiles are fresh, vibrant, and well-maintained.
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
                            <ListItemText className={classes.listText} primary="Superior Cleaning Action: Effectively removes tough stains, dirt, and odors from a wide variety of fabrics, including cotton, polyester, and blends." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Color Safe: Formulated to protect and preserve colors, preventing fading and maintaining the vibrancy of your textiles wash after wash." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Eco-Friendly: Crafted with biodegradable ingredients, Textile Wash Matic Liquid supports your commitment to sustainability without compromising cleaning efficacy." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Gentle on Fabrics: Our formula is designed to be tough on stains but gentle on fabrics, extending the life of your clothing and textiles." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Easy to Use: Compatible with both machine washing and hand washing, making it a versatile choice for any laundry routine." />
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
                        <ListItemText className={classes.listText} primary="Residential Use: Perfect for everyday laundry, including clothes, linens, curtains, and more, ensuring a thorough clean for all household textiles." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Commercial Use: Ideal for laundries, hotels, and businesses that require high-quality fabric care to maintain a professional appearance." />
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
                            <ListItemText className={classes.listText} primary="For Machine Washing: Add the recommended amount of Textile Wash Matic Liquid to your washing machine according to the load size and soil level." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="For Hand Washing: Dilute as directed in a basin of water, and soak textiles for optimal cleaning. Rinse thoroughly with clean water." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Follow garment care labels for specific washing instructions." />
                        </ListItem>
                      
                    </List>
                </Container>
            </Card>

              {/* How It Works Section */}
              <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    Why Choose DnD Solutions Textile Wash Matic Liquid?
                    </Typography>
                    <Typography paragraph>
                    With DnD Solutions Textile Wash Matic Liquid, you can trust that your fabrics will be clean, fresh, and well-cared for. Our commitment to quality, performance, and sustainability makes us the ideal choice for all your textile cleaning needs.
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
                    Elevate your laundry experience with DnD Solutions Textile Wash Matic Liquid! Contact us today to place your order or to learn more about our full range of cleaning products.
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

export default TextileWashMaticLiquid;
