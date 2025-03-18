'use client';

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import QDSButton from '../Button';
import QDSIconButton from '../Button/IconButton.index';
import MuiModal from '@mui/material/Modal';

const QDSModal = ({
    backdropClickable = true,
    buttonHandler,
    buttonLabel,
    children,
    ghostButtonHandler,
    ghostButtonLabel,
    hideX,
    modalClose,
    opened,
    secondaryButtonHandler,
    secondaryButtonLabel,
    type,
    title
}) => {
    const contentRef = useRef(null);
    const [isContentScrollable, setIsContentScrollable] = useState(false);

    useEffect(() => {
        const checkScrollability = () => {
            const content = contentRef?.current;
            if (content && content?.scrollHeight > content?.clientHeight) {
                setIsContentScrollable(true);
            } else {
                setIsContentScrollable(false);
            }
        };

        if (opened) {
            setTimeout(checkScrollability, 100);
            window.addEventListener('resize', checkScrollability);
        }

        return () => {
            window.removeEventListener('resize', checkScrollability);
        };
    }, [opened]);

    return (
        <MuiModal
            open={opened}
            onClose={backdropClickable ? modalClose : null}
            aria-label={title || 'modal'}
            role="dialog"
        >
            <div
                className={classNames('ds-modal', {
                    '--alert': type === 'alert',
                    '--error': type === 'error',
                    '--informative': type === 'informative',
                    '--success': type === 'success',
                    '--opened': opened
                })}
            >
                <div
                    className={classNames('ds-modal__wrapper', {
                        '--all-btns': ghostButtonLabel
                    })}
                >
                    <div className="ds-modal__header">
                        <h2>{title}</h2>

                        {!hideX && (
                            <QDSIconButton
                                icon="close"
                                size="md"
                                clickHandler={modalClose}
                            />
                        )}
                    </div>

                    <div className="ds-modal__content" ref={contentRef}>
                        {children}
                    </div>
                </div>

                {(buttonLabel || ghostButtonLabel || secondaryButtonLabel) && (
                    <div
                        className={classNames('ds-modal__actions', {
                            '--scroll': isContentScrollable
                        })}
                    >
                        {ghostButtonLabel && (
                            <QDSButton
                                label={ghostButtonLabel}
                                type="ghost"
                                clickHandler={ghostButtonHandler}
                            />
                        )}

                        <div className="ds-modal__actions-right">
                            {secondaryButtonLabel && (
                                <QDSButton
                                    label={secondaryButtonLabel}
                                    type="secondary"
                                    clickHandler={secondaryButtonHandler}
                                />
                            )}

                            {buttonLabel && (
                                <QDSButton
                                    label={buttonLabel}
                                    clickHandler={buttonHandler}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </MuiModal>
    );
};

QDSModal.propTypes = {
    backdropClickable: propTypes.bool,
    buttonHandler: propTypes.func,
    buttonLabel: propTypes.string,
    children: propTypes.node.isRequired,
    ghostButtonHandler: propTypes.func,
    ghostButtonLabel: propTypes.string,
    hideX: propTypes.bool,
    modalClose: propTypes.func,
    opened: propTypes.bool,
    secondaryButtonHandler: propTypes.func,
    secondaryButtonLabel: propTypes.string,
    type: propTypes.oneOf(['alert', 'error', 'informative', 'success']),
    title: propTypes.string.isRequired
};

export default QDSModal;
