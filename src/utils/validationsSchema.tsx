import * as Yup from 'yup';

const regExp = {
  phone: /^0\d{10}$/,
};

export const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(regExp.phone, 'Phone number should be 11 digits and start with 0')
    .required('Phone number is required'),
});
