import React, { useState, useEffect, useRef } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	Image,
	StatusBar,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraIcon from "./svgIcons/CameraIcon";

export const CameraComp = () => {


	

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();

			setHasPermission(status === "granted");
		})();
	}, []);

	

	return (
	
	);
};

const styles = StyleSheet.create({
	
});
