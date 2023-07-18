import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const RegistrationScreen = () => {
	return (
		<View style={styles.regForm}>
			<Text style={styles.title}>Реєстрація</Text>
			<TextInput style={styles.inputs} placeholder="Логін" />
			<TextInput style={styles.inputs} placeholder="Адреса електронної пошти" />
			<TextInput style={styles.inputs} placeholder="Пароль" />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: "#212121",
		fontSize: 30,
		fontWeight: 500,
		paddingBottom: 32,
	},
	regForm: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingLeft: 16,
		paddingRight: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	inputs: {
		width: "100%",
		height: 50,
		borderColor: "#E8E8E8",
		borderWidth: 1,
		padding: 16,
		marginBottom: 16,
	},
});

export default RegistrationScreen;
