import {useState} from 'react';

const UserForm = ({initialValues, validation, onSubmit}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        if(e.target.name === 'rememberMe')
            setValues({...values, [e.target.name]: !values[e.target.name]});
        else
            setValues({...values, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        let _errors = validation(values);
        setErrors(_errors);
        if(Object.keys(_errors).length === 0){
            onSubmit(values);
        }
    }

    return { handleChange, handleSubmit, values, errors };

};

export default UserForm;