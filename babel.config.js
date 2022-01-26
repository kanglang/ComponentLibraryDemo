/*
 * @Author: kanglang
 * @Date: 2022-01-25 11:44:41
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 15:00:13
 * @Description: 解释器配置
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'], // 表示哪个目录开始设置绝对路径
        alias: {
          // 别名的配置
          '@/common': './js/common',
          '@/styles': './js/styles',
          '@/images': './js/images',
        },
      },
    ],
  ],
};
