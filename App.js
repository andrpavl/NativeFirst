import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Screens/Home";
import { TouchableOpacity } from "react-native";
import LogOutIcon from "./components/svgIcons/LogOutIcon";

const MainStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
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
				<MainStack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerShown: false,
						headerRight: () => (
							<TouchableOpacity>
								<LogOutIcon style={{ marginRight: 10 }} />
							</TouchableOpacity>
						),
					}}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
