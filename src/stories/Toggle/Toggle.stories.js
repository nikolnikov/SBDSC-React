import { QDSToggle } from './Toggle';

export default {
    title: 'Components/Toggle',
    component: QDSToggle,
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

export const BasicToggle = {
    args: {
        inputId: 'toggle-1',
        label: 'Toggle label'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } }
    }
};

export const DisabledToggle = {
    args: {
        inputId: 'toggle-2',
        isDisabled: true,
        label: 'Toggle label'
    },
    argTypes: {
        ...BasicToggle.argTypes
    }
};

export const CheckedToggle = {
    args: {
        inputId: 'toggle-3',
        isChecked: true,
        label: 'Toggle label'
    },
    argTypes: {
        ...BasicToggle.argTypes
    }
};
