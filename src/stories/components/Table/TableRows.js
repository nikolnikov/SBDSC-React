import React from 'react';
import TableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';

const TableRow = ({ isData, tableCellData }) => {
    return (
        <>
            <MuiTableRow
                className={`${
                    isData ? 'ds-data-table__row' : 'ds-table__table-tr'
                }`}
            >
                {Object.keys(tableCellData).map((cellKey, index) => (
                    <TableCell
                        className={`${
                            isData
                                ? 'ds-data-table__row-td'
                                : 'ds-table__table-td'
                        } ds-row --flex-wrap`}
                        key={`${tableCellData.id}-${cellKey}-${index}`}
                    >
                        <div
                            className="ds-row --flex-wrap"
                            dangerouslySetInnerHTML={{
                                __html: tableCellData[cellKey]
                            }}
                        ></div>
                    </TableCell>
                ))}
            </MuiTableRow>
        </>
    );
};

export default TableRow;
