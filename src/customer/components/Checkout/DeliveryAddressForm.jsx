import React, { useState } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Divider,
    TextField,
    MenuItem,
    Button,
    Box
} from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

const provincesOfNepal = [
    "Province No. 1",
    "Madhesh Province",
    "Bagmati Province",
    "Gandaki Province",
    "Lumbini Province",
    "Karnali Province",
    "Sudurpashchim Province"
];

function DeliveryAddressForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: '',
        zip: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        let temp = {};
        temp.firstName = form.firstName ? "" : "First name is required";
        temp.lastName = form.lastName ? "" : "Last name is required";
        temp.address = form.address ? "" : "Address is required";
        temp.city = form.city ? "" : "City is required";
        temp.province = form.province ? "" : "Province is required";
        temp.zip = /^\d{5}$/.test(form.zip) ? "" : "Valid 5-digit Zip is required";
        temp.phone = /^9\d{9}$/.test(form.phone) ? "" : "Valid 10-digit Nepali phone required";
        setErrors(temp);
        return Object.values(temp).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted!");
        }
    };

    return (
        <Box sx={{ width: '100%', bgcolor: '#fff', py: { xs: 2, md: 4 }, fontFamily: 'Inter, Arial, sans-serif' }}>
            <Grid
                container
                spacing={3}
                alignItems="flex-start"
                justifyContent="center"
                sx={{
                    maxWidth: 1200,
                    mx: 'auto',
                    px: { xs: 1, sm: 2, md: 2 }
                }}
            >
                {/* Address Card - left on desktop, top on mobile */}
                <Grid item xs={12} md={5} lg={4}
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        alignItems: 'stretch'
                    }}
                >
                    <Card elevation={3} sx={{
                        borderRadius: 3,
                        width: '100%',
                        minHeight: 350,
                        maxWidth: 400,
                        p: { xs: 2, sm: 3 },
                        bgcolor: '#fafbfc',
                        boxShadow: '0 2px 12px 0 rgba(80,80,80,0.07)'
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
                                    bgcolor: '#a000ff',
                                    color: '#fff',
                                    boxShadow: 2,
                                    letterSpacing: 1,
                                    mt: 1,
                                    '&:hover': {
                                        bgcolor: '#7a00cc',
                                        boxShadow: 4,
                                    }
                                }}
                            >
                                DELIVER HERE
                            </Button>
                        </Box>
                    </Card>
                </Grid>

                {/* Form Card - right on desktop, bottom on mobile */}
                <Grid item xs={12} md={7} lg={8}
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-end' },
                        alignItems: 'stretch'
                    }}
                >
                    <Card elevation={3} sx={{
                        borderRadius: 3,
                        width: '100%',
                        maxWidth: 600,
                        p: { xs: 1, sm: 2 },
                        bgcolor: '#fafbfc',
                        boxShadow: '0 2px 12px 0 rgba(80,80,80,0.07)'
                    }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                Delivery Address
                            </Typography>
                            <Divider sx={{ mb: 3 }} />
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    {/* Row 1: First Name, Last Name */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            name="firstName"
                                            label="First Name *"
                                            placeholder="First Name"
                                            fullWidth
                                            value={form.firstName}
                                            onChange={handleChange}
                                            error={!!errors.firstName}
                                            helperText={errors.firstName}
                                            autoComplete="given-name"
                                            variant="outlined"
                                            size="medium"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    borderRadius: 2,
                                                    bgcolor: '#f9fafb',
                                                    height: 56
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            name="lastName"
                                            label="Last Name *"
                                            placeholder="Last Name"
                                            fullWidth
                                            value={form.lastName}
                                            onChange={handleChange}
                                            error={!!errors.lastName}
                                            helperText={errors.lastName}
                                            autoComplete="family-name"
                                            variant="outlined"
                                            size="medium"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    borderRadius: 2,
                                                    bgcolor: '#f9fafb',
                                                    height: 56
                                                }
                                            }}
                                        />
                                    </Grid>
                                    {/* Row 2: Address */}
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            name="address"
                                            label="Address *"
                                            placeholder="Address"
                                            fullWidth
                                            value={form.address}
                                            onChange={handleChange}
                                            error={!!errors.address}
                                            helperText={errors.address}
                                            autoComplete="street-address"
                                            multiline
                                            minRows={3}
                                            variant="outlined"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    borderRadius: 2,
                                                    bgcolor: '#f9fafb',
                                                    alignItems: 'flex-start'
                                                }
                                            }}
                                        />
                                    </Grid>
                                    {/* Row 3: City, Province */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            name="city"
                                            label="City *"
                                            placeholder="City"
                                            fullWidth
                                            value={form.city}
                                            onChange={handleChange}
                                            error={!!errors.city}
                                            helperText={errors.city}
                                            autoComplete="address-level2"
                                            variant="outlined"
                                            size="medium"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    borderRadius: 2,
                                                    bgcolor: '#f9fafb',
                                                    height: 56
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            select
                                            name="province"
                                            label="State/Province/Region *"
                                            placeholder="Province"
                                            fullWidth
                                            value={form.province}
                                            onChange={handleChange}
                                            error={!!errors.province}
                                            helperText={errors.province}
                                            autoComplete="address-level1"
                                            variant="outlined"
                                            size="medium"
                                            SelectProps={{
                                                MenuProps: {
                                                    PaperProps: {
                                                        style: { maxHeight: 250 }
                                                    }
                                                }
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    borderRadius: 2,
                                                    bgcolor: '#f9fafb',
                                                    height: 56
                                                }
                                            }}
                                        >
                                            {provincesOfNepal.map((prov) => (
                                                <MenuItem key={prov} value={prov}>
                                                    {prov}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    {/* Row 4: Zip, Phone */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            name="zip"
                                            label="Zip / Postal code *"
                                            placeholder="Zip / Postal code"
                                            fullWidth
                                            value={form.zip}
                                            onChange={handleChange}
                                            error={!!errors.zip}
                                            helperText={errors.zip}
                                            autoComplete="postal-code"
                                            variant="outlined"
                                            size="medium"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    borderRadius: 2,
                                                    bgcolor: '#f9fafb',
                                                    height: 56
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            name="phone"
                                            label="Phone Number *"
                                            placeholder="Phone Number"
                                            fullWidth
                                            value={form.phone}
                                            onChange={handleChange}
                                            error={!!errors.phone}
                                            helperText={errors.phone}
                                            autoComplete="tel"
                                            type="tel"
                                            variant="outlined"
                                            size="medium"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    borderRadius: 2,
                                                    bgcolor: '#f9fafb',
                                                    height: 56
                                                }
                                            }}
                                        />
                                    </Grid>
                                    {/* Submit Button */}
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            sx={{
                                                mt: 2,
                                                fontWeight: 600,
                                                fontSize: '1.1rem',
                                                borderRadius: 2,
                                                bgcolor: "#a000ff",
                                                color: '#fff',
                                                boxShadow: 2,
                                                letterSpacing: 1,
                                                px: 5,
                                                minHeight: 48,
                                                '&:hover': {
                                                    bgcolor: "#7a00cc",
                                                    transform: 'scale(1.03)',
                                                    boxShadow: 4,
                                                }
                                            }}
                                        >
                                            DELIVER HERE
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DeliveryAddressForm;