import React from 'react';
import DSCard from '../components/Card'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSCard = ({ 
    children, customClasses, title
}) => {
    return (
        <DSCard
            children={children}
            customClasses={classNames(customClasses)}
            title={title}
        />
    );
};

QDSCard.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.array,
    title: PropTypes.string
};