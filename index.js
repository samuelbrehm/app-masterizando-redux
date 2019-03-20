/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import './src/config/ReactotronConfig';
// import '~/config/ReactotronConfig';
import './src/config/DevToolsConfig';
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
