import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";
import { Post } from "../components/Post";

export const PostsScreen = () => {
	const route = useRoute();
	const newPost = route.params ? route.params.newPost : null;

	if (!newPost) {
		return (
			<View>
				<Image source={require("../pics/noContent.png")} />
			</View>
		);
	}

	return (
		<View style={{ paddingLeft: 16, paddingRight: 16 }}>
			<View
				style={{
					marginTop: 32,
					marginBottom: 32,
					flexDirection: "row",
				}}>
				<View>
					<Image
						source={require("../pics/Rectangle.jpg")}
						style={{ width: 60, height: 60, borderRadius: 16, marginRight: 8 }}
					/>
				</View>
				<View style={{ paddingTop: 16, paddingBottom: 16 }}>
					<Text style={styles.userName}>Natali Romanova</Text>
					<Text style={styles.userEmail}>email@example.com</Text>
				</View>
			</View>

			<FlatList />

			{/* <Image
				source={{ uri: newPost.image }}
				style={{ width: "100%", height: 240, borderRadius: 8, marginBottom: 8 }}
			/>
			<Text>{newPost.imageTitle}</Text>
			<View></View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	userName: {
		color: "#212121",
		fontSize: 13,
		fontWeight: 700,
	},
	userEmail: {
		fontSize: 11,
		fontWeight: 400,
		opacity: 0.8,
	},
});
