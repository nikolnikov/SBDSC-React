'use client';

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';
import QDSIconButton from '../Button/IconButton.index';
import PropTypes from 'prop-types';

const QDSToast = ({
    duration,
    message,
    noIcon,
    onClose,
    opened,
    textLinkLabel,
    type
}) => {
    const action = (
        <>
            {textLinkLabel && (
                <a href={null} className="ds-link" onClick={onClose}>
                    {textLinkLabel}
                </a>
            )}

            {!duration && !textLinkLabel && (
                <QDSIconButton icon="close" clickHandler={onClose} />
            )}
        </>
    );

    return (
        <Snackbar
            classes={{
                root: `ds-toast ${type ? `--${type}` : ''} ${
                    noIcon ? '--no-icon' : ''
                }`
            }}
            ClickAwayListenerProps={{ onClickAway: () => null }}
            open={opened}
            autoHideDuration={duration}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <SnackbarContent
                action={action}
                classes={{ action: textLinkLabel ? '--link' : '' }}
                message={message}
            />
        </Snackbar>
    );
};

QDSToast.propTypes = {
    duration: PropTypes.number,
    message: PropTypes.string.isRequired,
    noIcon: PropTypes.bool,
    onClose: PropTypes.func,
    opened: PropTypes.bool.isRequired,
    textLinkLabel: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error', 'alert', 'informative'])
};

export default QDSToast;
