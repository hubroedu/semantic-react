import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const Form = class extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
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
    const {
      children,
      className,
      onSubmit,
      ...others
    } = this.props;
    
    return (
      <form
        {...others}
        onSubmit={this.handleSubmit}
        className={this.props.getClasses("ui", "form")}>
        
        {children}
      </form>
    );
  }
};

export default classGenerator(Form);
