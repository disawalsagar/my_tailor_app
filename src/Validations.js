import * as Yup from "yup";

const PantSchema = Yup.object().shape({
    length: Yup.number()
        .typeError('Pant length must be a number')
        .positive('Pant length must be greater than zero')
        .required('Pant length is required'),
    west: Yup.number()
        .typeError('West size must be a number')
        .positive('West size must be greater than zero')
        .required('West size is required'),
    hip: Yup.number()
        .typeError('Hip size must be a number')
        .positive('Hip size must be greater than zero')
        .required('Hip size is required'),
    thigh: Yup.number()
        .typeError('Thigh size must be a number')
        .positive('Thigh size must be greater than zero')
        .required('Thigh size is required'),
    knee: Yup.number()
        .typeError('Knee size must be a number')
        .positive('Knee size must be greater than zero')
        .required('Knee size is required'),
    buttom: Yup.number()
        .typeError('Buttom size must be a number')
        .positive('Buttom size must be greater than zero')
        .required('Buttom size is required'),
    inside: Yup.number()
        .typeError('Inside size must be a number')
        .positive('Inside size must be greater than zero')
        .required('Inside size is required'),
    ply: Yup.number()
        .typeError('Ply size must be a number')
        .positive('Ply size must be greater than zero')
        .required('Ply size is required'),
    fullRound: Yup.number()
        .typeError('Full Round size must be a number')
        .positive('Full Round size must be greater than zero')
        .required('Full Round size is required')
});

export default PantSchema;