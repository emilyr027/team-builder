import React from 'react';

export default function Form (props) {
    const {values, updateForm, submitForm} = props
    //memberToEdit is stretch

    const onChange = evt => {
        const { name, value } = evt.target;
        updateForm(name, value);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        submitForm();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className = 'header'>
                <h2> Please add your name to the list: </h2>
            </div>
            <div className='inputValues'>
                <div className='input-name'>
                    <label>
                        Name:&nbsp;
                        <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Type in name'
                        maxLength='30'></input>
                    </label>
                </div>
                <div className='input-email'>
                    <label>
                        Email:&nbsp;
                        <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='Enter your email'
                        maxLength='30'></input>
                    </label>
                </div>
                < div className='input-role'>
                    <label>
                        Role:&nbsp;
                        <select
                        name='role'
                        value={values.role} onChange={onChange}>
                            <option value=''>-- Select a Role --</option>
                            <option value='Teacher'>Teacher</option>
                            <option value='Student'>Student</option>
                            <option value='Recent Graduate'>Recent Graduate</option>
                        </select>
                    </label>

            </div>
            <button disabled={!values.username || !values.role ? false : true}> Submit </button> 
            </div>
        </form>
    )
};