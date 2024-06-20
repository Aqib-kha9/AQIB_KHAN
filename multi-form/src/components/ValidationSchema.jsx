export const validatePersonalForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.phone) errors.phone = 'Phone number is required';
    return errors;
  };
  
  export const validateAddressForm = (data) => {
    const errors = {};
    if (!data.addressLine1) errors.addressLine1 = 'Address Line 1 is required';
    if (!data.city) errors.city = 'City is required';
    if (!data.state) errors.state = 'State is required';
    if (!data.zipCode) errors.zipCode = 'Zip Code is required';
    return errors;
  };
  