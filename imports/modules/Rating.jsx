import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Rating = class extends React.Component {
  render () {
    let {className, rating, maxRating, ...other} = this.props;

    return (
      <div {...other}
        className={this.props.getClasses("ui", "rating")}
        data-rating={rating}
        data-max-rating={maxRating}
        ref="rating">
        {this.props.children}
      </div>
    );
  }

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
};

export default classGenerator(Rating);
