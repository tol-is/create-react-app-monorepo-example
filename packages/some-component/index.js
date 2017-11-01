import React from 'react';

import './style.css';

export default () => {
  return [
    <hr />,
    <h4>Yeah this is an external component. I ♥ yarn workspaces</h4>,
    <p className="Some-component-text">This package lives in <code>packages/some-component/index.js</code></p>
  ]
}
