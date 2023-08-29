import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { Text } from "react-native";
import DeleteIcon from "../components/svgIcons/deleteIcon";
import LogOutIcon from "../components/svgIcons/LogOutIcon";
import { Post } from "../components/Post";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
	 const navigation = useNavigation();

	return (
		<ImageBackground
			source={require("../pics/PhotoBG.jpg")}
			style={styles.imageBackground}>
			<View style={styles.mainCont}>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<LogOutIcon style={{ position: "absolute", right: 16, top: 22 }} />
				</TouchableOpacity>
				<View style={styles.avatar}>
					<TouchableOpacity style={styles.deletePhoto}>
						<DeleteIcon />
					</TouchableOpacity>
					<Image
						source={require("../pics/Rectangle.jpg")}
						style={{ borderRadius: 16 }}
					/>
				</View>
				<Text style={styles.name}>Natali Romanova</Text>
				<ScrollView>
					<Post
						path={require("../pics/lis.jpg")}
						title={"Ліс"}
						commentsCount={8}
						likesCount={153}
						location={"Ukraine"}
					/>
					<Post
						path={require("../pics/zahid.jpg")}
						title={"Захід на Чорному морі"}
						commentsCount={3}
						likesCount={200}
						location={"Ukraine"}
					/>
					<Post
						path={require("../pics/italy.jpg")}
						title={"Старий будиночок у Венеції"}
						commentsCount={50}
						likesCount={200}
						location={"Italy"}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		alignItems: "center",
	},
	mainCont: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		flexGrow: 0,
		flexShrink: 0,
		height: "80%",
		marginTop: "auto",
	},
	avatar: {
		width: 120,
		height: 120,
		position: "relative",
		alignSelf: "center",
		top: -95,
	},
	deletePhoto: {
		zIndex: 12,
		position: "relative",
		top: 110,
		left: 100,
		width: 25,
	},
	name: {
		color: "#212121",
		alignSelf: "center",
		fontSize: 30,
		fontWeight: 500,
		marginBottom: 33,
	},
});
