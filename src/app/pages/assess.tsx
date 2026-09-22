import { View, Text, StyleSheet } from "react-native"

export default function Assess() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Avalie a sua viagem</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 22,
        marginTop: 40,
        gap: 16,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
    },
}) 