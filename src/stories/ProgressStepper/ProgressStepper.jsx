import React from 'react';
import DSProgressStepper from '../components/ProgressStepper'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSProgressStepper = ({
    customClasses,
    hideLabels = false,
    isError,
    isSentBack,
    isVertical = false,
    lastCompletedStep,
    showNumbers,
    steps
}) => {
    return (
        <DSProgressStepper
            customClasses={classNames(customClasses)}
            hideLabels={hideLabels}
            isError={isError}
            isSentBack={isSentBack}
            isVertical={isVertical}
            lastCompletedStep={lastCompletedStep}
            showNumbers={showNumbers}
            steps={steps}
        />
    );
};

QDSProgressStepper.propTypes = {
    customClasses: PropTypes.string,
    steps: PropTypes.array,
    hideLabels: PropTypes.bool,
    isError: PropTypes.number,
    isSentBack: PropTypes.number,
    isVertical: PropTypes.bool,
    lastCompletedStep: PropTypes.number,
    showNumbers: PropTypes.bool
};