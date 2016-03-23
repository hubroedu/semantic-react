import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Dropdown = class extends React.Component {
  componentDidMount () {
    let opts = {
      transition: "drop"
    };
    
    if (typeof this.props.init !== 'undefined') {
      if (this.props.init === false) {
        return;
      }
      
      if (typeof this.props.init === 'object') {
        opts = _.extend(opts, this.props.init);
      }
    }
    
    if (this.props.onChange) {
      opts.onChange = (value, label, el) => {
        let name = this.props.name;
        this.props.onChange(name, value, el);
      };
    }

    $(ReactDOM.findDOMNode(this)).dropdown(opts);
    
    if (this.props.defaultValue) {
      $(ReactDOM.findDOMNode(this)).dropdown("set selected", this.props.defaultValue);
    }
  }
  
  render () {
    let {
      className,
      color,
      type,
      error,
      disable,
      active,
      ...other
    } = this.props;

    if (this.getActive() || this.getDisabled()) {
      defaultClassName += ' simple';
    }
    
    return (
      <Unit {...other}
        className={this.getClasses("ui", "dropdown")}
        color="null"
        type="div"
        error={this.getError()}
        disable={this.getDisabled()}
        active={this.getActive()}>
        
        <input type="hidden" name={this.props.name} />
        <i className="dropdown icon"></i>
        <div className="default text">{this.props.default}</div>
        <div className="menu">
          {this.props.options.map((item, i) => {
            return <div key={i} className="item" data-value={item.value}>
              {item.name}
            </div>;
          })}
        </div>
      </Unit>
    );
  }
};

export default classGenerator(stateSelector(Dropdown));
