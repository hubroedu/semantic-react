import React, {PropTypes} from "react";

const Unit = class extends React.Component {

  propTypes: {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  render () {
    let {
      className, type, color, value,
      disabled, active, loading,
      ...other
    } = this.props;

    switch (type) {
    case 'link':
      return (
        <a {...other}
          className={this._generateClassName()}
          data-value={value}>
          {this.props.children}
        </a>
      );
      
    case 'button':
      return (
        <button {...other}
          className={this._generateClassName()}
          data-value={value}>
          {this.props.children}
        </button>
      );

    case 'icon':
      return (
        <i {...other}
          className={this._generateClassName()}
          data-value={value}>
          {this.props.children}
        </i>
      );

    case 'img':
      return (
        <img {...other}
          className={this._generateClassName()}>
          {this.props.children}
        </img>
      );

    case 'div':
    default:
      return (
        <div {...other}
          className={this._generateClassName()}
          data-value={value}>
          {this.props.children}
        </div>
      );
    }
  }

  _generateClassName () {
    let className = this.props.className;

    if (this.props.color !== 'null') {
      className += ' ' + this.props.color;
    }

    className += ' ' + classNames({
      'disabled': this.props.disabled,
      'active': this.props.active,
      'loading': this.props.loading,
      'focus': this.props.focus,
      'error': this.props.error,
      'completed': this.props.completed,
      'read-only': this.props.readOnly
    });

    return className;
  }
};

Unit = classGenerator(Unit);

export default Unit;
