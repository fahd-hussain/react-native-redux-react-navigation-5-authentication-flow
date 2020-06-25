import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

import styles from "./styles";
import { AuthContext } from "../../../utils/authContext";

const RegisterScreen = ({ navigation }) => {
    const { register } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({ title: 'REGISTER' })
    }, [])  

    return (
        <View style={styles.container}>
            <Text> Register Screen </Text>
            <Button onPress={() => register()} style={{ width: "90%" }}>
                <Text>Register</Text>
            </Button>
            <Button onPress={() => navigation.replace("Login")} style={{ width: "90%" }}>
                <Text>Login</Text>
            </Button>
        </View>
    );
};

export default RegisterScreen;
