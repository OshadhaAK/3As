import React from 'react';
import Screen from './Screen';

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name='Profile' />
export const StatisticsScreen = ({navigation}) => <Screen navigation={navigation} name='Statistics' />
export const ListScreen = ({navigation}) => <Screen navigation={navigation} name='List' />
export const SignOutScreen = ({navigation}) => <Screen navigation={navigation} name='SignOut' />

