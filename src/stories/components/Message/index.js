import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIconButton from '../Button/IconButton.index';
import QDSIcon from '../Icon';

const QDSMessage = ({
    children,
    closeHandler,
    customClasses,
    inlineActions,
    message,
    noIcon,
    title,
    type
}) => {
    const iconType = {
        informative: 'info',
        success: 'check-circle',
        warning: 'warning',
        error: 'warning-octagon'
    };

    const icon = iconType[type];

    return (
        <div
            className={classNames(
                `ds-message ${type ? `--${type}` : ''}`,
                customClasses
            )}
            role="alert"
        >
            {!noIcon && (
                <div className="ds-message__icon">
                    <QDSIcon name={type ? icon : 'chat-teardrop-text'} />
                </div>
            )}
            <div className="ds-message__content">
                {title && <div className="ds-message__title">{title}</div>}

                {message}

                {children && (
                    <div
                        className={`ds-message__actions ${
                            inlineActions ? '--inline' : ''
                        }`}
                    >
                        {children}
                    </div>
                )}
            </div>

            {closeHandler && (
                <QDSIconButton icon="close" clickHandler={closeHandler} />
            )}
        </div>
    );
};

QDSMessage.propTypes = {
    children: PropTypes.node,
    closeHandler: PropTypes.func,
    customClasses: PropTypes.string,
    inlineActions: PropTypes.bool,
    message: PropTypes.node.isRequired,
    noIcon: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['informative', 'success', 'warning', 'error'])
};

export default QDSMessage;
