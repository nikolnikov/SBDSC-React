import React from 'react';
import { QDSHeader } from './Header';
import { QDSButton } from '../Button/Button';
import { QDSInput } from '../Input/Input';
import {
    headerNavData,
    headerNavData2,
    topBarData,
    userAccountData
} from './data';

export default {
    title: 'Components/Navigation/Header',
    component: QDSHeader,
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

export const HeaderWithNavigationAndToolbar = {
    args: {
        children: (
            <QDSButton
                customClasses="--md-d-none"
                clickHandler={() => {}}
                label="Button"
                size="sm"
            />
        ),
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        navData: headerNavData,
        topBarData: topBarData,
        userAccountData: userAccountData
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        noMargins: { table: { disable: true } },
        noMaxWidth: { table: { disable: true } }
    }
};

export const HeaderWithNavigation = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        navData: headerNavData2
    },
    argTypes: {
        ...HeaderWithNavigationAndToolbar.argTypes
    }
};

export const HeaderWithSearch = {
    args: {
        children: (
            <QDSInput
                inputId="search-input"
                leftIcon="search"
                name="search-input"
                placeholder="Search"
                type="text"
                onChange={() => {}}
            />
        ),
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg'
    },
    argTypes: {
        ...HeaderWithNavigationAndToolbar.argTypes
    }
};

export const BasicHeader = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg'
    },
    argTypes: {
        ...HeaderWithNavigationAndToolbar.argTypes
    }
};
