import React from 'react';
import DSTag from '../components/Tag'
import PropTypes from 'prop-types';

export const QDSTag = ({
    clickHandler,
    customClasses,
    hideHandler,
    isDisabled,
    label,
    showClose
}) => {
    return (
        <DSTag
            clickHandler={clickHandler}
            customClasses={customClasses}
            hideHandler={hideHandler}
            isDisabled={isDisabled}
            label={label}
            showClose={showClose}
        />
    );
};

QDSTag.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    hideHandler: PropTypes.func,
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    showClose: PropTypes.bool
};