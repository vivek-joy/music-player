import React from 'react';
import {Text, StyleSheet} from 'react-native';
import commonStyle from '../../themes/commonStyle';

export default props => {
  const {children, style, bold, ...rest} = props;

  let textStyles = commonStyle.textNormal;

  if (bold) {
    textStyles = commonStyle.textBold;
  }

  if (style) {
    textStyles = [textStyles, style];
  }
  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};
