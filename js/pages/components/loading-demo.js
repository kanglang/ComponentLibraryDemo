/*
 * @Author: kanglang
 * @Date: 2022-01-25 16:29:11
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-28 16:16:24
 * @Description: loading
 */

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Basiclayout from 'react-native-basiclayout';
import { mainThemeColor, px2dp } from '@/styles';
import Bestloading from 'react-native-bestloading';


export default class Loading extends Component {
    render() {
        return (
            <Basiclayout
                style={{ flex: 1, backgroundColor: '#FFF', padding: 16 }}
            >
                <Bestloading
                // isShowMC
                // loadText='保存中'
                // visible
                // indicatorColor='red'
                // iconStyle={{}}  // 与xmGif配合试用
                // xmGif={'加载gif'}
                // modalStyle={{backgroundColor:'gray'}}
                // textStyle={{color:'#ffffff'}}
                />
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


