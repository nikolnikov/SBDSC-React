import React from 'react';
import { QDSMessage } from './Message';

export default {
    title: 'Components/Message',
    component: QDSMessage,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const InformativeMessage = {
    args: {
        children: (
            <>
                <a className="ds-link" href={null}>
                    Yes
                </a>

                <a className="ds-link" href={null}>
                    No
                </a>
            </>
        ),
        closeHandler: () => {},
        message:
            "We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.",
        title: 'Heading',
        type: 'informative'
    },
    argTypes: {
        closeHandler: { table: { disable: true } },
        customClasses: { table: { disable: true } }
    }
};

export const SuccessMessage = {
    args: {
        message:
            "We've sent you an email detailing your recent account changes.",
        title: 'Heading',
        type: 'success'
    },
    argTypes: {
        closeHandler: { table: { disable: true } },
        customClasses: { table: { disable: true } }
    }
};

export const WarningMessage = {
    args: {
        children: (
            <>
                <a className="ds-link" href={null}>
                    Yes
                </a>

                <a className="ds-link" href={null}>
                    No
                </a>
            </>
        ),
        inlineActions: true,
        message: 'Would you like to proceed with the change?',
        type: 'warning'
    },
    argTypes: {
        closeHandler: { table: { disable: true } },
        customClasses: { table: { disable: true } }
    }
};

export const ErrorMessage = {
    args: {
        message: 'An error has occured. Please try again.',
        type: 'error'
    },
    argTypes: {
        closeHandler: { table: { disable: true } },
        customClasses: { table: { disable: true } }
    }
};
