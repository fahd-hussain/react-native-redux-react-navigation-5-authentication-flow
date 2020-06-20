import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'native-base'

import HomeScreen from '../screens/HomeScreen'
import Drawer from '../screens/Drawer'
import styles from './styles'

//---------------- Home Screen Stack ----------------//
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
        >
            <HomeStack.Screen 
                name="Home"
                component={HomeScreen}
                options={({ route }) => ({
                    // title: route.params.name
                })}
            />
        </HomeStack.Navigator>
    )
}

//---------------- Main Screen Tab ----------------//
const MainTab = createBottomTabNavigator();
const MainTabScreen = () => {
    return (
        <MainTab.Navigator>
            <MainTab.Screen 
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: () => <Icon style={styles.tabIcon} type="FontAwesome" name="home" />
                }}
            />
        </MainTab.Navigator>
    )
}

//---------------- Main Drawer ----------------//
const MainDrawer = createDrawerNavigator();
const AppDrawer = () => {
    return (
        <MainDrawer.Navigator
            drawerType="back"
            drawerStyle={styles.drawerStyle}
            drawerContent={() => <Drawer />}
        >
            <MainDrawer.Screen 
                name="Home"
                component={MainTabScreen}
            />
        </MainDrawer.Navigator>
    )
}

export default AppDrawer;