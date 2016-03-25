import React, {PropTypes} from "react";

const typeArray = ['div', 'link', 'icon'];

const typeSelector = (Inner) => class extends React.Component {

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
    return <Inner {...this.props} getType={this.getType.bind(this)} />;
  }
};

typeSelector.propTypes = {
  type: PropTypes.oneOf(typeArray)
};

export default typeSelector;
