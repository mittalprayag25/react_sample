import React, { Component } from 'react';

const tabs = (label) => {
  return (
    <div>
      {label.name}
    </div>
  );
};

class tabLabels extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      label: [{
        name: 'Login'
      },
      {
        name: 'Signup'
      }]
    };
  }

  render() {
    return tabs(this.state.label);
  }
}


export default tabLabels;
