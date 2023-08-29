import { Image, StyleSheet, Text, View } from "react-native";
import CommentIcon from "./svgIcons/CommentIcon";
import LikeIcon from "./svgIcons/LikeIcon";
import LocationIcon from "./svgIcons/LocationIcon";

export const Post = ({ path, title, commentsCount, likesCount, location }) => {
	return (
		<View style={{ marginLeft: 16, marginRight: 16, marginBottom: 32 }}>
			<Image
				source={path}
				resizeMode={"cover"}
				style={{ width: "100%", height: 240, borderRadius: 8 }}
			/>
			<Text
				style={{
					fontSize: 16,
					fontWeight: 500,
					color: "#212121",
					marginTop: 8,
					marginBottom: 8,
				}}>
				{title}
			</Text>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<CommentIcon />
				<Text style={styles.count}>{commentsCount}</Text>
				<LikeIcon />
				<Text style={styles.count}>{likesCount}</Text>
				<View
					style={{
						flexDirection: "row",
						marginLeft: "auto",
						alignItems: "center",
					}}>
					<LocationIcon />
					<Text
						style={{
							...styles.count,
							marginRight: 0,
							marginLeft: 4,
							textDecorationLine: "underline",
						}}>
						{location}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	count: {
		marginLeft: 6,
		marginRight: 24,
		fontSize: 16,
		fontWeight: 400,
	},
});
