import React from 'react';

export const headerNavData = [
    {
        label: "Women's Health",
        route: null
    },
    {
        label: "Men's Health",
        route: null
    },
    {
        label: 'General Health',
        route: null
    },
    {
        label: 'Shop All',
        image: 'https://ds.cdn.questdiagnostics.com/assets/img/placeholder-img.png',
        route: null,
        subNav: [
            {
                label: 'Vitamins & Supplements',
                route: null
            },
            {
                label: 'Personal Care',
                route: null
            },
            {
                label: 'Beauty',
                route: null
            },
            {
                label: 'Medicines',
                route: null
            },
            {
                label: 'Health Devices',
                route: null
            },
            {
                label: 'Fitness',
                route: null
            },
            {
                label: 'Health Food & Drinks',
                route: null
            }
        ]
    }
];

export const headerNavData2 = [
    {
        label: "Women's Health",
        route: null
    },
    {
        label: "Men's Health",
        route: null
    },
    {
        label: 'General Health',
        route: null
    }
];

export const topBarData = [
    {
        label: 'Schedule appointment',
        route: null
    },
    {
        label: 'Vew results',
        route: null
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
