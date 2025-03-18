import React from 'react';
import DSToggle from '../components/Toggle'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSToggle = ({
    customClasses,
    isChecked = false,
    isDisabled = false,
    inputId,
    label,
    name,
    onChange
}) => {
    return (
        <DSToggle
            customClasses={classNames(customClasses)}
            isChecked={isChecked}
            isDisabled={isDisabled}
            inputId={inputId}
            label={label}
            name={name}
            onChange={onChange}
        />
    );
};

QDSToggle.propTypes = {
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};