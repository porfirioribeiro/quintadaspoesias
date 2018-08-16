import React from 'react';

import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';

export default class CSSInjector extends React.Component {
  render() {
    return (
      <div
        ref={ref => {
          if (ref && !this.css) {
            this.css = renderStylesToString(renderToString(this.props.children));
            ref.ownerDocument.head.innerHTML += this.css;
          }
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
