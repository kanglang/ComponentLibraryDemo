/*
 * @Author: wangtao
 * @Date: 2020-07-24 20:06:36
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 14:36:54
 * @Description: file content
 */

import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { px2dp } from '@/styles';

export default class BackImage extends PureComponent { // 创建一个返回按钮的组件
  render() {
    const { icon } = this.props;
    return (
      <Image
        source={icon === 'white' ? require('./go-back-white.png') : require('./go-back.png')}
        style={{ width: px2dp(36), height: px2dp(36), }}
      />
    );
  }
}
