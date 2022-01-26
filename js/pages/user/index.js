/*
 * @Author: kanglang
 * @Date: 2022-01-25 12:33:34
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 14:52:55
 * @Description: 用户中心
 */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { UserIcon, UseredIcon } from '@/images';

export default class User extends Component {
  static navigationOptions = () => ({
    title: '用户',
    tabBarIcon: ({ focused }) => (
      <Image
        source={focused ? UseredIcon : UserIcon}
        style={{ width: 24, height: 24 }}
      />
    ),
  });
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>用户中心</Text>
      </View>
    );
  }
}
