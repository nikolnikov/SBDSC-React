import React from 'react';
import DSFooter from '../components/Footer'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSFooter = ({ 
    customClasses, type = 'cit'
}) => {
    return (
        <DSFooter
            customClasses={classNames(customClasses)}
            type={type}
        />
    );
};

QDSFooter.propTypes = {
    customClasses: PropTypes.string,
    type: PropTypes.oneOf(['hipaa', 'cit']).isRequired
};