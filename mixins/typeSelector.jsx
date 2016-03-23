import React, {PropTypes} from "react";

const typeArray = ['div', 'link', 'icon'];

export default (Inner) => class extends React.Component {

  propTypes = {
    type: PropTypes.oneOf(typeArray)
  }

  getType () {
    let type = 'div';

    if (typeof this.props.type !== 'undefined') {
      if (typeArray.indexOf(this.props.type) !== -1) {
        type = this.props.type;
      }
    }
    return type;
  }
  
  render () {
    return <Inner {...this.props} getType={this.getType} />;
  }
};
