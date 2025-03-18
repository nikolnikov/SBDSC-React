import { QDSBadge } from './Badge';

export default {
    title: 'Components/Badge',
    component: QDSBadge,
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

export const SolidNeutralBadge = {
    args: {
        label: 'Status',
        status: 'neutral'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SolidInformativeBadge = {
    args: {
        label: 'Status',
        status: 'informative'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SolidSuccessBadge = {
    args: {
        label: 'Status',
        status: 'success'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SolidCriticalBadge = {
    args: {
        label: 'Status',
        status: 'critical'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SolidWarningBadge = {
    args: {
        label: 'Status',
        status: 'warning'
    },
    argTypes: {
        ...SolidNeutralBadge.argTypes
    }
};

export const SecondaryNeutralBadge = {
    args: {
        isSecondary: true,
        label: 'Status',
        status: 'neutral'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SecondaryInformativeBadge = {
    args: {
        isSecondary: true,
        label: 'Status',
        status: 'informative'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SecondarySuccessBadge = {
    args: {
        isSecondary: true,
        label: 'Status',
        status: 'success'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SecondaryCriticalBadge = {
    args: {
        isSecondary: true,
        label: 'Status',
        status: 'critical'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SecondaryWarningBadge = {
    args: {
        isSecondary: true,
        label: 'Status',
        status: 'warning'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
