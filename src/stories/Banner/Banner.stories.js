import React from 'react';
import { QDSBanner } from './Banner';

export default {
    title: 'Components/Banner',
    component: QDSBanner,
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

export const BasicBanner = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.
            </p>
        )
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        dismissHandler: { table: { disable: true } }
    }
};

export const BannerWithCloseButton = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.
            </p>
        ),
        dismissHandler: () => {}
    },
    argTypes: {
        ...BasicBanner.argTypes
    }
};

export const BannerWithTitleAndCloseButton = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.{' '}
                <a href="https://www.questhealth.com/">Shop now</a>
            </p>
        ),
        dismissHandler: () => {},
        title: 'Enjoy 20% off this test'
    },
    argTypes: {
        ...BasicBanner.argTypes
    }
};

export const BannerWithIconAndCloseButton = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.
            </p>
        ),
        dismissHandler: () => {},
        icon: 'face-mask'
    },
    argTypes: {
        ...BasicBanner.argTypes
    }
};

export const BannerWithIllustrativeIconTitleAndCloseButton = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.{' '}
                <a href="https://www.questhealth.com/">Shop now</a>
            </p>
        ),
        dismissHandler: () => {},
        illustrativeIcon: 'pcp',
        title: 'Enjoy 20% off this test'
    },
    argTypes: {
        ...BasicBanner.argTypes
    },
    name: 'Banner with illustrative icon, title and close button'
};

export const CenteredBanner = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.
            </p>
        ),
        isCentered: true
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        dismissHandler: { table: { disable: true } }
    }
};

export const CenteredBannerWithCloseButton = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.
            </p>
        ),
        dismissHandler: () => {},
        isCentered: true
    },
    argTypes: {
        ...BasicBanner.argTypes
    }
};

export const CenteredBannerWithTitleAndCloseButton = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.{' '}
                <a href="https://www.questhealth.com/">Shop now</a>
            </p>
        ),
        dismissHandler: () => {},
        isCentered: true,
        title: 'Enjoy 20% off this test'
    },
    argTypes: {
        ...BasicBanner.argTypes
    }
};

export const CenteredBannerWithIconAndCloseButton = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.
            </p>
        ),
        dismissHandler: () => {},
        icon: 'face-mask',
        isCentered: true
    },
    argTypes: {
        ...BasicBanner.argTypes
    }
};
