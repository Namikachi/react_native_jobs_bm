import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import {
	ScreenHeaderBtn,
	Welcome,
	PopularJobs,
	Nearbyjobs
} from '../components';

import useFetch from '../hook/useFetch';

export default function Page() {
	const { data, isLoading, error } = useFetch(
		'search',
		{
			query: 'React Native developer',
			num_pages: '1',
		}
	);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
					),
					headerTitle: '',
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
					}}
				>
					<Welcome />
					<PopularJobs data={data} isLoading={isLoading} error={error} />
					<Nearbyjobs data={data} isLoading={isLoading} error={error} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}