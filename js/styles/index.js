/*
 * @Author: wangtao
 * @Date: 2020-06-24 10:52:16
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 14:34:04
 * @Description: 主要与样式及适配相关
 */

import { Dimensions, Platform } from 'react-native';

const mainBgColorLightGray = '#F7F7F7'; // 主背景色 淡灰
const mainBgColorWhite = '#FFFFFF'; // 主背景色 白色
const mainThemeColor = '#09C15F'; // 主题色
const priceColor = '#FF1E19'; // 价格色 淡红
const fontColorBlack = '#313331'; // 字体色  黑色 一级
const fontColorDeepGray = '#626662'; // 字体色 深灰色 二级
const fontColorSecDeepGray = '#929993'; // 字体色 次深灰色  三级
const fontColorLightGray = '#C9CDCA'; // 字体色 浅灰色 四级
const splitLineColorLightGray = '#F0F0F0'; // 边框分割线色 浅灰色
const { width: screenWidth, height: screenHeight } = Dimensions.get('window'); // 屏幕宽高

const isAndroid = Platform.OS === 'android'; // 判断是否为安卓
const isIOS = Platform.OS === 'ios'; // 判断是否为iOS

// 添加pxToDp
// UI图设计基准大小
const uiWidthPx = 750;

function px2dp(uiElementPx) {
  if (screenWidth > screenHeight) {
    return (uiElementPx * screenHeight) / uiWidthPx;
  }
  return (uiElementPx * screenWidth) / uiWidthPx;
}

export {
  mainBgColorLightGray,
  mainBgColorWhite,
  priceColor,
  fontColorBlack,
  fontColorLightGray,
  mainThemeColor,
  fontColorDeepGray,
  fontColorSecDeepGray,
  isAndroid,
  isIOS,
  screenWidth,
  screenHeight,
  px2dp,
  splitLineColorLightGray,
};
