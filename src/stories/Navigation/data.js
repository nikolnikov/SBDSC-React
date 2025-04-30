import React from 'react';

export const headerNavData = [
    [
        {
            label: "Women's Health",
            route: 'https://www.google.com'
        },
        {
            label: "Men's Health",
            route: 'https://www.google.com'
        },
        {
            label: 'General Health',
            route: 'https://www.google.com'
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
            label: "Women's Health",
            route: 'https://www.google.com'
        },
        {
            label: "Men's Health",
            route: 'https://www.google.com'
        },
        {
            label: 'General Health',
            route: 'https://www.google.com'
        }
    ]
];

export const topBarData = [
    {
        label: 'Schedule appointment',
        route: 'https://www.google.com'
    },
    {
        label: 'Vew results',
        route: 'https://www.google.com'
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
