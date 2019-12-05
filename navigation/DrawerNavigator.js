import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ScreenOne from '../screens/Home';
import ScreenTwo from '../screens/Two';

const DrawerNavigator = createDrawerNavigator({
  One: ScreenOne,
  Two: ScreenTwo
});

export default DrawerNavigator;