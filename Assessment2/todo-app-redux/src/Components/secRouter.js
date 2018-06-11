import React from 'react';
import PropTypes from 'prop-types';

const SecRouter = ({ active, children, onClick }) => (
      <button
      onClick={onClick}
      disabled={active}
      style={{
          marginLeft: '4px',
        }}
      >
        {children}
    </button>
)

SecRouter.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func
  }
  
  export default SecRouter;