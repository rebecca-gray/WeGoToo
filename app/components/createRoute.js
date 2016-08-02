import React, { Component } from 'react'
import { View, StyleSheet, NavigatorIOS, Text, AlertIOS, TextInput, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  buttonText: {
    fontSize: 18,
    color: 'green',
    alignSelf: 'center'
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class createRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          create route
        </Text>
      </View>
      );
   }
}

module.exports =  createRoute;  
