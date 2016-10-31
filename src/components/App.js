import React, { PropTypes } from 'react';
import Checkbox from 'rc-checkbox';

const App = (props) => {
  return (
    <div>
      <Checkbox />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
