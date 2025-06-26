export function createData(feature, basic, pro, premium) {
    return {
        feature,
        basic,
        pro,
        premium
    };
}

export const basicHeadData = [
    {
        id: 'feature',
        label: 'Feature',
        icon: 'info',
        width: ''
    },
    {
        id: 'basic',
        label: 'Basic',
        width: '180px'
    },
    {
        id: 'pro',
        label: 'Pro',
        width: '180px'
    },
    {
        id: 'premium',
        label: 'Premium',
        width: '180px'
    }
];

export const basicCellData = [
    createData(
        `100% benefit for covered laboratory services`,
        ``,
        ``,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`
    ),
    createData(
        `Limited out-of-pocket patient cost for covered laboratory services`,
        ``,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`
    ),
    createData(
        `Digital member card`,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`,
        `<span class="ds-icon--check ds-m-auto" aria-label="check" role="img"></span>`
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
