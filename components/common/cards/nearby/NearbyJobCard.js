import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './nearbyjobcard.style';
import React from 'react';

const NearbyJobCard = ({ job }) => {
	return (
		<TouchableOpacity
			style={styles.container}
		>
			<TouchableOpacity style={styles.logoContainer}>
				<Image
				
				/>
				
			</TouchableOpacity>
			<View>
				<Text style={styles.jobName} numberOfLines={1}>
					{job?.job_title}
				</Text>
			</View>
			
		
		</TouchableOpacity>
	)
}

export default NearbyJobCard