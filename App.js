import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import ConfigureStore from "./src/redux/configStore";
import AppContainer from "./src/navigation";
import LoadingScreen from "./src/components/Loading";

const { persistor, store } = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
                <StatusBar hidden={true} />
                <AppContainer />
            </PersistGate>
        </Provider>
    );
}
