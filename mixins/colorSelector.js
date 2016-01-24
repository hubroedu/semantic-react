
let colorArray = [
  'black', 'yellow', 'green', 'blue',
  'orange', 'purple', 'red', 'teal'
];

Mixins.colorSelector = {
  propTypes: {
    color: React.PropTypes.oneOf(colorArray)
  },

  getColor () {
    let color = 'null';

    if (typeof this.props.color !== 'undefined') {

      if (colorArray.indexOf(this.props.color) !== -1) {
        color = this.props.color;
      }
    }

    return color;
  }
};
