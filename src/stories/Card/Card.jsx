import React from 'react';
import DSCard from '../components/Card'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSCard = ({ 
    children, customClasses, isInverse, type
}) => {
    return (
        <DSCard
            children={children}
            customClasses={classNames(customClasses)}
            isInverse={isInverse}
            type={type}
        />
    );
};

QDSCard.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.array,
    isInverse: PropTypes.bool,
    type: PropTypes.oneOf(['media', 'product'])
};