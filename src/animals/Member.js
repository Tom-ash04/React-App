import React from 'react';
import PropTypes from 'prop-types';

class Member extends React.Component {
  render() {
    return (
      <div className="animal_content">
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.content}</p>
        </div>
        <div>
          <img className="animal_img" alt="#" src={this.props.source} />
        </div>
      </div>
    );
  }
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Member;
