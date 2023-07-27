import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { TextInput } from "react-native";

const RegistrationScreen = () => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1, width: "100%" }}>
			<View style={styles.container}>
				<View style={styles.regForm}>
					<View style={styles.avatar}>
						<TouchableOpacity style={styles.addPhoto}>
							<Image
								source={require("../pics/add.png")}
								style={styles.addPhoto}
							/>
						</TouchableOpacity>
					</View>
					<Text style={styles.title}>Реєстрація</Text>
					<TextInput style={styles.inputs} placeholder="Логін" />
					<TextInput
						style={styles.inputs}
						placeholder="Адреса електронної пошти"
					/>
					<View style={{ width: "100%" }}>
						<TextInput
							style={styles.inputs}
							placeholder="Пароль"
							secureTextEntry
						/>
						<TouchableOpacity
							style={{ position: "absolute", top: 16, right: 16 }}>
							<Text style={{ color: "#1B4371" }}>Показати</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.registerBtn}>
						<Text style={styles.btnText}>Зареєструватися</Text>
					</TouchableOpacity>
					<Text style={styles.haveAcc}>Вже є акаунт? Увійти</Text>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	title: {
		color: "#212121",
		fontSize: 30,
		fontWeight: 500,
		marginBottom: 32,
		marginTop: -32,
	},
	container: {
		flex: 1,
	},
	regForm: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingLeft: 16,
		paddingRight: 16,
		alignItems: "center",
		position: "absolute",
		justifyContent: "flex-end",
		bottom: 0,
		alignSelf: "center",
	},
	inputs: {
		width: "100%",
		height: 50,
		borderColor: "#E8E8E8",
		borderWidth: 1,
		padding: 16,
		marginBottom: 16,
		backgroundColor: "#F6F6F6",
		borderWidth: 1,
		borderRadius: 8,
	},
	avatar: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		transform: [{ translateX: -50 }],
		transform: [{ translateY: -50 }],
		position: "relative",
	},
	addPhoto: {
		justifyContent: "center",
		alignItems: "center",
		width: 25,
		height: 25,
		position: "absolute",
		top: 40,
		right: -6.25,
	},

	registerBtn: {
		backgroundColor: "#FF6C00",
		height: 51,
		width: "100%",
		paddingHorizontal: 32,
		paddingVertical: 16,
		borderRadius: 25,
		marginBottom: 16,
	},
	btnText: {
		textAlign: "center",
		color: "#FFFFFF",
		lineHeight: 18.75,
		fontWeight: 400,
	},
	haveAcc: {
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 18.75,
		color: "#1B4371",
		marginBottom: 79,
	},
});

export default RegistrationScreen;
