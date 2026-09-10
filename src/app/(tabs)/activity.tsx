import { View, Text, StyleSheet } from "react-native"

import { ButtonActivity } from "@/components/Button"

export default function Activity() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atividade</Text>
            <Text style={styles.subtitle}>Anteriores</Text>

            <ButtonActivity image={require("@/assets/images/map.png")} label="Avenida Atlântica, 67 - São Paulo" sublabel="3 de set. 11:01" val={5.97} />
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

    subtitle: {
        fontSize: 20,
        fontWeight: 600,
    },
})