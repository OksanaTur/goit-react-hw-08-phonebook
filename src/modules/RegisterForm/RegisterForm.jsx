import * as React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import useForm from 'shared/hooks/useForm';
import { Btn } from 'shared/components/Button/Button';
import TextField from 'shared/components/TextField/TextField';
import initialState from './initialState';
import fields from './fields';
import css from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({
        initialState,
        onSubmit,
    });

    const { name, email, password } = state;
    return (
        <>
            <h2 className={css.title}>New user registration</h2>
            <form onSubmit={handleSubmit} className={css.form}>
                <TextField value={name} handleChange={handleChange} {...fields.name} />
                <TextField value={email} handleChange={handleChange} {...fields.email} />
                <TextField value={password} handleChange={handleChange} {...fields.password} />
                <Btn endIcon={<HowToRegIcon />}>Register</Btn>
            </form>
        </>
    )
};

export default RegisterForm;