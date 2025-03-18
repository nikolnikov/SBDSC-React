import React from 'react';
import DSTabs from '../components/Tabs'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSTabs = ({
    children,
    contentClasses,
    labels,
    defaultSelectedTab = 0,
    isCentered = false
}) => {
    return (
        <DSTabs
            contentClasses={contentClasses}
            labels={labels}
            defaultSelectedTab={defaultSelectedTab}
            isCentered={isCentered}
        >
            {children}
        </DSTabs>
    );
};

QDSTabs.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.node])
    ).isRequired,
    contentClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    labels: PropTypes.arrayOf(
        PropTypes.shape({
            isDisabled: PropTypes.bool,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    defaultSelectedTab: PropTypes.number,
    isCentered: PropTypes.bool
};