import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import LoginScreen from "../screens/AuthenticationScreens/LoginScreen";
import RegisterScreen from "../screens/AuthenticationScreens/RegisterScreen";

const options = {
    headerTitleAlign: "center",
}

const AuthenticationNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" mode="modal">
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Login", headerTitleAlign: options.headerTitleAlign }}
            />
            <AuthStack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: "Register", headerTitleAlign: options.headerTitleAlign }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthenticationNavigator;