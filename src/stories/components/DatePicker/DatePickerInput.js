import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconButton from '../Button/IconButton.index';

const DatePickerInput = ({
    customClasses,
    handleInputDateChange,
    errorMessage,
    hasError,
    hintMessage,
    toggleCalendar,
    label,
    inputId,
    inputRef,
    isDisabled,
    isRange,
    isRequired,
    fromDate,
    selectedDay,
    toDate,
    showCalendar
}) => {
    const handleInputFocus = () => {
        if (showCalendar) {
            toggleCalendar();
        }
    };

    return (
        <div
            ref={inputRef}
            className={classNames(
                'ds-input --icons --icon-right',
                customClasses,
                {
                    '--error': hasError,
                    '--disabled': isDisabled,
                    '--required': isRequired
                }
            )}
        >
            {label && (
                <label className="ds-input__label" htmlFor="from">
                    <span>{label}</span>
                </label>
            )}
            {isRange ? (
                <div className="ds-input__range">
                    <input
                        className="ds-from-field"
                        aria-labelledby="from"
                        id="from"
                        placeholder="mm/dd/yyyy"
                        onChange={handleInputDateChange}
                        value={fromDate}
                        name="from"
                        onFocusCapture={handleInputFocus}
                    />{' '}
                    <div className="ds-input__range-separator">–</div>
                    <input
                        className="ds-to-field"
                        aria-labelledby="to"
                        id="to"
                        placeholder="mm/dd/yyyy"
                        onChange={e => handleInputDateChange(e)}
                        value={toDate}
                        name="to"
                        onFocusCapture={handleInputFocus}
                    />
                    <IconButton
                        clickHandler={toggleCalendar}
                        icon="calendar-blank"
                    />
                </div>
            ) : (
                <div className="ds-flex --start-center --row">
                    <input
                        aria-labelledby={inputId}
                        placeholder="mm/dd/yyyy"
                        disabled={isDisabled}
                        id={inputId}
                        onChange={e => handleInputDateChange(e)}
                        value={selectedDay}
                        name="Selected day"
                        onFocusCapture={handleInputFocus}
                    />

                    <IconButton
                        customClasses={'--right'}
                        clickHandler={toggleCalendar}
                        icon="calendar-blank"
                    />
                </div>
            )}

            {errorMessage && (
                <div className="ds-input__error">{errorMessage}</div>
            )}
            {hintMessage && !errorMessage && (
                <div className="ds-input__hint">{hintMessage}</div>
            )}
        </div>
    );
};

DatePickerInput.propTypes = {
    customClasses: PropTypes.string,
    handleInputDateChange: PropTypes.func,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    toggleCalendar: PropTypes.func,
    label: PropTypes.string,
    inputId: PropTypes.string,
    inputRef: PropTypes.object,
    isDisabled: PropTypes.bool,
    isRange: PropTypes.bool,
    isRequired: PropTypes.bool,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    showCalendar: PropTypes.bool
};

export default DatePickerInput;
