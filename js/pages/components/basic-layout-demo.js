/*
 * @Author: kanglang
 * @Date: 2022-01-25 16:29:11
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 17:24:07
 * @Description: 基础组件演示
 */

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Basiclayout from 'react-native-basiclayout';
import { mainThemeColor, px2dp } from '@/styles';


export default class BasicLayoutDemo extends Component {
    render() {
        return (
            <Basiclayout
                isScroll
                style={{ flex: 1, backgroundColor: '#FFF', padding: 16 }}
            >
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <TouchableOpacity
                    style={styles.btnBox}
                    onPress={() => {
                        alert('可正常点击')
                    }}
                >
                    <Text style={styles.btnTip}>点击</Text>
                </TouchableOpacity>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
                <Text>这里是容器内容</Text>
            </Basiclayout>
        );
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


