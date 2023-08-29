import {
	KeyboardAvoidingView,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import CameraIcon from "../components/svgIcons/CameraIcon";
import LocationIcon from "../components/svgIcons/LocationIcon";

export const CreatePostsScreen = () => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{
					flex: 1,
				}}>
				<View
					style={{
						height: "100%",
						paddingLeft: 16,
						paddingRight: 16,
						backgroundColor: "#FFFFFF",
					}}>
					<View style={styles.addWindow}>
						<TouchableOpacity style={styles.addPhoto}>
							<CameraIcon
								style={{
									alignSelf: "center",
									marginTop: "auto",
									marginBottom: "auto",
								}}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity>
						<Text style={styles.font}>Завантажте фото</Text>
					</TouchableOpacity>
					<TextInput
						placeholder="Назва..."
						style={{ ...styles.font, ...styles.inputs, marginTop: 32 }}
					/>
					<View>
						<LocationIcon style={styles.icon} />
						<TextInput
							placeholder="Місцевість..."
							style={{ ...styles.font, ...styles.inputs, paddingLeft: 30 }}
						/>
					</View>
					<TouchableOpacity style={styles.publish}>
						<Text style={styles.btnText}>Опублікувати</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	addWindow: {
		backgroundColor: "#F6F6F6",
		width: "100%",
		height: 240,
		marginTop: 32,
		marginBottom: 8,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#E8E8E8",
	},
	addPhoto: {
		width: 60,
		height: 60,
		backgroundColor: "#FFFFFF",
		borderRadius: 30,
		alignSelf: "center",
		marginBottom: 90,
		marginTop: 90,
	},
	font: {
		color: "#BDBDBD",
		fontSize: 16,
	},
	inputs: {
		height: 50,
		marginTop: 16,
		borderBottomColor: "#E8E8E8",
		borderBottomWidth: 1,
	},
	publish: {
		height: 51,
		width: "100%",
		backgroundColor: "#F6F6F6",
		borderRadius: 25,
		marginTop: 32,
	},
	btnText: {
		fontSize: 16,
		fontWeight: 400,
		color: "#BDBDBD",
		padding: 16,
		alignSelf: "center",
	},
	icon: {
		position: "absolute",
		top: 25,
	},
});
