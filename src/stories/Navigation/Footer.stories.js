import { QDSFooter } from './Footer';

export default {
    title: 'Components/Navigation/Page footer',
    component: QDSFooter,
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

export const CITFooter = {
    args: {
        type: 'cit'
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const HIPAAFooter = {
    args: {
        type: 'hipaa'
    },
    argTypes: {
        ...CITFooter.argTypes
    }
};
