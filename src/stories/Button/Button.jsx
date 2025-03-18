import React, { useEffect, useState } from 'react';
import DSButton from '../components/Button'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSButton = ({ 
    customClasses = null,
    icon = null,
    iconRight = null,
    isDestructive = false,
    isDisabled = false,
    isInverse = false,
    isDownload = false,
    label,
    size = 'large',
    type = 'primary',
}) => {  
    const buttonClick = e => {
        e.preventDefault();
        console.log('Button Clicked');
    };

    return (
        <DSButton
            clickHandler={buttonClick}
            customClasses={classNames(customClasses)}
            icon={icon}
            iconRight={iconRight}
            isDestructive={isDestructive}
            isDisabled={isDisabled}
            isDownload={isDownload}
            isInverse={isInverse}
            label={label}
            size={size}
            type={type}
        />
    );
};

QDSButton.propTypes = {
    label: PropTypes.string,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    iconRight: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isDownload: PropTypes.bool,
    isInverse: PropTypes.bool,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'lg']),
    type: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};
