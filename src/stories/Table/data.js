export function createData(
    gummiBears,
    oatCakeTart,
    applePieTopping,
    whippedCream
) {
    return {
        gummiBears,
        oatCakeTart,
        applePieTopping,
        whippedCream
    };
}

export const basicHeadData = [
    {
        id: 'gummiBears',
        label: 'Gummi bears',
        icon: 'info'
    },
    {
        id: 'oatCakeTart',
        label: 'Oat cake tart'
    },
    {
        id: 'applePieTopping',
        label: 'Apple pie topping'
    },
    {
        id: 'whippedCream',
        label: 'Whipped cream'
    }
];

export const basicCellData = [
    createData(
        `Pastry jelly-o wafer cheesecake`,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`
    ),
    createData(
        `Pastry marshmallow gingerbread`,
        ``,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`,
        ``
    )
];

export function createData2(lastName, firstName, status) {
    return {
        lastName,
        firstName,
        status
    };
}

export const dataTableHead = [
    {
        id: 'lastName',
        label: 'Last name'
    },
    {
        id: 'firstName',
        label: 'First name'
    },
    {
        id: 'status',
        label: 'Status',
        noSort: true
    }
];

export const dataTableCell = [
    createData2(
        `Blake`,
        `Edward`,
        `<div class="ds-badge --informative left-icon" aria-label="Informative" role="status"><span class="ds-icon--info" aria-label="Info" role="img"></span>Informative</div>`
    ),
    createData2(
        `Jupiter`,
        `Sally`,
        `<div class="ds-badge --warning left-icon" aria-label="Warning" role="status"><span class="ds-icon--warning" aria-label="Info" role="img"></span>Warning</div>`
    )
];
