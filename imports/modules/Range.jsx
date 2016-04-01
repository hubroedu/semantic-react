import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";
import { Grid, Column } from "../collections/grid";

const Range = class extends React.Component {
  
  constructor (props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
    
    this.state = {
      value: this.props.defaultValue || 0
    };
  }
  
  onChange (e) {
    let value = +this.refs.range.value;
    let {name, onChange} = this.props;
    
    this.setState({ value });
    
    if (onChange) {
      onChange(name, value);
    }
  }
  
  render () {
    let {
      className,
      formatter,
      active, success, warning, error, disabled,
      ...other
    } = this.props;

    let state = {
      active: this.props.getActive(),
      success: this.props.getSuccess(),
      warning: this.props.getWarning(),
      error: this.props.getError(),
      disabled: this.props.getDisabled()
    };

    return (
      <Grid className="two column">
        <Column>
          <input
            {...other}
            type="range"
            onChange={this.onChange}
            className={this.props.getClasses("ui range", state)}
            ref="range" />
        </Column>
        <Column>
          <div className="label">
            {formatter ? formatter(this.state.value) : this.state.value}
          </div>
        </Column>
      </Grid>
    );
  }
};

export default classGenerator(stateSelector(Range));
