import React from 'react';
import { QDSIcon } from './Icons';
import '!style-loader!css-loader!sass-loader!./icons.scss';

export default {
    title: 'Components/Icons',
    component: QDSIcon,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        controls: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },

    tags: ['autodocs', '!dev']
};

const Template = args => <QDSIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'gray__900',
    name: 'info',
    size: '24'
};
Default.argTypes = {
    customClasses: { table: { disable: true } }
};
