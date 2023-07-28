import { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isKeyboardShown, setIsKeyboardShown] = useState(false);
	const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

	const onLogin = () => {
		console.log(email, password);
	};

	const toggleSecurityText = () => {
		setIsSecureTextEntry(!isSecureTextEntry);
	};

	const handleFocus = () => {
		setIsKeyboardShown(true);
	};

	const handleBlur = () => {
		setIsKeyboardShown(false);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1, width: "100%" }}>
				<View style={{ flex: 1 }}>
					<View
						style={{
							...styles.logInForm,
							paddingBottom: isKeyboardShown ? 32 : 145,
							height: isKeyboardShown ? 275 : "auto",
						}}>
						<Text style={styles.title}>Увійти</Text>
						<TextInput
							style={styles.inputs}
							placeholder="Адреса електронної пошти"
							value={email}
							onChangeText={setEmail}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
						<View style={{ width: "100%" }}>
							<TextInput
								style={styles.inputs}
								placeholder="Пароль"
								secureTextEntry={isSecureTextEntry}
								value={password}
								onChangeText={setPassword}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
							<TouchableOpacity
								style={{ position: "absolute", top: 16, right: 16 }}
								onPress={toggleSecurityText}>
								<Text style={{ color: "#1B4371" }}>
									{isSecureTextEntry ? "Показати" : "Приховати"}
								</Text>
							</TouchableOpacity>
						</View>
						{!isKeyboardShown && (
							<TouchableOpacity style={styles.registerBtn} onPress={onLogin}>
								<Text style={styles.btnText}>Увійти</Text>
							</TouchableOpacity>
						)}
						{!isKeyboardShown && (
							<Text style={styles.haveAcc}>Немає акаунту? Зареєструватися</Text>
						)}
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
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
		marginTop: 27,
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
	},
});

export default LoginScreen;
