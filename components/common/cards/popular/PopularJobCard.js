import { TouchableOpacity, View, Text } from 'react-native';
import styles from './popularjobcard.style';
import React from 'react'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedJob, item)}
			// onPress={() => handleCardPress(item)}
		>
			 <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				
			 </TouchableOpacity>
			<View>
				<Text>PopularJobCard</Text>
			</View>
		</TouchableOpacity>
	)
}

export default PopularJobCard