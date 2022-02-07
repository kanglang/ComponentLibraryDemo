/*
 * @Author: kanglang
 * @Date: 2022-01-25 16:29:11
 * @LastEditors: kanglang
 * @LastEditTime: 2022-02-07 16:08:48
 * @Description: 短信验证码-读秒倒计时
 */

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Basiclayout from 'react-native-basiclayout';
import { mainThemeColor, px2dp } from '@/styles';
import SecondCountdown from 'react-native-second-countdown';
import { msg } from '@/common';


export default class SenondCountdownDemo extends Component {

    render() {
        return (
            <Basiclayout
                style={{ flex: 1, backgroundColor: '#FFF', padding: 16 }}
            >
                <SecondCountdown
                    id='test'
                    style={{borderColor: '#ccc'}}
                    count={10}
                    pressAction={this.sendMsgCode}
                    changeWithCount={(count) => `${count}秒后重试`}
                />
            </Basiclayout>
        );
    }

    sendMsgCode = (startCountDownCallback) => {
        startCountDownCallback(() => {
            // 这里执行发送短信验证码
            msg.emit('app:tip', { text: '发送短信验证码，开始倒计时' });
        });
    }
}
const styles = StyleSheet.create({
    btnBox: {
        width: px2dp(300),
        height: px2dp(80),
        justifyContent: 'center',
        alignItems: 'center',
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


