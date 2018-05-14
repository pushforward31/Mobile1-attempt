

import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250

  }
})

class createProfilemodule extends React.Component {
render(){




  
  return (
    <View style={styles.container}>
      
      <Text>Email:</Text>
      <TextInput style={styles.input} />
      <Text>Phone:</Text>
      <TextInput style={styles.input} />
      <Text>First:</Text>
      <TextInput style={styles.input} />
      <Text>Last:</Text>
      <TextInput style={styles.input} />
      <Text>ZipCode:</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

}

export default createProfilemodule;

