import React from 'react';
import DSHeader from '../components/Header'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSHeader = ({ 
    children,
    customClasses,
    logo,
    noMargins = false,
    noMaxWidth = false,
    navData,
    topBarData,
    userAccountData
}) => {
    return (
        <DSHeader
            children={children}
            customClasses={classNames(customClasses)}
            logo={logo}
            noMargins={noMargins}
            noMaxWidth={noMaxWidth}
            navData={navData}
            topBarData={topBarData}
            userAccountData={userAccountData}
        />
    );
};

QDSHeader.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    logo: PropTypes.string,
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
    navData: PropTypes.array,
    topBarData: PropTypes.array,
    userAccountData: PropTypes.object
};