export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if
        (values.username.length < 6 || values.username.length > 15) {
        errors.username = 'Username must be between 6 to 15 characters in length.'
    };
    if (!values.password) {
        errors.password = 'Required';
    } else if
        (values.password.length < 8) {
        errors.password = 'Password must be a minimum of 8 characters in length.'
    };

        return errors;
};
