import React from 'react'
import {createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import {Icon} from 'react-native-elements'


 //screens

import RegistrarScreen from './../screens/Registrar'

const registrarScreenStack = createStackNavigator({
	Home: {
		screen: RegistrarScreen,
		navigationOptions: ({navigation}) => ({
			title: 'Register'//titulo de la pantalla arriba
		})
	}
})

const RootStack = createBottomTabNavigator({
	Home: {
		screen: registrarScreenStack,
		navigationOptions: ({navigation}) => ({
			tabBarLabel: 'Home',//titulo del boton abajo
			tabBarIcon:({tintColor}) => <Icon type='font-awesome' name='home' size={28} color={tintColor}/>  
		})
	},
	
},
{
	initialRouteName: 'Register',
	tabBarOptions: {
		inactiveTintColor: '#646464',
		activeTintColor: '#a333c8',
		labelStyle: {
		    marginTop: 6,
		},
		style:{
			backgroundColor: '#d0d0d0',
			height:56,
			paddingTop:6,
			paddingBottom:6
		}
	}
}
)

export default createAppContainer(RootStack)
