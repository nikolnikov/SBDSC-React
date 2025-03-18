import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MuiAutocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import QDSIcon from '../Icon';

const QDSAutocomplete = ({
    customClasses = [],
    errorMessage,
    hasError,
    hintMessage,
    inputId,
    isDisabled,
    searchIcon,
    label,
    placeholder,
    isRequired,
    maxWidth,
    getSelection,
    optionList
}) => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState(null);

    if (!optionList) {
        throw new Error('You must provide an array list of options');
    }

    useEffect(() => {
        getSelection(inputValue);
    }, [getSelection, inputValue]);

    const renderInput = params => (
        <div
            className={classNames('ds-input', customClasses, {
                '--disabled': isDisabled,
                '--error': hasError,
                '--icons --icon-left': searchIcon,
                '--required': isRequired
            })}
            ref={params.InputProps.ref}
        >
            {label && (
                <label
                    aria-label={label}
                    className="ds-input__label"
                    htmlFor={inputId}
                >
                    <span>{label}</span>
                </label>
            )}

            <div className="ds-flex --start-center --row">
                {searchIcon && <QDSIcon name="search" customClasses="--left" />}

                <input
                    placeholder={placeholder}
                    type="text"
                    id={inputId}
                    {...params.inputProps}
                />
            </div>

            {errorMessage && (
                <div className="ds-input__error" role="alert">
                    {errorMessage}
                </div>
            )}
            {hintMessage && !errorMessage && (
                <div className="ds-input__hint" role="tooltip">
                    {hintMessage}
                </div>
            )}
        </div>
    );

    return (
        <MuiAutocomplete
            disabled={isDisabled}
            id={inputId}
            openOnFocus={true}
            onInputChange={(e, newInputValue) => {
                setInputValue(newInputValue);
            }}
            onChange={(e, newValue) => {
                setValue(newValue);
            }}
            options={optionList}
            sx={maxWidth && { width: maxWidth }}
            PopperComponent={props => (
                <Popper {...props} className="ds-dropdown"></Popper>
            )}
            value={value}
            renderInput={renderInput}
        />
    );
};

QDSAutocomplete.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    searchIcon: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
    maxWidth: PropTypes.number,
    getSelection: PropTypes.func,
    optionList: PropTypes.array
};

export default QDSAutocomplete;
