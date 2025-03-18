import { QDSCheckbox } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: QDSCheckbox,
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

export const BasicCheckbox = {
    args: {
        inputId: 'checkbox-1',
        label: 'Checkbox label',
        name: 'checkbox-1',
        onChange: () => {},
        value: 'checkbox-1'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } },
        value: { table: { disable: true } }
    }
};

export const RequiredCheckbox = {
    args: {
        inputId: 'checkbox-2',
        isRequired: true,
        label: 'Checkbox label',
        name: 'checkbox-2',
        onChange: () => {},
        value: 'checkbox-2'
    },
    argTypes: {
        ...BasicCheckbox.argTypes
    }
};

export const DisabledCheckbox = {
    args: {
        inputId: 'checkbox-3',
        isDisabled: true,
        label: 'Checkbox label',
        name: 'checkbox-3',
        onChange: () => {},
        value: 'checkbox-3'
    },
    argTypes: {
        ...BasicCheckbox.argTypes
    }
};

export const CheckedCheckbox = {
    args: {
        inputId: 'checkbox-4',
        isChecked: true,
        label: 'Checkbox label',
        name: 'checkbox-4',
        onChange: () => {},
        value: 'checkbox-4'
    },
    argTypes: {
        ...BasicCheckbox.argTypes
    }
};

export const IndeterminateCheckbox = {
    args: {
        inputId: 'checkbox-5',
        isIndeterminate: true,
        label: 'Checkbox label',
        name: 'checkbox-5',
        onChange: () => {},
        value: 'checkbox-5'
    },
    argTypes: {
        ...BasicCheckbox.argTypes
    }
};
