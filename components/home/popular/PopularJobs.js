import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const PopularJobs = ({ data, isLoading, error }) => {
	const router = useRouter();

	const [selectedJob, setSelectedJob] = useState();

	const handleCardPress = (item) => {
		router.push(`/job-details/${item.job_id}`);
		setSelectedJob(item.job_id);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>PopularJobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size='large' color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={data}
						renderItem={({item}) => (
							<PopularJobCard
								item={item}
								selectedJob={selectedJob}
								handleCardPress={handleCardPress}
							/>
						)}
						keyExtractor={(item) => item.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	)
}

export default PopularJobs