import React from 'react';
import { QDSModal } from './Modal';

export default {
    title: 'Components/Modal',
    component: QDSModal,
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

export const BasicModal = {
    args: {
        buttonHandler: () => {},
        buttonLabel: 'Yes',
        ghostButtonHandler: () => {},
        ghostButtonLabel: 'Cancel',
        secondaryButtonLabel: 'No',
        secondaryButtonHandler: () => {},
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
        ),
        title: 'Modal title'
    },
    argTypes: {
        buttonHandler: { table: { disable: true } },
        ghostButtonHandler: { table: { disable: true } },
        modalClose: { table: { disable: true } },
        opened: { table: { disable: true } },
        secondaryButtonHandler: { table: { disable: true } }
    }
};

export const InformativeModal = {
    args: {
        ...BasicModal.args,
        type: 'informative'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const SuccessModal = {
    args: {
        ...BasicModal.args,
        type: 'success'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const ErrorModal = {
    args: {
        ...BasicModal.args,
        type: 'error'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const AlertModal = {
    args: {
        ...BasicModal.args,
        type: 'alert'
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};

export const ScrollableModal = {
    args: {
        ...BasicModal.args,
        children: (
            <>
                <p>
                    Nulla quam senectus id lorem vitae velit quisque varius
                    augue turpis tincidunt sapien, consectetur faucibus ligula
                    volutpat convallis sit et velit risus consectetur mattis vel
                    quisque justo, mi blandit porttitor mauris faucibus diam
                    dolor id nisi, magna sodales ornare mauris convallis dui
                    pellentesque.
                </p>

                <p>
                    Nulla quam senectus id lorem vitae velit quisque varius
                    augue turpis tincidunt sapien, consectetur faucibus ligula
                    volutpat convallis sit et velit risus consectetur mattis vel
                    quisque justo, mi blandit porttitor mauris faucibus diam
                    dolor id nisi, magna sodales ornare mauris convallis dui
                    pellentesque.
                </p>

                <p>
                    Nulla quam senectus id lorem vitae velit quisque varius
                    augue turpis tincidunt sapien, consectetur faucibus ligula
                    volutpat convallis sit et velit risus consectetur mattis vel
                    quisque justo, mi blandit porttitor mauris faucibus diam
                    dolor id nisi, magna sodales ornare mauris convallis dui
                    pellentesque.
                </p>

                <p>
                    Nulla quam senectus id lorem vitae velit quisque varius
                    augue turpis tincidunt sapien, consectetur faucibus ligula
                    volutpat convallis sit et velit risus consectetur mattis vel
                    quisque justo, mi blandit porttitor mauris faucibus diam
                    dolor id nisi, magna sodales ornare mauris convallis dui
                    pellentesque.
                </p>
            </>
        )
    },
    argTypes: {
        ...BasicModal.argTypes
    }
};
