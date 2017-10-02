import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeeFetch();
  }
  render(){
    return (
      <View>
        <Text>list of emp</Text>
        <Text>list of emp</Text>
        <Text>list of emp</Text>
        <Text>list of emp</Text>
        <Text>list of emp</Text>
      </View>
    );
  }
}

export default connect(null, {employeeFetch})(EmployeeList);
