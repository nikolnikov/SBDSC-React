'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ProgressStep from './PropgressStep';

const QDSProgressStepper = ({
    customClasses,
    hideLabels,
    isError,
    isSentBack,
    isVertical,
    lastCompletedStep = -1,
    showNumbers,
    steps
}) => {
    if (steps.length === 0) {
        return null;
    } else if (lastCompletedStep > steps.length - 1) {
        return new Error(
            'The last completed step index must not be greater than the total number of steps.'
        );
    }

    const currentStep = lastCompletedStep + 1;

    return (
        <div
            className={classNames('ds-progress-stepper', customClasses, {
                '--vertical': isVertical
            })}
        >
            {steps.map((step, idx) => (
                <ProgressStep
                    key={idx}
                    showNumbers={showNumbers ? idx + 1 : null}
                    stepLabel={step.title ? (hideLabels ? '' : step.title) : ''}
                    subLabel={step.subTitle}
                    isCompleted={idx < currentStep}
                    isCurrent={idx === currentStep}
                    isError={idx === isError}
                    isVertical={isVertical}
                    isSentBack={idx === isSentBack}
                />
            ))}
        </div>
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

export default QDSProgressStepper;
