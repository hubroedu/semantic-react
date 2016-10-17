import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Rating = class extends React.Component {
  render () {
    let {className, rating, maxRating, ...other} = this.props;
    const name = this.props.name || "";
    
    return (
      <div {...other}
        key={name + maxRating}
        className={this.props.getClasses("ui", "rating")}
        ref="rating">
        {this.props.children}
      </div>
    );
  }
  
  initSemantic (opts = {}) {
    
    if (typeof this.props.init !== "undefined") {
      if (this.props.init === false) {
        return;
      }
    }
    
    if (this.props.onChange) {
      opts.onRate = (value) => {
        this.props.onChange(value);
      };
    }
    if (typeof this.props.clearable !== "undefined") {
      opts.clearable = this.props.clearable;
    }
    if (typeof this.props.rating !== "undefined") {
      opts.initialRating = this.props.rating;
    }
    if (typeof this.props.maxRating !== "undefined") {
      opts.maxRating = this.props.maxRating;
    }
    
    $(this.refs.rating).rating(opts);
  }

  componentDidMount () {
    this.initSemantic();
  }
  
  componentDidUpdate (oldProps) {
    this.initSemantic();
    const newProps = this.props;
    $(this.refs.rating).rating("setting", "initialRating", newProps.maxRating);
    $(this.refs.rating).rating("setting", "maxRating", newProps.maxRating);
  }
};

export default classGenerator(Rating);
