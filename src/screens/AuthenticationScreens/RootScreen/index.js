import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button, Icon } from "native-base";

import styles from "./styles";
import { images } from "../../../constants/images";

const RootScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <ImageBackground source={images.logo} style={styles.logoImage}></ImageBackground>
            </View>
            <View style={styles.otherContainer}>
                <View style={styles.buttonContainer}>
                    <Button iconLeft onPress={() => navigation.push("LoginRegister")} style={styles.button}>
                        <Icon type="FontAwesome" name="arrow-right" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default RootScreen;
