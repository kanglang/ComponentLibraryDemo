/*
 * @Author: wangtao
 * @Date: 2020-07-11 07:16:44
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 14:23:29
 * @Description: 主入口
 */

import React, {Component} from 'react';
import {
  View,
  StatusBar,
  InteractionManager,
  TextInput,
  Text,
  Platform,
} from 'react-native';

import {NavigationActions, StackActions} from 'react-navigation';
import {msg, Tip} from '@/common';
import {AppContainer} from './router';


TextInput.defaultProps = {
  ...TextInput.defaultProps,
  allowFontScaling: false,
  onFocus: () => StatusBar.setBarStyle('dark-content'),
};
Text.defaultProps = {...Text.defaultProps, allowFontScaling: false};
const defaultFontFamily = {
  color: '#333333',
  ...Platform.select({
    android: {fontFamily: ''},
  }),
};
const oldRender = Text.render;
Text.render = function (...args) {
  const origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [defaultFontFamily, origin.props.style],
  });
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 错误tip的显示状态
      isTipVisible: false,
      // tip的text
      isTipText: '',
      // tip的icon
      isTipIcon: '',
      // 登录框是否显示
      isLoginTipsShow: false,
      // 可交互弹框是否显示start
      isMessageBoxShow: false,
      isMessageBoxTitle: '',
      isMessageBoxText: '',
      isMessageBoxSecText: '',
      isMessageBoxOkText: '',
      isMessageBoxCancelText: '',
      isMessageBoxOkFn: null,
      isMessageBoxCancelFn: null,
      isMessageBoxImgSource: null,
      isHeaderCancel: false,
      isBgClick: true,
      isOkBtnBg: false,
      // 登录框是否显示end
      // 可交互弹框是否显示end

      // 可替换登录框是否显示start
      isMessageBoxBigShow: false,
      isMessageBoxBigText: '',
      isMessageBoxBigOkText: '',
      isMessageBoxBigOkFn: null,
      isMessageBoxBigImgSource: null,
      // 可替换登录框是否显示end
      // 需要主动关闭的弹框
      isSelfTipVisible: false,
      // 需要主动关闭的弹框文本
      isSelfTipVisibleText: '',
      // 需要主动关闭的弹框文本
      isSelfTipVisibleIcon: '',
      okBtnStyle: {},
      titleOpacity: 0,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this._register();
    });
  }

  componentWillUnmount() {
    this._unRegister();
  }

  render() {
    const {
      isTipText,
      isTipIcon,
      isTipVisible,
      isSelfTipVisible,
      isSelfTipVisibleIcon,
      isSelfTipVisibleText,
      titleOpacity,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        {this._renderStatusBar()}
        <View
          style={[
            {
              position: 'absolute',
              top: 0,
              height: '100%',
              width: '100%',
              backgroundColor: '#fff',
            },
            {
              opacity: titleOpacity,
            },
          ]}
        />
        <AppContainer
          ref={obj => {
            this.nav = obj;
          }}
        />
        <Tip
          modal={false}
          text={isTipText}
          icon={isTipIcon}
          visible={isTipVisible}
          onTipDisappear={this._handleTipDisappear}
        />
        {/* 上面的tip主要用于轻提示，自动会关闭，下面这种是主动关闭 */}
        {isSelfTipVisible && (
          <Tip
            modal
            time={false}
            visible
            icon={isSelfTipVisibleIcon}
            text={isSelfTipVisibleText}
          />
        )}
      </View>
    );
  }

  _renderStatusBar = () => {
    const {titleOpacity} = this.state;
    const backgroundColor = `rgba(0, 0, 0, ${titleOpacity})`;
    if (Platform.OS === 'ios') {
      return <StatusBar barStyle="dark-content" />;
    }
    if (Platform.OS === 'android') {
      return (
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle="dark-content"
          translucent
        />
      );
    }
    return null;
  };

  /**
   * 注册的事件
   * @private
   */
  _register = () => {
    msg.on('app:tip', this._handleAppTip); // 弹出tips提示
    msg.on('router: goToNext', this._goToNext); // 下一页
    msg.on('router: back', this._back); // 返回上一页
    msg.on('router: backToTop', this._backToTop); // 返回栈顶
    msg.on('router: backToLast', this._backToLast); // 返回路由末位
    msg.on('router: replace', this._replaceRoute); // 替换栈顶
    msg.on('router: reset', this._resetRoute); // 重置路由栈
    msg.on('router: setParams', this._setParams);
    msg.on('router: refresh', this._refresh); // 刷新当前页(栈顶)
    msg.on('router: refreshRoute', this._refreshRoute); // 刷新指定页面
    msg.on('router: refreshRoutes', this._refreshRoutes); // 刷新指定多个页面
  };

  /**
   * 取消注册的事件
   * @private
   */
  _unRegister = () => {
    msg.off('app:tip', this._handleAppTip);
    msg.off('router: goToNext', this._goToNext);
    msg.off('router: back', this._back);
    msg.off('router: backToTop', this._backToTop);
    msg.off('router: backToLast', this._backToLast);
    msg.off('router: replace', this._replaceRoute);
    msg.off('router: reset', this._resetRoute);
    msg.off('router: setParams', this._setParams);
    msg.off('router: refresh', this._refresh);
    msg.off('router: refreshRoute', this._refreshRoute);
    msg.off('router: refreshRoutes', this._refreshRoutes);
  };

  /**
   * 跳转下一路由
   * @param route
   * @private
   */
  _goToNext = route => {
    if (__DEV__) {
      console.log('goToNext.....', route);
    }
    const {routeName, ...others} = route;

    const navigateAction = NavigationActions.navigate({
      routeName,
      params: others,
    });
    this.nav.dispatch(navigateAction);
  };

  /**
   * 返回
   * @param route
   * @private
   */
  _back = route => {
    if (__DEV__) {
      console.log('back.....', route);
    }
    let backAction = NavigationActions.back();
    if (route) {
      const {key} = route;
      if (__DEV__) {
        console.log('key...', key);
      }
      backAction = NavigationActions.back({
        key,
      });
    }
    if (__DEV__) {
      console.log('backAction...', backAction);
    }
    this.nav.dispatch(backAction);
  };

  /**
   * 返回路由首位
   * @private
   */
  _backToTop = () => {
    const {routes} = this.nav.state.nav;
    if (__DEV__) {
      console.log('backToTop...', routes);
    }
    this.nav.dispatch({
      type: 'backToTop',
    });
  };

  /**
   * 返回路由末位
   * @private
   */
  _backToLast = () => {
    if (__DEV__) {
      console.log('backToLast----->');
    }
    const {routes} = this.nav.state.nav;
    this._back(routes[routes.length - 1]);
  };

  /**
   * 替换路由
   * @param route
   * @private
   */
  _replaceRoute = route => {
    if (__DEV__) {
      console.log('replace router---->', route);
    }
    this.nav.dispatch({
      type: 'replace',
      ...route,
    });
  };

  /**
   * 重置路由
   * @param route
   * @private
   */
  _resetRoute = route => {
    if (__DEV__) {
      console.log('replace router---->', route);
    }
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: route.routeName}), // 要跳转到的页面名字
      ],
    });

    this.nav.dispatch(resetAction);
  };

  /**
   * 刷新当前页(栈顶)
   * @private
   */
  _refresh = () => {
    this.nav.dispatch({type: 'refresh'});
  };

  /**
   * 刷新指定页面
   * @private
   */
  _refreshRoute = route => {
    this.nav.dispatch({
      type: 'refreshRoute',
      routeName: route.routeName,
    });
  };

  /**
   * 刷新指定多个页面
   * @private
   */
  _refreshRoutes = route => {
    this.nav.dispatch({
      type: 'refreshRoutes',
      routeNames: route.routeNames,
    });
  };

  /**
   * 设置参数
   * @param params
   * @private
   */
  _setParams = params => {
    const {routes} = this.nav.state.nav;
    if (__DEV__) {
      console.log('params...', params);
      console.log('backToTop...', routes);
    }

    let {key} = routes[routes.length - 1];

    // 取最后一个路由
    const route = routes[routes.length - 1];
    // 如果是Tab，需要把params设置到对应的子路由上
    if (route.routeName === 'Tab') {
      const subIndex = route.index;
      // route.routes[subIndex].params = params
      key = route.routes[subIndex].key;
    }

    if (__DEV__) {
      console.log('key...', key);
    }
    const setParamsAction = NavigationActions.setParams({
      params,
      key,
    });
    this.nav.dispatch(setParamsAction);
  };

  /**
   * 处理Tip
   */
  _handleAppTip = ({text, icon, time = 2000}) => {
    this.setState({
      isTipVisible: true,
      isTipText: text,
      isTipIcon: icon,
      time,
    });
  };
}
