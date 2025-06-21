import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

function AddressCard() {
    return (
        <Card elevation={4} sx={{
            borderRadius: 3,
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: { xs: 2, sm: 3 },
            bgcolor: 'grey.50',
        }}>
            <CardContent sx={{ p: 0 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    Saved Address
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    John Doe<br />
                    123 Main St<br />
                    Kathmandu, Bagmati Province<br />
                    44600<br />
                    9800000000
                </Typography>
            </CardContent>
            <Box sx={{ pt: 2 }}>
                <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                        fontWeight: 600,
                        fontSize: '1rem',
                        borderRadius: 2,
                        bgcolor: 'rgb(145,85,253)',
                        transition: '0.2s',
                        '&:hover': {
                            bgcolor: 'rgb(120,60,220)',
                            transform: 'scale(1.03)',
                            boxShadow: 4,
                        },
                    }}
                >
                    Deliver Here
                </Button>
            </Box>
        </Card>
    );
}

export default AddressCard;
