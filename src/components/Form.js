import React from 'react'

export default function Form(props) { 
    const { formValues, formErrors, submit, change } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };



    return (
        <form className='form container' onSubmit={onSubmit}>
            <div>
                <h2>Order Now</h2>
                <label>
                    Name: 
                    <input
                        value={formValues.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                    <div>{formErrors.name}</div>
                </label>         
                <label>
                    Size:
                    <select name='size' value={formValues.size} onChange={onChange} >
                        <option value=''>---select size---</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>  
                <div>
                    Toppings:   
                    <label>
                        Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            checked={formValues.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Olives
                        <input
                            type="checkbox"
                            name="olives"
                            checked={formValues.olives}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Sausage
                        <input
                            type="checkbox"
                            name="sausage"
                            checked={formValues.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Peppers
                        <input
                            type="checkbox"
                            name="peppers"
                            checked={formValues.peppers}
                            onChange={onChange}
                        />
                    </label>
                </div> 

                <label>
                    Special Instructions: 
                        <input
                            value={formValues.instructions}
                            onChange={onChange}
                            name="instructions"
                            type="text"
                        />              
                </label>  <br />
            <button id='submitButton'>Submit</button>
 

            </div>
        </form>
    )
}