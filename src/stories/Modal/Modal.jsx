import React, { useState } from 'react';
import QDSButton from '../components/Button';
import DSModal from '../components/Modal'
import PropTypes from 'prop-types';

export const QDSModal = ({ 
    backdropClickable = true,
    buttonHandler,
    buttonLabel,
    children,
    ghostButtonHandler,
    ghostButtonLabel,
    hideX = false,
    modalClose,
    opened,
    secondaryButtonHandler,
    secondaryButtonLabel,
    showLegalText = false,
    title,
    type
}) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button
                className="ds-button --primary"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Open modal
            </button>

            <DSModal
                backdropClickable={backdropClickable}
                buttonHandler={buttonHandler}
                buttonLabel={buttonLabel}
                children={children}
                ghostButtonLabel={ghostButtonLabel}
                ghostButtonHandler={ghostButtonHandler}
                hideX={hideX}
                linkLabel={secondaryButtonLabel}
                opened={showModal}
                modalClose={closeModal}
                secondaryButtonHandler={secondaryButtonHandler}
                secondaryButtonLabel={secondaryButtonLabel}
                showLegalText={showLegalText}
                type={type}
                title={title}
            />
        </>
    );
};

QDSModal.propTypes = {
    backdropClickable: PropTypes.bool,
    buttonHandler: PropTypes.func,
    buttonLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
    ghostButtonHandler: PropTypes.func,
    ghostButtonLabel: PropTypes.string,
    hideX: PropTypes.bool,
    modalClose: PropTypes.func,
    opened: PropTypes.bool,
    secondaryButtonHandler: PropTypes.func,
    secondaryButtonLabel: PropTypes.string,
    showLegalText: PropTypes.bool,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['alert', 'error', 'informative', 'success']),
};