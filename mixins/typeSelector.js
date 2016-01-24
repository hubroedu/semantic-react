let typeArray = ['div', 'link', 'icon'];

Mixins.typeSelector = {

  propTypes: {
    type: React.PropTypes.oneOf(typeArray)
  },

  getType () {
    let type = 'div';

    if (typeof this.props.type !== 'undefined') {
      if (typeArray.indexOf(this.props.type) !== -1) {
        type = this.props.type;
      }
    }
    return type;
  }
};
