import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, TextInput, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Animated, {Easing} from 'react-native-reanimated';
import Touchable from 'react-native-platform-touchable';
import Text from '../../components/common/Text';
import colors from '../../themes/colors';
import commonStyle from '../../themes/commonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import spacing from '../../themes/spacing';

const {timing, Value, divide, interpolate} = Animated;

const Login = () => {
  const scrollY = useRef(new Value(120)).current;

  useEffect(() => {
    const config = {
      duration: 1000,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const animateScroll = timing(scrollY, config);
    animateScroll.start();
  }, []);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [focused, setFocused] = useState({email: false, password: false});
  const scrollOpacity = interpolate(scrollY, {
    inputRange: [0, 120],
    outputRange: [1, 0],
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.ScrollView
        keyboardShouldPersistTaps="always"
        style={{
          transform: [{translateY: scrollY}],
          opacity: scrollOpacity,
        }}
        contentContainerStyle={[styles.content]}>
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
              Login with Facebook
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
              Login with Google
            </Text>
          </View>
        </Touchable>
      </Animated.ScrollView>
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

export default Login;
