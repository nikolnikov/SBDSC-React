import React from 'react';
import DSDatePicker from '../components/DatePicker'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSDatepicker = ({ 
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    disabledDays,
    inputId,
    isDisabled = false,
    isRange = false,
    isRequired = false,
    label,
    offset,
    showOnTop = false
}) => {
    return (
        <DSDatePicker
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            disabledDays={disabledDays}
            inputId={inputId}
            isDisabled={isDisabled}
            isRange={isRange}
            isRequired={isRequired}
            label={label}
            offset={offset}
            showOnTop={showOnTop}
        />
    );
};

QDSDatepicker.propTypes = {
    customClasses: PropTypes.array,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    disabledDays: PropTypes.oneOf(['past', 'future']),
    inputId: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRange: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    offset: PropTypes.number,
    showOnTop: PropTypes.bool
};