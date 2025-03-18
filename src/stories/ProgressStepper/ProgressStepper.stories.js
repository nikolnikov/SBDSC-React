import { QDSProgressStepper } from './ProgressStepper';

export default {
    title: 'Components/Progress stepper',
    component: QDSProgressStepper,
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

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

export const DefaultProgressStepper = {
    args: {
        lastCompletedStep: 0,
        steps: stepperData
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        steps: { table: { disable: true } }
    }
};

export const ProgressStepperWithSentBackStep = {
    args: {
        lastCompletedStep: 0,
        isSentBack: 1,
        steps: stepperData
    },
    argTypes: {
        ...DefaultProgressStepper.argTypes
    }
};

export const ProgressStepperWithErrorStep = {
    args: {
        lastCompletedStep: 1,
        isError: 2,
        steps: stepperData
    },
    argTypes: {
        ...DefaultProgressStepper.argTypes
    }
};

export const VerticalProgressStepper = {
    args: {
        isVertical: true,
        lastCompletedStep: 0,
        steps: stepperData
    },
    argTypes: {
        ...DefaultProgressStepper.argTypes
    }
};
