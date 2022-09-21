import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

export default function MovieListitem(props) {

    const navigation = useNavigation();

    const movie = props.movie || {title: '', genre: '', synopsis: ''}
    return (
        <TouchableNativeFeedback onPress={() => {
            navigation.navigate('Sessions', movie)
        }}>
            <View style={styles.card}>
            <Image style={styles.image} source={{uri: movie.coverUrl}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>{ movie.title }</Text>
                <Text style={styles.genre} numberOfLines={1}>{ movie.genre }</Text>
                <Text style={styles.synopsis} numberOfLines={4}>{ movie.synopsis }</Text>
            </View>
        </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        padding: 8,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 4
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 4,
        marginEnd: 8
    },
    textContainer: {
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    genre: {
        fontWeight: 'bold',
        color: '#999',
        fontSize: 16
    },
    synopsis: {
        flexShrink: 1,
        lineHeight: 22
    }
})