import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Container } from '@mui/material';
import PersonalForm from './PersonalForm';
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import StepNavigator from './StepNavigator';
import { validatePersonalForm, validateAddressForm } from './ValidationSchema';

const steps = ['Personal Information', 'Address Information', 'Confirmation'];

const FormContainer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const handleNext = () => {
    const currentErrors = validateCurrentStep();
    if (Object.keys(currentErrors).length === 0) {
      setActiveStep(prevStep => prevStep + 1);
      localStorage.setItem('formData', JSON.stringify(formData));
    } else {
      setErrors(currentErrors);
    }
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Here you can handle the form submission, e.g., send data to an API
    alert('Form submitted successfully!');
  };

  const validateCurrentStep = () => {
    switch (activeStep) {
      case 0:
        return validatePersonalForm(formData);
      case 1:
        return validateAddressForm(formData);
      default:
        return {};
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalForm data={formData} handleChange={handleChange} errors={errors} />;
      case 1:
        return <AddressForm data={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <Confirmation data={formData} />;
      default:
        return null;
    }
  };

  return (
    <Container component={Paper} maxWidth="sm">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>{renderStepContent(activeStep)}</div>
      <StepNavigator
        activeStep={activeStep}
        steps={steps}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default FormContainer;
