'use client';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QDSIconButton from '../../Button/IconButton.index';

const HeaderNav = ({ children, navData }) => {
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

    useEffect(() => {
        const body = document.querySelector('body');
        const isMobile = window.innerWidth < 1024;
        const scrollBarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        if (isNavVisible && isMobile) {
            body.style.paddingRight = scrollBarWidth + 'px';
            body.style.overflow = 'hidden';
        } else {
            body.style.paddingRight = null;
            body.style.overflow = null;
        }

        return () => {
            body.style.paddingRight = null;
            body.style.overflow = null;
        };
    }, [isNavVisible]);

    return (
        <>
            <nav
                className={`ds-header__nav ${isNavVisible ? 'show' : ''}`}
                role="navigation"
            >
                {(navData || []).map((navGroup, groupIdx) => (
                    <div key={groupIdx} className="ds-header__nav-group">
                        {navGroup.map((navItem, idx) => (
                            <div
                                className={`ds-header__nav-item ${
                                    navItem.subNav ? '--dropdown' : ''
                                }`}
                                key={idx}
                            >
                                {navItem.subNav ? (
                                    <>
                                        <a
                                            href={navItem.route || null}
                                            onClick={toggleSubNav}
                                        >
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
                                                    {/* <a
                                                        href="#"
                                                        onClick={toggleSubNav}
                                                        className="ds-link --icons"
                                                    >
                                                        <QDSIcon name="caret-left" />
                                                        <span>Back</span>
                                                    </a> */}

                                                    <div className="ds-header__subnav-title">
                                                        {navItem.label}
                                                    </div>

                                                    <ul className="ds-header__subnav-links">
                                                        {navItem.subNav.map(
                                                            (
                                                                subNavItem,
                                                                subIdx
                                                            ) => (
                                                                <li
                                                                    key={subIdx}
                                                                >
                                                                    <a
                                                                        href={
                                                                            subNavItem.route
                                                                        }
                                                                        className="ds-link"
                                                                    >
                                                                        {
                                                                            subNavItem.label
                                                                        }
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>

                                                    {navItem.image && (
                                                        <div className="ds-header__subnav-img">
                                                            <img
                                                                src={
                                                                    navItem.image
                                                                }
                                                                alt={
                                                                    navItem.label
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a href={navItem.route}>{navItem.label}</a>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
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
