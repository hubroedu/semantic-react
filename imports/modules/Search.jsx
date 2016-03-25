import React, {PropTypes} from "react";
import { classGenerator, stateSelector } from "../mixins";

const Search = class extends React.Component {
  render () {
    let {className, color, type, active, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.props.getClasses("ui", "search")}
        color="null"
        type="div"
        loading={this.props.getLoading()}>
        {this.props.children}
      </Unit>
    );
  }

  componentDidMount () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(ReactDOM.findDOMNode(this)).search();
      } else {
        $(ReactDOM.findDOMNode(this)).search(this.props.init);
      }
    }
  }
};

export default classGenerator(stateSelector(Search));
