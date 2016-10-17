import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";
import { Grid, Column } from "../collections/grid";
import Input from "../elements/Input.jsx";

const Range = class extends React.Component {
  
  constructor (props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
    
    this.state = {
      value: this.props.defaultValue || this.props.min || 0
    };
  }
  
  onChange (e) {
    const type = $(e.target).attr("type");
    const {name, onChange} = this.props;
    let value;
    
    if (type === "range") {
      value = +this.refs.range.value;
    } else {
      value = +this.refs.numput.value;
    }
    
    value = Math.min(this.props.max, Math.max(value, this.props.min));
    
    this.refs.numput.value = value;
    this.refs.range.value = value;
    
    this.setState({ value });
    
    if (onChange) {
      onChange(name, value);
    }
  }
  
  render () {
    let {
      className,
      formatter,
      name,
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
    
    const { value } = this.state;
    
    const fillWidth = (~~(100 * (value - this.props.min) / (this.props.max - this.props.min)));

    return (
      <Grid className="three column range-grid">
        <Column>
          <input
            {...other}
            type="range"
            onChange={this.onChange}
            className={this.props.getClasses("ui range", state)}
            defaultValue={value}
            ref="range" />
          <div className="range-gfx">
            <div className="range-fill"
              style={{ width: fillWidth + "%" }}></div>
            <div className="range-bg"></div>
          </div>
        </Column>
        <Column>
          <input
            {...other}
            ref="numput"
            name={name}
            type="number"
            defaultValue={value}
            onChange={this.onChange} />
            
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
