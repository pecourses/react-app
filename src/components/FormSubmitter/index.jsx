import React, { Component } from 'react';
import CONSTANTS from '../../CONSTANTS';
import *as api from '../../api';

class FormSubmitter extends Component {
  onSubmit = (values) => {
    console.log(values);
    localStorage.setItem(CONSTANTS.SELECTED_USERS_KEY, JSON.stringify(values));
    
    // validate(values)
    // api.sendUsers(values);
  };

  render() {
    const { children } = this.props;
    return children(this.onSubmit);
  }
}

export default FormSubmitter;
