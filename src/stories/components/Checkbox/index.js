'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSCheckbox = ({
    inputId,
    label,
    name,
    isChecked,
    customClasses = [],
    isDisabled,
    isIndeterminate,
    onChange,
    isRequired,
    value
}) => {
    return (
        <label
            className={classNames('ds-input__checkbox', customClasses, {
                '--disabled': isDisabled,
                '--indeterminate': isIndeterminate,
                '--required': isRequired
            })}
            htmlFor={inputId}
            aria-label={label}
        >
            <input
                disabled={isDisabled}
                id={inputId}
                name={name}
                type="checkbox"
                onChange={value => onChange(value)}
                value={value}
                {...(isChecked && { checked: true })}
            ></input>
            <span></span>
            {label}
        </label>
    );
};

QDSCheckbox.propTypes = {
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
    value: PropTypes.string
};

export default QDSCheckbox;
