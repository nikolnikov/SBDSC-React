import { QDSSlider } from './Slider';

export default {
    title: 'Components/Slider',
    component: QDSSlider,
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

export const DefaultSlider = {
    args: {},
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const DisabledSlider = {
    args: {
        isDisabled: true
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};

export const DoubleSlider = {
    args: {
        doubleSlider: true
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};

export const DisabledDoubleSlider = {
    args: {
        isDisabled: true,
        doubleSlider: true
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};
