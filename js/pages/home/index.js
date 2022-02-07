/*
 * @Author: kanglang
 * @Date: 2022-01-25 12:35:04
 * @LastEditors: kanglang
 * @LastEditTime: 2022-02-07 14:36:51
 * @Description: 首页
 */

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { HomeIcon, HomedIcon } from '@/images';
import { mainThemeColor, px2dp } from '@/styles';
import { msg } from '@/common';
import OpacityButton from 'react-native-opacity-button';

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
      <View style={styles.container}>
        <OpacityButton
          style={styles.btnBox}
          txtStyle={styles.btnTip}
          text='基础容器组件'
          onPress={() => {
            this.goToComponents('BasicLayoutDemo')
          }}
        />
        <OpacityButton
          style={styles.btnBox}
          txtStyle={styles.btnTip}
          text='加载器loading'
          onPress={() => {
            this.goToComponents('LoadingDemo')
          }}
        />
        <OpacityButton
          style={styles.btnBox}
          txtStyle={styles.btnTip}
          text='自定义按钮'
          onPress={() => {
            this.goToComponents('CustomButtonDemo')
          }}
        />
        <OpacityButton
          style={styles.btnBox}
          txtStyle={styles.btnTip}
          text='短信倒计时'
          onPress={() => {
            this.goToComponents('SenondCountdownDemo')
          }}
        />

      </View>
    );
  }

  goToComponents = (routeName) => {
    msg.emit('router: goToNext', {
      routeName
    })
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: px2dp(100),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBox: {
    backgroundColor: mainThemeColor,
    marginRight: px2dp(16),
    marginBottom: px2dp(16),
  },
  btnTip: {
    color: '#FFFFFF',
    fontSize: px2dp(28)
  }
});


