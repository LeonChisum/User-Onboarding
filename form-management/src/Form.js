import React, { useState, useEffect} from 'react';
import { Form, withFormik, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

import { Input, 
        SubmitButton,
        StyledDiv,
        Wrapper } from './styling/styledComponents'

function AdvForm({
    values,
    errors,
    touched,
    isSubmitting,
    status
}) {

    const[users, setUsers] = useState([])

    useEffect(() => {
        if(status)
        setUsers([...users, status])
    }, [status])

    return(
        <Wrapper>
            <Form>
                <div>
                    {  touched.name && errors.name && <p>{errors.name}</p> }
                    <Input type="text" name="name" placeholder="Enter Name" />
                </div>
                <div>
                    { touched.email && errors.email && <p>{errors.email}</p> }
                    <Input type="email" name="email" placeholder="Email" />
                </div>
                <div>
                    { touched.password && errors.password && <p>{errors.password}</p> }
                    <Input type="password" name="password" placeholder="Password" />
                </div>
                <div>
                    <label>
                        Select a Role: {' '}
                        <Input component="select" name="role">
                            <option value="Front-End">Front-End</option>
                            <option value="Back-End">Back-End</option>
                            <option value="UX">UX</option>
                            <option value="Data Science">Data Science</option>
                        </Input>
                    </label>
                </div>
                <label>
                    Terms of Service
                    <Input type="checkbox" name="terms" checked={values.terms} placeholder="Enter Name" />  
                </label><br/>
                <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
            </Form>
        </Wrapper>
    )
}

const FormikForm = withFormik({
    mapPropsToValues(){
        return{
            name: '',
            email: '',
            password: '',
            role:'',
            terms: false,
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Valid Email Please').required(''),
        password: Yup.string().required('Password Needed').min(6),
        role: Yup.string().required('Please select a role'),
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }){
        Axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log(res)
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log(err);
                setSubmitting(false);
            })
    }
})(AdvForm)
export default FormikForm;