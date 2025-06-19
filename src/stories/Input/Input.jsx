import React from 'react';
import DSInput from '../components/Input'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSInput = ({ 
    customClasses,
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    isRequired = false,
    label,
    iconLeft,
    iconRight,
    name,
    onChange,
    placeholder,
    tooltipMessage,
    type = 'text',
    value
}) => {
    return (
        <DSInput
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            inputId={inputId}
            isDisabled={isDisabled}
            isRequired={isRequired}
            label={label}
            iconLeft={iconLeft}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            iconRight={iconRight}
            tooltipMessage={tooltipMessage}
            type={type}
            value={value}
        />
    );
};

QDSInput.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    iconLeft: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    iconRight: PropTypes.string,
    tooltipMessage: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};