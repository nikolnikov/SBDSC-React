import React from 'react';
import DSCheckbox from '../components/Checkbox'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSCheckbox = ({ 
    inputId,
    label,
    name,
    isChecked = false,
    customClasses = [],
    isDisabled = false,
    isIndeterminate = false,
    onChange,
    isRequired = false,
    value
}) => {
    return (
        <DSCheckbox
            customClasses={classNames(customClasses)}
            inputId={inputId}
            label={label}
            name={name}
            isChecked={isChecked}
            isDisabled={isDisabled}
            isIndeterminate={isIndeterminate}
            onChange={onChange}
            isRequired={isRequired}
            value={value}
        />
    );
};

QDSCheckbox.propTypes = {
    customClasses: PropTypes.array,
    inputId: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
    value: PropTypes.string
};