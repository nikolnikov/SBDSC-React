'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSLoader = ({ customClasses = [], isCentered, isFixed }) => {
    return (
        <div
            className={classNames('ds-loading', customClasses, {
                '--centered': isCentered,
                '--fixed': isFixed
            })}
            role="progressbar"
            aria-label="Loading"
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

QDSLoader.propTypes = {
    customClasses: PropTypes.string,
    isCentered: PropTypes.bool,
    isFixed: PropTypes.bool
};

export default QDSLoader;
