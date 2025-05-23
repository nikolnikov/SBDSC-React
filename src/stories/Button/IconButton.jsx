import React from 'react';
import DSIconButton from '../components/Button/IconButton.index'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSIconButton = ({ 
    customClasses = null,
    icon = null,
    isDestructive = false,
    isDisabled = false,
    isInverse = false,
    size = 'large',
    tooltip,
    tooltipPlacement = 'top',
    whiteTooltip
}) => {  
    return (
        <DSIconButton
            clickHandler={() => console.log('Button Clicked')}
            customClasses={classNames(customClasses)}
            icon={icon}
            isDestructive={isDestructive}
            isDisabled={isDisabled}
            isInverse={isInverse}
            size={size}
            tooltip={tooltip}
            tooltipPlacement={tooltipPlacement}
            whiteTooltip={whiteTooltip}
        />
    );
};

QDSIconButton.propTypes = {
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    tooltip: PropTypes.string,
    tooltipPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    whiteTooltip: PropTypes.bool
};