import { on } from 'npm';
import { QDSInputSelect } from './InputSelect';

export default {
    title: 'Components/Input select',
    component: QDSInputSelect,
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

const nameOptions = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];

export const BasicInputSelect = {
    args: {
        inputId: 'input-1',
        label: 'Label',
        name: 'input-1',
        onChange: () => {},
        options: nameOptions,
        placeholder: 'Select an option'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        menuClass: { table: { disable: true } },
        onChange: { table: { disable: true } },
        options: { table: { disable: true } },
        selectedValue: { table: { disable: true } }
    }
};

export const RequiredInputSelect = {
    args: {
        ...BasicInputSelect.args,
        inputId: 'input-2',
        isRequired: true,
        name: 'input-2'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const DisabledInputSelect = {
    args: {
        ...BasicInputSelect.args,
        inputId: 'input-3',
        isDisabled: true,
        name: 'input-3'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const InputSelectWithError = {
    args: {
        ...BasicInputSelect.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-7',
        isRequired: true,
        name: 'input-7'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const InputSelectWithHint = {
    args: {
        ...BasicInputSelect.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-8',
        name: 'input-8'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const InputSelectWithTooltip = {
    args: {
        ...BasicInputSelect.args,
        inputId: 'input-9',
        name: 'input-9',
        tooltipMessage: 'Tooltip goes here.'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};
