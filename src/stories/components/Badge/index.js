'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';

const QDSBadge = ({
    customClasses = [],
    icon,
    label,
    secondary,
    status = 'neutral'
}) => {
    return (
        <div
            className={classNames('ds-badge', customClasses, {
                '--secondary': secondary,
                [`--${status}`]: status
            })}
            role="status"
        >
            {icon && <QDSIcon name={icon} />}
            {label}
        </div>
    );
};

QDSBadge.propTypes = {
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    secondary: PropTypes.bool,
    label: PropTypes.string,
    status: PropTypes.oneOf([
        'neutral',
        'informative',
        'success',
        'warning',
        'critical'
    ])
};

export default QDSBadge;
