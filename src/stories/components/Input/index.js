'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIconButton from '../Button/IconButton.index';
import QDSIcon from '../Icon';

const Input = ({
    customClasses,
    errorMessage,
    hasError,
    hintMessage,
    inputId,
    isDisabled,
    isRequired,
    label,
    iconLeft,
    name,
    onChange,
    placeholder,
    iconRight,
    tooltipMessage,
    type = 'text',
    value
}) => {
    return (
        <div
            className={classNames('ds-input', customClasses, {
                '--disabled': isDisabled,
                '--error': hasError,
                '--icons': iconRight || iconLeft,
                '--icon-left': iconLeft,
                '--icon-right': iconRight,
                '--required': isRequired
            })}
        >
            <label className="ds-input__label" htmlFor={inputId}>
                {label && <span>{label}</span>}

                {tooltipMessage && (
                    <QDSIconButton
                        customClasses="ds-tooltip"
                        icon="info"
                        tooltip={tooltipMessage}
                    />
                )}
            </label>
            <div className="ds-flex --start-center --row">
                {iconLeft && <QDSIcon name={iconLeft} customClasses="--left" />}
                <input
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    value={value}
                />
                {iconRight && (
                    <QDSIcon name={iconRight} customClasses="--right" />
                )}
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
};

Input.propTypes = {
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

export default Input;
