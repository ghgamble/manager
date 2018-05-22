import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
      componentWillMount() {
            const config = {
                  apiKey: 'AIzaSyDMN5uBePBBpjzQU7byoQYY_YPxdS_Vjyw',
                  authDomain: 'manager-67ebc.firebaseapp.com',
                  databaseURL: 'https://manager-67ebc.firebaseio.com',
                  projectId: 'manager-67ebc',
                  storageBucket: 'manager-67ebc.appspot.com',
                  messagingSenderId: '827053081374'
            };
            firebase.initializeApp(config);
      }
      render() {
            const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
            return (
                  <Provider store={store}>
                        <View>
                              <LoginForm />
                        </View>
                  </Provider>
            );
      }
}

export default App;
