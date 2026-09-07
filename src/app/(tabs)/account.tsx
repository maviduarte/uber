import { View, Text, StyleSheet } from "react-native"

export default function Account() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cleyton da Silva</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 22,
        marginVertical: 20,
        gap: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },
}) 