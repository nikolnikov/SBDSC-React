'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSCard = ({ children, customClasses, isInverse, type }) => {
    return (
        <div
            className={classNames(`ds-card`, customClasses, {
                '--inverse': isInverse,
                [`--${type}`]: type
            })}
        >
            <div className="--content">{children}</div>
        </div>
    );
};

QDSCard.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    isInverse: PropTypes.bool,
    type: PropTypes.oneOf(['media', 'product'])
};

export default QDSCard;
