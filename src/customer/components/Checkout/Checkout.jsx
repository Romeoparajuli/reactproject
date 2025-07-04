import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummery';

const steps = ['Login', 'Delivery Address', 'Order Summer', 'Payment'];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);

    const step = querySearch.get('step')

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className='px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                ) : (
                    <React.Fragment>

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            {activeStep > 0 && (
                                <Button
                                    color="inherit"
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                            )}

                        </Box>
                        <div>
                            {step == 2 ? <DeliveryAddressForm /> : <OrderSummary />}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}