import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount(){
      const config = {
      apiKey: "AIzaSyD0byIAI67cjho1o4TXsqjqIhmoRsNSmbw",
      authDomain: "manager-f005c.firebaseapp.com",
      databaseURL: "https://manager-f005c.firebaseio.com",
      projectId: "manager-f005c",
      storageBucket: "manager-f005c.appspot.com",
      messagingSenderId: "875104138635"
    };
    firebase.initializeApp(config);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
