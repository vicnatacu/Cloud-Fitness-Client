import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListFieldGroup = ({
    name, 
    value,
    error, 
    info,
    onChange,
    options
    
}) => {
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
        {option.label}
        </option>
    ))
    return (
        <div className="form-group">
            <select
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                name={name}
                value={value}
                // onChange allows us to type in to the inputs
                onChange={onChange}>
                {selectOptions}
                </select>
            {info && <small className="form-text">{info}</small>}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

SelectListFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};
export default SelectListFieldGroup;