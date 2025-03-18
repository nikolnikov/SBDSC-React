import { QDSLoader } from './Loader';

export default {
    title: 'Components/Loader',
    component: QDSLoader,
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

export const BasicLoader = {
    args: {},
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
