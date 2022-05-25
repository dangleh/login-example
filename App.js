import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //* Xử lý khi click button
  const handleLogin = () => {
    if (!username.length > 0 || !password.length > 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập username và password');
    } else {
      Alert.alert('Kết quả', `username: ${username} - password: ${password}`);
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.loginTitle}>Login Example</Text>
      <TextInput
        value={username}
        placeholder="username"
        style={styles.textInput}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        value={password}
        placeholder="password"
        style={styles.textInput}
        onChangeText={text => setPassword(text)}
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  loginTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  textInput: {
    height: 50,
    width: '100%',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 100,
    padding: 5,
  },
  loginBtn: {
    height: 50,
    backgroundColor: 'blue',
    width: 100,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#FFF',
    fontSize: 18,
  },
});
