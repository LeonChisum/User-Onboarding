import React from 'react';
import { Form, withFormik, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

function AdvForm({
    values,
    errors,
    touched,
    isSubmitting
}) {

    return(
        <Form>
            <div>
                {  touched.name && errors.name && <p>{errors.name}</p> }
                <Field type="text" name="name" placeholder="Enter Name" />
            </div>
            <div>
                { touched.email && errors.email && <p>{errors.email}</p> }
                <Field type="email" name="email" placeholder="Email" />
            </div>
            <div>
                { touched.password && errors.password && <p>{errors.password}</p> }
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <label>
                <Field type="checkbox" name="terms" checked={values.terms} placeholder="Enter Name" />
                Terms of Service
            </label>
            <button disabled={isSubmitting}>Submit</button>
        </Form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues(){
        return{
            name: '',
            email: '',
            password: '',
            terms: false,
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Valid Email Please').required(''),
        password: Yup.string().required('Password Needed').min(6)
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }){
        Axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log(res)
            })
    }
})(AdvForm)
export default FormikForm;