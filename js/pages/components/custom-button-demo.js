/*
 * @Author: kanglang
 * @Date: 2022-01-25 16:29:11
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-28 17:29:34
 * @Description: 自定义按钮demo
 */

import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Basiclayout from 'react-native-basiclayout';
import { mainThemeColor, px2dp } from '@/styles';
import OpacityButton from 'react-native-opacity-button';

export default class CustomButtonDemo extends Component {
    render() {
        return (
            <Basiclayout
                style={{ flex: 1, backgroundColor: '#FFF', padding: 16 }}
            >
                <OpacityButton
                    style={styles.btnBox}
                    txtStyle={styles.btnTip}
                    text='自定义按钮1'
                    onPress={() => {
                        alert('自定义按钮1')
                    }}
                />
            </Basiclayout>
        );
    }
}
const styles = StyleSheet.create({
    btnBox: {
        backgroundColor: mainThemeColor,
        marginRight: px2dp(16),
        marginBottom: px2dp(16),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: px2dp(20),
        paddingHorizontal: px2dp(32)
    },
    btnTip: {
        color: '#FFFFFF',
        fontSize: px2dp(28)
    }
});


