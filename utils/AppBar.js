// AppBar.js
import React from 'react';
import { View, Image } from 'react-native';

import headerImg from './../assets/app_bar_logo.png';

const AppBar = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
      <Image
        source={headerImg}
        style={{ width: 130, height: 25 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default AppBar;
