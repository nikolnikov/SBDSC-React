import React from 'react';
import DSSlider from '../components/Slider'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSSlider = ({
    customClasses,
    defaultValue,
    doubleSlider = false,
    isDisabled = false,
    leftDefaultValue,
    rightDefaultValue
}) => {
    return (
        <DSSlider
            customClasses={classNames(customClasses)}
            defaultValue={defaultValue}
            doubleSlider={doubleSlider}
            isDisabled={isDisabled}
            leftDefaultValue={leftDefaultValue}
            rightDefaultValue={rightDefaultValue}
        />
    );
};

QDSSlider.propTypes = {
    customClasses: PropTypes.string,
    defaultValue: PropTypes.number,
    doubleSlider: PropTypes.bool,
    isDisabled: PropTypes.bool,
    leftDefaultValue: PropTypes.number,
    rightDefaultValue: PropTypes.number
};