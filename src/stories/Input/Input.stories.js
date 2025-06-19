import { QDSInput } from './Input';

export default {
    title: 'Components/Text input',
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

export const BasicTextInput = {
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
        onChange: { table: { disable: true } },
        value: { table: { disable: true } }
    }
};

export const RequiredTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-2',
        isRequired: true,
        name: 'input-2'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const DisabledTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-3',
        isDisabled: true,
        name: 'input-3'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithLeftIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-4',
        iconLeft: 'search',
        name: 'input-4'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithRightIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-5',
        iconRight: 'location',
        name: 'input-5'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithBothIcons = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-6',
        iconLeft: 'search',
        iconRight: 'location',
        name: 'input-6'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithError = {
    args: {
        ...BasicTextInput.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-7',
        isRequired: true,
        name: 'input-7'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithHint = {
    args: {
        ...BasicTextInput.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-8',
        name: 'input-8'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithTooltip = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-9',
        name: 'input-9',
        tooltipMessage: 'Tooltip goes here.'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};
