import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Form = class extends React.Component {
  handleSubmit (e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.preventDefault();
    
    if (this.props.onSubmit) {
      this.props.onSubmit(e);
    }
    
    return false;
  }
  
  render () {
    let {
      children,
      className,
      onSubmit,
      ...others
    } = this.props;
    
    return (
      <form
        {...others}
        onSubmit={this.handleSubmit}
        className={this.getClasses("ui", "form")}>
        
        {children}
      </form>
    );
  }
};

Form = classGenerator(Form);

export default Form;
