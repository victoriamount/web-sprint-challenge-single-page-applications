import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import Form from './Form'
import * as yup from 'yup'
import schema from '../validation/formSchema'


// Stored stuff
const reqresLink = 'https://reqres.in/api/users'

const initialFormState = {
    name: '',
    size: '',
    pepperoni: false,
    olives: false,
    sausage: false,
    peppers: false,
    instructions: '',
}

const initialFormErrors = {
    name: '',
    size: '',
    instructions: '',
}



export default function FormPage(props) {

    const history = useHistory();

// STATE
    const [formValues, setFormValues] = useState(initialFormState)
    const [formErrors, setFormErrors] = useState(initialFormErrors)


// network helpers
    const postPizzaOrder = () => {
        axios.post(reqresLink, formValues)
            .then(response => {
                console.log(response.data)
                
            })
            .catch(err => {
                console.log(err)
            })
            .finally(
                setFormValues(initialFormState)
            )
    }




// ------ Event Handlers ------
const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'olives', 'sausage', 'peppers'].filter(agree => formValues[agree]),
      instructions: formValues.instructions.trim(),      
    };
    postPizzaOrder(newPizza);
  }

  const change = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, 
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues, 
      [name]: value
    })

  }







    return (
        <>
            <div>
                <Form formValues={formValues} formErrors={formErrors} submit={submit} change={change} />
            </div>
        </>
    )
}