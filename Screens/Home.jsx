import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import ProfileIcon from "../components/svgIcons/ProfileIcon";
import ArrowBack from "../components/svgIcons/ArrowBack";
import GridIcon from "../components/svgIcons/GridIcon";
import AddIcon from "../components/svgIcons/AddIcon";
import { View, TouchableOpacity } from "react-native";
import LogOutIcon from "../components/svgIcons/LogOutIcon";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

export const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<Tabs.Navigator
			initialRouteName="PostsScreen"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					if (route.name === "PostsScreen") {
						return (
							<View>
								<GridIcon fill={focused ? "#FF6C00" : "none"} />
							</View>
						);
					} else if (route.name === "CreatePostsScreen") {
						return (
							<View>
								<AddIcon />
							</View>
						);
					} else if (route.name === "ProfileScreen") {
						return (
							<View>
								<ProfileIcon fill={focused ? "#FF6C00" : "none"} />
							</View>
						);
					}
				},
				tabBarShowLabel: false,
			})}>
			<Tabs.Screen
				name="PostsScreen"
				component={PostsScreen}
				options={{
					title: "Публікації",
					headerTitleAlign: "center",
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<LogOutIcon style={{ marginRight: 16 }} />
						</TouchableOpacity>
					),
				}}
			/>
			<Tabs.Screen
				name="CreatePostsScreen"
				component={CreatePostsScreen}
				options={{
					title: "Створити публікацію",
					headerTitleStyle: {
						fontWeight: 500,
						fontSize: 17,
					},
					headerTitleAlign: "center",
					headerLeft: () => <ArrowBack style={{ marginLeft: 16 }} />,
				}}
			/>
			<Tabs.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{ headerShown: false }}
			/>
		</Tabs.Navigator>
	);
};
