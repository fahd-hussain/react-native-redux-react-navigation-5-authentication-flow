import { createStore, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistCombineReducers } from "redux-persist";

// Local Imports
import { tokenReducer } from "./token/tokenReducer";

export default ConfigureStore = () => {
    const config = {
        key: "#ULht#NQpfcKiEc3",
        storage: AsyncStorage,
        debug: true,
    };

    const store = createStore(
        persistCombineReducers(config, {
            token: tokenReducer,
        }),
        applyMiddleware(
            thunk,
            // logger
        ),
    );

    const persistor = persistStore(store);
    return { persistor, store };
};