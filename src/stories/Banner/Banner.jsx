import React from 'react';
import DSBanner from '../components/Banner'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSBanner = ({ 
    children,
    customClasses = [],
    dismissHandler,
    icon,
    illustrativeIcon,
    isCentered = false,
    title
}) => {
    return (
        <DSBanner
            children={children}
            customClasses={classNames(customClasses)}
            dismissHandler={dismissHandler}
            icon={icon}
            illustrativeIcon={illustrativeIcon}
            isCentered={isCentered}
            title={title}
        />
    );
};

QDSBanner.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.array,
    dismissHandler: PropTypes.func,
    icon: PropTypes.string,
    illustrativeIcon: PropTypes.string,
    isCentered: PropTypes.bool,
    title: PropTypes.string
};