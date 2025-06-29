import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function AddressCard() {
    return (
        <Card
            elevation={6}
            sx={{
                borderRadius: 4,
                width: '100%',
                maxWidth: { xs: '100%', sm: 500 },
                minHeight: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { xs: 2.5, sm: 4 },
                bgcolor: 'grey.50',
                boxSizing: 'border-box',
                // Remove hard margin to avoid horizontal overflow
                mx: 'auto', // center horizontally
            }}
        >
            <CardContent sx={{ p: 0 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    }}
                >
                    Saved Address
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        lineHeight: 1.8,
                        fontSize: { xs: '1rem', sm: '1.15rem' },
                        wordBreak: 'break-word',
                    }}
                >
                    John Doe<br />
                    123 Main St<br />
                    Kathmandu, Bagmati Province<br />
                    44600<br />
                    9800000000
                </Typography>
            </CardContent>
        </Card>
    );
}

export default AddressCard;
