import React from 'react';
import DSLoader from '../components/Loader'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSLoader = ({ 
    customClasses, isCentered = false, isFixed = false
}) => {
    return (
        <DSLoader
            customClasses={classNames(customClasses)}
            isCentered={isCentered}
            isFixed={isFixed}
        />
    );
};

QDSLoader.propTypes = {
    customClasses: PropTypes.string,
    isCentered: PropTypes.bool,
    isFixed: PropTypes.bool
};