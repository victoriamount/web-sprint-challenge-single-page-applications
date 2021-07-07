import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(2, 'name must be 2+ characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large']),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    instructions: yup
        .string()
});