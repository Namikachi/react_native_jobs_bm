import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';



const Welcome = () => {
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Antonio</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput />
				</View>
				<TouchableOpacity style={styles.searchBtn}>
					<Image
						source={icons.search}
						resizeMode='contain'
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Welcome