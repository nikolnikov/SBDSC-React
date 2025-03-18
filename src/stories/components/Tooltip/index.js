'use client';

import React, { forwardRef } from 'react';
import MUITooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const QDSTooltip = forwardRef(
    ({ children, placement = 'top', isWhite, message }, ref) => {
        return (
            <MUITooltip
                classes={{ popper: `ds-tooltip ${isWhite ? '--white' : ''}` }}
                title={message}
                placement={placement}
                ref={ref}
            >
                {children}
            </MUITooltip>
        );
    }
);

QDSTooltip.propTypes = {
    children: PropTypes.node,
    isWhite: PropTypes.bool,
    message: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

QDSTooltip.displayName = 'Tooltip';

export default QDSTooltip;
