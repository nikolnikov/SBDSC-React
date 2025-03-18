'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSIcon = ({ color, customClasses, name, size, type }) => {
    const imgSrc = `https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon${
        type === 'illustrative' ? '--illustrative-green' : ''
    }${
        type === 'illustrativeWhite' ? '--illustrative-white' : ''
    }--${name}.svg`;

    const spanClass = classNames(
        `ds-icon--${name}`,
        { [`ds-font-${size}`]: size },
        { [`ds-${color}`]: color },
        customClasses
    );

    if (
        type === 'illustrative' ||
        type === 'illustrativeWhite' ||
        type === 'billing'
    ) {
        return (
            <img
                className={customClasses}
                src={imgSrc}
                alt={name}
                style={{ width: size }}
            />
        );
    }

    return <span className={spanClass} aria-label={name} role="img"></span>;
};

QDSIcon.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    type: PropTypes.oneOf(['', 'illustrative', 'illustrativeWhite', 'billing'])
};

export default QDSIcon;
