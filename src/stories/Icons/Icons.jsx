import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DSIcon from '../components/Icon';

export const QDSIcon = ({ 
    color,
    customClasses,
    name,
    size,
    type
}) => {
    return (
        <DSIcon
            color={color}
            customClasses={classNames(customClasses)}
            name={name}
            size={size}
            type={type}
        />
    );
};

QDSIcon.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.oneOf(['illustrative', 'illustrativeWhite', 'billing'])
};