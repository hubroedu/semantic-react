import React, {PropTypes} from "react";

const colorArray = [
  'black', 'yellow', 'green', 'blue',
  'orange', 'purple', 'red', 'teal'
];

const colorSelector = (Inner) => class extends React.Component {

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

colorSelector.propTypes = {
  color: PropTypes.oneOf(colorArray)
};

export default colorSelector;
