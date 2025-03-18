'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import HeaderTopBar from './HeaderTopBar';

const QDSHeader = ({
    children,
    customClasses,
    logo,
    noMargins,
    noMaxWidth,
    navData,
    topBarData,
    userAccountData
}) => {
    return (
        <div className="ds-header__wrapper">
            {topBarData && (
                <HeaderTopBar
                    topBarData={topBarData}
                    userAccountData={userAccountData}
                />
            )}

            <header className="ds-header --react">
                <div
                    className={classNames('ds-grid', customClasses, {
                        '--margins': !noMargins,
                        '--max-width': !noMaxWidth
                    })}
                >
                    <a className="ds-header__logo" href="/">
                        <img src={logo} alt="logo" />
                    </a>

                    {navData ? (
                        <HeaderNav
                            children={children}
                            navData={navData}
                            topBarData={topBarData}
                        />
                    ) : (
                        <div className="ds-header__right">
                            <div className="ds-header__actions">{children}</div>
                        </div>
                    )}
                </div>
            </header>
        </div>
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

export default QDSHeader;
