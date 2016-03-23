import React, {PropTypes} from "react";
import { classGenerator } from "../mixins";

let Flag = class extends React.Component {
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
        className={this.getClasses("flag", flag, variations)}
        type="icon"
        color="null">
      </Unit>
    );
  }
};

Flag = classGenerator(Flag);

export default Flag;
