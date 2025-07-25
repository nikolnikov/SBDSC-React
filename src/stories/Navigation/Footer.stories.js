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
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
    }
};

export const HIPAAFooter = {
    args: {
        type: 'hipaa'
    },
    argTypes: {
        ...CITFooter.argTypes
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
    }
};
