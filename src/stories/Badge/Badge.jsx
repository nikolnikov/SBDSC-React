import React from 'react';
import DSBadge from '../components/Badge'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSBadge = ({ 
    customClasses = [],
    label,
    isSecondary = false,
    status = 'neutral',
}) => {
    return (
        <DSBadge
            customClasses={classNames(customClasses)}
            label={label}
            isSecondary={isSecondary}
            status={status}
        />
    );
};

QDSBadge.propTypes = {
    customClasses: PropTypes.array,
    label: PropTypes.string,
    isSecondary: PropTypes.bool,
    status: PropTypes.oneOf(['neutral', 'informative', 'success', 'warning', 'critical']),
};