import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = (Page) => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}
        transitionName="fading"
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageShell;
