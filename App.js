import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { useFonts } from "@use-expo/font";

import ConfigureStore from "./src/redux/configStore";
import AppContainer from "./src/navigation";
import LoadingScreen from "./src/components/Loading";
import { cacheImages } from "./src/utils/cacheImages";
import { images } from './src/constants/images';

const { persistor, store } = ConfigureStore();

export default function App() {
    const [ ready, setReady ] = useState(false)
    const [fontsLoaded] = useFonts({
        "Overcraft-Bold": require("./assets/Overcraft-Bold.otf"),
        "Overcraft-Light": require("./assets/Overcraft-Light.otf"),
        "Overcraft-Regular": require("./assets/Overcraft-Regular.otf"),
    });
    
    const cacheAssets = async () => {
        const imagesAssets = cacheImages([...Object.values(images)]);

        await Promise.all([...imagesAssets]);
    };

    useEffect(() => {
        cacheAssets().then(() => setReady(true))
    }, [])
    
    if (!fontsLoaded && !ready) {
        return <LoadingScreen />;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
                <StatusBar hidden={true} />
                <AppContainer />
            </PersistGate>
        </Provider>
    );
}
