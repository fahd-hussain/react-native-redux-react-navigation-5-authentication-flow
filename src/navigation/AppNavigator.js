import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "native-base";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Drawer from "../screens/Drawer";
import styles from './styles'
import { lightColor } from "../constants/color";

const options = {
    headerTitleAlign: "center",
    headerStyle: styles.headerTitle,
    headerTitleStyle: styles.headerTitleStyle
}

//---------------- Home Screen Stack ----------------//
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "HOME", headerTitleAlign: options.headerTitleAlign, headerStyle: options.headerStyle, headerTitleStyle: options.headerTitleStyle}}
            />
        </HomeStack.Navigator>
    );
};
//---------------- Home Screen Stack ----------------//
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                // options={({ route }) => ({
                //     title: route.params.name
                // })}
                options={{ title: "PROFILE", headerTitleAlign: options.headerTitleAlign, headerStyle: options.headerStyle, headerTitleStyle: options.headerTitleStyle}}
            />
        </ProfileStack.Navigator>
    );
};
//---------------- Main Screen Tab ----------------//
const tabBarOptions = {
    activeTintColor: lightColor.textPrimaryColor,
    inactiveTintColor: lightColor.defaultPrimaryColor,
    activeBackgroundColor: lightColor.defaultPrimaryColor,
}
const MainTab = createBottomTabNavigator();
const MainTabScreen = () => {
    return (
        <MainTab.Navigator tabBarOptions={tabBarOptions}>
            <MainTab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({focused}) => <Icon style={focused ? styles.tabIconFocused : styles.tabIcon} type="FontAwesome" name="home" />,
                }}
            />
            <MainTab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({focused}) => <Icon style={focused ? styles.tabIconFocused : styles.tabIcon} type="FontAwesome" name="user" />,
                }}
            />
        </MainTab.Navigator>
    );
};

//---------------- Main Drawer ----------------//
const MainDrawer = createDrawerNavigator();
const AppDrawer = (props) => {
    return (
        <MainDrawer.Navigator drawerType="back" drawerStyle={styles.drawerStyle} drawerContent={(props) => <Drawer {...props} />}>
            <MainDrawer.Screen name="Home" component={MainTabScreen} />
            <MainDrawer.Screen name="Profile" component={ProfileStackScreen} />
        </MainDrawer.Navigator>
    );
};

export default AppDrawer;
