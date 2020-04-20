import { StyleSheet, Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center'
    },
});

export default styles;