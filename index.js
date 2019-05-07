/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Test from './src/Test';
import StateTest from './src/StateTest';
import CityList from './src/CityList';
import First from './src/First';
import {ABC} from './src/高度和宽度';
import widthAndHeight from './src/高度和宽度';
import 电影列表 from './src/电影列表';
import 组件 from './src/组件';
import 网易新闻 from './src/新闻/网易新闻';

import TouchableOpacityCom from './src/TouchableOpacity/TouchableOpacityDemo';



import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Test); 
// AppRegistry.registerComponent(appName, () => StateTest); 
// AppRegistry.registerComponent(appName, () => CityList); 
// AppRegistry.registerComponent(appName, () => First); 
// AppRegistry.registerComponent(appName, () => ABC); 
// AppRegistry.registerComponent(appName, () => widthAndHeight); 
// AppRegistry.registerComponent(appName, () => 电影列表); 
// AppRegistry.registerComponent(appName, () => 组件); 
// AppRegistry.registerComponent(appName, () => 网易新闻); 
AppRegistry.registerComponent(appName, () => TouchableOpacityCom); 

