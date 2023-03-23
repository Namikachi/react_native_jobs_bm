import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
	container: (selectedJob, item) => ({
		width: 250,
		padding: SIZES.xLarge,
		backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
		borderRadius: SIZES.medium,
		justifyContent: 'space-between',
		// ...SHADOWS.medium,
		shadowColor: COLORS.white,
	}),
	logoContainer: (selectedJob, item) => ({
		width: 50,
		height: 50,
		backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: 'center',
		alignItems: 'center',
	}),
})

export default styles;