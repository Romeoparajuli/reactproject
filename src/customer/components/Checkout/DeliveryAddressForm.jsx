import React, { useState } from "react";
import {
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    MenuItem,
    Box,
    Container
} from "@mui/material";
import AddressCard from '../AddressCard/AddressCard';

const provinces = [
    "Province 1",
    "Madhesh Province",
    "Bagmati Province",
    "Gandaki Province",
    "Lumbini Province",
    "Karnali Province",
    "Sudurpashchim Province",
];

const districts = {
    "Province 1": ["Bhojpur", "Dhankuta", "Ilam", "Jhapa", "Khotang", "Morang", "Okhaldhunga", "Panchthar", "Sankhuwasabha", "Solukhumbu", "Sunsari", "Taplejung", "Terhathum", "Udayapur"],
    "Madhesh Province": ["Bara", "Dhanusa", "Mahottari", "Parsa", "Rautahat", "Saptari", "Sarlahi", "Siraha"],
    "Bagmati Province": ["Bhaktapur", "Chitwan", "Dhading", "Dolakha", "Kathmandu", "Kavrepalanchok", "Lalitpur", "Makwanpur", "Nuwakot", "Ramechhap", "Rasuwa", "Sindhuli", "Sindhupalchok"],
    "Gandaki Province": ["Baglung", "Gorkha", "Kaski", "Lamjung", "Manang", "Mustang", "Myagdi", "Nawalpur", "Parbat", "Syangja", "Tanahu"],
    "Lumbini Province": ["Arghakhanchi", "Banke", "Bardiya", "Dang", "Gulmi", "Kapilvastu", "Parasi", "Palpa", "Pyuthan", "Rolpa", "Rukum East", "Rupandehi"],
    "Karnali Province": ["Dailekh", "Dolpa", "Humla", "Jajarkot", "Jumla", "Kalikot", "Mugu", "Rukum West", "Salyan", "Surkhet"],
    "Sudurpashchim Province": ["Achham", "Baitadi", "Bajhang", "Bajura", "Dadeldhura", "Darchula", "Doti", "Kailali", "Kanchanpur"]
};

const DeliveryAddressForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        province: "",
        district: "",
        municipality: "",
        wardNo: "",
        tole: "",
        postalCode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "province") {
            setForm({
                ...form,
                province: value,
                district: "" // Reset district when province changes
            });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(form);
    };

    // Get districts based on selected province
    const currentDistricts = form.province ? districts[form.province] : [];

    return (
        <Container maxWidth="lg" sx={{
            py: 6,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <Typography
                variant="h4"
                fontWeight={700}
                gutterBottom
                align="center"
                sx={{
                    mb: 5,
                    color: "primary.dark",
                    letterSpacing: 1,
                    textTransform: "uppercase"
                }}
            >
                DELIVERY ADDRESS
            </Typography>

            <Grid container spacing={4} alignItems="stretch">
                {/* Form Column (60%) */}
                <Grid item xs={12} md={7}>
                    <Paper
                        sx={{
                            p: { xs: 3, sm: 4 },
                            borderRadius: 2,
                            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.06)",
                            border: "1px solid #e0e0e0",
                            height: "100%"
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            color="text.primary"
                            gutterBottom
                            sx={{
                                mb: 4,
                                pb: 2,
                                borderBottom: "1px solid #f0f0f0"
                            }}
                        >
                            Shipping Information
                        </Typography>

                        <form onSubmit={handleSubmit} autoComplete="off">
                            <Grid container spacing={3}>
                                {/* Row 1: First Name & Last Name */}
                                <Grid container item spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="First Name *"
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="given-name"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Last Name *"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="family-name"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* Row 2: Phone & Email */}
                                <Grid container item spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Phone Number *"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="tel"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Email *"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="email"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* Row 3: Province & District */}
                                <Grid container item spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            select
                                            label="Province *"
                                            name="province"
                                            value={form.province}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="address-level1"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        >
                                            <MenuItem value="">Select Province</MenuItem>
                                            {provinces.map((p) => (
                                                <MenuItem key={p} value={p}>
                                                    {p}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            select
                                            label="District *"
                                            name="district"
                                            value={form.district}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="address-level2"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                            disabled={!form.province}
                                        >
                                            <MenuItem value="">Select District</MenuItem>
                                            {currentDistricts.map((d) => (
                                                <MenuItem key={d} value={d}>
                                                    {d}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>

                                {/* Row 4: Municipality & Ward */}
                                <Grid container item spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Municipality *"
                                            name="municipality"
                                            value={form.municipality}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Ward Number *"
                                            name="wardNo"
                                            type="number"
                                            value={form.wardNo}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                },
                                                inputProps: { min: 1, max: 35 }
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* Row 5: Tole & Postal Code */}
                                <Grid container item spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Tole / Street *"
                                            name="tole"
                                            value={form.tole}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="street-address"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Postal Code *"
                                            name="postalCode"
                                            value={form.postalCode}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            autoComplete="postal-code"
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 1,
                                                    backgroundColor: "#f9f9f9"
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* Submit Button */}
                                <Grid item xs={12}>
                                    <Box sx={{
                                        mt: 3,
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                px: 8,
                                                py: 1.8,
                                                fontWeight: 600,
                                                fontSize: "1.1rem",
                                                borderRadius: 1,
                                                textTransform: "none",
                                                letterSpacing: 0.5,
                                                boxShadow: "0px 5px 15px rgba(76, 76, 219, 0.2)",
                                                "&:hover": {
                                                    boxShadow: "0px 8px 20px rgba(76, 76, 219, 0.3)",
                                                },
                                                transition: "all 0.3s ease"
                                            }}
                                        >
                                            Save Address
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>

                {/* Address Card Column (40%) */}
                <Grid item xs={12} md={5}>
                    <Paper
                        sx={{
                            height: "100%",
                            p: { xs: 3, sm: 4 },
                            borderRadius: 2,
                            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.06)",
                            border: "1px solid #e0e0e0",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            color="text.primary"
                            gutterBottom
                            sx={{
                                mb: 4,
                                pb: 2,
                                borderBottom: "1px solid #f0f0f0"
                            }}
                        >
                            Address Preview
                        </Typography>

                        <Box sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: 400
                        }}>
                            <AddressCard
                                address={{
                                    name: `${form.firstName} ${form.lastName}`,
                                    phone: form.phone,
                                    email: form.email,
                                    tole: form.tole,
                                    municipality: form.municipality,
                                    wardNo: form.wardNo,
                                    district: form.district,
                                    province: form.province,
                                    postalCode: form.postalCode
                                }}
                            />
                        </Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                mt: 3,
                                textAlign: "center",
                                fontStyle: "italic"
                            }}
                        >
                            Address preview updates as you fill the form
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DeliveryAddressForm;