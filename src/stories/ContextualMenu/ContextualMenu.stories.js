import React from 'react';
import { QDSContextualMenu } from './ContextualMenu';

export default {
    title: 'Components/Contextual menu',
    component: QDSContextualMenu,
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

const menuItemData = [
    {
        label: 'Menu item 1',
        action: () => {
            console.log('Menu item 1 clicked');
        }
    },
    {
        label: 'Menu item 2',
        action: () => {
            console.log('Menu item 2 clicked');
        }
    },
    {
        label: 'Menu item 3',
        action: () => {
            console.log('Menu item 3 clicked');
        }
    }
];

export const DefaultContextualMenu = {
    args: {
        closeMenu: () => console.log('Close menu'),
        menuItems: menuItemData
    },
    argTypes: {
        menuItems: {
            table: {
                type: {
                    summary: '[{ label: string, action: function }]'
                }
            }
        },
        menuWidth: { table: { disable: true } },
        closeMenu: { table: { disable: true } },
        openMenu: { table: { disable: true } },
        children: { table: { disable: true } },
        menuClass: { table: { disable: true } }
    }
};

export const RightAlignedContextualMenu = {
    args: {
        ...DefaultContextualMenu.args,
        menuRight: true
    },
    argTypes: {
        ...DefaultContextualMenu.argTypes
    }
};
