import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Touchable from 'react-native-platform-touchable';
import Text from '../../components/common/Text';
import colors from '../../themes/colors';
import commonStyle from '../../themes/commonStyle';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [focused, setFocused] = useState({email: false, password: false});
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.content}>
        <TextInput
          style={[
            styles.inputStyle,
            focused.email ? styles.focusedStyle : null,
          ]}
          onChangeText={email => setForm({...form, email})}
          placeholder="Enter email"
          placeholderTextColor={'rgba(255,255,255,0.8)'}
          keyboardType="email-address"
          value={form.email}
          onFocus={() => setFocused({...focused, email: true})}
          onBlur={() => setFocused({...focused, email: false})}
        />

        <TextInput
          style={[
            styles.inputStyle,
            focused.password ? styles.focusedStyle : null,
          ]}
          onChangeText={password => setForm({...form, password})}
          placeholder="Enter password"
          secureTextEntry
          placeholderTextColor={'rgba(255,255,255,0.8)'}
          value={form.password}
          onFocus={() => setFocused({...focused, password: true})}
          onBlur={() => setFocused({...focused, password: false})}
        />
        <Touchable style={[styles.loginButton]}>
          <Text bold style={styles.loginText}>
            Login with email
          </Text>
        </Touchable>

        <Text
          style={{marginBottom: 16, textAlign: 'center', fontSize: 20}}
          bold>
          OR
        </Text>

        <Touchable style={[styles.loginButton, styles.fbButton]}>
          <Text style={styles.loginText} bold>
            Login with Facebook
          </Text>
        </Touchable>

        <Touchable style={[styles.loginButton, styles.googleButton]}>
          <Text style={styles.loginText} bold>
            Login with Google
          </Text>
        </Touchable>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.black,
  },
  content: {
    padding: 16,
    justifyContent: 'center',

    flex: 1,
  },
  inputStyle: {
    ...commonStyle.textNormal,
    height: 48,
    width: '100%',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    marginBottom: 20,
  },
  focusedStyle: {
    borderWidth: 2,
    borderColor: colors.blue,
  },
  loginButton: {
    width: '100%',
    height: 48,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 16,
  },

  loginText: {
    fontSize: 18,
  },

  fbButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default Login;
