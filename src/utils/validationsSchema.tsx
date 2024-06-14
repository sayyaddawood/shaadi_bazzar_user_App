import * as Yup from 'yup';

const regExp = {
  phone: /^0\d{10}$/,
};

export const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(regExp.phone, 'Phone number should be 11 digits and start with 0')
    .required('Phone number is required'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  city: Yup.string().required('City is required'),
});

export const sendMessageSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  phone: Yup.string()
    .matches(regExp.phone, 'Phone number should be 11 digits and start with 0')
    .required('Phone number is required'),

  email: Yup.string().optional().email('Invalid email address'),
  date: Yup.string().required('Event date is required'),
  details: Yup.string().required('Event detail is required'),
});
