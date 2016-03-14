Mixins.classGenerator = {
  propTypes: {
    className: React.PropTypes.string
  },
  
  getClasses (defaultClass, addClassName, semanticClass) {
    let props = this.props;
    let classes = defaultClass;
    
    classes += props.className ? ` ${props.className} `: "";
    
    if (props.color) {
      classes += " " + props.color;
    }
    
    if (props.size) {
      classes += " " + props.size;
    }

    if (typeof addClassName !== 'undefined') {
      if (typeof addClassName === 'object') {
        classes += ' ' + classSet(addClassName);
      } else {
        classes += ' ' + addClassName;
      }
    }
    
    if (typeof semanticClass !== 'undefined') {
      classes += ` ${semanticClass}`;
    }
    
    return classes;
  },
};