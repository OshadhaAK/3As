import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

import {Feather} from '@expo/vector-icons';

import {ProfileScreen, StatisticsScreen, ListScreen, SignOutScreen} from './screens';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  StatisticsScreen,
  ListScreen,
  SignOutScreen
})

export default createAppContainer(DrawerNavigator);