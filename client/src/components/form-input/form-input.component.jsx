
import React from 'react'
import './form-input.style.scss'

const FormInput = ({ handleChange, label, ...props }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...props} />
        {label ?
            (
                <label className={`${props && props.value && props.value.length ? 'shrink' : ''} form-input-label `}>

                    {label}

                </label>

            )
            : null

        }
    </div>
)

export default FormInput