import _ from "lodash";
import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import { classGenerator, stateSelector } from "../mixins";
import Unit from "../common/Unit.jsx";

const Checkbox = class extends React.Component {

  componentDidMount () {
    let opts = {};
    
    if (typeof this.props.init !== "undefined") {
      if (this.props.init === false) {
        return;
      }
      
      if (typeof this.props.init === "object") {
        opts = _.extend(opts, this.props.init);
      }
    }
    
    if (this.props.onChange) {
      opts.onChange = (value, label, el) => {
        let name = this.props.name;
        const node = $(ReactDOM.findDOMNode(this));
        if (!name) {
          name = node.find("input").attr("name");
        }
        const checked = node.find("input").is(":checked");

        this.props.onChange(name, checked, el);
      };
    }
    console.log("CHECKBOX OPS", opts);
    // $(this.refs.checkbox).checkbox();
    $(this.refs.checkbox).checkbox(opts);
    
    if (this.props.checked) {
      $(ReactDOM.findDOMNode(this)).checkbox("set checked");
    } else {
      $(ReactDOM.findDOMNode(this)).checkbox("set unchecked");
    }
  }
  
  

  render () {
    let {className, color, type, disabled, readOnly, label, checked, name, ...other} = this.props;
    
    if (this.props.children) {
      return (
        <div {...other}
          ref="checkbox"
          className={this.props.getClasses("ui", "checkbox")}
          color="null"
          type="div"
          disabled={this.props.getDisabled()}
          readOnly={this.props.getReadOnly()}>
          {this.props.children}
        </div>
      );
    }
    
    return (
      <div {...other}
        ref="checkbox"
        className={this.props.getClasses("ui", "checkbox")}
        color="null"
        disabled={this.props.getDisabled()}
        readOnly={this.props.getReadOnly()}>
        <input type="checkbox" name={name} />
        <label>{label}</label>
      </div>
    );
  }
};

export default classGenerator(stateSelector(Checkbox));
