import { StyleSheet, Text, View } from "react-native";

export default function SessionListItem(props) {

    const session = props.session;

    return (
        <View style={styles.card}>
            <Text>Dia { session.dateTime }</Text>
        </View>
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
})