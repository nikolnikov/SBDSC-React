'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIconButton from '../../Button/IconButton.index';
import QDSIcon from '../../Icon';

const HeaderNav = ({ children, navData, topBarData }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSubNavVisible, setIsSubNavVisible] = useState(false);

    const toggleNav = () => {
        if (window.innerWidth < 1024) {
            setIsNavVisible(!isNavVisible);
        }
    };

    const toggleSubNav = () => {
        setIsSubNavVisible(!isSubNavVisible);
    };

    return (
        <>
            <nav
                className={`ds-header__nav ${isNavVisible ? 'show' : ''}`}
                role="navigation"
            >
                {(navData || []).map((navItem, idx) =>
                    navItem.subNav ? (
                        <div
                            key={idx}
                            className={classNames(
                                'ds-header__nav-item --dropdown'
                            )}
                        >
                            <a href={navItem.route} onClick={toggleSubNav}>
                                {navItem.label}
                            </a>

                            <div
                                className={`ds-header__subnav ${
                                    isSubNavVisible ? 'show' : ''
                                }`}
                                role="navigation"
                            >
                                <div className="ds-row --max-width --margins">
                                    <div className="ds-header__subnav-content">
                                        <a
                                            href={null}
                                            onClick={toggleSubNav}
                                            className="ds-link --icons"
                                        >
                                            <QDSIcon name="caret-left" />
                                            <span>Back</span>
                                        </a>

                                        <div className="ds-header__subnav-title">
                                            {navItem.label}
                                        </div>

                                        <ul className="ds-header__subnav-links">
                                            {navItem.subNav.map(
                                                (subNavItem, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={
                                                                subNavItem.route
                                                            }
                                                            className="ds-link"
                                                        >
                                                            {subNavItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        {navItem.image && (
                                            <div className="ds-header__subnav-img">
                                                <img
                                                    src={navItem.image}
                                                    alt="header image"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <a
                            key={idx}
                            href={navItem.route}
                            className={classNames('ds-header__nav-item')}
                        >
                            {navItem.label}
                        </a>
                    )
                )}

                {topBarData && (
                    <div className="ds-topbar">
                        {(topBarData || []).map((navItem, idx) => (
                            <a
                                key={idx}
                                href={navItem.route}
                                className="ds-link"
                            >
                                {navItem.label}
                            </a>
                        ))}

                        <button className="ds-topbar__account">
                            <QDSIcon name="user-circle" />
                            <span>LS</span>
                        </button>
                    </div>
                )}
            </nav>

            <div className="ds-header__right">
                <div className="ds-header__actions">{children}</div>

                <div className="ds-header__mobile">
                    <QDSIconButton
                        icon={`${isNavVisible ? 'close' : 'menu'}`}
                        clickHandler={toggleNav}
                    />
                </div>
            </div>
        </>
    );
};

HeaderNav.propTypes = {
    children: PropTypes.node,
    navData: PropTypes.array,
    topBarData: PropTypes.array
};

export default HeaderNav;
