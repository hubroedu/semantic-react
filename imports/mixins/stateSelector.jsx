import React, {PropTypes} from "react";

const stateSelector = (Inner) => class extends React.Component {

  getDisabled () {
    let disabled = false;

    if (typeof this.props.disabled !== 'undefined') {
      disabled = this.props.disabled;
    }

    return disabled;
  }

  getActive () {
    let active = false;

    if (typeof this.props.active !== 'undefined') {
      active = this.props.active;
    }

    return active;
  }

  getLoading () {
    let loading = false;

    if (typeof this.props.loading !== 'undefined') {
      loading = this.props.loading;
    }

    return loading;
  }

  getFocus () {
    let focus = false;

    if (typeof this.props.focus !== 'undefined') {
      focus = this.props.focus;
    }

    return focus;
  }

  getError () {
    let error = false;

    if (typeof this.props.error !== 'undefined') {
      error = this.props.error;
    }

    return error;
  }

  getCompleted () {
    let completed = false;

    if (typeof this.props.completed !== 'undefined') {
      completed = this.props.completed;
    }

    return completed;
  }

  getReadOnly () {
    let readOnly = false;

    if (typeof this.props.readOnly !== 'undefined') {
      readOnly = this.props.readOnly;
    }

    return readOnly;
  }

  getSuccess () {
    let success = false;

    if (typeof this.props.success !== 'undefined') {
      success = this.props.success;
    }

    return success;
  }

  getWarning () {
    let warning = false;

    if (typeof this.props.warning !== 'undefined') {
      warning = this.props.warning;
    }

    return warning;
  }
  
  render () {
    return <Inner
      {...this.props}
      getDisabled={this.getDisabled.bind(this)}
      getActive={this.getActive.bind(this)}
      getLoading={this.getLoading.bind(this)}
      getFocus={this.getFocus.bind(this)}
      getError={this.getError.bind(this)}
      getCompleted={this.getCompleted.bind(this)}
      getReadOnly={this.getReadOnly.bind(this)}
      getSuccess={this.getSuccess.bind(this)}
      getWarning={this.getWarning.bind(this)} />;
  }
};

stateSelector.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  focus: PropTypes.bool,
  error: PropTypes.bool,
  completed: PropTypes.bool,
  readOnly: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool
};

export default stateSelector;
