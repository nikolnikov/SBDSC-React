import React from 'react';
import DSTooltip from '../components/Tooltip'
import PropTypes from 'prop-types';

export const QDSTooltip = ({
    children,
    placement = 'top',
    isWhite = false,
    message
}) => {
    return (
        <DSTooltip
            placement={placement}
            isWhite={isWhite}
            message={message}
        >
            {children}
        </DSTooltip>
    );
};

QDSTooltip.propTypes = {
    children: PropTypes.node,
    isWhite: PropTypes.bool,
    message: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};