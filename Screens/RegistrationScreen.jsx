import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";

const RegistrationScreen = () => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isKeyboardShown, setIsKeyboardShown] = useState(false);
	const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

	const onRegistr = () => {
		console.log(login, email, password);
	};

	const toggleSecurityText = () => {
		setIsSecureTextEntry(!isSecureTextEntry);
	};

	const handleFocus = () => {
		setIsKeyboardShown(true);
	};

	const handleBlur = () => {
		setIsKeyboardShown(false);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1, width: "100%" }}>
				<View style={styles.container}>
					<View
						style={{
							...styles.regForm,
							paddingBottom: isKeyboardShown ? 32 : 79,
							height: isKeyboardShown ? 375 : "auto",
						}}>
						<View style={styles.avatar}>
							<TouchableOpacity style={styles.addPhoto}>
								<Image
									source={require("../pics/add.png")}
									style={styles.addPhoto}
								/>
							</TouchableOpacity>
						</View>
						<Text style={styles.title}>Реєстрація</Text>
						<TextInput
							style={styles.inputs}
							placeholder="Логін"
							value={login}
							onChangeText={setLogin}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
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
							<TouchableOpacity style={styles.registerBtn} onPress={onRegistr}>
								<Text style={styles.btnText}>Зареєструватися</Text>
							</TouchableOpacity>
						)}
						{!isKeyboardShown && (
							<Text style={styles.haveAcc}>Вже є акаунт? Увійти</Text>
						)}
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
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
	},
});

export default RegistrationScreen;
