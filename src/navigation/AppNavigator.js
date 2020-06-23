import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "native-base";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Drawer from "../screens/Drawer";
import styles from "./styles";

//---------------- Home Screen Stack ----------------//
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={({ route }) => ({
                    // title: route.params.name
                })}
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
                options={({ route }) => ({
                    // title: route.params.name
                })}
            />
        </ProfileStack.Navigator>
    );
};
//---------------- Main Screen Tab ----------------//
const MainTab = createBottomTabNavigator();
const MainTabScreen = () => {
    return (
        <MainTab.Navigator
        // tabBarOptions={

        // }
        >
            <MainTab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: () => <Icon style={styles.tabIcon} type="FontAwesome" name="home" />,
                }}
            />
        </MainTab.Navigator>
    );
};

//---------------- Main Drawer ----------------//
const MainDrawer = createDrawerNavigator();
const AppDrawer = (props) => {
    console.log(props)
    return (
        <MainDrawer.Navigator drawerType="back" drawerStyle={styles.drawerStyle} drawerContent={(props) => <Drawer {...props} />}>
            <MainDrawer.Screen name="Home" component={MainTabScreen} />
            <MainDrawer.Screen name="Profile" component={ProfileStackScreen} />
        </MainDrawer.Navigator>
    );
};

export default AppDrawer;
