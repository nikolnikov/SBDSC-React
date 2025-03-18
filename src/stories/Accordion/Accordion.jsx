import React from 'react';
import DSAccordion from '../components/Accordion';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSAccordion = ({ 
    accordionContent,
    customClasses,
    isStandalone = false,
    defaultExpanded = false,
    openSingleItem = false,
}) => {
    return (
        <DSAccordion
            accordionContent={accordionContent}
            customClasses={classNames(customClasses)}
            defaultExpanded={defaultExpanded}
            isStandalone={isStandalone}
            openSingleItem={openSingleItem}
        />
    );
};

QDSAccordion.propTypes = {
    accordionContent: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired,
    customClasses: PropTypes.string,
    defaultExpanded: PropTypes.bool,
    isStandalone: PropTypes.bool,
    openSingleItem: PropTypes.bool
};