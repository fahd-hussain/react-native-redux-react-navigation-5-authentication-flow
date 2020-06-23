import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { lightColor } from "../../constants/color";
import { styles } from "./styles";

export default LoadingScreen = () => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={lightColor.primaryTextColor} />
            <Text style={styles.loadingText}>Loading......</Text>
        </View>
    );
};
