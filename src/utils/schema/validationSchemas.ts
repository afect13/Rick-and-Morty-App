import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email addres')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a correct email addres'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter'),
  })
  .required();
