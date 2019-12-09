import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class RegistrarScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    Registrar: {
        screen: RegistrarScreen,
    }
})

export default createAppContainer(AppNavigator);