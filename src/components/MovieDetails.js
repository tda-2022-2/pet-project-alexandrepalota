import { StyleSheet, Text, View } from "react-native";

export default function MovieDetails(props) {

    const movie = props.movie

    return (
        <View style={styles.container}>
            <Text>{ movie.title }</Text>
            <Text>{ movie.genre }</Text>
            <Text>{ movie.synopsis }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})