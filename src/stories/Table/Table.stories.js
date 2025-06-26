import React from 'react';
import { QDSTable } from './Table';
import {
    basicCellData,
    basicHeadData,
    dataTableCell,
    dataTableHead
} from './data';

export default {
    title: 'Components/Table',
    component: QDSTable,
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

const Template = args => {
    const tableCellData = args.isData ? dataTableCell : basicCellData;
    const tableHeadData = args.isData ? dataTableHead : basicHeadData;

    return (
        <QDSTable
            {...args}
            tableHeadData={tableHeadData}
            tableCellData={tableCellData}
        />
    );
};

export const BasicTable = Template.bind({});
BasicTable.args = {};
BasicTable.argTypes = {
    sortOrder: { table: { disable: true } },
    sortProperty: { table: { disable: true } },
    isSortable: { table: { disable: true } },
    tableCellData: { table: { disable: true } },
    tableHeadData: { table: { disable: true } }
};

export const DataTable = Template.bind({});
DataTable.args = {
    isData: true
};
DataTable.argTypes = {
    sortOrder: { table: { disable: true } },
    sortProperty: { table: { disable: true } },
    isSortable: { table: { disable: true } },
    tableCellData: { table: { disable: true } },
    tableHeadData: { table: { disable: true } }
};
