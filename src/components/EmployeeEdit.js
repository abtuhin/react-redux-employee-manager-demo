import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{

    constructor(props){
      super(props);
      this.state = {
        showModal: false
      }
    }

    componentWillMount(){
      _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({prop, value});
      });
    }

    onButtonPress = () => {
      const {name, phone, shift} = this.props;
      this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress = () => {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is ${shift}`)
    }

    onAccept = () => {
      const {uid} = this.props.employee;
      this.props.employeeDelete({ uid });
    }

    onDecline = () => {
      this.setState({showModal: false});
    }

    render(){
      return (
        <Card>
          <EmployeeForm />
          <CardSection>
              <Button
                text="Update"
                onPress={this.onButtonPress}
              />
          </CardSection>

          <CardSection>
              <Button text="Text Schedule" onPress={this.onTextPress}/>
          </CardSection>

          <CardSection>
            <Button text="Fire Employee" onPress={() => this.setState({showModal: !this.state.showModal})}/>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept}
            onDecline={this.onDecline}
          >
            Are you sure want to delete {this.props.name} ?
          </Confirm>
        </Card>
      );
    }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
