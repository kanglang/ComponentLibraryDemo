
/*
 * @Author: kanglang
 * @Date: 2022-01-25 12:33:24
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-28 17:19:20
 * @Description: 路由管理文件
 */
import React from 'react';
import { PixelRatio, Platform } from 'react-native';

import { createAppContainer, NavigationActions } from 'react-navigation';
import {
  createStackNavigator,
  StackViewStyleInterpolator,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BackImage } from '@/common';
import { mainThemeColor } from '@/styles';
import Welcome from './pages/welcome';
import Home from './pages/home';
import User from './pages/user';
import BasicLayoutDemo from './pages/components/basic-layout-demo';
import LoadingDemo from './pages/components/loading-demo';
import CustomButtonDemo from './pages/components/custom-button-demo';

const isAndroid = Platform.OS === 'android';

// header为空的属性
const emptyHeader = {
  header: null,
  navigationOptions: {
    headerShown: false,
    headerBackTitle: null,
  },
};
// 标题局中
const titleCenter = {
  headerTitleStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    paddingRight: isAndroid ? 56 : 0,
    fontSize: 18,
  },
};

// 适用于ios和安卓两个平台的底部导航栏
const TabNavigator = createBottomTabNavigator(
  {
    // 首页
    Home: {
      screen: Home,
    },
    User: {
      screen: User,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      allowFontScaling: false,
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#fff',
      activeTintColor: mainThemeColor,
      style: {
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#F0EFEF',
      },
    },
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
  },
);
// 路由页面
// 在新的页面被放入栈顶之后，StackNavigator 给你的应用程序提供了切换页面的方法。
// 在 iOS 与 Android 平台上，StackNavigator 默认对应着它们各自的风格，
// 比如在 iOS 上新的页面从右侧滑入，而在 Android 上则是从底部淡入。
const AppNavigator = createStackNavigator(
  {
    // 首页tab页面
    Tab: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
        headerBackTitle: null,
      },
    },
    Welcome: {
      screen: Welcome,
      ...emptyHeader,
    },
    BasicLayoutDemo: {
      screen: BasicLayoutDemo,
      navigationOptions: {
        headerTitle: '基础容器组件',
        ...titleCenter,
      }
    },
    LoadingDemo: {
      screen: LoadingDemo,
      navigationOptions: {
        headerTitle: '加载器',
        ...titleCenter,
      }
    },
    CustomButtonDemo: {
      screen: CustomButtonDemo,
      navigationOptions: {
        headerTitle: '自定义按钮',
        ...titleCenter,
      }
    },

  },
  {
    initialRouteName: 'Welcome',

    transitionConfig: () => ({
      // 将安卓的跳转动画改成iOS
      // 只要修改最后的forVertical就可以实现不同的动画了。
      // 从右向左：forHorizontal   从下向上：forVertical 安卓那种的从下向上：forFadeFromBottomAndroid； 无动画：forInitial
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        // backgroundColor: '#f4511e',
        elevation: 0,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#F0EFEF',
        height: 50,
        marginTop: isAndroid && 45,
        paddingBottom: isAndroid ? 2 : 0,
      },
      headerTintColor: '#000',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
      headerBackImage: <BackImage />,
      headerLeftContainerStyle: {
        paddingLeft: isAndroid ? 0 : 18,
      },
    },
    // //  指定标题栏的渲染方式
    // // screen：每个页面都有各自的标题栏，并且伴随着页面切换一起淡入淡出。这是 Android 上的常见模式。
    headerMode: 'screen',
    // // 用于屏幕的默认导航选项
    // navigationOptions: {
    //     headerBackTitle: null,
    //     header: null
    // },
    //  当切换动画结束时调用的函数
    onTransitionEnd: async () => { },
  },
);

export const AppContainer = createAppContainer(AppNavigator);

const defaultGetStateForAction = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === 'replace') {
    // 替换当前路由,如果当前路由存在栈中,则删除栈中存在的路由
    let routes = [];
    const index = action.index || 1;
    if (state.routes.length > 1) {
      routes = state.routes.filter(r => r.routeName !== action.routeName);
      routes = routes.slice(0, routes.length - index);
      const { routeName, ...other } = action;
      const route = {
        routeName,
        params: other,
        key: Math.random().toString(),
      };
      routes.push(route);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return defaultGetStateForAction(NavigationActions.init());
  }
  if (state && action.type === 'refresh') {
    // 刷新当前页面
    const { routes } = state;
    routes[state.routes.length - 1].key = Math.random().toString();
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  if (state && action.type === 'backToTop') {
    // 返回首页
    if (state.routes.length <= 1 || state.routes[0].routeName === 'LoginView') {
      return defaultGetStateForAction(NavigationActions.init());
    }
    const routes = state.routes.slice(0, 1);
    state.routes = routes;
    routes[0].key = Math.random().toString();
    routes[0].index = 0;
    if (routes[0].routes && routes[0].routes.length > 0) {
      routes[0].routes[0].params = action.params;
    }
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  if (state && action.type === 'refreshRoute') {
    // 刷新栈中指定名称路由,如果不存在,则不进行任何操作
    const { routes } = state;
    const index = routes.findIndex(r => r.routeName === action.routeName);
    if (index >= 0) {
      routes[index].key = Math.random().toString();
    }
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  if (state && action.type === 'refreshRoutes') {
    // 刷新栈中指定名称路由,如果不存在,则不进行任何操作
    const names = action.routeNames;
    const routes = state.routes.map(r => {
      if (names.some(n => n === r.routeName)) {
        r.key = Math.random().toString();
      }
      return r;
    });
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }

  // feedback特殊处理
  if (action.params && action.params.routerFrom) {
    const routerFrom = action.params.routerFrom;
    const { routeName, ...other } = action;
    let routes = [];
    routes.push({
      routeName: 'Tab',
      index: 0,
      key: Math.random().toString(),
      routes: [
        { key: 'Home', routeName: 'Home', params: undefined },
        { key: 'User', routeName: 'User', params: undefined },
      ],
    });
    // if (routerFrom == 'OrderPay' && routeName == 'MyOrder') {
    //   routes.push({
    //     routeName: 'MyOrder',
    //     params: other.params,
    //     key: Math.random().toString(),
    //   });
    //   return {
    //     ...state,
    //     routes,
    //     index: routes.length - 1,
    //   };
    // }
  }
  return defaultGetStateForAction(action, state);
};
