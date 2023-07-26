import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.logInForm}>
				<Text style={styles.title}>Увійти</Text>
				<TextInput
					style={styles.inputs}
					placeholder="Адреса електронної пошти"
				/>
				<TextInput style={styles.inputs} placeholder="Пароль" />
				<TouchableOpacity style={styles.registerBtn}>
					<Text style={styles.btnText}>Увійти</Text>
				</TouchableOpacity>
				<Text style={styles.haveAcc}>Немає акаунту? Зареєструватися</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	logInForm: {
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
	title: {
		color: "#212121",
		fontSize: 30,
		fontWeight: 500,
		marginBottom: 32,
		marginTop: 32,
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
	registerBtn: {
		backgroundColor: "#FF6C00",
		height: 51,
		width: "100%",
		paddingHorizontal: 32,
		paddingVertical: 16,
		borderRadius: 25,
        marginBottom: 16,
        marginTop: 27
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
		marginBottom: 145,
	},
});

export default LoginScreen;
