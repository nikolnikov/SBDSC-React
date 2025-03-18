import React from 'react';
import { QDSCard } from './Card';

export default {
    title: 'Components/Card',
    component: QDSCard,
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

export const BasicCard = {
    args: {
        children: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consectetur, eros sit amet ornare placerat, enim lectus
                hendrerit nisl, quis lacinia eros purus vel nunc. Donec
                imperdiet, leo quis fermentum luctus, nibh nibh vehicula ipsum,
                eget faucibus nisl enim sed felis. Donec sit amet tincidunt
                nisl. Nulla facilisi. Sed sit amet eros ullamcorper, aliquet
                nisl quis, ultricies nisl. Nulla facilisi. Sed sit amet eros
                ullamcorper, aliquet nisl quis, ultricies nisl.
            </p>
        )
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
