/*
 * @Author: kanglang
 * @Date: 2020-10-29 14:38:11
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 14:18:27
 * @Description: 欢迎/引导页
 */

import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { msg } from '@/common';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      msg.emit('router: reset', {
        routeName: 'Tab',
      });
    }, 1000);

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>欢迎使用本软件</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
});
