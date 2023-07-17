import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
	return (
		<ImageBackground
			source={require("./pics/PhotoBG.jpg")}
			style={styles.imageBackground}>
			<RegistrationScreen/>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
  imageBackground: {
    flex:1,
		resizeMode: "cover",
		justifyContent: "center",
		alignItems: "center",
	},
});
