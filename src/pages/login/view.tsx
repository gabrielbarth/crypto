import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

import { useLoginViewModel } from './view.model';

export function LoginScreen() {
  const { username, setUsername, handleLogin } = useLoginViewModel();
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        returnKeyType="send"
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        onSubmitEditing={handleLogin}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 40,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    alignSelf: 'stretch',
    height: 45,
    padding: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#222222',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 16,
  },
});
