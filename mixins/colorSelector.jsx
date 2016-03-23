import React, {PropTypes} from "react";

const colorArray = [
  'black', 'yellow', 'green', 'blue',
  'orange', 'purple', 'red', 'teal'
];

export default (Inner) => class extends React.Component {
  propTypes = {
    color: PropTypes.oneOf(colorArray)
  }

  getColor () {
    let color = 'null';

    if (typeof this.props.color !== 'undefined') {
      if (colorArray.indexOf(this.props.color) !== -1) {
        color = this.props.color;
      }
    }

    return color;
  }
  
  render () {
    return <Inner {...this.props} getColor={this.getColor} />;
  }
};
