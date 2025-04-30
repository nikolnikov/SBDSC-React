'use client';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderTopBar = ({
    noMargins,
    noMaxWidth,
    topBarData,
    userAccountData
}) => {
    return (
        <div className="ds-topbar">
            <div
                className={classNames('ds-row', {
                    '--margins': !noMargins,
                    '--max-width': !noMaxWidth
                })}
            >
                {(topBarData || []).map((navItem, idx) => (
                    <a
                        key={idx}
                        href={navItem.route}
                        className="ds-link --inverse"
                    >
                        {navItem.label}
                    </a>
                ))}

                {userAccountData && userAccountData}
            </div>
        </div>
    );
};

HeaderTopBar.propTypes = {
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
    topBarData: PropTypes.array,
    userAccountData: PropTypes.object
};

export default HeaderTopBar;
