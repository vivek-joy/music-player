import React, {useState} from 'react';
import {View, StyleSheet, TextInput, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Touchable from 'react-native-platform-touchable';
import Text from '../../components/common/Text';
import colors from '../../themes/colors';
import commonStyle from '../../themes/commonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import spacing from '../../themes/spacing';
const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [focused, setFocused] = useState({
    username: false,
    email: false,
    password: false,
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView contentContainerStyle={styles.content}>
        <TextInput
          style={[
            styles.inputStyle,
            focused.username ? styles.focusedStyle : null,
          ]}
          onChangeText={username => setForm({...form, username})}
          placeholder="Enter username"
          placeholderTextColor={'rgba(255,255,255,0.8)'}
          value={form.username}
          onFocus={() => setFocused({...focused, username: true})}
          onBlur={() => setFocused({...focused, username: false})}
        />
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
            Register with email
          </Text>
        </Touchable>

        <Text
          style={{marginBottom: spacing(4), textAlign: 'center', fontSize: 20}}
          bold>
          OR
        </Text>

        <Touchable>
          <View style={[styles.loginButton, styles.fbButton]}>
            <Icon
              name="facebook"
              color={colors.white}
              size={24}
              style={styles.iconStyle}
            />
            <Text style={styles.loginText} bold>
              Continue with Facebook
            </Text>
          </View>
        </Touchable>

        <Touchable>
          <View style={[styles.loginButton, styles.googleButton]}>
            <Icon
              name="google"
              color={colors.white}
              size={24}
              style={styles.iconStyle}
            />
            <Text style={styles.loginText} bold>
              Continue with Google
            </Text>
          </View>
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
    padding: spacing(4),
    justifyContent: 'center',

    flex: 1,
  },
  inputStyle: {
    ...commonStyle.textNormal,
    height: 48,
    width: '100%',
    paddingHorizontal: spacing(4),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    marginBottom: spacing(5),
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

    marginBottom: spacing(4),
  },

  loginText: {
    fontSize: 20,
  },

  fbButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: spacing(4),
    backgroundColor: colors.facebook,
    justifyContent: 'center',
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing(4),
    justifyContent: 'center',
    backgroundColor: colors.google,
  },
  iconStyle: {
    marginRight: spacing(4),
  },
});

export default Register;
