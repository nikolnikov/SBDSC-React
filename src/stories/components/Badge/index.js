'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';

const QDSBadge = ({
    customClasses = [],
    label,
    isSecondary,
    status = 'neutral'
}) => {
    const icons = {
        success: 'check-circle',
        informative: 'info',
        warning: 'warning',
        critical: 'warning-octagon'
    };
    return (
        <div
            className={classNames('ds-badge', customClasses, {
                '--secondary': isSecondary,
                [`--${status}`]: status
            })}
            role="status"
        >
            {status !== 'neutral' && <QDSIcon name={icons[status]} />}
            {label}
        </div>
    );
};

QDSBadge.propTypes = {
    customClasses: PropTypes.string,
    isSecondary: PropTypes.bool,
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
