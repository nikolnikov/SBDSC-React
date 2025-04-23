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
    leftIcon,
    name,
    onChange,
    placeholder,
    rightIcon,
    tooltipMessage,
    type = 'text',
    value
}) => {
    return (
        <div
            className={classNames('ds-input', customClasses, {
                '--disabled': isDisabled,
                '--error': hasError,
                '--icons': rightIcon || leftIcon,
                '--icon-left': leftIcon,
                '--icon-right': rightIcon,
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
                {leftIcon && <QDSIcon name={leftIcon} customClasses="--left" />}
                <input
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    value={value}
                />
                {rightIcon && (
                    <QDSIcon name={rightIcon} customClasses="--right" />
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
    leftIcon: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rightIcon: PropTypes.string,
    tooltipMessage: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};

export default Input;
