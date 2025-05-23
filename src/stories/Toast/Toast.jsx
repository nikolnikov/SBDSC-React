import React, { useState } from 'react';
import DSToast from '../components/Toast'
import QDSButton from '../components/Button'
import PropTypes from 'prop-types';

export const QDSToast = ({
    duration,
    hideDismiss,
    message,
    noIcon = false,
    onClose,
    opened,
    positionY = 'top',
    positionYOffset,
    positionYOffsetMobile,
    textLinkLabel,
    type
}) => {
    const [toastOpen, setToastOpen] = useState(false);

    const showToast = () => {
        setToastOpen(true);
    };

    return (
        <>
            <QDSButton
                clickHandler={showToast}
                label="Open toast"
            />

            <DSToast
                duration={duration}
                hideDismiss={hideDismiss}
                message={message}
                noIcon={noIcon}
                onClose={() => {
                        setToastOpen(false);
                    }}
                opened={toastOpen}
                positionY={positionY}
                positionYOffset={positionYOffset}
                positionYOffsetMobile={positionYOffsetMobile}
                type={type}
                textLinkLabel={textLinkLabel}
            />
        </>
    );
};

QDSToast.propTypes = {
    duration: PropTypes.number,
    hideDismiss: PropTypes.bool,
    message: PropTypes.string.isRequired,
    noIcon: PropTypes.bool,
    onClose: PropTypes.func,
    opened: PropTypes.bool,
    positionY: PropTypes.oneOf(['top', 'bottom']),
    positionYOffset: PropTypes.number,
    positionYOffsetMobile: PropTypes.number,
    textLinkLabel: PropTypes.string,
    status: PropTypes.oneOf(['success', 'error', 'alert', 'informative'])
};