import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

const Flag = class extends React.Component {
  render () {
    let {
      className,
      type,
      flag,
      color,
      loading,
      size,
      disabled,
      ...other
    } = this.props;
    
    let variations = "";
    variations += loading ? "loading " : "";
    variations += disabled ? "disabled " : "";
    variations += size ? size + " " : "";
    
    return (
      <Unit {...other}
        className={this.props.getClasses("flag", flag, variations)}
        type="icon"
        color="null">
      </Unit>
    );
  }
};

export default classGenerator(Flag);
