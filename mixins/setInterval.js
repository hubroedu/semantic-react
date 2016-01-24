Mixins.setInterval = {
  componentWillMount () {
    this.intervals = [];
  },
  setInterval () {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount () {
    this.intervals.forEach(clearInterval);
  },
  stopIntervals () {
    this.intervals.forEach(clearInterval);
  }
};