import React from 'react';

export const headerNavData = [
    [
        {
            label: 'Menu Option 1',
            route: '#'
        },
        {
            label: 'Menu Option 2',
            route: '#'
        },
        {
            label: 'Menu Option 3',
            route: '#'
        }
    ],
    [
        {
            label: 'Shop All',
            image: 'https://ds.cdn.questdiagnostics.com/assets/img/placeholder-img.png',
            route: null,
            subNav: [
                {
                    label: 'Vitamins & Supplements',
                    route: 'https://www.google.com'
                },
                {
                    label: 'Personal Care',
                    route: 'https://www.google.com'
                },
                {
                    label: 'Beauty',
                    route: 'https://www.google.com'
                },
                {
                    label: 'Medicines',
                    route: 'https://www.google.com'
                },
                {
                    label: 'Health Devices',
                    route: 'https://www.google.com'
                },
                {
                    label: 'Fitness',
                    route: 'https://www.google.com'
                },
                {
                    label: 'Health Food & Drinks',
                    route: 'https://www.google.com'
                }
            ]
        }
    ]
];

export const headerNavData2 = [
    [
        {
            label: 'Menu Option 1',
            route: '#'
        },
        {
            label: 'Menu Option 2',
            route: '#'
        },
        {
            label: 'Menu Option 3',
            route: '#'
        }
    ]
];

export const topBarData = [
    {
        label: 'Topbar Link',
        route: '#'
    },
    {
        label: 'Topbar Link',
        route: '#'
    }
];

export const userAccountData = (
    <button className="ds-button --icon isInverse ds-topbar__account">
        <span>LS</span>
        <span
            className="ds-icon--user-circle"
            aria-label="user-circle"
            role="img"
        ></span>
    </button>
);
