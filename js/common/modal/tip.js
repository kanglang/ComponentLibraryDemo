/*
 * @Author: wangtao
 * @Date: 2020-06-29 11:01:03
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 13:16:31
 * @Description: tip组件
 */

import React, {PureComponent} from 'react';

import {View, Text, Image, StyleSheet, BackHandler} from 'react-native';

import Overlay from './overlay';
import Loading from '../loading';

const noop = () => {};

export default class Tip extends PureComponent {
  static defaultProps = {
    // 是否显示
    visible: false,
    // 显示的消息的内容
    text: '',
    // 是否模态
    modal: false,
    // 消失时间 当time=false时不限时间
    time: 2000,
    // tip消失后的callback
    onTipDisappear: noop,
    // 提示图标，目前仅支持success和warning，其他需传入icon图片
    icon: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    // 如果当前是显示状态
    // if (this.state.visible) {
    //   //默认2s后关闭
    //   setTimeout(() => {
    //     this.setState({
    //       visible: false
    //     });

    //     this.props.onTipDisappear();
    //   }, this.props.time);
    // }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
  }

  _onBackAndroid = () => {
    if (this.props.modal && this.props.visible) {
      return true;
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      // 如果当前的属性为显示状态，则立刻去显示
      this.setState({
        visible: true,
      });

      if (this.props.time) {
        // 默认2s后关闭
        setTimeout(() => {
          this.setState({
            visible: false,
          });

          this.props.onTipDisappear();
        }, this.props.time);
      }
    }
  }

  render() {
    // 如果不现实直接remove掉
    if (!this.state.visible) {
      return null;
    }
    return (
      <Overlay style={[this.props.style]} modal={this.props.modal}>
        <View style={[styles.tip, this.props.modal && styles.bgw]}>
          {this._renderIcon()}
          {this.props.text ? (
            <Text
              style={[styles.text, this.props.modal && styles.iconText]}
              allowFontScaling={false}
              numberOfLines={3}>
              {this.props.text}
            </Text>
          ) : null}
        </View>
      </Overlay>
    );
  }

  _renderIcon() {
    if (this.props.icon === 'success') {
      return <Image style={styles.icon} source={require('./img/ok.png')} />;
    }
    if (this.props.icon === 'warning') {
      return (
        <Image style={styles.icon} source={require('./img/warning.png')} />
      );
    }
    if (this.props.icon === 'pay') {
      return <Image style={styles.icon} source={require('./img/pay.png')} />;
    }
    if (this.props.icon === 'loading') {
      return <Loading />;
    }
    if (this.props.icon) {
      return <Image style={styles.icon} source={this.props.icon} />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  tip: {
    // flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 55,
    height: 55,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
  bgw: {
    backgroundColor: 'rgba(51, 50, 50, 0.9)',
    borderRadius: 8,
    width: 130,
    height: 100,
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15,
  },
  iconText: {
    color: '#eee',
    fontSize: 14,
  },
});
