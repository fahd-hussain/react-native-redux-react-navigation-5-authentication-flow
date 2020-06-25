import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { loginRequest, registerRequest, purgeToken } from "../redux";
import { AuthContext } from "../utils/authContext";
import AuthenticationNavigator from "./AuthNavigator";
import AppDrawer from "./AppNavigator";
import LoadingScreen from "../components/Loading";

const AppContainer = () => {
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    const userToken = useSelector((state) => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const { token, loading, login } = userToken;

        setLoading(loading);
        
        if (login) {
            setToken(token);
        }
    });

    const authContext = useMemo(() => {
        return {
            login: async (username, password) => {
                dispatch(loginRequest(username, password)).then((token) => {
                    console.log(token);
                });
            },
            logout: () => {
                dispatch(purgeToken()).then((token) => {
                    console.log(token);
                });
            },
            register: async (username, password, firstname, lastname, gender) => {
                dispatch(registerRequest(username, password, firstname, lastname, gender)).then((token) => {
                    console.log(token);
                });
            },
        };
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>{token ? <AppDrawer /> : <AuthenticationNavigator />}</NavigationContainer>
        </AuthContext.Provider>
    );
};

export default AppContainer;
