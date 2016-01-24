Rating = React.createClass({

  mixins: [Mixins.classGenerator],

  render () {

    let {className, rating, maxRating, ...other} = this.props;

    return (
      <div {...other}
        className={this.getClasses("ui", "rating")}
        data-rating={rating}
        data-max-rating={maxRating}
        ref="rating">
        {this.props.children}
      </div>
    );
  },

  componentDidMount () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.rating).rating();
      } else {
        $(this.refs.rating).rating(this.props.init);
      }
    }
  }
});
