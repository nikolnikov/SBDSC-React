'use client';
import React from 'react';
import PropTypes from 'prop-types';

const HeaderTopBar = ({ topBarData, userAccountData }) => {
    return (
        <div className="ds-topbar --react">
            <div className="ds-row --margins">
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
    topBarData: PropTypes.array,
    userAccountData: PropTypes.object
};

export default HeaderTopBar;
