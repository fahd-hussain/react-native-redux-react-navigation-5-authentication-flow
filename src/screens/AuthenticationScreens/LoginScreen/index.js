import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

import styles from "./styles";
import { AuthContext } from "../../../utils/authContext";

const LoginScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text> Login Screen </Text>
            <Button onPress={() => login()} style={{ width: "90%" }}>
                <Text>Login</Text>
            </Button>
            <Button onPress={() => navigation.replace("Register")} style={{ width: "90%" }}>
                <Text>Register</Text>
            </Button>
        </View>
    );
};

export default LoginScreen;
