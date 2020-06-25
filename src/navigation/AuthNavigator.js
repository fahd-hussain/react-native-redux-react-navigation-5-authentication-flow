import React from "react";
import { Button, Icon } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();

import LoginScreen from "../screens/AuthenticationScreens/LoginScreen";
import RegisterScreen from "../screens/AuthenticationScreens/RegisterScreen";
import RootScreen from "../screens/AuthenticationScreens/RootScreen";
import { lightColor } from "../constants/color";
import styles from "./styles";

const AuthTab = createBottomTabNavigator();
const tabBarOptions = {
    activeTintColor: lightColor.textPrimaryColor,
    inactiveTintColor: lightColor.defaultPrimaryColor,
    activeBackgroundColor: lightColor.defaultPrimaryColor,
};
const AuthTabScreen = () => {
    return (
        <AuthTab.Navigator tabBarOptions={tabBarOptions}>
            <AuthTab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon style={focused ? styles.tabIconFocused : styles.tabIcon} type="FontAwesome" name="home" />
                    ),
                }}
            />
            <AuthTab.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: "Hi",
                    tabBarIcon: ({ focused }) => (
                        <Icon style={focused ? styles.tabIconFocused : styles.tabIcon} type="FontAwesome" name="user" />
                    ),
                }}
            />
        </AuthTab.Navigator>
    );
};

//
const options = {
    headerTitleAlign: "center",
    headerStyle: styles.headerTitle,
    headerTitleStyle: styles.headerTitleStyle,
};
const AuthenticationNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Root" mode="modal">
            <AuthStack.Screen name="Root" component={RootScreen} options={{ headerShown: false }} />
            <AuthStack.Screen
                name="LoginRegister"
                component={AuthTabScreen}
                options={({ route, navigation }) => ({
                    headerLeft: () => (<Icon type="FontAwesome" name="arrow-left" style={styles.backArrow} onPress={() => navigation.goBack()}/>),
                    title: route.params,
                    headerTitleAlign: options.headerTitleAlign,
                    headerStyle: options.headerStyle,
                    headerTitleStyle: options.headerTitleStyle,
                })}
            />
        </AuthStack.Navigator>
    );
};

export default AuthenticationNavigator;
