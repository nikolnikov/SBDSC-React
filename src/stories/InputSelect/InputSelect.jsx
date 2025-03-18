import React, { useState } from 'react';
import DSInputSelect from '../components/InputSelect'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSInputSelect = ({ 
    customClasses,
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    menuClass,
    isRequired = false,
    label,
    onChange,
    options,
    placeholder,
    selectedValue,
    tooltipMessage
}) => {
    const [value, setValue] = useState('');

    const updateValue = e => {
        setValue(e.target.value);
    };
    return (
        <DSInputSelect
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            inputId={inputId}
            isDisabled={isDisabled}
            isRequired={isRequired}
            label={label}
            menuClass={menuClass}
            onChange={updateValue}
            options={options}
            placeholder={placeholder}
            selectedValue={value}
            tooltipMessage={tooltipMessage}
        />
    );
};

QDSInputSelect.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    menuClass: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    selectedValue: PropTypes.string,
    tooltipMessage: PropTypes.string
};