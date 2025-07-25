import { QDSPagination } from './Pagination';

export default {
    title: 'Components/Navigation/Pagination',
    component: QDSPagination,
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

export const BasicPagination = {
    args: {
        totalItemCount: 150,
        itemCountSelectionArray: ['10', '25', '50', '75', '100']
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};
