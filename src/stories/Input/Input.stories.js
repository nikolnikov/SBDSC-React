import { QDSInput } from './Input';

export default {
    title: 'Components/Input',
    component: QDSInput,
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

export const BasicInput = {
    args: {
        inputId: 'input-1',
        label: 'Label',
        name: 'input-1',
        type: 'text',
        onChange: () => {}
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } }
    }
};

export const RequiredInput = {
    args: {
        ...BasicInput.args,
        inputId: 'input-2',
        isRequired: true,
        name: 'input-2'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const DisabledInput = {
    args: {
        ...BasicInput.args,
        inputId: 'input-3',
        isDisabled: true,
        name: 'input-3'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithLeftIcon = {
    args: {
        ...BasicInput.args,
        inputId: 'input-4',
        leftIcon: 'search',
        name: 'input-4'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithRightIcon = {
    args: {
        ...BasicInput.args,
        inputId: 'input-5',
        rightIcon: 'location',
        name: 'input-5'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithBothIcons = {
    args: {
        ...BasicInput.args,
        inputId: 'input-6',
        leftIcon: 'search',
        rightIcon: 'location',
        name: 'input-6'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithError = {
    args: {
        ...BasicInput.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-7',
        isRequired: true,
        name: 'input-7'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithHint = {
    args: {
        ...BasicInput.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-8',
        name: 'input-8'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithTooltip = {
    args: {
        ...BasicInput.args,
        inputId: 'input-9',
        name: 'input-9',
        tooltipMessage: 'Tooltip goes here.'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};
