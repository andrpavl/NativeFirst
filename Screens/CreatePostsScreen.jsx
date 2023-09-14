import {
	KeyboardAvoidingView,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LocationIcon from "../components/svgIcons/LocationIcon";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import CameraIcon from "../components/svgIcons/CameraIcon";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
	const [location, setLocation] = useState(null);
	const [hasPermission, setHasPermission] = useState(null);
	const [camera, setCamera] = useState(null);
	const [image, setImage] = useState(null);
	const [imageTitle, setImageTitle] = useState("");

	const navigation = useNavigation();

	const takePhoto = async () => {
		if (camera) {
			const photo = await camera.takePictureAsync();
			setImage(photo.uri);
			await MediaLibrary.createAssetAsync(photo.uri);
		}
	};

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();

			setHasPermission(status === "granted");
			
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const publishPost = () => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access location was denied");
			}

			let location = await Location.getCurrentPositionAsync({});
			const coords = {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			};
			setLocation(coords);
			
		})();

		const newPost = {
			location,
			image,
			imageTitle,
		};
		console.log(newPost);

		navigation.navigate("PostsScreen", { newPost });
	};

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
					<View>
						{!image ? (
							<View style={styles.addWindow}>
								<Camera ref={setCamera}>
									<TouchableOpacity style={styles.addPhoto} onPress={takePhoto}>
										<CameraIcon
											style={{
												alignSelf: "center",
												marginTop: "auto",
												marginBottom: "auto",
											}}
										/>
									</TouchableOpacity>
								</Camera>
							</View>
						) : (
							<View style={styles.photoSection}>
								<Image
									source={{ uri: image }}
									style={{ width: "100%", height: "100%", borderRadius: 8 }}
								/>
							</View>
						)}
					</View>

					<Text style={styles.font}>Завантажте фото</Text>
					<TextInput
						placeholder="Назва..."
						style={{
							...styles.font,
							...styles.inputs,
							marginTop: 32,
							color: "black",
						}}
						value={imageTitle}
						onChangeText={setImageTitle}
					/>
					<View>
						<LocationIcon style={styles.icon} />
						<TextInput
							placeholder="Місцевість..."
							value={JSON.stringify(location)}
							style={{
								...styles.font,
								...styles.inputs,
								paddingLeft: 30,
								color: "black",
							}}
						/>
					</View>
					<TouchableOpacity style={styles.publish} onPress={publishPost}>
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

	photoSection: {
		width: "100%",
		height: 240,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		borderRadius: 8,
		marginBottom: 8,
		marginTop: 32,
		justifyContent: "center",
		alignItems: "center",
	},
});
