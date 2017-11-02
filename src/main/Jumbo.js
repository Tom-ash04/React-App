import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Jumbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slide: 1 };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ slide: this.state.slide + 1 });
    }, 30000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.slide < 5) {
        this.setState({ slide: this.state.slide + 1 });
      } else {
        this.setState({ slide: 1 });
      }
    }, 30000);
  }
  render() {
    const change = `main_jumbotron backgr${this.state.slide}`;
    return (
      <ReactCSSTransitionGroup
        transitionAppearTimeout={2000}
        transitionEnterTimeout={2000}
        transitionLeave={false}
        transitionName="fading"
      >
        <div key={this.state.slide} className={change}>
          <h1>Witamy w Prosnej!!!</h1>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Jumbo;
