/*
 * @Author: kanglang
 * @Date: 2022-01-25 12:35:04
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 16:33:51
 * @Description: 首页
 */

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { HomeIcon, HomedIcon } from '@/images';
import { mainThemeColor, px2dp } from '@/styles';
import { msg } from '@/common';

export default class Home extends Component {
  static navigationOptions = () => ({
    title: '首页',
    tabBarIcon: ({ focused }) => (
      <Image
        source={focused ? HomedIcon : HomeIcon}
        style={{ width: 24, height: 24 }}
      />
    ),
  });
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.btnBox}
          onPress={this.goToComponents}
        >
          <Text style={styles.btnTip}>基础容器组件</Text>
        </TouchableOpacity>
      </View>
    );
  }

  goToComponents = () => {
    msg.emit('router: goToNext', {
      routeName: 'BasicLayoutDemo'
    })
  }
}
const styles = StyleSheet.create({
  btnBox: {
    backgroundColor: mainThemeColor,
    paddingHorizontal: px2dp(16),
    paddingVertical: px2dp(8),
    borderRadius: px2dp(8)
  },
  btnTip: {
    color: '#FFFFFF',
    fontSize: px2dp(28)
  }
});


