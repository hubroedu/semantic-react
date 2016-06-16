import _ from "lodash";
import React, {PropTypes} from "react";
import { classGenerator } from "../../mixins";

const isDefined = val => !_.isUndefined(val) && !_.isNull(val);

const RadioInput = class extends React.Component {
  render () {
    const {
      name,
      value,
      label,
      ...other
    } = this.props;
    
    return (
      <div className="field">
        <div className="ui radio checkbox">
          
          <input
            {...other}
            type="radio"
            className="hidden"
            value={value}
            name={name} />
          
          <label data-radio-name={name}>{label}</label>
        </div>
      </div>
    );
  }
};

export default classGenerator(RadioInput);
