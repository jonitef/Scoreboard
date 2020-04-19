import { StyleSheet, Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    appContainer: {
        width: width,
        height: height,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default styles;