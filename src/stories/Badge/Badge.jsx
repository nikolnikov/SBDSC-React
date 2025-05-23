import React from 'react';
import DSBadge from '../components/Badge'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSBadge = ({ 
    customClasses = [],
    label,
    secondary = false,
    status = 'neutral',
}) => {
    return (
        <DSBadge
            customClasses={classNames(customClasses)}
            label={label}
            secondary={secondary}
            status={status}
        />
    );
};

QDSBadge.propTypes = {
    customClasses: PropTypes.array,
    label: PropTypes.string,
    secondary: PropTypes.bool,
    status: PropTypes.oneOf(['neutral', 'informative', 'success', 'warning', 'critical']),
};