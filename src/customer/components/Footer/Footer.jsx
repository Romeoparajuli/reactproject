import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-10">
            <Grid container spacing={4} sx={{ py: 5, px: 5, justifyContent: 'space-evenly' }}>
                {/* Company Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" className="pb-4 font-semibold">
                        Company
                    </Typography>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>About Us</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Blog</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Press</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Jobs</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Partners</Button>
                    </div>
                </Grid>

                {/* Support Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" className="pb-4 font-semibold">
                        Support
                    </Typography>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Help Center</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Contact Us</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>FAQs</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Shipping & Returns</Button>
                    </div>
                </Grid>

                {/* Legal Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" className="pb-4 font-semibold">
                        Legal
                    </Typography>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Privacy Policy</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Terms of Service</Button>
                    </div>
                    <div>
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>Cookie Policy</Button>
                    </div>
                </Grid>

                {/* Social Media Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" className="pb-4 font-semibold">
                        Follow Us
                    </Typography>
                    <div className="flex items-center space-x-4">
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>
                            <FacebookIcon sx={{ mr: 1 }} /> Facebook
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>
                            <TwitterIcon sx={{ mr: 1 }} /> Twitter
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>
                            <InstagramIcon sx={{ mr: 1 }} /> Instagram
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button className="text-white text-sm" sx={{ justifyContent: 'flex-start' }}>
                            <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
                        </Button>
                    </div>
                </Grid>
            </Grid>

            {/* Footer Bottom */}
            <div className="bg-gray-900 text-center py-3">
                <Typography variant="body2" className="text-gray-400">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;
