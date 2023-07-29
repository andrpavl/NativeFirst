import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<MainStack.Navigator>
				<MainStack.Screen
					name="Registration"
					component={RegistrationScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
