import React from 'react';
import DSMessage from '../components/Message'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSMessage = ({ 
    children,
    closeHandler,
    customClasses,
    inlineActions = false,
    message,
    noIcon = false,
    title,
    type
}) => {
    return (
        <DSMessage
            children={children}
            closeHandler={closeHandler}
            customClasses={classNames(customClasses)}
            inlineActions={inlineActions}
            message={message}
            noIcon={noIcon}
            title={title}
            type={type}
        />
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