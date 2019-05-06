/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Test from './src/Test';
import StateTest from './src/StateTest';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Test); 
AppRegistry.registerComponent(appName, () => StateTest); 
