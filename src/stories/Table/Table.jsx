import React from 'react';
import DSTable from '../components/Table'
import PropTypes from 'prop-types';

export const QDSTable = ({
    hasDarkHeader = false,
    isData = false,
    isSortable = true,
    tableHeadData,
    tableCellData,
    sortOrder,
    sortProperty
}) => {
    return (
        <DSTable
            hasDarkHeader={hasDarkHeader}
            isData={isData}
            isSortable={isSortable}
            tableHeadData={tableHeadData}
            tableCellData={tableCellData}
            sortOrder={sortOrder}
            sortProperty={sortProperty}
        />
    );
};

QDSTable.propTypes = {
    hasDarkHeader: PropTypes.bool,
    isData: PropTypes.bool,
    isSortable: PropTypes.bool,
    sortOrder: PropTypes.oneOf(['asc', 'desc']),
    sortProperty: PropTypes.string,
    tableHeadData: PropTypes.array.isRequired,
    tableCellData: PropTypes.array.isRequired
};