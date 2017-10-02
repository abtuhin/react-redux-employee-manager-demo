import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange=(text)=>{
    this.props.emailChanged(text);
  }

  onPasswordChange = (password) => {
    this.props.passwordChanged(password);
  }

  onButtonPress = () => {
    const {email, password} = this.props;
    this.props.loginUser({email,password});
  }

  renderButton = () => {
    if(!this.props.loading)
    return (
      <Button text="Login" onPress={this.onButtonPress}/>
    );
    return <Spinner size="large" />
  }

  render(){
    return (
      <Card>
        <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
            />
        </CardSection>
        <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText = {this.onPasswordChange}
              value={this.props.password}
            />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle:{
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }
}


// responsible for auth piece of state of store from AuthReducer
const mapStateToProps = ({ auth }) => {
  const {email,password,error,loading} = auth;
  return {
    email: email,
    password: password,
    error: error,
    loading: loading
  }
}

export default connect(mapStateToProps,{
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
