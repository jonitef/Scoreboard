import React, { Component } from 'react';
import { AppRegistry, Dimensions, View } from 'react-native';
import { name as appName } from './app.json';
export const { height, width } = Dimensions.get("window");

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/store/configureStore';

import App from './src/App';

export default class ScoreboardApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center' }}>
                <PersistGate loading={null} persistor={persistor}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </PersistGate>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => ScoreboardApp);
