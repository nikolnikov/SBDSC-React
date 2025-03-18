import React from 'react';
import DSProgressBar from '../components/ProgressBar'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSProgressBar = ({
    customClasses,
    completed,
    showPercentage = true
}) => {
    return (
        <DSProgressBar
            customClasses={classNames(customClasses)}
            completed={completed}
            showPercentage={showPercentage}
        />
    );
};

QDSProgressBar.propTypes = {
    customClasses: PropTypes.string,
    completed: PropTypes.number,
    showPercentage: PropTypes.bool
};