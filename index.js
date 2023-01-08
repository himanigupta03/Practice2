/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Counter from './Counter';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Counter);
