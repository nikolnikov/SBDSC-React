import React from 'react';
import { QDSTag } from './Tag';

export default {
    title: 'Components/Tag',
    component: QDSTag,
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

export const BasicTag = {
    args: {
        label: 'Label'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } },
        hideHandler: { table: { disable: true } }
    }
};

export const DisabledTag = {
    args: {
        ...BasicTag.args,
        isDisabled: true
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } },
        hideHandler: { table: { disable: true } }
    }
};
