import { QDSDatepicker } from './Datepicker';

export default {
    title: 'Components/Datepicker',
    component: QDSDatepicker,
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

export const BasicDatepicker = {
    args: {
        label: 'Select a date',
        inputId: 'datepicker-1',
        hintMessage: 'mm/dd/yyyy',
        placeholder: 'mm/dd/yyyy'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        offset: { table: { disable: true } },
        showOnTop: { table: { disable: true } }
    }
};

export const RequiredDatepicker = {
    args: {
        ...BasicDatepicker.args,
        inputId: 'datepicker-2',
        isRequired: true
    },
    argTypes: {
        ...BasicDatepicker.argTypes
    }
};

export const DisabledDatepicker = {
    args: {
        ...BasicDatepicker.args,
        inputId: 'datepicker-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicDatepicker.argTypes
    }
};

export const DatepickerWithError = {
    args: {
        ...BasicDatepicker.args,
        errorMessage: 'This field is required',
        hasError: true,
        inputId: 'datepicker-4',
        isRequired: true
    },
    argTypes: {
        ...BasicDatepicker.argTypes
    }
};

export const RangeDatepicker = {
    args: {
        ...BasicDatepicker.args,
        inputId: 'datepicker-5',
        isRange: true
    },
    argTypes: {
        ...BasicDatepicker.argTypes
    }
};

export const DatepickerWithDisabledFutureDates = {
    args: {
        ...BasicDatepicker.args,
        inputId: 'datepicker-6',
        disabledDays: 'future'
    },
    argTypes: {
        ...BasicDatepicker.argTypes
    }
};

export const DatepickerWithDisabledPastDates = {
    args: {
        ...BasicDatepicker.args,
        inputId: 'datepicker-7',
        disabledDays: 'past',
        showOnTop: true
    },
    argTypes: {
        ...BasicDatepicker.argTypes
    }
};
