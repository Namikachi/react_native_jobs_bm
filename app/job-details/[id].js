import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView } from 'react-native'
import { COLORS } from '../../constants';

const jobDetails = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerTitle: "",
				}}
			/>
			<>
				<ScrollView showsVerticalScrollIndicator={false} >

				</ScrollView>
			</>
		</SafeAreaView>
	)
}

export default jobDetails