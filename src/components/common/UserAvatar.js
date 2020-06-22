import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import spacing from '../../themes/spacing';
import colors from '../../themes/colors';

const UserAvatar = ({showStatus, imageUrl, source, size}) => {
  let extraStyles = null;
  if (size) {
    extraStyles = {width: size, height: size, borderRadius: size / 2};
  }
  return (
    <View style={[styles.container, extraStyles]}>
      <Image
        style={[styles.image, extraStyles]}
        source={
          source
            ? source
            : {
                uri: imageUrl
                  ? imageUrl
                  : 'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              }
        }
      />
      {showStatus && <View style={styles.status} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  status: {
    position: 'absolute',
    right: -spacing(0),
    top: -spacing(1),
    zIndex: 2,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: colors.blue,
    borderWidth: 2,
    borderColor: colors.black,
  },
});
export default UserAvatar;
