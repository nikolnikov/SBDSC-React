'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';
import QDSIconButton from '../Button/IconButton.index';

const QDSBanner = ({
    children,
    customClasses = [],
    dismissHandler,
    icon,
    illustrativeIcon,
    isCentered,
    title
}) => {
    return (
        <div
            className={classNames('ds-banner --react', customClasses, {
                '--branded': illustrativeIcon && !icon,
                '--centered': isCentered,
                '--icon': icon && !illustrativeIcon
            })}
        >
            {illustrativeIcon && !icon && (
                <div className="ds-banner__banner-icon">
                    <QDSIcon name={illustrativeIcon} type="illustrativeWhite" />
                </div>
            )}

            <div className="ds-flex --row --wrap --start-start">
                {title && (
                    <div className="ds-banner__heading">
                        <h3>{title}</h3>
                    </div>
                )}

                <div className="ds-banner__inner-content">
                    {icon && !illustrativeIcon && (
                        <div className="ds-banner__banner-icon">
                            <QDSIcon name={icon} />
                        </div>
                    )}

                    {children}
                </div>
            </div>

            {dismissHandler && (
                <QDSIconButton
                    icon="close"
                    clickHandler={dismissHandler}
                    isInverse
                    size="sm"
                />
            )}
        </div>
    );
};

QDSBanner.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    dismissHandler: PropTypes.func,
    icon: PropTypes.string,
    illustrativeIcon: PropTypes.string,
    isCentered: PropTypes.bool,
    title: PropTypes.string
};

export default QDSBanner;
