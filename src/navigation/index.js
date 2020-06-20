import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import AuthenticationNavigator from "./AuthenticationNavigator";
import AppDrawer from "./ApplicationNavigator";

const AppContainer = () => {
    return (
        <NavigationContainer>
            <AppDrawer />
            {/* <AuthenticationNavigator /> */}
        </NavigationContainer>
    );
};

export default AppContainer;
