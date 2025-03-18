'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';
import QDSToast from '../Toast';

const QDSButton = ({
    clickHandler,
    customClasses = [],
    icon,
    iconRight,
    isDisabled,
    isInverse,
    isDestructive,
    isDownload,
    label,
    size = 'lg',
    type = 'primary'
}) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);

    const dlBtnClicked = event => {
        setIsDownloading(true);

        setTimeout(() => {
            setIsDownloading(false);
            setToastOpen(true);
        }, 3000);
    };

    return (
        <>
            {isDownload ? (
                <>
                    <button
                        className={classNames(
                            'ds-button --primary',
                            customClasses,
                            {
                                '--downloading': isDownloading
                            }
                        )}
                        onClick={dlBtnClicked}
                    >
                        <QDSIcon
                            name="download-simple"
                            customClasses="--left"
                        />
                        <div
                            className="ds-icon--loading --left"
                            aria-label="loading"
                            role="progressbar"
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span>
                            Download<ins>ing</ins>
                        </span>
                    </button>

                    <QDSToast
                        duration={5000}
                        message="Report successfully downloaded"
                        onClose={() => {
                            setToastOpen(false);
                        }}
                        opened={toastOpen}
                        type="informative"
                    />
                </>
            ) : (
                <button
                    className={classNames('ds-button', customClasses, {
                        [`--${type}`]: type,
                        [`--${size}`]: size && size !== 'large',
                        '--primary':
                            type !== 'ghost' &&
                            type !== 'secondary' &&
                            type !== 'inverse',
                        '--disabled': isDisabled,
                        '--download-btn': isDownload,
                        '--inverse': isInverse,
                        '--destructive': isDestructive
                    })}
                    aria-label={label}
                    onClick={clickHandler}
                >
                    {icon && <QDSIcon name={icon} customClasses="--left" />}
                    <span>{label}</span>
                    {iconRight && (
                        <QDSIcon name={iconRight} customClasses="--right" />
                    )}
                </button>
            )}
        </>
    );
};

QDSButton.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    iconRight: PropTypes.string,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isDestructive: PropTypes.bool,
    isDownload: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    type: PropTypes.oneOf(['primary', 'secondary', 'ghost'])
};

export default QDSButton;
