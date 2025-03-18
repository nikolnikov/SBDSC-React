import { QDSAccordion } from './Accordion';

export default {
    title: 'Components/Accordion',
    component: QDSAccordion,
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

export const MultipleItemAccordion = {
    args: {
        accordionContent: [
            {
                header: 'Title 1',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
            },
            {
                header: 'Title 2',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
            }
        ]
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const SingleItemAccordion = {
    args: {
        ...MultipleItemAccordion.args,
        openSingleItem: true
    },
    argTypes: {
        ...MultipleItemAccordion.argTypes
    }
};

export const StandaloneMultipleItemAccordion = {
    args: {
        ...MultipleItemAccordion.args,
        isStandalone: true
    },
    argTypes: {
        ...MultipleItemAccordion.argTypes
    }
};

export const StandaloneSingleItemAccordion = {
    args: {
        ...MultipleItemAccordion.args,
        isStandalone: true,
        openSingleItem: true
    },
    argTypes: {
        ...MultipleItemAccordion.argTypes
    }
};
