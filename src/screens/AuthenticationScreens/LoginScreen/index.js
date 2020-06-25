import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Button, Icon } from "native-base";

import styles from "./styles";
import { AuthContext } from "../../../utils/authContext";

const LoginScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({ title: 'LOGIN' })
    }, [])  

    return (
        <View style={styles.container}>
            <Text> Login Screen </Text>
            <View style={styles.buttonContainer}>
                <Button iconLeft onPress={() => login()} style={styles.button}>
                    <Icon type="FontAwesome" name="home" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Login</Text>
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button iconLeft onPress={() => navigation.replace("Register")} style={styles.button}>
                    <Icon type="FontAwesome" name="home" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Register</Text>
                </Button>
            </View>
        </View>
    );
};

export default LoginScreen;
