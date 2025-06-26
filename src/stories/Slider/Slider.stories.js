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
    args: {
        defaultValue: 50
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const DisabledSlider = {
    args: {
        ...DefaultSlider.args,
        isDisabled: true
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};

export const DoubleSlider = {
    args: {
        doubleSlider: true,
        leftDefaultValue: 25,
        rightDefaultValue: 75
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};

export const DisabledDoubleSlider = {
    args: {
        ...DoubleSlider.args,
        isDisabled: true,
        doubleSlider: true
    },
    argTypes: {
        ...DefaultSlider.argTypes
    }
};
